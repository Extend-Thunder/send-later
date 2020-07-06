// Pseudo-namespace encapsulation for global-ish variables.
const SendLater = {
    // Track unresolved promises that can be resolved by some future event.
    _PromiseMap: new Map(),

    async getIdentity(id) {
      const accts = await browser.accounts.list();

      for (const acct of accts) {
        for (const identity of acct.identities) {
          if (id.includes(identity.id)) {
            SLStatic.debug(`Found identity matching <${id}>`, identity);
            return identity;
          }
        }
      }

      SLStatic.warn(`Cannot find identity <${id}>`);
      return null;
    },

    async isEditing(msgUUID) {
      // Look through each of the compose windows, check for this message UUID.
      const composeWindows = await browser.windows.getAll(
        { windowTypes: ["messageCompose"] }
      );
      for (const win of composeWindows) {
        const uuid = await browser.SL3U.getHeader(win.id,
                                                  'x-send-later-msg-uuid');
        if (uuid === msgUUID) {
          return true;
        }
      }
      return false;
    },

    waitAndSend: function() {
      // When bound to a compose window, this function will wait for
      // the window's status to be "complete", and then it will initiate
      // a batch send operation.
      if (this.status === "complete") {
        browser.SL3U.SendNow(true);
      } else {
        setTimeout(SendLater.waitAndSend.bind(this), 50);
      }
    },

    async findDraftsHelper(folder) {
      // Recursive helper function to look through an account for draft folders
      if (folder.type === "drafts") {
        return folder;
      } else {
        const drafts = [];
        for (subFolder of folder.subFolders) {
          drafts.push(SendLater.findDraftsHelper(subFolder));
        }
        return Promise.all(drafts);
      }
    },

    async getDraftFolders(acct) {
      const draftSubFolders = [];
      acct.folders.forEach(folder => {
        draftSubFolders.push(SendLater.findDraftsHelper(folder));
      });
      return Promise.all(draftSubFolders).then(SLStatic.flatten);
    },

    async scheduleSendLater(tabId, options) {
      SLStatic.info(`Scheduling send later: ${tabId} with options`,options);
      const customHeaders = { 'x-send-later-msg-uuid': SLStatic.newUUID() };

      // Determine time at which this message should be sent
      if (options.sendTime !== undefined) {
        const sendTime = new Date(options.sendTime);
        customHeaders["x-send-later-at"] = SLStatic.dateTimeFormat(sendTime);
      } else if (options.delay !== undefined) {
        const sendTime = new Date(Date.now() + options.delay*60000);
        customHeaders["x-send-later-at"] = SLStatic.dateTimeFormat(sendTime);
      } else {
        SLStatic.error("scheduleSendLater requires scheduling information");
        return;
      }

      if (options.recur !== undefined) {
        customHeaders['x-send-later-recur'] = options.recur;
      }

      const inserted = Object.keys(customHeaders).map(name => {
        browser.SL3U.insertHeader(name, customHeaders[name])
      });
      await Promise.all(inserted);

      await browser.SL3U.SaveAsDraft();
      browser.tabs.remove(tabId);

      // Internal lock indicates that this message is prepped and ready to do.
      browser.storage.local.get("lock").then(storage => {
        const lock = storage.lock || {};
        lock[customHeaders['x-send-later-msg-uuid']] = { status: "ready" };
        browser.storage.local.set({ lock });
      });
    },

    // TODO: Finish this (replaces nextRecurDate below).
    parseRecur: function(recurSpec) {
      const wkday = new Intl.DateTimeFormat('default', {weekday:'short'});
      const start = new Date(); // TODO
      const end = new Date(); // TODO
      const weekdays = [0, 2, 5, 6]; // TODO
      return {
        next: null,
        between: { start: start.getTime(), end: end.getTime() },
        days: (weekdays.map(wkday.format))
      };
    },

    // TODO: Finish this function.
    nextRecurDate: function(recurSpec, relativeToDate) {
      // If no relativeTo time is specified, then assume relative to now.
      const prior = relativeToDate || (new Date());
      let next = new Date(prior.getTime());

      const params = recurSpec.split(/\s+/);
      const parsed = { type: params.shift() };

      const validTypes = ["none", "minutely", "daily", "weekly", "monthly",
                          "yearly", "function"];
      if (!validTypes.includes(parsed.type)) {
        throw `Invalid recurrence type in ${recurSpec}`;
      }

      switch (parsed.type) {
        case "monthly":
          if (!/^\d+$/.test(params[0]))
              throw "Invalid first monthly argument in " + recurSpec;
          if (/^[1-9]\d*$/.test(params[1])) {
              parsed.monthly_day = {day: params.shift(), week: params.shift()};
              if (parsed.monthly_day.day > 6)
                  throw "Invalid monthly day argument in " + recurSpec;
              if (parsed.monthly_day.week > 5)
                  throw "Invalid monthly week argument in " + recurSpec;
          } else {
              parsed.monthly = params.shift();
              if (parsed.monthly > 31)
                  throw "Invalid monthly date argument in " + recurSpec;
          }
          break;
        case "daily":
          break;
        default:
          break;
      }

      return next;
    },

    async beginEditAsNewMessage(id) {
      // Begin new message composition. Duplicate contents of existing message.
      // Returns new compose window.
      const original = await browser.messages.getFull(id);
      SLStatic.debug("Composing message from original:",original);

      const idKey = original.headers['x-identity-key'];
      const identity = await SendLater.getIdentity(idKey[0]);
      if (!identity) {
        SLStatic.warn("Cannot send message without a sender identity.");
        return;
      }

      function expandMimeParts(msgparts) {
        // Recursively traverses MIME tree to find message body.
        const ret = { attachments: [] };
        for (part of msgparts.parts) {
          if (part.name) {
            // The messagePart object for extensions does not actually include
            // the attachment content as of TB78. See workaround below.
            const att = { name: part.name, file: null };
            ret.attachments.push(att);
          } else if (part.body && part.contentType.startsWith('text/html')) {
            // HTML body part
            if (ret.htmlmsg) {
              SLStatic.warn("HTML message body defined twice.");
            }
            // Clean up HTML message, because otherwise Thunderbird treats it as
            // if it were plaintext, adds a bunch of <br> tags, and wraps the
            // whole thing in an <html> element for some reason.
            ret.htmlmsg = part.body;
            ret.htmlmsg = ret.htmlmsg.replaceAll(/\n/g,'');
            ret.htmlmsg = ret.htmlmsg.replace(/.*<body>/i,'');
            ret.htmlmsg = ret.htmlmsg.replace(/<\/body>.*/i,'');
          } else if (part.body && part.contentType.startsWith('text/plain')) {
            // Plaintext body part
            if (ret.plainmsg) {
              SLStatic.warn("Plain message body defined twice.");
            }
            ret.plainmsg = part.body;
          } else if (part.contentType.startsWith('multipart/mixed')) {
            // Another level of message parts.
            const subparts = expandMimeParts(part)
            Object.assign(ret, subparts);
          } else {
            SLStatic.warn("Unsure how to handle message part:",part);
          }
        }
        return ret;
      }

      const mimeParts = expandMimeParts(original);

      const details = {
        identityId: identity.id,
        to: original.headers.to,
        subject: original.headers.subject[0],
        cc: original.headers.cc,
        bcc: original.headers.bcc,
        isPlainText: (mimeParts.htmlmsg === undefined)
      }

      if (details.isPlainText) {
        details.plainTextBody = mimeParts.plainmsg;
      } else {
        details.body = mimeParts.htmlmsg;
      }

      // Duplicate message details into a new compose window.
      const cw = await browser.compose.beginNew(details);

      // The MailExtension message API does not return message attachment body
      // as of TB78. This workaround starts a forwarded message, then duplicates
      // its attachments into a new compose window.
      const fw = await browser.compose.beginForward(id, "forwardInline");
      const attachments = await browser.compose.listAttachments(fw.id);
      const files = await Promise.all(attachments.map(att => att.getFile()));
      for (let idx=0; idx<files.length; idx++) {
        const name = attachments[idx].name;
        const file = files[idx];
        await browser.compose.addAttachment(cw.id, { name, file });
      }
      browser.tabs.remove(fw.id);

      return cw;
    },

    async possiblySendMessage(id) {
      if (browser.SL3U.isOffline()) {
        return;
      }
      // Determines whether or not a particular draft message is due to be sent
      const msg = await browser.messages.getFull(id);

      const msgSendAt = msg.headers['x-send-later-at'];
      const msgUUID = msg.headers['x-send-later-msg-uuid'];
      const msgRecurSpec = msg.headers['x-send-later-recur'];
      const recur = SendLater.parseRecur(msgRecurSpec);

      if (msgSendAt === undefined) {
        return;
      } else if (msgUUID !== undefined && SendLater.isEditing(msgUUID)) {
        SLStatic.debug(`Skipping message ${id} while it is being edited`);
        return;
      }

      if (msgUUID !== undefined) {
        const lock = await storage.local.get("lock").then(storage =>
          (storage.lock || {})[msgUUID]
        );
        switch (lock.status) {
          case "ready":
            break;
          case "sent":
            SLStatic.debug(`Message ${id} already sent but not removed`);
            return;
          default:
            SLStatic.debug(`Unrecognized lock status <${lock.status}> on `
                          + `message ${id}.`);
            return;
        }
      }

      const nextSend = new Date(msgSendAt);
      const dueForSend = Date.now() >= nextSend.getTime();
      if (dueForSend) {
        const prefs = await browser.storage.local.get("preferences").then(st =>
          (st.preferences || {})
        );

        if (prefs.enforceTimeRestrictions) {
          const now = Date.now();

          // Respect late message blocker
          if (prefs.blockLateMessages) {
            const lateness = (now - nextSend.getTime()) / 60000;
            if (lateness > prefs.lateGracePeriod) {
              SLStatic.info(`Grace period exceeded for message ${id}`);
              return;
            }
          }

          // Respect "send between" preference
          if (recur.between) {
            if ((now < recur.between.start) || (now > recur.between.end)) {
              SLStatic.debug(`Message ${id} outside of sendable time range.`);
              return;
            }
          }

          // Respect "only on days of week" preference
          if (recur.days) {
            const wkday = new Intl.DateTimeFormat('default', {weekday:'short'});
            const today = wkday.format(new Date(now));
            if (!recur.days.includes(today)) {
              SLStatic.debug(`Message ${id} not scheduled to send on ${today}`);
            }
          }
        }

        // Duplicate draft message into new compose window, and initiate send
        const cw = await SendLater.beginEditAsNewMessage(id);
        setTimeout(SendLater.waitAndSend.bind(cw), 0);

        // Update lock to avoid double sending.
        browser.storage.local.get("lock").then(storage => {
          const lock = storage.lock || {};
          lock[msgUUID] = "sent";
          browser.storage.local.set({ lock });
        });

        // Possibly schedule next recurrence.
        if (recur.next) {
          SLStatic.debug(`Scheduling next recurrence of ${msgRecurSpec} at `
                        + SLStatic.dateTimeFormat(recur.next));

          const cw = await SendLater.beginEditAsNewMessage(id);
          SendLater.scheduleSendLater(cw.id, { sendTime: recur.next,
                                               recurSpec: msgRecurSpec });
        }

        // TODO: Add option for skiptrash.
        browser.messages.delete([id], false);
      } else {
        SLStatic.debug(`Message ${id} not yet due for send.`);
      }
    },

    mainLoop: function() {
      try {
        browser.accounts.list().then(accounts => {
          accounts.forEach(acct => {
              // Looping over accounts. Most accounts should only have one Drafts
              // folder, but to be safe, we'll loop through each of them and check
              // for messages that are scheduled to be sent.
              SendLater.getDraftFolders(acct).then(draftFolders => {
                draftFolders.forEach(async drafts => {
                  let page = await browser.messages.list(drafts);
                  do {
                    page.messages.forEach(msg =>
                      SendLater.possiblySendMessage(msg.id)
                    );
                    if (page.id) {
                      page = await browser.messages.continueList(page.id);
                    }
                  } while (page.id);
                });
              });
          });
        });
      } catch (ex) {
        SLStatic.trace(ex);
      }
      browser.storage.local.get("preferences").then(storage => {
        // Rather than using setInterval for this loop, we'll just start a new
        // timeout each time it runs to schedule it some delay in the future.
        // This automatically responds to user changes in 'delay', but has the
        // disadvantage that shortening `delay` will still take up to the
        // previous delay time before taking effect.
        // TODO: Use a persistent reference to the this timeout that can be
        // scrapped and restarted upon changes in the delay preference.
        const prefs = storage.preferences || {};
        const intervalTimeout = prefs['checkTimePref'];
        const millis = prefs["checkTimePref_isMilliseconds"];
        const delay = (millis) ? intervalTimeout : intervalTimeout * 60000;
        SLStatic.debug(`Next main loop iteration in ${delay/1000} seconds.`);
        setTimeout(SendLater.mainLoop, delay);
      });
    }
};

