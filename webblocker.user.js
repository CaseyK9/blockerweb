// ==UserScript==
// @name         WebsiteBlocker
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Hide Websites
// @author       auro
// @include      https://www.zoho.com/*
// @include      https://www.teamviewer.com/*
// @include      https://news.google.com/*
// @updateURL    https://github.com/mygithubaccount/test/raw/master/test.user.js
// @downloadURL  https://github.com/mygithubaccount/test/raw/master/test.user.js
// @grant        none
// @run-at document-body
// ==/UserScript==

(function() {
    'use strict';

    //INSTRUCTIONS/README:
    //In the UserScript header, add @include <website you want to block> to block the website. Two examples have been provided. Add or remove them if you wish.

    document.querySelector('html').innerText = 'Blocked by you - WebsiteBlocker (TamperMonkey/GreasyFork Script)';

    //Very briefly inform user that the website was blocked by a TamperMonkey script.
    //Redirect after 1 second to discourage you from toggling the script. (The toggle for this script only shows on websites you are blocking with @include)
    setTimeout(()=>{
    window.location.replace("https://duckduckgo.com/");
    }, 1000)

})();
