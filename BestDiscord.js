 ==UserScript==
 @name         BestDiscord
 @namespace    httptampermonkey.net
 @version      0.1
 @description  RickRoll animation on Google pages
 @author       You
 @match        httpsdiscord.com
 @grant        none
 ==UserScript==

(function() {
    'use strict';

     Create a div element for the RickRoll animation
    const rickRollDiv = document.createElement('div');
    rickRollDiv.innerHTML = `
        div style=position fixed; top 0; left 0; width 100%; height 100%; background-color white; z-index 9999;
            iframe width=560 height=315 src=httpswww.youtube.comembeddQw4w9WgXcQautoplay=1&controls=0 frameborder=0 allowfullscreen style=position absolute; top 50%; left 50%; transform translate(-50%, -50%);iframe
        div
    `;

     Add the animation div to the body
    document.body.appendChild(rickRollDiv);
})();