// Intercept sent messages. Decide whether to handle them or just pass them on.
browser.compose.onBeforeSend.addListener((tab) => {
  if (SendLater._PromiseMap.has(tab.id)) {
    // We already have a listener for this tab open.
    return;
  }

  SLStatic.log("User requested send. Awaiting UI selections.");

  setTimeout(() => browser.storage.local.get("preferences").then(storage => {
    const prefs = storage.preferences || {};
    const resolver = (SendLater._PromiseMap.get(tab.id)) || (()=>{});

    if (prefs["sendDoesSL"]) {
      SLStatic.debug("Intercepting send operation. Awaiting user input.");
      browser.composeAction.openPopup();
      // No need to resolve just yet. User will do that via UI listener.
    } else if (prefs["sendDoesDelay"]) {
      const sendDelay = prefs["sendDelay"];
      SLStatic.debug(`Scheduling SendLater ${sendDelay} minutes from now.`);
      SendLater.scheduleSendLater(tab.id, { delay: sendDelay });
      SendLater._PromiseMap.delete(tab.id);
      resolver({ cancel: true });
    } else {
      // No need to intercept sending
      SLStatic.debug("Resolving onBeforeSend intercept.");
      SendLater._PromiseMap.delete(tab.id);
      resolver({ cancel: false });
    }
  }), 0);

  return new Promise(resolve => SendLater._PromiseMap.set(tab.id, resolve));
});

