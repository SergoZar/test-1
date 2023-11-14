// ==UserScript==
// @name         MastodonTranslate
// @namespace    https://niu.moe/@tomo
// @version      1.10.0
// @description  Provides a translate toot option for Mastodon users via GoogleTranslate
// @author       tomo@uchuu.io / https://niu.moe/@tomo
// @match        *://*/web/*
// @match        *://*/settings/preferences
// @connect      translate.uchuu.io
// @grant        GM.getValue
// @grant        GM_getValue
// @grant        GM_xmlhttpRequest
// @grant        GM_xmlHttpRequest
// @grant        GM.xmlHttpRequest
// ==/UserScript==

(function() {
    'use strict';
    function f(){
        for (var e of document.querySelectorAll("*")) e.style.borderRadius = "0";
    }
    f();
    setTimeout(f, 1000);
    setTimeout(f, 2000);
    setInterval(f, 4000);
})();
