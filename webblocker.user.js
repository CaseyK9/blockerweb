// ==UserScript==
// @name         WebsiteBlocker
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Hide Websites
// @author       auro
// @include      https://www.zoho.com/*
// @include      https://www.teamviewer.com/*
// @include      https://news.google.com/*
// @updateURL    https://github.com/CaseyK9/blockerweb/raw/main/webblocker.user.js
// @downloadURL  https://github.com/CaseyK9/blockerweb/raw/main/webblocker.user.js
// @grant        none
// @run-at document-body
// ==/UserScript==

(function() {
    'use strict';

    //INSTRUCTIONS/README:
    //In the UserScript header, add @include <website you want to block> to block the website. Two examples have been provided. Add or remove them if you wish.

    document.querySelector('html').innerText = '<h1>Blocked by Foxxo Web Blocker.</br>The website you are trying to access is most likely being used by scammers.</br>Hang up the phone and dial somebody whom you trust before clicking any download links or switching browsers.</br>This is a common form of software used by scammers to hijack your computer and steal all of your information.</br>Hang up and call someone you trust IMMEDIATELLY.</h1>';

})();