// Button clicks in the UI popup window send messages back to this function
// via the WebExtension messaging API.
browser.runtime.onMessage.addListener((message) => {
    const resolve = SendLater._PromiseMap.get(message.tabId);

    if (message.action === "doSendNow" ) {
        SLStatic.debug("User requested send immediately.");
        if (resolve !== undefined) {
          // If already blocking a send operation, just get out of the way.
          SendLater._PromiseMap.delete(message.tabId);
          resolve({ cancel: false });
        } else {
          // Otherwise, initiate a new send operation.
          if (browser.SL3U.isOffline()) {
            browser.SL3U.alert("Thunderbird is offline.",
                               "Cannot send message at this time.");
          } else {
            browser.SL3U.SendNow(false);
          }
        }
    } else if (message.action === "doSendLater") {
        SLStatic.debug("User requested send later.");
        const options = { sendTime: message.sendTime };
        SendLater.scheduleSendLater(message.tabId, options);
        if (resolve !== undefined) {
          SendLater._PromiseMap.delete(message.tabId);
          resolve({ cancel: true });
        }
    } else if (message.action === "cancel") {
        SLStatic.debug("User cancelled send.");
        if (resolve !== undefined) {
          SendLater._PromiseMap.delete(message.tabId);
          resolve({ cancel: true });
        }
    } else {
      SLStatic.warn(`Unrecognized operation <${message.action}>.`);
      if (resolve !== undefined) {
        SendLater._PromiseMap.delete(message.tabId);
        resolve({ cancel: true });
      }
    }
});

// Start background loop to check for scheduled messages.
setTimeout(SendLater.mainLoop, 0);