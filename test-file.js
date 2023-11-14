// ==UserScript==
// @name         Remove fucking rounding
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Прибирає срані заокруглення усіх елементів на сайтах | Removes the fucking rounding of all elements on sites.
// @author       SergoZar
// @match        *://*/*
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
