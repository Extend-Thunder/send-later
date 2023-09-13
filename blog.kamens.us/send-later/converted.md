::: {#page .site}
::: {.io-title-description}
[Something better to do](../index.html "Something better to do")\
[Musings of an indignant mind]{.site-description}
:::

[Skip to content](index.html#main "Skip to content"){.assistive-text}

-   [[Home](../index.html)]{#menu-item-3836}
-   [[Send Later Thunderbird Add-on](index.html)]{#menu-item-3841}

::: {.clear}
:::

::: {#main .wrapper}
::: {#primary .site-content}
::: {#content role="main"}
Send Later Thunderbird Add-on {#send-later-thunderbird-add-on .entry-title}
=============================

::: {.entry-content}
::: {#fb-root}
:::

::: {.pf-content}
[![logo-big](https://i2.wp.com/blog.kamens.us/wp-content/uploads/2010/07/logo-big1.png?resize=200%2C200&ssl=1){.size-full .wp-image-4286 .alignright .jetpack-lazy-image width="200" height="200" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"}![logo-big](https://i2.wp.com/blog.kamens.us/wp-content/uploads/2010/07/logo-big1.png?resize=200%2C200&ssl=1){.size-full .wp-image-4286 .alignright width="200" height="200"}](index.html#toc){#toc}
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

THUNDERBIRD 78 AND SEND LATER
-----------------------------

***SEND LATER HAS NOW BEEN RELEASED FOR THUNDERBIRD 78!***

You can now get Send Later for Thunderbird 78 on addons.thunderbird.net
just like any other add-on. The easiest way to install it is to open the
add-ons page in Thunderbird, search for Send Later, and install it
("Send Later," *not* "Send Later Button"!) from the search results.

Send Later has been almost completely rewritten for Thunderbird 78,
thanks to the yeoman efforts of Jonathan Perry-Houts. Because of this, a
new user guide will need to be written for the new version of the
add-on. Because the new version has a lot of functionality in common
with the old one, much of the information below regarding the
Thunderbird 68 version is still accurate for Thunderbird 78, but not all
of it is. This user guide will remain targeted for Thunderbird 68; when
there is a new user guide available for Thunderbird 78, we will link to
it here.

Here is some additional information about my other add-ons and
Thunderbird 78:

::: {.moz-text-html lang="x-unicode"}
Efforts are underway to port most of my add-ons to Thunderbird 78. My
original plan was to fund this work with a Kickstarter campaign, after
which the add-ons were going to be switching from a free model to a paid
license model. However, even during the campaign my hope was that I
would be able to find a way to use the proceeds of the campaign to allow
the add-ons to continue to be available for free. At this point that
does appear to be what has happened. In short: *my current plan is that
once the add-ons are ported to Thunderbird 78, they will remain free for
all to use.*

The current status of my other add-ons is as follows:

-   Folder Pane View Switcher is now available for Thunderbird 78 [on
    addons.thunderbird.net](https://addons.thunderbird.net/thunderbird/addon/folder-pane-view-switcher/).
    There are some outstanding issues, which are documented (with
    workarounds)
    [here](https://github.com/Extended-Thunder/folder-pane-view-switcher/issues).
-   Remove Content By Folder is now available for Thunderbird 78 [on
    addons.thunderbird.net](https://addons.thunderbird.net/thunderbird/addon/remote-content-by-folder/).
    There are some outstanding issues, which are documented
    [here](https://github.com/Extended-Thunder/remote-content-by-folder/issues).
-   userChromeJS: The current version of userChromeJS [available on
    addons.thunderbird.net](https://addons.thunderbird.net/thunderbird/addon/userchromejs-2/)
    is compatible with Thunderbird 78.
-   Show All Body Parts: Although this add-on is not yet available for
    Thunderbird 78, there is a workaround:
    -   Open the Thunderbird Preferences.
    -   Click on "Config Editor..." in the Advanced section of the
        General preferences.
    -   In the search box, enter
        "mailnews.display.show\_all\_body\_parts\_menu".
    -   If the status of the
        "mailnews.display.show\_all\_body\_parts\_menu" doesn't say
        "modified" there, then double-click on it to change the status
        to "modified", which will set its value to True.
    -   You should now see the "All Body Parts" View mode in the
        Thunderbird menus. Changing this hidden preference is literally
        all the add-on does, so if you set the preference this way, then
        you don't need the add-on at all.
-   IMAP Received Date: Although this add-on is not yet available for
    Thunderbird 78, there is a workaround:
    -   Open the Thunderbird Preferences.
    -   Click on "Config Editor..." in the Advanced section of the
        General preferences.
    -   Enter "mailnews.customDBHeaders" (without the quotes) into the
        search box.
    -   If it's not there, right-click in the search results area,
        select New \> String, enter "mailnews.customDBHeaders" (without
        the quotes) as the preference name to create and click OK, and
        enter "Received" (without the quotes) as the value and click OK
        again.
    -   If, on the other hand, "mailnews.customDBHeaders" shows up in
        the search results, then double-click on it to edit the value,
        enter a space and then "Received" (without the quotes) at the
        end of the value, and click OK.
-   My other add-ons, Enhanced Priority Display, Reply to Multiple
    Messages, Toggle Replied, and Undigestify, are not yet available for
    Thunderbird 78, but we're working on them. We're hoping to have more
    progress to report some time in October, though that date may slip.

People have asked if they can contribute to the Kickstarter campaign or
contribute to these add-ons in general. The Kickstarter campaign has
closed and can no longer accept contributions, and in any case there is
no need to contribute to it since as noted above our current plan is for
all of the add-ons to continue to be free. As for contributing to me
personally to acknowledge my work on these add-ons, there are
unfortunately a lot of people nowadays who need financial help more than
I do, so I am asking people who are inspired to contribute to these
add-ons to instead pick a worthy charity and donate there instead.

Please [email the
maintainers](../cdn-cgi/l/email-protection#cebdaba0aae3a2afbaabbce3bdbbbebea1bcba8eabb6baaba0aaabaae3baa6bba0aaabbce0a1bca9)
(**don't** post comments below) if you have any further questions.
:::

[Table of contents](index.html#toc){#toc}
-----------------------------------------

(Clicking on section headers in the text will return you to the table of
contents.)

-   [Introduction](index.html#intro)
-   [Installation](index.html#install)
-   [Basic usage](index.html#usage)
    -   [Date formats](index.html#date-formats)
-   [Preferences](index.html#prefs)
    -   [Preset buttons](index.html#presets)
-   [Toolbar](index.html#toolbar)
    -   ["I want a 'Send Later' button!"](index.html#send-later-button)
-   [Caveats and known issues](index.html#caveats)
    -   [Send Later doesn't work with mail servers that discard its
        "X-Send-Later" headers](index.html#bad-mail-servers)
    -   [Thunderbird must be running for scheduled messages to be
        sent](index.html#running)
    -   [Return receipts don't work](index.html#receipt)
    -   [Thunderbird hangs frequently on
        Windows](index.html#windows-hangs)
    -   [Errors you might encounter](index.html#errors)
        -   [Missing drafts folder](index.html#missing-drafts-folder)
-   [Advanced usage](index.html#advanced)
    -   [Hot keys](index.html#hotkeys)
    -   [Recurring messages](index.html#recurring)
    -   [Mail Merge add-on](index.html#mailmerge)
    -   [Owl for Exchange add-on](index.html#owl)
    -   [Dynamic functions for complex scheduling
        rules](index.html#dynamic)
        -   [Dynamic recurrence](index.html#dynamic-recurrence)
    -   [Suppressing scheduled message delivery](index.html#senddrafts)
    -   [Server-side Send Later](index.html#server-side)
    -   [Making "Send" do "Send Later" only some of the
        time](index.html#dynamic_sendbutton)
    -   [Checking for scheduled messages more than once per
        minute](index.html#milliseconds)
-   [Troubleshooting](index.html#troubleshooting)
    -   [Messages don't send or send multiple times](index.html#outbox)
        -   [Send errors with Gmail when Thunderbird is configured to
            save copies](index.html#gmail)
    -   [Debug logging](index.html#debug)
-   [Helping to improve the add-on](index.html#improve)
    -   [Translations](index.html#translate)
    -   [Hacking](index.html#hacking)
-   [Getting help](index.html#help)
    -   [The "Send Later users" mailing list](index.html#mailing-list)
    -   [Contacting the developer](index.html#contact-me)
    -   [Remote support](index.html#remote-support)
    -   [Other resources](index.html#resources)
-   [Support Send Later!](index.html#donate)
-   [Check out my other add-ons](index.html#other-addons)
-   [Credits](index.html#credits)
    -   [Supporters](index.html#supporters)
-   [Release Notes](index.html#notes)
-   [Comments on this page](index.html#comments)

[Introduction](index.html#toc){#intro}
--------------------------------------

The Send Later Thunderbird add-on allows you you to write an email
message and then tell Thunderbird when you want it to be sent. The
message is then saved back into your Drafts folder, and delivered at
approximately the specified time. The add-on is available for download
from
[addons.thunderbird.net](https://addons.thunderbird.net/thunderbird/addon/send-later-3/).
Release notes for each new release of Send Later are published there and
[below](index.html#notes). What follows is a user manual for the add-on.
Everything below (except for the installation section) assumes that
you've already installed the add-on from
[addons.thunderbird.net](https://addons.thunderbird.net/thunderbird/addon/send-later-3/)
and restarted your mail app. If you have any comments, questions or
feedback about the add-on, please feel free to [email the
maintainers](../cdn-cgi/l/email-protection#07746269632a6b667362752a7472777768757347627f7362696362632a736f726963627529687560).

This user manual is written for Thunderbird 68 or newer. Things might be
slightly different for older versions.

[Installation](index.html#toc){#install}
----------------------------------------

### Method 1

1.  In Thunderbird, open the add-ons dialog with the "Tools \> Add-ons"
    menu-bar command or "Add-ons" from the three-lines menu in the upper
    right corner of the main Thunderbird window.
2.  Enter "Send Later" in the search box and hit Enter.
3.  Find the "Send Later" add-on (***not*** "Send Later Button") in the
    search results and click the "Add to Thunderbird" button.
4.  When it's done installing, restart Thunderbird.

### Method 2 (use only if Method 1 doesn't work)

1.  Download the add-on as an ".xpi" file from
    [addons.thunderbird.net](https://addons.thunderbird.net/thunderbird/addon/send-later-3/),
    saving it to your Desktop or another obvious location.
2.  In Thunderbird, select the "Tools \> Add-ons" menu-bar command or
    "Add-ons" from the three-lines menu.
3.  Click the gear icon to the left of the search box and select
    "Install Add-on From File...".
4.  Browse to the downloaded Send Later ".xpi" file and open it.
5.  Make sure your mouse is over the install dialog and it has focus.
    When the "Install" button becomes active, click on it.
6.  Restart Thunderbird when it tells you to after the add-on is
    installed.

[Basic usage](index.html#toc){#usage}
-------------------------------------

When you want to schedule a message for later delivery, either select
the File \> Send Later menu command in the message composition window,
or hit Ctrl-Shift-Enter. This will pop up the following dialog:

[![Send Later prompt
window](https://i1.wp.com/blog.kamens.us/wp-content/uploads/2019/09/dialog.png?resize=300%2C239&ssl=1){.aligncenter
.wp-image-5671 .size-medium .jetpack-lazy-image width="300" height="239"
srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"}![Send
Later prompt
window](https://i1.wp.com/blog.kamens.us/wp-content/uploads/2019/09/dialog.png?resize=300%2C239&ssl=1){.aligncenter
.wp-image-5671 .size-medium width="300" height="239"
sizes="(max-width: 300px) 100vw, 300px"
srcset="https://i1.wp.com/blog.kamens.us/wp-content/uploads/2019/09/dialog.png?resize=300%2C239&ssl=1 300w, https://i1.wp.com/blog.kamens.us/wp-content/uploads/2019/09/dialog.png?w=606&ssl=1 606w"}](https://i1.wp.com/blog.kamens.us/wp-content/uploads/2019/09/dialog.png?ssl=1)

Here is what you can do from this dialog:

-   **Specify a specific time at which to send the message.** Tell Send
    Later in the text box when you would like the message to be sent, or
    use the date and time pickers below the text box if you prefer. The
    text box understands [lots of different
    formats](index.html#date-formats), so give it a try! When you've
    entered a date/time that the add-on understands, the button below it
    will become active and "Enter a valid date above" will be replaced
    with what you entered. Click the button or type Ctrl-Enter, or just
    Enter if your cursor is in the text box, to schedule the message.\
    **IMPORTANT NOTE:** You will only see the date and time pickers if
    you have the Lightning add-on installed and enabled. Otherwise, you
    need to use the text box.
-   **Schedule a recurring message on a fixed schedule.** See
    [below](index.html#recurring).
-   **Schedule a one-shot or recurring message using one of the built-in
    scheduling functions or a function you've written or imported
    yourself.** See [below](index.html#dynamic).
-   **Send the message using one of the preset buttons.** Click "15 mins
    later", "30 mins later", or "2 hours later" to send the message the
    indicated amount of time into the future.
-   **Deposit the message into your Outbox for later delivery by
    Thunderbird.** If you click "Put in Outbox" (see
    [below](index.html#buttons) for why you won't always see this
    button), the message will be copied immediately into your Outbox.
    This is the behavior of the standard Thunderbird "Send Later"
    command before you installed the add-on. The message will then be
    sent if you execute File \> Send Unsent Messages, or if you go into
    and out of offline mode, or if you exit and restart Thunderbird. In
    the latter two cases, Thunderbird may or may not prompt for
    confirmation before sending unsent messages, depending on how you
    have configured it.
-   **Send the message immediately.** If you click "Send Now" (see
    [below](index.html#buttons) for why you won't always see this
    button), the message will be delivered immediately, as if you had
    executed the "Send" command instead of "Send Later". Note that you
    can activate this button by hitting Alt-N or the equivalent on your
    platform or in your language.
-   **Go back to editing the message.** Click the "Cancel" button to go
    back to editing the message.

### Time-of-day and day-of-week restrictions

You can also specify time-of-day and day-of-week restrictions for when
your message will be delivered. **IMPORTANT NOTE:** You will only see
the option to set a time-of-day restriction if you have the Lightning
add-on installed and enabled.

These restrictions have different (but, I hope, somewhat intuitive)
effects based on what kind of scheduling you are doing:

-   If you enter restrictions with an explicit, one-shot (i.e., not
    recurring) send time, then Send Later will adjust the send time you
    specify to fall within those restrictions. Furthermore, if
    Thunderbird can't send the message at the scheduled time, the
    restrictions you specify will be enforced when it *can* send the
    message, if the "Enforce time and day restrictions at delivery time"
    preference (see [below](index.html#prefs)) is enabled.
-   If you enter restrictions with a [recurring send
    time](index.html#recurring) or [dynamic scheduling
    function](index.html#dynamic), then they will be applied as
    above and also each time the message is rescheduled.

### Saving defaults

You can save whatever settings you enter here as the default settings
for when you bring up this dialog in the future, or clear previously
saved defaults, by making the appropriate selection above the big
scheduled send button, before you click it. You can do some pretty fancy
things with this. For example, if you enter "now" in the text box and
check that you only want the message to be delivered between 9:00am and
5:00pm Monday through Friday, and then save those as your defaults, then
whenever you pop up the dialog, the default behavior will be to send the
message now or reschedule it for when it is during business hours.
Nifty, eh?

### []{#buttons}The "Put in Outbox" and "Send Now" buttons

As noted above, the "Send Now" button in the Send Later dialog causes
the message to be sent immediately, i.e., it bypasses the scheduled send
process, and the "Put in Outbox" button causes the message to be put
directly into the Thunderbird Outbox, also bypassing the scheduled send
process, but in a different way.

Unfortunately, both of these buttons can't be displayed at the same time
without "cheating" and integrating Send Later into Thunderbird in a way
that isn't really supposed to be done and isn't maintainable or
sustainable. Therefore, when the Send Later dialog pops up, you will
only see one of these buttons or the other, as follows:

-   If the Send Later dialog is opened by typing Ctrl-Shift-Enter, or
    the "File \| Send Later" menu command, or the button provided by the
    ["Send Later Button" add-on](index.html#magicslr), then the "Put in
    Outbox" button is displayed but the "Send Now" button is not.
-   Conversely, if the Send Later dialog is opened by typing Ctrl-Enter
    or "File \| Send Now" or the "Send" button when the "'Send' does
    'Send Later\'" preference described [below](index.html#prefs) is
    enabled, then the "Send Now" button is displayed but the "Put in
    Outbox" button is not.

If you *don't* have the "'Send' does 'Send Later\'" preference enabled,
and you open the dialog with Ctrl-Shift-Enter etc. and then realize that
you actually want to send the message right away, you can simply close
the dialog or click the Cancel button and then send the message
normally.

### What happens when you schedule a message?

When you schedule a message for delivery, it is saved in your Drafts
folder with the necessary scheduling information embedded in it. If you
wish to reschedule a message later, just edit the saved draft and do
"Send Later" again and specify the new send time. If you wish to cancel
a scheduled message delivery, edit the draft and save it normally
without "Send Later" (or just send it immediately, if that's what you
want to do), and the scheduling information will be removed.

### [Date formats](index.html#toc){#date-formats}

The part of Send Later that interprets the send times you type into the
text box is pretty smart. You're welcome to type a full date and time,
e.g., "10/4/2012 3:00pm", if you *want* to, but it isn't actually
necessary. In addition to making intelligent guesses about the parts you
leave out, the interpreter also understands quite a few neat shortcuts.
Here are some examples, but they don't include everything, so when in
doubt, try it out, and see if it works!

-   Don't type the year if the date you're entering is in the coming
    year. It'll default to that automatically!
-   Don't type the date at all if you're just entering a time in the
    next 24 hours.
-   You can type a day of the week for the next instance of that day, or
    "next *day-of-week*" for the one after.
-   You can type "tomorrow" or "the day after tomorrow".
-   You can type "in 3 minutes" or "3 minutes from now".

See [this page](https://sugarjs.com/dates/#/Parsing) for more examples.
These apply in all of the languages that Send Later supports, not just
in English. If you encounter something you think the add-on should
understand but doesn't, [let us
know](../cdn-cgi/l/email-protection#47342229236a2b263322356a3432373728353307223f3322292322236a332f322923223569283520).

[Preferences](index.html#toc){#prefs}
-------------------------------------

You can get to the add-on's Preferences window in three ways:

1.  Click on "Send Later" in the status bar at the bottom of your main
    window and select "Send Later preferences" from the pop-up menu
    (there are also several other useful things in this menu). The
    preferences will open in a new window.
2.  Select the Tools \> Add-on Preferences \> Send Later menu command.
    The preferences will open in a new tab.
3.  Select Add-ons \> Send Later from the three-lines menu. The
    preferences will open in a new tab.

Here is the main preferences screen, followed by explanations of the
various settings:

[![](https://i2.wp.com/blog.kamens.us/wp-content/uploads/2019/09/2019-09-23_11-43.png?resize=300%2C258&ssl=1){.aligncenter
.size-medium .wp-image-5684 .jetpack-lazy-image width="300" height="258"
srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"}![](https://i2.wp.com/blog.kamens.us/wp-content/uploads/2019/09/2019-09-23_11-43.png?resize=300%2C258&ssl=1){.aligncenter
.size-medium .wp-image-5684 width="300" height="258"
sizes="(max-width: 300px) 100vw, 300px"
srcset="https://i2.wp.com/blog.kamens.us/wp-content/uploads/2019/09/2019-09-23_11-43.png?resize=300%2C258&ssl=1 300w, https://i2.wp.com/blog.kamens.us/wp-content/uploads/2019/09/2019-09-23_11-43.png?resize=660%2C568&ssl=1 660w, https://i2.wp.com/blog.kamens.us/wp-content/uploads/2019/09/2019-09-23_11-43.png?w=710&ssl=1 710w"}](https://i2.wp.com/blog.kamens.us/wp-content/uploads/2019/09/2019-09-23_11-43.png?ssl=1)

### Check every \# minutes

This preference controls how often the add-on checks for messages whose
delivery time has arrived. The default, once per minute, is adequate for
most people. In rare cases, you may need to use a higher value (lower
frequency) if you have a very large number of messages in your Drafts
folder and the Send Later progress bar at the bottom of your Thunderbird
window never goes away.

### "Send" does "Send Later"

If it is enabled, this preference causes the scheduling dialog to pop up
not only when you run the "Send Later" command, but also, when you run
"Send", whether it's by clicking the "Send" button, selecting File \|
Send Now, or typing Ctrl-Enter. It'll therefore prevent you from
accidentally sending a message now that you meant to schedule for later.
This feature is *not* enabled by default.

Note that this preference and the following one are mutually exclusive.

### []{#send-delay}"Send" delays messages by: \# minutes

If enabled, this preference causes all messages you send by clicking
Send or typing Ctrl-Enter to be automatically scheduled to be sent by
Send Later the specified number of minutes into the future.

This essentially replicates the functionality provided by some email
providers to allow you to cancel sending a message for a short period of
time after it is sent. If you sent a message and then change your mind
before the delay time has elapsed, you can simply find the message in
your Drafts folder and either delete it (if you don't want it to be sent
at all) or open it for editing, which automatically cancels the
scheduled send.

Note that this preference and the previous one are mutually exclusive.

### Mark scheduled drafts as read

By default when Send Later saves a scheduled messages into your Drafts
folder, it marks the message as "read" so that your Drafts folder
doesn't show up in the folder list as having unread messages in it. If
you prefer for scheduled Drafts to show up as "unread" to remind you
that they're there, uncheck this preference.

### Bind Alt-Shift-Enter instead of Ctrl-Shift-Enter

This preference causes the pop-up Send Later dialog to be bound to the
key sequence Alt-Shift-Enter instead of Ctrl-Shift-Enter. When this
feature is activated, Ctrl-Shift-Enter remains the original Thunderbird
functionality, i.e., depositing the message into the Outbox for sending
later.

### Enable compose window key bindings for presets

When you're composing a message, you can type Ctrl-Alt-1, Ctrl-Alt-2, or
Ctrl-Alt-3 to activate the corresponding preset button without popping
up the Send Later prompt window. If you don't want these key bindings to
be active, uncheck this preference to disable them.

### Show Send Later Column

This preference controls whether a column showing the scheduled delivery
times of messages that have them is displayed when viewing a Drafts
folder.

### Show Send Later Header

This preference controls whether the "x-send-later-at" message header,
which is where the add-on stores information about when a draft should
be delivered, is displayed when viewing drafts that have them. *(Note
that this setting does not work when the Mnenhy add-on is installed.)*

### Show Send Later In Status Bar

This preference controls whether the add-on shows its current status in
the Status Bar at the bottom of the Thunderbird window. The number of
pending scheduled messages, or "IDLE" if there are none, is displayed.
If this preference is unset, then the next one is ignored.

### Show Background Progress In Status Bar

This preference controls whether an animated progress bar is shown in
your Thunderbird status bar when the add-on is working, i.e., when it
wakes up periodically to check for messages whose delivery time has
arrived. If the previous preference is unset, then this preference is
ignored.

### Trigger unsent message delivery from Outbox

This preference controls whether the add-on actually sends messages when
their delivery time arrives, or rather should just deposit them into
your Outbox and leave them there until the next time you send unsent
messages as described above. You might want to disable this setting if
you use some other add-on, e.g., BlunderDelay, to manage your message
delivery. See the [Caveats section below](index.html#caveats) for more
information about this.

### Don't deliver messages more than \# minutes late

This preference controls what happens when Send Later that's late
because Thunderbird wasn't running or your computer was asleep at the
time it was supposed to be sent. By default, Send Later will deliver
such a message at the earliest opportunity to do so after its scheduled
send time. If you would rather not have messages delivered late, you can
enable this preference, and then instead of delivering a late message,
Send Later will pop up a warning about it and leave it for you to edit
to either reschedule its send time or send it immediately by hand.

### Enforce time and day restrictions at delivery time

As described [below](index.html#recurring), Send Later supports
restrictions on the time of day and day of the week when recurring
scheduled messages are delivered. These restrictions are enforced when a
message is scheduled, i.e., the scheduled send time of a message will
never violate the time and weekday restrictions specified for that
message.

Having said that, this preference controls what happens when a message
isn't delivered at its scheduled time because Thunderbird isn't running
or your computer is asleep, and then when Thunderbird wakes up, the
current time violates the time and/or weekday restrictions on the
message. By default, when this preference is disabled, Send
Later delivers late messages immediately even in violation of their
time/weekday restrictions. In contrast, when the preference is enabled,
the add-on waits until the time/weekday restrictions are satisfied
before delivery.

### Links

Following these settings are links you can click on to send me email,
view the user guide (i.e., this page), or make a donation to support
continued development of the add-on.

### [Preset buttons](index.html#toc){#presets}

In addition to these main settings, you can change the behavior of the
preset buttons by editing the settings of the "Shortcut" tabs of the
preferences dialog:

[![Send Later shortcut
preferences](https://i1.wp.com/blog.kamens.us/wp-content/uploads/2019/09/prefs3.png?resize=300%2C243&ssl=1){.aligncenter
.wp-image-5675 .size-medium .jetpack-lazy-image width="300" height="243"
srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"}![Send
Later shortcut
preferences](https://i1.wp.com/blog.kamens.us/wp-content/uploads/2019/09/prefs3.png?resize=300%2C243&ssl=1){.aligncenter
.wp-image-5675 .size-medium width="300" height="243"
sizes="(max-width: 300px) 100vw, 300px"
srcset="https://i1.wp.com/blog.kamens.us/wp-content/uploads/2019/09/prefs3.png?resize=300%2C243&ssl=1 300w, https://i1.wp.com/blog.kamens.us/wp-content/uploads/2019/09/prefs3.png?resize=660%2C534&ssl=1 660w, https://i1.wp.com/blog.kamens.us/wp-content/uploads/2019/09/prefs3.png?w=700&ssl=1 700w"}](https://i1.wp.com/blog.kamens.us/wp-content/uploads/2019/09/prefs3.png?ssl=1)

-   **Button label** specifies the string that is displayed in the
    button. You need to change the label yourself if you change the
    number of minutes; it won't update automatically.
-   **Minutes** specifies how many minutes into the future the message
    should be sent if you click this button. The defaults, obviously,
    are 15, 30 and 120.

[Toolbar](index.html#toc){#toolbar}
-----------------------------------

If you would like, you can add Send Later to your compose window toolbar
to give you direct access to the add-on's functionality without needing
to go through the pop-up. Here is how to do that:

1.  Right-click on the toolbar in a message compose window.
2.  Select "Customize...".
3.  Drag and drop the Send Later pieces you want (see the following
    diagram) from the "Customize Toolbar" window to where you want them
    on the toolbar.
4.  Click "Done" to close the "Customize Toolbar" window.

[![Send Later toolbar
buttons](https://i2.wp.com/blog.kamens.us/wp-content/uploads/2019/09/toolbar.png?resize=300%2C190&ssl=1){.aligncenter
.wp-image-5676 .size-medium .jetpack-lazy-image width="300" height="190"
srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"}![Send
Later toolbar
buttons](https://i2.wp.com/blog.kamens.us/wp-content/uploads/2019/09/toolbar.png?resize=300%2C190&ssl=1){.aligncenter
.wp-image-5676 .size-medium width="300" height="190"
sizes="(max-width: 300px) 100vw, 300px"
srcset="https://i2.wp.com/blog.kamens.us/wp-content/uploads/2019/09/toolbar.png?resize=300%2C190&ssl=1 300w, https://i2.wp.com/blog.kamens.us/wp-content/uploads/2019/09/toolbar.png?w=578&ssl=1 578w"}](https://i2.wp.com/blog.kamens.us/wp-content/uploads/2019/09/toolbar.png?ssl=1)

The toolbar items you see here are as follows:

### Send Later button

Schedules the message to be sent at the time specified in the "send
time" text field (the second toolbar item shown above and described
below). Just to be clear: the purpose of the send later button in the
toolbar is to finish scheduling a message after you've already entered a
send time in the text box. This button does not pop up the scheduling
dialog. See [below](index.html#magicslr) if you want a button that does
that.

### "Send time" text box

You can enter a scheduled delivery time in this box just like in the
text box in the Send Later dialog, then click the "Send Later" toolbar
button or just hit enter in the text box to schedule the message for
delivery.

### Shortcut buttons

The same shortcut buttons that appear in the Send Later dialog can also
be added to your toolbar.

Please note that the Send Later toolbar controls are disabled when you
are editing a [recurring message](index.html#recurring); you need to use
the pop-up window to reschedule such a message.

### []{#magicslr}["I want a 'Send Later' button!"](index.html#toc){#send-later-button}

If you want there to be a button on your toolbar to pop up the Send
Later prompt window, i.e., a button that does the same thing as File \>
Send Later or Ctrl-Shift-Enter, you can get one by installing the "[Send
Later
Button](https://addons.thunderbird.net/thunderbird/addon/send-later-button/)"
add-on and adding its button to your toolbar. Note that the toolbar Send
Later button provided by the Send Later add-on, i.e., the one shown in
the "Customize Toolbar" palette above, doesn't pop up the Send Later
prompt window. Rather, it is used to finish scheduling a message after
you have entered the send time for it in the text box you've added to
the toolbar along with the button. If you don't add the text box to the
toolbar, then that button isn't useful.

[Caveats and known issues](index.html#toc){#caveats}
----------------------------------------------------

Some things to keep in mind:

1.  Whenever Send Later delivers a scheduled message, any other messages
    pending delivery in your Outbox will also be delivered.
2.  Scheduled drafts are locked to a particular Thunderbird profile and
    will only be delivered by a Thunderbird running against the same
    profile that originally scheduled them. This means that if you use
    Thunderbird on multiple computers to schedule messages, you need to
    keep it running on all of those computers for the messages to be
    delivered. You can "transfer" a draft from one profile to another if
    need be by editing and rescheduling it.
3.  Send Later is not yet compatible with
    [UseBccInstead](https://addons.thunderbird.net/en-US/thunderbird/addon/use-bcc-instead/).
4.  If you use distribution lists within Thunderbird and you add a
    distribution list to a message and then Send Later, the list will be
    expanded when you schedule it, *not* when it is sent. Any changes
    you make to the list between when you schedule the message and when
    it is sent will not be reflected in the sent message.
5.  Send Later is partially incompatible with the ["Defer"
    feature](http://mailtweak.mozdev.org/tweaks.html#defer) of the [Mail
    Tweak](http://mailtweak.mozdev.org/) thunderbird add-on. In
    particular, if you have "Defer" enabled with Mail Tweak, then the
    Send Later dialog will pop up every time you click the "Send" button
    in a compose window or type Ctrl-Enter. You can click "Send Now" at
    that point to send the message immediately, but the extra click is
    annoying. Note that Mail Tweak is not compatible with recent
    versions of Thunderbird, so there are no plans to fix this issue.
6.  Attachments are frozen when messages are scheduled to be sent. In
    other words, if you attach a file to a message, then schedule the
    message with Send Later, then modify the file on disk before the
    scheduled message is sent, *your modifications will not be included
    in the sent message.* This is also true with recurring messages ---
    when a recurring message is sent and automatically rescheduled, Send
    Later does *not* capture a new version of the attached files.
7.  Outgoing message format preferences (Preferences \| Composition \|
    General \| Send Options...) do not work with Send Later.
8.  []{#icloud}I have been told by multiple people that messages sent
    from or to iCloud or me.com accounts never appear in the recipient's
    inbox even though Thunderbird says they were sent successfully.
    Please note that this is *not* a bug in Send Later or Thunderbird,
    it's a problem with iCloud. Apparently, Apple thinks it's OK to run
    a mail server which arbitrarily and completely silently discards
    valid email messages with no notification to either the sender or
    recipient that this has occurred (this is discussed by others on the
    internet, e.g.,
    [here](https://www.macworld.com/article/2029570/silent-email-filtering-makes-icloud-an-unreliable-option.html),
    [here](https://discussions.apple.com/thread/3153039),
    [here](https://www.cultofmac.com/103703/apple-may-be-invisibly-filtering-your-outgoing-mobileme-email-exclusive/103703/),
    [here](https://www.imore.com/apple-slipping-lately#comment-610145)).
    I have tried, unfortunately without success, to find a fix or
    workaround for this problem. The only possible fix I've been able to
    find --- and I'm not actually sure it works --- is to check your
    account settings and confirm that the outbound SMTP configuration in
    Thunderbird for your iCloud account matches the [settings Apple says
    you should be using](https://support.apple.com/en-us/HT202304).
9.  []{#exquilla}Send Later does not work with ExQuilla, because Send
    Later depends on being able to put messages into your local Outbox
    and then send them with the "Send Unsent Messages" command, but
    ["Send Unsent Messages" is not implemented in
    ExQuilla](https://exquilla.zendesk.com/entries/25723967-Messages-stuck-in-Outbox).
    If you would like to see Send Later work with ExQuilla, I suggest
    you contact the maintainers of ExQuilla and ask them to make sending
    messages to ExQuilla from the local Outbox work properly; the more
    people ask, the more likely it is that they will fix this problem.
    Send Later *does* work with [Owl for
    Exchange](https://addons.thunderbird.net/thunderbird/addon/owl-for-exchange/),
    the add-on which is intended to replace ExQuilla, when configured as
    described [below](index.html#owl).

### [Send Later doesn't work with mail servers that discard its "X-Send-Later" headers](index.html#toc){#bad-mail-servers}

Some mail servers (most notably, but not exclusively, Microsoft Exchange
used through its IMAP gateway) prevent Send Later from working by
discarding the "X-Send-Later" headers that it uses to keep track of
message scheduled delivery times. You can tell that this is happening if
you schedule a message for delivery, but then when you look at the
message header of the scheduled draft with View \> Message Source, there
are no "X-Send-Later" headers.

To work around this problem, you need to store your drafts for the
affected account in some other Drafts folder, e.g., the one underneath
Local Folders. You can set this preference by going to Tools \> Account
Settings... or Edit \> Account Settings... and viewing the "Copies &
Folders" page for the affected account.

Please note: for Microsoft Exchange in particular, this workaround is
only valid when you are accessing Exchange as a generic IMAP server,
*not* when you are using ExQuilla, which as noted [just
above](index.html#exquilla) is incompatible with Send Later.

### [Thunderbird must be running for scheduled messages to be sent](index.html#toc){#running}

You need to keep Thunderbird running (and your computer turned on!) for
Send Later to be able to send scheduled messages (note that on Mac OS,
"running" means there must be at least one main Thunderbird window open;
Send Later will not work if the Thunderbird app is running but doesn't
have any open windows). It runs within Thunderbird, which means that
when you exit from Thunderbird, it's not around to check for messages to
be sent. If you fail to leave Thunderbird running over the delivery time
of one or more messages, then those messages will be delivered shortly
after the next time you start Thunderbird. Note that there are various
methods and tools for waking up your computer automatically at a
pre-specified time, in case you don't want to keep it running constantly
until it's time to send the messages. For Windows, for example, see:
[\[1\]](http://www.lifsoft.com/),
[\[2\]](http://www.vistax64.com/tutorials/166809-task-scheduler-wake-up-computer.html),
[\[3\]](https://www.pcworld.com/article/158142/Schedule_your_PCs_Startup_and_Program_Launch.html).
For Linux, see
[\[1\]](http://www.osnews.com/story/24111/Wake_Your_Linux_Up_From_Sleep_for_a_Cron_Job).
You can schedule your Mac to wake up automatically by opening System
Preferences and clicking on "Energy Saver" and then "Schedule".
Alternatively, see [below](index.html#server-side) for a description of
how to run Thunderbird on a server to deliver your messages for you.

Or you can consider using a third-party service that holds and delivers
scheduled messages for you, instead of Send Later. See, for example:

-   <http://www.timecave.com/timecave/about.jsp>
-   <http://www.etn.nl/poptools/sendmail.htm#sendmail>
-   <http://www.lettermelater.com/>
-   <http://www.rightinbox.com/>
-   <http://www.boomeranggmail.com/> (for Gmail)

The list of sites above is provided for informational purposes only; it
should not be construed as an endorsement of any of these services. I
don't use them and don't know how well they work or how trustworthy they
are.

### [Return receipts don't work](index.html#toc){#receipt}

If you enable the Return Receipt option on a message you are composing,
and then you schedule the message to be sent later, when it is sent, no
return receipt will be requested. Unfortunately, fixing this requires
significant changes to the internal architecture for how scheduled
messages are sent, and the changes are difficult since the core
Thunderbird components involved are completely undocumented, so I don't
know when I'll be able to find the time to fix the problem. In the
meantime, here's a workaround (thanks to
[about.com](http://email.about.com/od/mozillathunderbirdtips/qt/Add_an_Arbitrary_Custom_Header_to_Mozilla_Thunderbird.htm)):

1.  Open the Thunderbird options dialog with Tools \> Options... or
    Edit \> Preferences...
2.  []{#config-editor}Click "Advanced" and then "Config Editor..." and
    click the "I'll be careful, I promise!" button if it asks you to.
3.  Enter "mail.compose.other.header" in the filter box.
4.  Double-click on the mail.compose.other.header setting and set it to
    "Disposition-Notification-To". If it already has a non-empty value,
    add a comma and then "Disposition-Notification-To" to the end of it.
5.  Quit from and restart Thunderbird.
6.  When you are composing a message for which you want a return receipt
    and which you want to schedule to be sent later, then click on an
    empty line in the message header in the compose window, select
    "Disposition-Notification-To" in the drop-down, and then enter your
    email address as the value of the header.

If you want to automatically request a return receipt for *every*
message you send, so that you don't have to do it manually each time you
schedule a message to be sent later, do the following (thanks to
[MozillaZine](http://kb.mozillazine.org/Custom_headers)):

1.  Open the advanced configuration editor as described
    [above](index.html#config-editor).
2.  Enter "useremail" in the filter box and scan through the matches to
    find the email address of the account which you want to generate
    return receipts. Remember the "id*\#*" for that account, where
    "id*\#*" here and below means the characters "id" followed by a
    number which is different for each of your configured accounts.
3.  Enter "mail.identity.id*\#*.headers" to find out if there are
    already custom headers configured for the account. If not, then
    right-click in the settings area to create a new string setting with
    that name.
4.  Put "receipt" as the value of the setting if it's empty, or append
    ",receipt" to the end of the existing value.
5.  Create a new string setting called
    "mail.identity.id*\#*.header.receipt", and set its value to
    "Disposition-Notification-To: *address*", where *address* is the
    email address to which you would like return receipts sent.

### [Thunderbird hangs frequently on Windows](index.html#toc){#windows-hangs}

A number of Send Later users on Windows have reported that when they
have Send Later installed, Thunderbird periodically hangs for annoyingly
long periods of time during normal use of the application.

This is not actually a bug in Send Later --- there is nothing Send Later
does that should cause Thunderbird to hang, and some Thunderbird users
on Windows have reported this issue even without Send Later installed
--- but whatever the problem is, Send Later does seem to exacerbate it
for some people.

I heard two different potential explanations for this behavior, one
anecdotal (i.e., I have been unable to confirm it) and one definitive.

First, the definitive one: If you have "Allow Windows Search to search
messages" enabled in the General tab of your Thunderbird options, try
turning it off and see if that solves the problem. It appears that the
Windows Search indexer sometimes holds extended locks on files that
Thunderbird uses, and Thunderbird hangs while waiting for the files to
become available.

The other possibility is that your real-time antivirus scanner is doing
the same thing as the Windows Search indexer, i.e., holding a lock on a
file that Thunderbird uses while scanning it for viruses. You can check
if this is the case by temporarily disabling real-time protection and
seeing if the Thunderbird hangs go away. The "temporarily" is important
--- you don't want to permanently disable real-time protection, since
it's important to protect your computer from viruses!

If this does turn out to be the problem, then the people who develop and
support Thunderbird recommend excluding Thunderbird mailbox files from
antivirus scanning, if your antivirus software has real-time protection
(i.e., scans files when they are created, opened, or executed), as most
modern antivirus software does. Their reasoning behind this
recommendation is that mailbox files are never executed directly, so
viruses lurking in mailbox files are not a threat. They only become a
threat when they are saved separately by Thunderbird when you ask it to
open or save an attachment. As long as your antivirus software scans
those saved attachments in real-time, it is not dangerous to disable
scanning of mailbox files. If you do decide to do this, then you need to
identify the location of your Thunderbird profile folder, and tell your
antivirus software to exclude the "ImapMail" and "Mail" subdirectories
of that folder from scanning. You may also wish to exclude
"global-messages-db.sqlite\*" in that folder.

Two notes about this:

1.  If your antivirus software does not have real-time protection, or if
    it has it but you have it turned off, then I personally do *not*
    recommend excluding Thunderbird mailbox files from your scheduled
    antivirus scans.
2.  The recommendation above for excluding Thunderbird mailbox files
    from scans comes from the Thunderbird team, not from me. See [their
    wiki](https://wiki.mozilla.org/Thunderbird:Testing:Antivirus_Related_Performance_Issues)
    for more information. I am not endorsing this recommendation; I'm
    just passing it on.

Something to keep in mind is that the *size* of your Thunderbird files
is contributing to the problem. Larger files take longer for antivirus
products to scan. You may have large files in your Thunderbird profile
for several reasons, including: you have folders containing many
messages that you have configured to store local copies; you have many
messages across your entire account and you have the global search
feature enabled, since that means the global search index file will
itself be very large; you have folders that haven't been compacted in a
very long time so they have a lot of wasted space in them their local
storage files; you have an old Thunderbird profile which as a result has
index files that have a lot of wasted space in them. Given these
possibilities, here are some ideas that might help reduce the size of
the files in your profile and thereby reduce the duration of hangs:

-   don't store local copies of messages in folders whose messages you
    don't access that often and don't need to be able to full-text
    search;
-   split up very large folders into multiple folders containing fewer
    messages (as I rule, I personally try not to let folders grow above
    200MB; I find the [ShowFolderSize
    extension](https://freeshell.de/~kaosmos/index-en.html#foldersize)
    particularly useful for this);
-   disable the global search index if you don't use it;
-   limit which folders are included in your global search results;
-   [rebuild your global search
    index](https://support.mozilla.org/en-US/kb/rebuilding-global-database)
    periodically (follow the instructions in that link for locating the
    search index file, and check how large it is before and after you
    rebuild it, to see if rebuilding it actually reduces its size
    significantly and therefore makes this work continuing to do in the
    future);
-   compact all your folders (File \| Compact Folders); or
-   worst-case scenario, [rebuild your Thunderbird
    profile](https://support.mozilla.org/en-US/kb/using-multiple-profiles)
    to see if that helps.

Another option, which we list separately from the bulleted list above
because it is still in the experimental phase (at least as of when this
paragraph was written in September 2016), is to [switch to Maildir
storage](https://wiki.mozilla.org/Thunderbird/Maildir), which stores
each incoming messages in a separate file. Be careful about this,
however, because although it mostly works, as I just noted it isn't yet
fully supported.

If you encounter this issue and come up with a solution that works and
is different from the solutions outlined above, please [let us
know](../cdn-cgi/l/email-protection#66150308024b0a071203144b1513161609141226031e1203080203024b120e130802031448091401591513040c0305125b320e1308020314040f14024354560e07080115)!

### [Errors you might encounter](index.html#toc){#errors}

#### [Missing drafts folder](index.html#toc){#missing-drafts-folder}

If Thunderbird warns you repeatedly when Send Later is installed that
you are missing a Drafts folder, you need to go through your accounts
and make sure that the Drafts folder required by Thunderbird exists for
all of them. Here's the most reliable way to do that:

1.  Open a new message window.
2.  Type something random (doesn't matter what) in the To and Subject
    fields of the message to ensure that it is a "valid" draft.
3.  Click the "Save" button to save the draft.
4.  If you have multiple accounts, then change the "From" field of the
    draft one by one to each of the other accounts and click "Save" for
    each of them.
5.  When are done, close the window and delete the draft from the Drafts
    folder of the last account into which you saved it.

#### ["Error sending unsent messages"](index.html#toc){#outbox-copy-failure}

If you're reading this section, it's probably because you got a pop-up
alert that said this (or the equivalent in another language):

Send Later: Error copying scheduled message to Outbox for delivery (code
%x). Send Later has been disabled! See
https://blog.kamens.us/send-later-3/\#outbox-copy-failure.

This means that Send Later encountered an error when attempting to copy
a scheduled message from your Drafts folder to your Outbox for delivery.
Because of this error, it's possible that things are in an inconsistent
state, such that the message in question is in your Outbox *and* your
Drafts folder at the same time. If this is the case, then there is a
risk that Send Later will keep trying to send it over and over again
every minute, and as a result many copies of the message could end up
being sent. To prevent this from happening, Send Later disables itself
temporarily. You should:

1.  Check your Outbox (under Local Folders) to see if there is a
    scheduled message stuck there waiting to be sent. If so, and the
    message looks complete, run run File \> Send Unsent Messages to send
    it. If the message looks incomplete, delete it.
2.  If there was no message in your Outbox, or if it was incomplete and
    you deleted it, then you're probably fine. Restart Thunderbird to
    turn Send Later back on.
3.  Otherwise, check your Drafts folder to see if there's another copy
    there of the message that you just sent from your Outbox, and if so,
    delete it from Drafts (unless it's a recurring message, in which
    case you should open and reschedule it for the next time you want it
    to be sent). After doing this, restart Thunderbird to turn Send
    Later back on.
4.  If the problem persists, follow [these
    instructions](index.html#corrupt-outbox) for repairing a corrupt
    Outbox.
5.  If the problem persists after that, [contact
    us](../cdn-cgi/l/email-protection#87f4e2e9e3aaebe6f3e2f5aaf4f2f7f7e8f5f3c7e2fff3e2e9e3e2e3aaf3eff2e9e3e2f5a9e8f5e0)
    and we'll try to help you figure out what's wrong and how to fix it.

#### ["Error copying recurring message"](index.html#toc){#drafts-copy-failure}

If you're reading this section, it's probably because you got a pop-up
alert that said this (or the equivalent in another language):

Send Later: Error copying recurring message into Drafts folder (code
%x). Send Later has been disabled! See
https://blog.kamens.us/send-later-3/\#drafts-copy-failure.

This means that Send Later sent a recurring message and then tried to
save a new copy of it in your Drafts folder with the next scheduled date
for it to be sent, but an error occurred while saving the new draft.
It's possible that the error is specious and the draft was saved
successfully, and it's possible that the draft was lost because of the
error. There's no way for the add-on to tell, so it disables itself just
to be save. You should:

1.  Check your Sent Items folder to find out which scheduled message was
    just sent.
2.  Check your Drafts folder to check if the message is there with the
    correct next scheduled delivery date. If so, you're fine, and you
    can restart Thunderbird to turn Send Later back on.
3.  If the message was lost from your Drafts folder, then copy it from
    your Sent Items folder into your Drafts folder, double-click on it
    to edit the draft, and then reschedule it for the next time you want
    it to be delivered with the correct recurrence. Then restart
    Thunderbird to turn Send Later back on.
4.  If the problem happens again, [contact
    us](../cdn-cgi/l/email-protection#1f6c7a717b32737e6b7a6d326c6a6f6f706d6b5f7a676b7a717b7a7b326b776a717b7a6d31706d78)
    and we'll try to help you figure out what's wrong and how to fix it.

#### [Corrupt drafts folder](index.html#toc){#corrupt-drafts-error}

If you're reading this section, it's probably because you got a pop-up
alert that said something like this (or the equivalent in another
language):

Send Later: Folder *URL-of-Drafts-folder* may be corrupt. Please open
its properties and repair it. See
https://blog.kamens.us/send-later-3/\#corrupt-drafts-error/.

The root cause of this issue is actually an intermittent Thunderbird bug
which sometimes causes folders to become corrupted; it is *not* due to a
bug in Send Later, but the add-on is warning you about it so you can fix
the underlying issue and keep the add-on working properly for you. If
you are able to determine from the error message which Drafts folder is
corrupt, and you can see that folder in the Thunderbird folder list,
then do just what the error pop-up says: right-click on the folder,
select "Properties", and click on the "Repair" button. If that doesn't
fix the problem, or if it isn't obvious which folder is causing the
problem, then do the following:

1.  Open a compose window.
2.  Add an email address and some text to the draft, just so that it's
    not totally empty.
3.  Iterate through all of the identities, i.e., the email address /
    account combinations you are able to select in the drop-down next to
    "From:".
4.  For each identity, click "Save" to save the draft in the drafts
    folder for that identity. This will force Thunderbird to create the
    Drafts folder if it doesn't already exist.
5.  When you're done, close the compose window and delete the draft from
    the last Drafts folder. Thunderbird should have already been smart
    enough to remove it from the others as you iterated through them.
6.  When all that is done, repair all of the drafts folders as described
    [below](index.html#drafts-cleanup).

If this doesn't fix the problem for you, then [email
us](../cdn-cgi/l/email-protection#bfccdad1db92d3decbdacd92cccacfcfd0cdcbffdac7cbdad1dbdadb92cbd7cad1dbdacd91d0cdd880cccaddd5dadccb82fcd0cdcdcacfcb9a8d8ffbcdded9cbcc9a8d8ff9d0d3dbdacd)
and we'll try to help.

[Advanced usage](index.html#toc){#advanced}
-------------------------------------------

### [Hot keys](index.html#toc){#hotkeys}

You can hit Ctrl-1, Ctrl-2, or Ctrl-3 in the pop-up to activate the
first, second or third preset key, respectively. You can hit the "Esc"
key in the pop-up to cancel and go back to editing the message. You can
hit Ctrl-Enter in the pop-up to send the message at the specified time,
i.e., hitting Ctrl-Enter is equivalent to clicking the "Send Later at
specified time" button. You can hit Alt-N in the pop-up (or the
equivalent in other languages) to send the message right now, i.e., it
is equivalent to clicking the "Send Now" button.

In the composition window itself (i.e., not in the Send Later pop-up),
you can hit Ctrl-Alt-1, Ctrl-Alt-2, or Ctrl-Alt-3 to activate the
corresponding preset key.

### [Recurring messages](index.html#toc){#recurring}

You can schedule a message to be sent repeatedly by selecting
"minutely", "daily", "weekly", "monthly" or "yearly" in the Send Later
pop-up. Immediately after Send Later delivers the message, it calculates
a new delivery time for it based on the frequency you specified and
saves a new draft back into your Drafts folder with the new delivery
time. This will continue for as long as you leave the message in your
Drafts folder with recurrence enabled. To stop the message from being
delivered anymore, remove it from your Drafts folder, or edit the draft
and save it without scheduling.

When you select one of the recurrence options, the Send Later dialog
changes slightly to look like this:

![](https://i2.wp.com/blog.kamens.us/wp-content/uploads/2010/07/Send-this-email-later_007.png?resize=579%2C475&ssl=1){.size-full
.wp-image-4612 .aligncenter .jetpack-lazy-image width="579" height="475"
srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"}![](https://i2.wp.com/blog.kamens.us/wp-content/uploads/2010/07/Send-this-email-later_007.png?resize=579%2C475&ssl=1){.size-full
.wp-image-4612 .aligncenter width="579" height="475"
sizes="(max-width: 579px) 100vw, 579px"
srcset="https://i2.wp.com/blog.kamens.us/wp-content/uploads/2010/07/Send-this-email-later_007.png?w=579&ssl=1 579w, https://i2.wp.com/blog.kamens.us/wp-content/uploads/2010/07/Send-this-email-later_007.png?resize=300%2C246&ssl=1 300w"}

The new controls that appear in the dialog, shown circled in red above,
are as follows:

-   Check the "Every" checkbox to specify a multiplier other than 1, the
    default, to indicate how many time periods should be skipped between
    deliveries. For example, every 2 days, every 4 weeks, etc.
-   When you are using "monthly" recurrence only, you can check the
    "week of the month" checkbox to be sent the same weekday of the week
    of every month, e.g., "4th Tuesday of the month." To do this, first
    enter the first scheduled date/time in the text box, then select
    "monthly", then check the box next to "4th Tuesday of the month" (or
    whatever --- the text is updated automatically based on the first
    scheduled date/time).
-   If you check "Cancel recurrence upon reply", then Send Later watches
    for incoming messages that are replies to recurring messages you've
    scheduled, and if a reply is received, then Send Later automatically
    deletes the recurring message from your Drafts folder.

Here are some things to keep in mind about recurring messages:

-   You can't use the preset buttons to schedule recurring messages,
    i.e., you have to explicitly specify the first delivery time for the
    message in the controls at the top of the pop-up window. To make
    this clear, when you select recurrence in the pop-up, the preset
    buttons are automatically disabled.
-   You can't use the toolbar to schedule recurring messages. Also, if
    you edit a draft that was previously scheduled with recurrence, the
    toolbar buttons are disabled and you need to use the pop-up to
    reschedule it.
-   If you schedule a monthly message for the 29th, 30th or 31st of the
    month, then there will be months in which it will actually be sent
    on the 1st, 2nd or 3rd of the *next* month. For example, if you
    schedule a message for the 30th, then on February in a leap year it
    will be sent on March 1 and again on March 30, and on February in a
    non-leap year it will be sent on March 2 and again on March 30. The
    day of the month on which you originally scheduled it will be
    preserved, so it'll always be sent on that day in months which
    actually have it.
-   Similarly, if you schedule a yearly message on February 29, then
    it'll be delivered on March 1 in non-leap years.
-   If several scheduled send times for a message pass without
    Thunderbird being running, then the next time you run Thunderbird,
    it'll only send the messages once for that interval. For example, if
    you have a daily message scheduled, and you leave Thunderbird shut
    down for a week, then when you start it up, it'll only send one copy
    of that message instead of seven, and then reschedule it for
    delivery again tomorrow.

#### Time/date restrictions on recurring messages

When you schedule a recurring message, you can optionally enable
restrictions on the time of day and day of week when the message is
delivered. By default, these restrictions are enforced when each
recurring instance of the message is scheduled but *not* when it is
delivered, so if a message is delivered late because Thunderbird wasn't
running or your computer was asleep at the messages scheduled time, then
the message will be sent immediately when Thunderbird wakes up even if
the current time falls outside the time or weekday restrictions. If you
would like these restrictions to be enforced at delivery time as well,
[there's a preference for that](index.html#prefs).

### [Mail Merge add-on](index.html#toc){#mailmerge}

The [Mail Merge
add-on](https://addons.thunderbird.net/thunderbird/addon/mail-merge/)
supports Send Later starting with its version 3.4.0. The following
documentation for using Send Later with Mail Merge is courtesy of Mail
Merge's author, Alexander Bergmann. Thanks very much to Alexander for
adding this feature, which has been requested by many users, to his
add-on! Mail Merge has a "Date" field in the Mail Merge Dialog as part
of the "Mail" section, which is visible if the user selects "Save As
Draft" as "Deliver Mode" and Send Later is installed and activated. If
you put a valid date in the "Date" field, then Mail Merge will tell Send
Later to deliver the message at the specified date, just as if you
scheduled it with Send Later directly. The "Date" field also supports
variables! So it is possible to use a column "Date" (or "Time" or
whatever you like to name it) with different dates for each recipient in
the CSV. (Or if you want to use the Address Book, you probably will want
to use Custom1 to Custom4 for this purpose.) In the "Date" field of the
Mail Merge Dialog, you usually want to use something like this:

{{Date}} {{Time}} (There are probably other use cases with different
variables as well.)

### [Owl for Exchange add-on](index.html#toc){#owl}

The [Owl for
Exchange](https://addons.thunderbird.net/thunderbird/addon/owl-for-exchange/)
add-on allows Thunderbird to send and receive email through a Microsoft
Exchange Server account. Send Later can be made to work with Owl for
Exchange, but only if you configure an SMTP server for outbound
messages. Please read on for an explanation and additional details.

When you configure a "normal" (i.e., not Exchange) internet email
account in Thunderbird you specify two servers for the account: the
inbound server, an IMAP or POP3 server, where your email should be
fetched from, and the outbound server, an SMTP server, through which the
messages you compose are delivered.

Microsoft Exchange does support IMAP and SMTP, so if the administrator
or your Exchange server has enabled them, you could configure
Thunderbird to treat your Exchange server as a normal internet email
account and not use Owl. However, you may need to use if your
administrator has not enabled IMAP and SMTP, or you want to take
advantage of additional Owl features such as its Exchange address book
integration.

The code for the Thunderbird message compose window knows how to send
messages via Owl, so when you compose a message interactively and click
the Send button it is sent successfully. However, the code that delivers
message via the Thunderbird Outbox code does *not* know how to send
messages via Owl, so when an Owl message is put into your Outbox and
then Thunderbird tries to deliver it, it doesn't work. Unfortunately,
Send Later uses the Outbox to deliver messages.

However, there is a workaround. SMTP servers can be configured in
Thunderbird independent of email accounts, so if you have access to an
SMTP server --- either because your Exchange administrator has enabled
SMTP on the server, or because there is some other SMTP server you use
--- then Thunderbird can use that SMTP server to deliver Owl messages,
and all is well. Well, sort of. There are some caveats you need to be
aware of.

**IMPORTANT:** Because email messages sent interactively through Owl go
directly through Exchange while messages sent through Send Later go
through SMTP, the headers of the two messages will be different an an
astute observer will be able to figure out through deductive reasoning
and a careful examination of the headers that the message was sent by
Send Later, i.e., that it was not written at the time it was sent.
Depending on why you are using Send Later to delay messages, this may or
may not be something you care about.

If you have multiple email accounts configured in Thunderbird, some of
which are Owl accounts and some of which are IMAP/SMTP accounts, and you
don't do anything special to configure your Owl account for SMTP, then
when you send a message via Send Later Thunderbird will deliver it
through your default SMTP server, which is usually the first SMTP server
that was added to your Thunderbird profile. For example:

-   Create a new Thunderbird profile.
-   Add account A, an Owl account, to the profile.
-   Add account B, an IMAP/SMTP account.
-   Add account C, an IMAP/SMTP account.
-   Schedule a message from your Owl account via Send Later.
-   At the scheduled delivery time, the message will be sent via the
    SMTP server for account B.

The SMTP server may not allow the message to be sent through it if the
sender address doesn't match the domain the SMTP server is intended to
be used for. In that case the SMTP server will reject the message and
the send will fail. Obviously, for Owl and Send Later to work you need
to use an SMTP server that will allow you to send messages from your Owl
email address through it.

To add an SMTP server to your Thunderbird profile independent of adding
a full email account:

1.  Open Account Settings.
2.  Click on "Outgoing Server (SMTP)" on the left.
3.  Click "Add".
4.  Fill out the server details and click "OK".

If this is the only SMTP server in your profile, it will become the
default and will be used for Owl messages sent via Send Later. The first
time a message is sent that way you will be prompted for the server
password, and you should tell Thunderbird to save it if you want
Thunderbird to be able to send scheduled messages in the future without
prompting you for a password.

To change which SMTP server your Owl account uses for Send Later
messages:

1.  Open Account Settings.
2.  Click on "Manage Identities..."
3.  Select the identity for your Owl account and click "Edit..."
4.  Near the bottom of the window where it says "Outgoing Server
    (SMTP)", click on the pop-up menu and select the SMTP server you
    want to use.
5.  Click "OK".

### [Dynamic functions for complex scheduling rules](index.html#toc){#dynamic}

The scheduling functionality built into Send Later is quite flexible,
but sometimes you may want to implement more complex scheduling rules.

For example, the most common request I've received is for Send Later to
have a button which tells it, "Send this message at the start of the
next work day," so that people can do work during off hours without
their clients / customers / colleagues knowing that they're doing so.

To satisfy this need, Send Later allows you to write your own code ---
or import code written by others --- that implements arbitrarily complex
scheduling rules. These scheduling rules are called dynamic functions,
and you manage them in the dynamic function editor, which you can open
either from the "Advanced" tab of the Send Later preferences window, or
from the context menu that pops up when you click on "Send Later" in the
status bar of the main Thunderbird window.

The first time you open the editor, it will create and display a sample
scheduling function called "ReadMeFirst" which has a big comment in it
explaining more about what your code needs to do. It will also create
two other sample functions, "BusinessHours" and "DaysInARow", which you
can play with to learn about how dynamic functions work.

In fact, the "BusinessHours" function is an implementation of the "Send
this message at the start of the next work day" logic I've been asked
for so many times!

Don't worry... If you accidentally delete or mess up one of these files,
you can restore it by downloading and saving it from here, importing the
downloaded file into the editor, and
saving: [ReadMeFirst](../wp-content/uploads/2010/07/ReadMeFirst.slj), [BusinessHours](../wp-content/uploads/2010/07/BusinessHours.slj), [DaysInARow](../wp-content/uploads/2010/07/DaysInARow.slj).

There are two ways to use a dynamic function once it's ready to go.

First, you can pick the function you want to use from the "function"
pop-up menu in the Send Later dialog "[(1)]{style="color: #ff0000;"}" in
the picture below). As you hover over the function names in the menu,
the help text for each function is displayed to assist you in picking
the right function. Furthermore, when you select a specific function, a
help icon [(2)]{style="color: #ff0000;"} appears next to the menu with
the help text for the function you selected bound to it for easy
reference.

You can apply time-of-day and day-of-week restrictions to functions in
the dialog [(3)]{style="color: #ff0000;"}. Furthermore, some functions
(including "BusinessHours") accept arguments to customize their
behavior, and you can specify those arguments in the text field provided
[(4)]{style="color: #ff0000;"}, which is hidden until you select the
"function" option.

To see what the function's calculations will yield before actually
sending the message, click the "Calculate" button
[(5)]{style="color: #ff0000;"}, and the function, restrictions, and
arguments you specified are executed and the result appears in the "Send
at" box. *You don't ****need*** *to push the "Calculate" button before
sending your message, *you can just click the big "Send according to
function" button [(6)]{style="color: #ff0000;"} and the right thing will
happen. In fact, Send Later *does the calculations again* when you click
the big button, even if you previously clicked "Calculate."

As noted above, if you need to use the same settings repeatedly, you can
select "Save these values as the defaults"
[(7)]{style="color: #ff0000;"} so you don't have to enter them over and
over; this works for scheduling with functions just like it does for
entering a single send time explicitly or using one of the recurrence
options.

Of course, a picture is worth a thousand words:

![Send this email
later\_010](https://i2.wp.com/blog.kamens.us/wp-content/uploads/2010/07/Send-this-email-later_010.jpg?resize=300%2C229&ssl=1){.aligncenter
.size-medium .wp-image-4384 .jetpack-lazy-image width="300" height="229"
srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"}![Send
this email
later\_010](https://i2.wp.com/blog.kamens.us/wp-content/uploads/2010/07/Send-this-email-later_010.jpg?resize=300%2C229&ssl=1){.aligncenter
.size-medium .wp-image-4384 width="300" height="229"}

The other way you can use dynamic functions is by binding them to one or
more of the shortcut buttons. In the Preferences tab for one of the
shortcut buttons, enter "ufunc:*name*" where *name* is the name of the
function you want to bind to that shortcut. Don't forget to change the
button label too!

You can even specify arguments to be passed to the function. For example
if you specify "ufunc:BusinessHours(\[0, 1, 2, 3, 4\], \[9, 0\], \[17,
0\])", then that shortcut button will schedule messages to be sent
between 9:00am and 5:00pm Sunday through Thursday (see the help text for
the BusinessHours function for an explanation of how to interpret those
arguments).

You may not need to reinvent the wheel. Take a look at the [library of
dynamic
functions](https://github.com/jikamens/send-later/tree/master/contrib/scheduling-functions)
contributed by other Send Later users. Also, consider sharing the
functions you create! That page has instructions there for adding to the
library.

#### [Dynamic recurrence](index.html#toc){#dynamic-recurrence}

In addition to supporting arbitrary logic for scheduling a message once,
dynamic functions can also support arbitrary logic for sending messages
multiple times, i.e., for recurring messages. This is very powerful
functionality, but it's also a bit complicated, so bear with me while I
walk you through it.

A dynamic function implements recurrence by putting a *recurrence
specification string *in the "nextspec" variable before the function
returns. The recurrence specification does one of two things: either it
specifies a recurrence type that Send Later knows how to handle
internally, after which the dynamic function is "out of the loop" for
subsequent deliveries of the message and doesn't get called again; or it
tells Send Later to continue calling it each time the message needs to
be rescheduled.

The internal recurrence types, which correspond to the options in the
Send Later dialog, are as follows:

-   **minutely --** Send the message every minute.
-   **daily** -- Send the message once per day.
-   **weekly** -- Send the message once per week.
-   **monthly *day-of-month*** -- Send the message on the specified day
    of every month.
-   **monthly *day-of-week* *week-of-month*** -- Send the message on the
    specified day (0 = Sunday -- 6 = Saturday) of the specified week of
    the month. For example, "monthly 1 3" means to send the message on
    the third Monday of every month.
-   **yearly *month day***-- Send the message on the specified day of
    every month (0 = January -- 11 = December). For example, "yearly 10
    5" means November 5 of every year.

In addition, after one of the primary recurrence specifications shown
above, the function can include any of the following modifiers in the
specification string:

-   " / *number*" (that's a space, then a slash, then another space,
    then a number --- the syntax is important!) to
    indicate every *number* minutes, e.g., "**minutely / 20**" means
    every 20 minutes;
-   " between *YYMM YYMM*" to indicate a time restriction; and
-   " on *d1 d2 ...*" to indicate a day-of-week restriction, where "*d1
    d2 ...*" is a list of space-separated day numbers, .with the
    numbering starting with 0 for Sunday.

If, on the other hand, your function wants Send Later to call it
repeatedly to do the scheduling, then it should set "nextspec" to
**"function " + specname**. This specification string can also use the
"between" and "on" modifiers shown above, but not the "/" modifier.

If your function takes arguments that control its behavior and/or keeps
state between invocations, then those need to be assigned as an array to
the "nextargs" variable before your function returns.

There are two ways for a recurring dynamic function to stop sending a
recurring message:

-   if the function knows that the message it was just asked to schedule
    is the last one, then it should simply not set "nextspec" to
    anything (i.e., leave it null), and Send Later will use the final
    send time it provided and then not schedule the message any further;
    or
-   if the function determines that the current invocation is too late
    to send the message any more, i.e., it wants to stop the
    message immediately rather than after the next time it is sent, then
    it should set "next" to -1 and not set "nextspec" to anything, and
    Send Later will stop the message immediately.

### [Suppressing scheduled message delivery](index.html#toc){#senddrafts}

If you set the preference "extensions.sendlater3.senddrafts" to false in
the advanced config editor (described
[above](index.html#config-editor)), then Send Later won't deliver
scheduled drafts when their time comes; it'll just leave them in your
Drafts folder as if their delivery time has not yet arrived. In case you
are wondering what use this might have... One clever Send Later user
decided to eliminate the requirement for Thunderbird to be running all
the time to deliver scheduled messages, by writing an independent
service to scan for and deliver scheduled messages from his IMAP Drafts
folder. Unfortunately, if he happened to be running Thunderbird when a
draft was scheduled to be sent, his Thunderbird and his service might
have tried to deliver the same draft at the same time, thus causing
unpredictable behavior and/or duplicate messages. He can avoid this
issue by setting the "senddrafts" preference to false.

### [Server-side Send Later](index.html#toc){#server-side}

*(This is very advanced usage. It can be complicated to set up, and
things could go embarrassingly wrong if you mess it up. Proceed at your
own risk.)*

If you want scheduled drafts to be sent even when your computer is shut
down or Thunderbird isn't running, and you have access to a server
somewhere on which you can keep Thunderbird running all the time, here's
how you can set things up to have scheduled messages sent via that
server.

1.  Use IMAP, not POP3, to access the email account in question.
    Otherwise, Thunderbird can't store your scheduled drafts on the mail
    server and the server-side Thunderbird won't be able to read and
    send them.
2.  Install Thunderbird on the server.
3.  If you can, set up the server to log you in automatically when it
    reboots, to start Thunderbird automatically when you log in, etc.
    I.e., do as much as you can to ensure that Thunderbird will stay
    running all the time.
4.  Configure your email account into Thunderbird on the
    server. **Important:** see [below](index.html#matching-accounts) for
    a very important note about configuring accounts and identities on
    different computers.
5.  On the client, set extensions.sendlater3.senddrafts to false as
    described [above](index.html#senddrafts).
6.  On the client, use the advanced config editor to find the value of
    the preference extensions.sendlater3.instance.uuid. Copy the value
    into a text file or save it in some other way.
7.  On the server, use the advanced config editor to set
    extensions.sendlater3.instance.uuid to the value you copied from the
    client.

After you follow these steps, the client will stop sending out scheduled
messages, and the server will start sending them out instead, since
you've tricked it into thinking it is the same "instance" of Send Later
as the client.

<div>

If you use Send Later on multiple clients, e.g., on a desktop and a
laptop, then you can make the value of
extensions.sendlater3.instance.uuid the same on all of them, as long as
extensions.sendlater3.senddrafts is only set to true in one Thunderbird,
i.e., the one that you keep running all the time.

</div>

Remember that this only works if Thunderbird stays running on the
server. Don't forget to keep an eye on it and restart it if it shuts
down. If you want to be especially careful, you can schedule a
[recurring message](index.html#recurring) to yourself as a simple
monitor --- if you don't receive the recurring message at the scheduled
time, you know that Thunderbird on the server has stopped running and
you can log in and restart it.

#### []{#matching-accounts}Accounts and identities on different computers

When you compose a draft message, Thunderbird inserts special, hidden
settings into the message indicating the account and identity used to
compose the draft. Although you don't see them in the user interface,
Thunderbird assigns numerical identifiers to accounts and identities;
these numerical identifiers are what gets put into the hidden settings
in the draft message. You can see these identifiers by looking in your
prefs.js file (Help \| Troubleshooting Information, click on the button
to open your profile directory, and load the file "prefs.js" in that
directory into a text editor) for lines containing "mail.identity.id"
and "mail.account.account".

When you only use Thunderbird on one machine, you never have to worry
about what those hidden identifiers are. However, when you try to share
accounts between multiple Thunderbird installations, and you have more
than one account and/or identity configured, then you will run into
problems if the identifiers for the accounts and identifiers are
different. In particular, if you configure things as described above to
schedule messages from one computer and send them from another, and the
account or identity numbers don't match on the two computers, *then the
scheduled messages will be sent from the wrong identity and/or account.*

There are several ways to avoid this problem:

1.  Back up your Thunderbird profile from one computer and restore it on
    the other, thus guaranteeing that the account and identity
    configuration on the two computers will match. This is harder than
    it sounds because there are file paths hard-coded in various
    locations in your profile, mostly in prefs.js, that will ned to be
    updated if your profile is in a different directory on the second
    computer. A tool like [MozBackup](http://mozbackup.jasnapaka.com/)
    may help with this, but it only runs on Windows and it may not fix
    everything it needs to when the profile is restored.
2.  Create a new Thunderbird profile on the second computer, then quit
    out of Thunderbird there without configuring any accounts, load the
    new profile's prefs.js into a text editor, and copy all the
    mail.account\*, mail.identity.\*, mail.server.\*, and mail.smtp\*,
    lines from your old prefs.js file to the new one, omitting any lines
    that have hard-coded file paths in them. Then restart Thunderbird on
    the new computer and log into all the accounts and send test
    messages from all your identities so that Thunderbird's password
    manager can save all the necessary passwords.
3.  Edit prefs.js by hand (with Thunderbird not running!) on one of the
    computers to swap around the numbers for all the accounts,
    identities, servers, and SMTP servers so they match the numbers on
    the other computers. *Editing prefs.js is dangerous, and this is not
    for the faint of heart, and make sure you save a backup copy you can
    restore if you screw things up!*

### [Making "Send" do "Send Later" only some of the time](index.html#toc){#dynamic_sendbutton}

You may be in a situation where some of the time, you want to make sure
to schedule every message you send, while other times, you want to send
messages right away. For example, you might catch up on work late at
night, but letting your clients know that might give them the incorrect
impression that you don't mind if they call you at god-awful hours :-).
With Send Later and userChromeJS, we can make that happen.

The userChromeJS add-on allows you to add arbitrary JavaScript code and
functions to your Thunderbird installation. Here's how you do that:

1.  Install the [userChromeJS add-on](http://userchromejs.mozdev.org/).
2.  Find the userChrome.js file created by userChromeJS. It will be in
    the "chrome" subfolder of your [Thunderbird profile
    folder](http://kb.mozillazine.org/Profile_folder_-_Thunderbird).
3.  Using your favorite text editor, add the code you want to
    userChrome.js, then exit from and restart Thunderbird.

Here's an example of code you can put in userChrome.js to solve the
problem above, i.e., you want the "Send" button to do "Send Later" after
hours:

``` {style="font-size: 125%;"}
// Set up a timer to call a function every five minutes to check
// whether we want the "Send" button to actually do "Send Later".

// This is the function that the timer will call.
var SendButtonPrefCallback = {
    notify: function(timer) {
    var now = new Date();
    // Sunday or Saturday
    var weekend = now.getDay() == 0 || now.getDay() == 6;
    // Before 9am
    var early = now.getHours() < 9;
    // After 5pm
    var late = now.getHours() > 4;
    // Put it all togther
    var do_popup = weekend || early || late;
    // Set the appropriate Send Later preference
    var prefService = Components
        .classes["@mozilla.org/preferences-service;1"]
        .getService(Components.interfaces.nsIPrefBranch);
    prefService.setBoolPref("extensions.sendlater3.sendbutton", do_popup);
    }
}

// This is the variable that the timer will be stored in.
var SendButtonPrefTimer = null;

// Now set up the timer.
if (! SendButtonPrefTimer) {
    SendButtonPrefTimer = Components.classes["@mozilla.org/timer;1"]
    .createInstance(Components.interfaces.nsITimer);
    SendButtonPrefTimer.initWithCallback(
    SendButtonPrefCallback,
    300000,
    Components.interfaces.nsITimer.TYPE_REPEATING_SLACK
    );
}

// Note: This timer's going to run in every open Thunderbird window,
// but there really isn't any harm in that, so it's easier to just let
// that happen then to try to figure out how to make it run in only
// one window.
```

### [Checking for scheduled messages more than once per minute](index.html#toc){#milliseconds}

If you need to control when messages are sent with smaller granularity
than one minute, you can tweak the Send Later configuration options to
specify more exactly how often to check for scheduled messages:

1.  Open the Config Editor (open the Preferences window, click
    "Advanced", click the "General" tab, and click the "Config
    Editor..." button.
2.  Enter "extensions.sendlater3.checktimepref" in the Search box.
3.  Double click on the first displayed preference and change it to the
    frequency you want Send Later to check with, times 1000. For
    example, if you want it to check every 15 seconds, change it
    to 15000.
4.  Double click on the second displayed preference, the
    "is\_milliseconds" preference, to change it from false to true.
5.  Restart Thunderbird.

Important notes:

-   Setting the delay between scans too low could cause the add-on to
    become confused. Fifteen seconds is probably pretty safe. Five
    seconds may even be safe, though it's pushing it. Less than five
    seconds is probably a bad idea.
-   Whatever check frequency you configure, a scheduled message could be
    sent up to that many seconds later than it was actually scheduled.
    For example, if you're checking every 15 seconds, messages could end
    up being sent up to 15 seconds after their scheduled send times.
-   Remember that once Send Later decides to put the message into your
    Outbox and tell Thunderbird to send it, the actual transmitting of
    the message takes a bit of time as well, especially if it's large.

[Troubleshooting](index.html#toc){#troubleshooting}
---------------------------------------------------

### [Messages don't send or send multiple times](index.html#toc){#outbox}

#### Are you using the add-on correctly?

If scheduled messages get moved into your Outbox (underneath Local
Folders) at the scheduled send time but don't get delivered from there,
then the first thing to do is confirm that you haven't *told* Send Later
not to deliver messages. Open Send Later's preferences (click "Send
Later" at the bottom of the main window and select "Send Later
preferences" from the menu) and make sure the box next to "Trigger
unsent message delivery from Outbox" is checked. It is checked by
default, so if it isn't, then you unchecked it for some reason, and you
should check it and click "OK" to save the change. Then, to cause past
messages that were previously put into the Outbox to be delivered,
select the "File \| Send Unsent Messages" menu command. If that's not
the problem, then read on.

Another common mistake when using the add-on is clicking on the "Put in
Outbox" button rather than the "Send by" button. As documented above,
the button that actually causes a message to be scheduled for later
delivery is this one:

[![](https://i2.wp.com/blog.kamens.us/wp-content/uploads/2020/01/send_button.png?resize=300%2C230&ssl=1){.aligncenter
.wp-image-5763 .size-medium .jetpack-lazy-image width="300" height="230"
srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"}![](https://i2.wp.com/blog.kamens.us/wp-content/uploads/2020/01/send_button.png?resize=300%2C230&ssl=1){.aligncenter
.wp-image-5763 .size-medium width="300" height="230"
sizes="(max-width: 300px) 100vw, 300px"
srcset="https://i2.wp.com/blog.kamens.us/wp-content/uploads/2020/01/send_button.png?resize=300%2C230&ssl=1 300w, https://i2.wp.com/blog.kamens.us/wp-content/uploads/2020/01/send_button.png?resize=660%2C505&ssl=1 660w, https://i2.wp.com/blog.kamens.us/wp-content/uploads/2020/01/send_button.png?w=664&ssl=1 664w"}](https://i2.wp.com/blog.kamens.us/wp-content/uploads/2020/01/send_button.png?ssl=1)

If you instead click the 'Put in Outbox" button below it, then you're
not scheduling the message for later delivery, you're putting it
directly into the Outbox to be sent the next time you do "File \| Send
Unsent Messages" or the next time Send Later delivers a separate
scheduled message, since every time Send Later delivers a message, *all*
pending messages in the Outbox are delivered.

Make sure you are using the add-on properly and its preferences are set
correctly before proceeding with the following troubleshooting steps.

If scheduled messages are going into your Drafts folder but not moving
into your Outbox at the scheduled time, then check if your mail server
is discarding the Send Later headers, as described
[above](index.html#bad-mail-servers). If not, then proceed with the
following troubleshooting steps.

#### Messages not being sent: isolating the problem

If Send Later fails to deliver messages at the scheduled time, or if
scheduled messages are delivered repeatedly, the two most likely causes
are corrupt Drafts folders and a corrupted Outbox folder. A corrupted
Outbox may even cause Thunderbird to crash when it tries to deliver
scheduled messages. Note that corrupted folders are *not* Send Later's
fault... There are bugs in other parts of Thunderbird, which can cause
folders to become corrupted.

If your messages aren't being delivered properly, then please perform
the following two diagnostic tests to isolate exactly where the problem
lies:

##### Test \#1

1.  Disable the Send Later add-on.
2.  Restart Thunderbird.
3.  Compose a new message with a valid recipient, Subject, and message
    body.
4.  Select the "Send Later" command on the "File" menu of the
    composition window.

If you get an error at this point, then *Send Later is not the problem.*
Rather, one of the following is wrong:

-   corrupt Outbox folder --- see [below](index.html#corrupt-outbox) for
    how to repair it;
-   full Windows temporary directory --- see [below](index.html#wintemp)
    for how to repair it;
-   your hard disk is full; or
-   something is broken in your Thunderbird profile --- unfortunately
    the only way I've been able to find to resolve this is to [migrate
    to a new Thunderbird
    profile](https://support.mozilla.org/en-US/kb/using-multiple-profiles) and
    get rid of the old one.

##### Test \#2

1.  Start with a successful Test \#1, above.
2.  Check the "Outbox" folder underneath "Local Folders" and confirm
    that the message you composed is there.
3.  Select the "Send Unsent Messages" command under the "File" menu in
    the main Thunderbird window and confirm that the message in your
    Outbox folder is sent successfully.

If the "Send Unsent Messages" command is grayed out in the menu, i.e.,
you cannot execute it even though there is a message in the Outbox, or
if the message does not send successfully when you execute this command,
,then *Send Later is not the problem.* Rather, one of the problems and
solutions listed above in "Test \#1" applies.

##### Test \#3

1.  Start with successful Tests \#1 and \#2 above.
2.  Re-enable the Send Later add-on and restart Thunderbird.
3.  Compose a new message with a valid recipient, Subject, and message
    body.
4.  Schedule the message with Send Later to be sent five minutes in the
    future.
5.  Confirm that the message is saved to your Drafts folder.

If, instead of the message being saved into the Drafts folder, you get
an error, then try repairing your Drafts folder and then repeat this
test. If that doesn't fix the problem, then the error you're getting
probably isn't a Send Later issue, it's a generic Thunderbird issue, but
if you can't figure out what the problem is, feel free to [send us the
error message you're
getting](../cdn-cgi/l/email-protection#4f3c2a212b62232e3b2a3d623c3a3f3f203d3b0f2a373b2a212b2a2b623b273a212b2a3d61203d28)
and we'll try to help.

##### Test \#4

1.  Start with a successful Test \#3, above.
2.  Enable the "Send Later" column in the message list in your Drafts
    folder, if it isn't already displayed.
3.  Make sure that the Draft you scheduled shows the correct scheduled
    send time in the Send Later column. If it doesn't, then you are
    probably running into [this issue](index.html#bad-mail-servers), and
    you need to use the workaround documented there --- configure
    Thunderbird to save Drafts locally rather than on the mail server
    --- to be able to use Send Later.

##### Test \#5

1.  Start with a successful Test \#4, above.
2.  Wait for the scheduled send time of the message and confirm that it
    is sent correctly by Send Later.
3.  If it isn't, and all the other tests above were successful, then
    [contact us for further
    assistance](../cdn-cgi/l/email-protection#1360767d773e7f726776613e606663637c616753766b67767d7776773e677b667d7776613d7c6174).

#### []{#corrupt-outbox}Corrupt Outbox folder

If your messages aren't being delivered or are being delivered multiple
times, then the first thing you should try is clearing your Outbox.
Here's how to do that:

1.  Make sure the "Outbox" folder under "Local Folders" doesn't have any
    messages in it (because we're about to delete the folder). If it
    does, and you want to save them, move them into your Drafts folder
    to be resent later.
2.  Right-click (on Mac, perhaps ctrl-click) on "Local Folders" and
    select "Settings...".
3.  Note the directory in which your local folders are stored.
4.  Browse to that directory.
5.  Exit completely from Thunderbird.
6.  Delete Outbox and Outbox.msf in the Local Folders directory if they
    exist. Also delete "Unsent Messages" and "Unsent Messages.msf" if
    they exist. If neither of them exists, then you'll have to use the
    advanced configuration editor (described
    [above](index.html#config-editor)) in Thunderbird and look at the
    setting mail.default\_sendlater\_uri to find out the name of your
    Outbox folder on disk and then delete it (after exiting again from
    Thunderbird).
7.  Try scheduling a message with Send Later again and see if the
    problem is gone.

#### []{#drafts-cleanup}Corrupt Drafts folders

A good sign that one of your Drafts folders is corrupted is if Send
Later isn't noticing that there are scheduled messages, i.e., the
message at the bottom of your Thunderbird window says "IDLE" instead of
"PEND 1", "PEND 2", etc. However, if messages aren't getting sent at the
scheduled time, then you may still have a corrupted Drafts folder even
if the message says "PEND". You need to repair them all:

1.  Locate the Drafts folders for all of your accounts. The easiest way
    to do that, if you have multiple accounts, is to switch to the
    unified folder view (View \| Folders \| Unified) and expand
    "Drafts".
2.  Right click on each one and select "Properties...".
3.  Click the "Repair Folder" button in each Properties window, then
    click "OK".

**NOTE:** Repairing a folder resets its visible columns, column layout,
and sorting, so if you've customized the columns and/or sorting, you'll
have to put the customizations back after repairing the folders.

#### []{#wintemp}Full temporary directory on Windows

If your Windows temporary directory ends up with too many files in it,
which is partially Thunderbird's fault since it has a habit of creating
temporary files and not deleting them, then both Send Later and
Thunderbird may start malfunctioning. The two surefire signs of this
are, (a) Send Later is able to copy messages into your Outbox for
delivery, but once they're there, Thunderbird fails to deliver them, and
(b) when there are messages in your Outbox, the File \| Send Unsent
Messages command doesn't work, or is greyed out and can't even be
selected. If you this you may be running into this problem, you should
run the Windows Disk Cleanup utility and tell it to clean up temporary
files.

#### []{#gmail}Send errors with Gmail when Thunderbird is configured to save copies

Many users of Send Later report errors when the add-on attempts to send
scheduled messages through a Gmail account. These errors happen more
often, but not only, when Send Later attempts to deliver multiple
messages at the same time. This is usually caused by an error in the
Thunderbird configuration for the Gmail account. In particular, it is
not necessary to configure Thunderbird to save copies of sent messages
in Gmail's Sent Mail folder, since Gmail saves copies there
automatically (this is documented in [Google's configuration
instructions](https://support.google.com/mail/answer/78892) for
Thunderbird). When Thunderbird *is* incorrectly configured to save
copies, it can cause message delivery errors. When this occurs, the
delivery error happens after the message is sent to its recipients, when
the copy is being saved in Sent Mail. This could potentially cause the
recipients to receive multiple copies of the message, since if the user
then tells Thunderbird to try sending it again, it might re-attempt the
entire delivery, not just the saving in Sent Mail. Therefore, if you are
experiencing errors with Send Later through a Gmail account, check your
account settings to see if you have "Place a copy in" checked in the
"Copies & Folders" settings, and if so, turn it off.

### [Debug logging](index.html#toc){#debug}

If you ask us for help with a problem you are having with the add-on
that we can't reproduce ourselves, then we may ask you to enable debug
logging on the add-on, perform some task with debug logging enabled, and
then send us the resulting debug log. Here are the instructions for how
to do that.

1.  Click on "Send Later" at the bottom of the main Thunderbird window
    and select "Send Later Preferences", or select "Add-ons\> Send
    Later" from the main menu button, or select Go to "Tools \> Add-on
    Preferences \> Send Later" from the toolbar.
2.  Click on the "Advanced" tab.
3.  Change "Console log level" to "All" (or whatever other value I tell
    you to change it to).
4.  Click on "OK".
5.  In the main Thunderbird window, type Ctrl-Shift-J to open the error
    console.
6.  Click the little trash can icon in the upper corner to clear the
    window.
7.  Do whatever task I told you to do with debug logging enabled.
8.  Repeat steps 1-4 above, but this time change the setting to "Fatal"
    instead of "All".
9.  Right click on one of the messages in the error console window and
    select "Select All".
10. Copy and paste the selected messages into an email message to us.

#### Alternative instructions

If the instructions above don't work, we might ask you to do the
following instead.

1.  Open the Thunderbird Options (Windows) or Preferences (other
    platforms).
2.  Click on "Config Editor..." in the General preferences (if there's
    an "Advanced" section under "General", that's where it will be).
3.  Search for "browser.dom.window.dump.enabled".
4.  If it's set to false, then double-click on it to change it to true.
5.  Exit from Thunderbird.
6.  On Windows:
    1.  Open a command window.
    2.  Run "cd %ProgramFiles%\\Mozilla Thunderbird" (if that doesn't
        work, try "cd %ProgramFiles(x86)%\\Mozilla Thunderbird").
    3.  Run "thunderbird -console".
7.  On Linux:
    1.  Open a terminal window.
    2.  Run "thunderbird \>\| /tmp/thunderbird.log 2\>&1".
8.  On Mac OS:
    1.  Open a terminal window.
    2.  Run
        "/Applications/Thunderbird.app/Contents/MacOS/thunderbird-bin \>\|
        /tmp/thunderbird.log 2\>&1".
9.  Click on "Send Later" at the bottom of the main Thunderbird window
    and select "Send Later Preferences", or select "Add-ons\> Send
    Later" from the main menu button, or select Go to "Tools \> Add-on
    Preferences \> Send Later" from the toolbar.
10. Click on the "Advanced" tab.
11. Change "Dump log level" to "All" (or whatever other value we tell
    you to change it to).
12. Click on "OK".
13. Do whatever task we told you to do with debug logging enabled.
14. Repeat steps 9-12 above, but this time change the setting to "Fatal"
    instead of "All".
15. On Windows:
    1.  Find the console window that Thunderbird opened with all the
        debug logging in it.
    2.  Right-click on the title bar of the console window and do
        "Edit \> Select All".
    3.  Hit Enter to copy the selected text.
    4.  Paste the copied text into an [email message to
        us](../cdn-cgi/l/email-protection#7506101b1158191401100758060005051a070135100d01101b11101158011d001b1110075b1a0712).
16. On Linux or Mac OS:
    1.  Exit from Thunderbird.
    2.  Email us the file /tmp/thunderbird.log as an attachment or paste
        its contents into an [email message to
        us](../cdn-cgi/l/email-protection#8efdebe0eaa3e2effaebfca3fdfbfefee1fcfaceebf6faebe0eaebeaa3fae6fbe0eaebfca0e1fce9).

[Helping to improve the add-on](index.html#toc){#improve}
---------------------------------------------------------

### [Translations](index.html#toc){#translate}

**NOTE:** This information about translating is currently out-of-date
because we are not yet set up to manage translations for the new version
of Send Later for Thunderbird 78. It's left here for reference purposes,
but contrary to what's written below, you shouldn't "just jump right in"
to translating on Crowdin, until we've updated things.

If the add-on's messages display in a different language than the rest
of Thunderbird, then that means that it hasn't been translated for your
language. Translating the add-on is done through
[Crowdin](https://crowdin.com/) and is quite easy. Everything you need
to know is
[here](https://github.com/jikamens/send-later/blob/master/TRANSLATING.md). I
am happy to help you out if you encounter any problems with Crowdin or
have any questions, and my wonderful team of current translators are
available to help as well. If you are interested in translating the add
on into your language, feel free to either [email us about
it](../cdn-cgi/l/email-protection#b7c4d2d9d39adbd6c3d2c59ac4c2c7c7d8c5c3f7d2cfc3d2d9d3d2d39ac3dfc2d9d3d2c599d8c5d0)
or just jump right in on Crowdin. Thanks!

### [Hacking](index.html#toc){#hacking}

The complete source code for the add-on is [available on
Github](https://github.com/jikamens/send-later).

[Getting help](index.html#toc){#help}
-------------------------------------

### [The "Send Later users" mailing list](index.html#toc){#mailing-list}

The [Send Later users mailing
list](https://groups.google.com/group/send-later-users) is a great place
to ask questions about the add-on, chat with other users about how to
use it, or discuss future enhancements with the developer.

### [Contacting the developer](index.html#toc){#contact-me}

Please do not post bug reports or requests for support as comments below
(feature requests are fine, though!). If you need help using the add-on,
please [e-mail
us](../cdn-cgi/l/email-protection#85f6e0ebe1a8e9e4f1e0f7a8f6f0f5f5eaf7f1c5e0fdf1e0ebe1e0e1a8f1edf0ebe1e0f7abeaf7e2)
instead and we will respond as soon as we can (which is usually very
quickly). Thanks!

### [Remote support](index.html#toc){#remote-support}

In rare cases, when you are having a problem with Send Later that we
cannot reproduce, we may need to connect to your computer remotely to
see it in action. We may even need to ask you to let one of us "steer"
your keyboard and mouse briefly while troubleshooting. When this is
necessary, we use [TeamViewer](https://teamviewer.com/). [Click
here](https://www.teamviewer.com/en/download/) to download the
TeamViewer client which will give me access to your desktop, then [email
us](../cdn-cgi/l/email-protection#cdbea8a3a9e0a1acb9a8bfe0beb8bdbda2bfb98da8b5b9a8a3a9a8a9e0b9a5b8a3a9a8bfe3a2bfaa)
your TeamViewer ID and password (please **do not** email them to us
unless we've asked you for them!). Thanks to TeamViewer for providing
its software for free for non-commercial use!

### [Other resources](index.html#toc){#resources}

The kind folks at [TCH-Support](http://www.tch-support.com/) have
published a [video
tutorial](https://www.youtube.com/watch?v=XaWLWWFy9r8) in German of how
to use Send Later. They've also produced an [English
version](https://www.youtube.com/watch?v=5bhLO9GQIsA). Enjoy!

[Support Send Later!](index.html#toc){#donate}
----------------------------------------------

I have dedicated countless hours to developing and supporting Send
Later. I believe in free software, and the add-on will be completely
free for as long as I continue to maintain it, which will be, I hope,
for a good long time. Having said that, I am extremely grateful for the
donations made by users like you,and the amount of time I devote to
improving Send Later is strongly influenced by them. Please [click
here](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=jik%40kamens%2eus&lc=US&item_name=Send%20Later%20add%2don%20%28%245%2e00%20recommended%20donation%2c%20but%20give%20what%20you%27d%20like%21%29&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donat)
to donate via Paypal; if that link doesn't work, try [this
one](https://paypal.me/JonathanKamens); if that doesn't work either, you
can send a Paypal payment to
"[\[email protected\]](../cdn-cgi/l/email-protection){.__cf_email__}". A
donation of \$10 or more makes you eligible for listing, including a
link, banner or button if you'd like, on the [supporters
list](index.html#supporters)! If you don't like Paypal or can't use it
for some reason, there are other ways you can make a monetary
contribution to support Send Later:

-   You can Venmo me at "Jonathan-Kamens".
-   You can send Bitcoin to 16kWgAVVUSCz1j1oevBFhCGmZQsvi92fmy (if you
    do this, please email [[\[email protected\]]{.__cf_email__
    data-cfemail="69030002421a0c070d05081d0c1b5a290208040c071a471c1a"}](../cdn-cgi/l/email-protection#a0cac9cb8bd3c5cec4ccc1d4c5d293e0cbc1cdc5ced38ed5d3)
    if possible and let me know, since I don't check my Bitcoin wallet
    that often).

A non-monetary way you can help is by [writing a
review](https://addons.thunderbird.net/thunderbird/addon/send-later-3/reviews/add "Review Send Later").
Even if you've written a review before, please do it again! Here's why:
reviews are linked to specific versions of the add-on, so when we
release new versions and expire old ones, the reviews linked to them are
removed from the site. Also, if there is a specific feature you would
like us to add, and you're willing to fund its development, please
[email
us](../cdn-cgi/l/email-protection#86f5e3e8e2abeae7f2e3f4abf5f3f6f6e9f4f2c6e3fef2e3e8e2e3e2abf2eef3e8e2e3f4a8e9f4e1)
and we can discuss it. Of course, you should feel free to send us
feature requests at any time, even ones you do not wish to fund; We'll
put them into out queue and get to them as soon as we can.

[Check out my other add-ons](index.html#toc){#other-addons}
-----------------------------------------------------------

I've written or maintained several [other
add-ons](https://addons.thunderbird.net/thunderbird/user/jikamens/)
which you may find useful:

-   "[Folder Pane View
    Switcher](https://addons.thunderbird.net/thunderbird/addon/folder-pane-view-switcher/)"
    puts two little arrows above the folder tree which you can click to
    scroll back and forth through the available folder tree views.
    Furthermore, it causes the folder tree to switch to the "All
    Folders" view automatically if you are in the middle of dragging and
    dropping messages and you hover your mouse over the title bar at the
    top of the folder tree, so that you can drop the messages into a
    folder that isn't displayed in your current view.
-   "[Reply to Multiple
    Messages](https://addons.thunderbird.net/thunderbird/addon/reply-to-multiple-messages/)"
    lets you select multiple messages in the message list and compose a
    single reply to the senders of all of the selected messages.
-   "[Enhanced Priority
    Display](https://addons.thunderbird.net/thunderbird/addon/enhanced-priority-display/)"
    makes message priorities display better by replacing the words in
    the "Priority" column with icons, highlighting the rows in the
    message list for high-priority messages, and fading the rows in the
    message list for low-priority messages.
-   "[IMAP Received
    Date](https://addons.thunderbird.net/thunderbird/addon/imap-received-date/)"
    makes the "Received" column in IMAP folders show when messages were
    actually received.
-   "[Undigestify](https://addons.thunderbird.net/thunderbird/addon/undigestify/)"
    unpacks RFC 1153, ListStar, and Yahoo digest messages into separate
    messages.
-   "[Show All Body
    Parts](https://addons.thunderbird.net/thunderbird/addon/show-all-body-parts/)"
    enables the View \| Message Body As \| All Body Parts message
    display mode, so that you can access all of the parts of a message,
    including for example both the text and HTML version of the message
    and all its inline images, as attachments.
-   "[ToggleReplied](https://addons.thunderbird.net/thunderbird/addon/togglereplied-2/)"
    lets you to toggle on and off the "Forwarded", "Replied", and
    "Redirected" flags on existing email messages. This add-on was
    originally written by Christian Eyrich. He is no longer maintaining
    it, so I've released an updated version of it which is compatible
    with the newest Thunderbird versions.
-   "[Remote Content By
    Folder](https://addons.thunderbird.net/thunderbird/addon/remote-content-by-folder/)"
    lets you decide which messages to show images in automatically based
    on what folder they are in (e.g., you might want to automatically
    show images for messages in your inbox, but not your Spam folder).
-   "[userChromeJS](https://addons.thunderbird.net/thunderbird/addon/userchromejs-2)"
    is a rebuild from the ground up for Thunderbird 68+ of the earlier
    add-on of the same name. It allows you to configure Thunderbird to
    execute arbitrary JavaScript code in every Thunderbird window when
    it opens. See also its [home on
    Github](https://github.com/jikamens/userChromeJS).

[Credits](index.html#toc){#credits}
-----------------------------------

A number of people deserve credit for helping to make this add-on what
it is today. A huge thank you to Karthik Sivaram, the author and
maintainer of the add-on prior to Thunderbird 3! I would never have been
able to create and maintain the current version if not for its
predecessor that he wrote. Thanks, also, to the people who have
translated the add-on into non-English languages (at present, Dutch,
Finnish, French, German, Italian, Japanese, Polish, Spanish, Swedish,
and Simplified Chinese). These translations were created by Dtrieb from
BabelZilla and Erwin D. Glockner (German), urko from BabelZilla
(Spanish),
[Samtron-Translations](https://plus.google.com/114276880405600229762)
(Finnish), Bigpapa from BabelZilla (French), Cesare from BabelZilla
(Italian), Amigomr from BabelZilla (Japanese), markh from BabelZilla
(Dutch), Maciej Kobuszewski (Polish), Mikael Hiort af Ornäs (Swedish),
and Wang.H.K from BabelZilla (Simplified Chinese). Please [see
below](index.html#translate) if you would like to help add another
translation. It's not hard!

### [Supporters](index.html#toc){#supporters}

I am grateful to the hundreds of people who have [made monetary
contributions](index.html#donate) to support the ongoing development of
Send Later. Too many have contributed to be able to list you all here,
but special recognition is due to those who have contributed
significantly more than the suggested donation.

#### Gold supporters (\>\$50)

-   ![](https://i1.wp.com/blog.kamens.us/wp-content/uploads/2010/07/LEADSExplorer1.jpg?resize=212%2C35&ssl=1 "LEADSExplorer"){.alignnone
    .size-full .wp-image-2734 .jetpack-lazy-image width="212"
    height="35"
    srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"}
    ![](https://i1.wp.com/blog.kamens.us/wp-content/uploads/2010/07/LEADSExplorer1.jpg?resize=212%2C35&ssl=1 "LEADSExplorer"){.alignnone
    .size-full .wp-image-2734 width="212" height="35"}
    --- Converting more visitors into leads by knowing who visits your
    website
-   ![CONIN Werbeagentur in
    Köln](https://i2.wp.com/blog.kamens.us/wp-content/uploads/2010/07/conin-werbeagentur-in-koeln1.jpg?resize=200%2C35&ssl=1 "CONIN Werbeagentur"){.alignnone
    .jetpack-lazy-image width="200" height="35"
    srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"}
    ![CONIN Werbeagentur in
    Köln](https://i2.wp.com/blog.kamens.us/wp-content/uploads/2010/07/conin-werbeagentur-in-koeln1.jpg?resize=200%2C35&ssl=1 "CONIN Werbeagentur"){.alignnone
    width="200" height="35"}
-   Erowid Center
-   ![](https://i1.wp.com/blog.kamens.us/wp-content/uploads/2010/07/ats-logo-s1.png?w=136&ssl=1 "a-team systems"){.alignnone
    .wp-image-4167 .jetpack-lazy-image
    srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"}
    ![](https://i1.wp.com/blog.kamens.us/wp-content/uploads/2010/07/ats-logo-s1.png?w=136&ssl=1 "a-team systems"){.alignnone
    .wp-image-4167}
     --- Professional FreeBSD and Linux server administration,
    clustering, monitoring and scaling
-   ![David Berman
    Communications](https://i0.wp.com/blog.kamens.us/wp-content/uploads/2010/07/davidberman.com-wordmark-cmyk1.png?w=200&ssl=1){.jetpack-lazy-image
    srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"}
    ![David Berman
    Communications](https://i0.wp.com/blog.kamens.us/wp-content/uploads/2010/07/davidberman.com-wordmark-cmyk1.png?w=200&ssl=1)
    [WCAG compliance without tradeoffs for the mainstream
    user](https://www.davidberman.com/accessibility/web-accessibility-videos/)
-   [The Ripples Guy](http://theripplesguy.com/)
-   ![](../wp-content/uploads/2018/10/isgroup_600.png){.jetpack-lazy-image
    width="100"
    srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"}
    ![](../wp-content/uploads/2018/10/isgroup_600.png){width="100"}
     ISGroup Information Security Group: Ethical Hacking and Penetration
    Testing
-   [Ripcord Engineering](https://www.ripcordengineering.com/)
-   Anonymous

#### Silver supporters (\>\$25)

-   ![](https://i1.wp.com/multicraft.org/images/banner_half.png?resize=234%2C60&ssl=1 "Multicraft"){.alignnone
    .jetpack-lazy-image width="234" height="60"
    srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"}
    ![](https://i1.wp.com/multicraft.org/images/banner_half.png?resize=234%2C60&ssl=1 "Multicraft"){.alignnone
    width="234" height="60"}
-   Trace Media Marketing --- a New York SEO company
-   ![](https://i1.wp.com/blog.kamens.us/wp-content/uploads/2010/07/CCRlogo1.png?resize=40%2C40&ssl=1 "CCRlogo"){.jetpack-lazy-image
    width="40" height="40"
    srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"}
    ![](https://i1.wp.com/blog.kamens.us/wp-content/uploads/2010/07/CCRlogo1.png?resize=40%2C40&ssl=1 "CCRlogo"){width="40"
    height="40"}
    Creative Conflict Resolutions, LLC, Boulder, CO ---
    Mediation/Arbitration --- Satisfying Settlements that Last™
-   ![](https://i1.wp.com/blog.kamens.us/wp-content/uploads/2010/07/peter_square1.jpg?w=1040&ssl=1){.jetpack-lazy-image
    srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"}
    ![](https://i1.wp.com/blog.kamens.us/wp-content/uploads/2010/07/peter_square1.jpg?w=1040&ssl=1)
    PSDT: Perl training, mentoring, & code review by author Peter Scott.
-   Thanks for a valuable piece of software from [Scalable
    Finance](http://www.scalablefinance.com/) --- Advising Business
    Angels, Sourcing investments, Venture Capital and Private Lending.
-   [McCormick & Murphy, P.C.](https://www.mccormickmurphy.com/), a
    Denver area personal injury lawyer
-   [michael-held.com](http://michael-held.com/) --- Munich-based
    Graphic Designer
-   ![elliptic\_marketing](https://i0.wp.com/blog.kamens.us/wp-content/uploads/2010/07/elliptic_marketing1.jpg?w=100&ssl=1){.alignnone
    .wp-image-3938 .jetpack-lazy-image
    srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"}
    ![elliptic\_marketing](https://i0.wp.com/blog.kamens.us/wp-content/uploads/2010/07/elliptic_marketing1.jpg?w=100&ssl=1){.alignnone
    .wp-image-3938}
    Online Marketing Agency in Miami -- Experts in email marketing,
    digital advertising, and Hispanic marketing campaigns.
-   Dr. Ken Rich
-   ![](https://i2.wp.com/blog.kamens.us/wp-content/uploads/2010/07/metasepia-button1.jpg?w=1040&ssl=1){.jetpack-lazy-image
    srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"}
    ![](https://i2.wp.com/blog.kamens.us/wp-content/uploads/2010/07/metasepia-button1.jpg?w=1040&ssl=1)
    Metasepia Games --- a women's game studio creating interactive
    fiction games
-   Steve Wozenski
-   Tilman Berger
-   Anonymous (multiple)

#### Bronze supporters (\>\$10)

-   [MagicLamp Networks ― Dallas Web Design &
    eCommerce](http://magiclamp.net/)
-   Ingo from Germany
-   Håkon from Norway
-   [Ricky from California](http://www.rickyshah.com/)
-   ![](https://i1.wp.com/blog.kamens.us/wp-content/uploads/2010/07/HubAustinLogo1.png?resize=186%2C45&ssl=1 "HubAustin"){.alignnone
    .wp-image-2769 .jetpack-lazy-image width="186" height="45"
    srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"}
    ![](https://i1.wp.com/blog.kamens.us/wp-content/uploads/2010/07/HubAustinLogo1.png?resize=186%2C45&ssl=1 "HubAustin"){.alignnone
    .wp-image-2769 width="186" height="45"}
    --- South Austin's only coworking space
-   The EML Group of companies in New Zealand and Australia
-   Erowid
-   [konehead design™](http://www.koneheaddesign.com/) --- Communication
    Ideas that work. Discover the affordability of quality design.
-   [Exports International LLC](http://www.exportsinternational.com) ---
    Happy to support a fine product that answered an email need of ours.
-   ![](https://i1.wp.com/blog.kamens.us/wp-content/uploads/2010/07/elite_adventure_tours1.gif?resize=60%2C61&ssl=1 "elite_adventure_tours"){.alignnone
    .wp-image-3031 .jetpack-lazy-image width="60" height="61"
    srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"}
    ![](https://i1.wp.com/blog.kamens.us/wp-content/uploads/2010/07/elite_adventure_tours1.gif?resize=60%2C61&ssl=1 "elite_adventure_tours"){.alignnone
    .wp-image-3031 width="60" height="61"}
    of Los Angeles -- Custom Private Luxury Tours in California
-   Christoph from Germany --- "Interesting: Don't pay for software, but
    support the idea behind it ..."
-   "Keep up the terrific work and don't stop developing Send Later!"
    --- Mike C.
-   kathi and the vom Viersen Rottweilers, Chicago, IL
-   [Telapost](http://telapost.com/) -- Thank you for the excellent
    add-on!
-   [Tdotwire.com](http://www.tdotwire.com/) --- Free Dating in Toronto
-   ![purple\_heart](https://i2.wp.com/blog.kamens.us/wp-content/uploads/2010/07/purple_heart1.png?resize=111%2C107&ssl=1){.alignnone
    .size-full .wp-image-3292 .jetpack-lazy-image width="111"
    height="107"
    srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"}
    ![purple\_heart](https://i2.wp.com/blog.kamens.us/wp-content/uploads/2010/07/purple_heart1.png?resize=111%2C107&ssl=1){.alignnone
    .size-full .wp-image-3292 width="111" height="107"}
    "Excellent add-on for both Thunderbird and Posbox! Support is second
    to none!" --- Jerry (Pop) Fairfield
-   [Bome Software](http://www.bome.com/)
-   [www.radiocity.ch](http://www.radiocity.ch/) --- internet code &
    design, Zurich, Switzerland
-   Conrad from New Jersey
-   Naoaki Ichihara
-   [Fensons -- web design and development](http://www.fensons.com/)
-   Charles Manske and [Optimage Health](http://www.optimagehealth.com)
    support good software like 'Send Later' because if it's valuable,
    you should pay something for it!
-   [Call the Ninja](http://www.calltheninja.com/ "Call the Ninja")
    \$200 Flat-rate Data Recovery. No recovery, no fee. Serving clients
    across LA and the United States.
-   David Terrell
-   Paul Wright
-   Michael Sachs, M.D.
-   [Marco Cirspini](https://about.me/marco.crispini)
-   Patrick Murphy, James Valley Hutterian Brethren
-   [Cafe Astrology](https://cafeastrology.com/) --- "The add-on is
    extremely useful and works well."
-   Thierry Viéville, [Inria](https://www.inria.fr) --- "so smart, so
    useful : i saved so much time and avoid also many mistakes 🙂 for
    years by sending later with Send Later, thanks also for the help
    when i did need it"
-   ![](https://i0.wp.com/blog.kamens.us/wp-content/uploads/2010/07/Obee-App-Table-Booking-System1.png?w=1040&ssl=1){.jetpack-lazy-image
    srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"}
    ![](https://i0.wp.com/blog.kamens.us/wp-content/uploads/2010/07/Obee-App-Table-Booking-System1.png?w=1040&ssl=1)
       <https://obeeapp.com/>
-   ![](https://i0.wp.com/blog.kamens.us/wp-content/uploads/2010/07/Logo_Contidos.png?w=150&ssl=1){.alignnone
    .size-full .wp-image-4584 .jetpack-lazy-image
    srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"}
    ![](https://i0.wp.com/blog.kamens.us/wp-content/uploads/2010/07/Logo_Contidos.png?w=150&ssl=1){.alignnone
    .size-full .wp-image-4584}
     [Contidos Dixitais](http://www.contidosdixitais.com/)
-   Felix Salmones from Spain --- "Don't send now, what you can Send
    later... 🙂 "
-   bwithage --- "Canada --- Hockey Stars and Nanaimo Bars"
-   Thanks for a great extension! Jim Roper, in Brazil
-   Dan Kloke (x2)
-   Ondra Zlamal
-   Angelo V. -- SanGio.de -- Thank you for the excellent add-on!
-   Patrick Bell
-   ![](../wp-content/uploads/2018/10/igmcpibggnclpian.ico){.alignnone
    .size-full .wp-image-5381 .jetpack-lazy-image
    srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"}
    ![](../wp-content/uploads/2018/10/igmcpibggnclpian.ico){.alignnone
    .size-full .wp-image-5381}
     Brian S. Wilson: Great plugin and something Thunderbird has needed
    for a long time.
-   Tomas Flaska
-   [ender informatics gmbh](https://www.ender-informatics.ch/)
-   Jörg-Ingo from Germany
-   [Faunt](https://www.faunt.de/): Find sustainable products easily
-   [www.bcdb.info](http://www.bcdb.info/) --- ISDS Working Border
    Collie pedigrees
-   ![Valley Justice
    Coalition](https://i1.wp.com/blog.kamens.us/wp-content/uploads/2019/07/VJC-logo-large-right-hands-140x50.png?resize=140%2C50&ssl=1){.jetpack-lazy-image
    width="140 px" height="50 px"
    srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"}
    ![Valley Justice
    Coalition](https://i1.wp.com/blog.kamens.us/wp-content/uploads/2019/07/VJC-logo-large-right-hands-140x50.png?resize=140%2C50&ssl=1){width="140 px"
    height="50 px"}
    --- Criminal Justice Advocacy in Harrisonburg, Virginia
-   Anonymous (multiple)

There's room on this list for you too! 🙂