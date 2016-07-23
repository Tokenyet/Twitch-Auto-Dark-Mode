// ==UserScript==
// @name         Black Theme Script
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Dark mode automatically on when opening twitch page.
// @author       Tokenyet (or Dowen)
// @supportURL   tokenyete@gmail.com
// @homepage     https://github.com/EchoDev/TwitchHTML5
// @include      http*://www.twitch.tv*
// @grant        none
// @icon         https://www.twitch.tv/favicon.ico
// @require      https://gist.githubusercontent.com/PizzaBrandon/5709010/raw/e539a6f16c10465eb948b9ef6b0fe1d4c17a7c3e/jquery.waituntilexists.js
/* Thanks to the waituntilexists script from https://gist.github.com/BrockA*/
// ==/UserScript==


$(function(){
    'use strict';
    function blacktheme() {
        //$(".enter-theatre-button").click();
        var elementName = ".enter-theatre-button";
        waitUntilExists(elementName, function() { $(elementName).click(); } );
    }

    function waitUntilExists(str, func) {
        $(str).waitUntilExists(func);
    }

    /*setTimeout(function () {
        blacktheme();
    }, 5000);*/
    blacktheme();
});