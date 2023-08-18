// ==UserScript==
// @name         Custom Discord Styles
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Apply custom styles to Discord messages and banners.
// @author       You
// @match        https://discord.com/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    GM_addStyle(`
        .message-2CShn3.groupStart-3Mlgv1:not(.systemMessage-1H1Z20) .contents-2MsGLg::before {
            content: '';
            width: 50px;
            height: 50px;
            background: url("https://github.com/xymine/DiscordProfileDecorations/blob/main/Custom/white.png?raw=true") center/cover;
            transform: translate(-62px, -1px);
            z-index: 99999;
            position: absolute;
            pointer-events: none;
        }

        .banner-1YaD3N {
            background-image: url("https://i.pinimg.com/originals/77/99/55/7799551832d3e467d4c14e20d47f4872.gif");
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
        }
    `);
})();
