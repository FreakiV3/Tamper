// ==UserScript==
// @name         Monarch Upload Dark Theme
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Apply a Windows 11 dark theme to Monarch Upload settings page.
// @author       Freakidann
// @match        https://dash.monarchupload.cc/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Create a <style> element to hold our custom styles
    const customStyles = document.createElement('style');
    customStyles.innerHTML = `
        body {
            background-image: url('https://cdn.discordapp.com/attachments/1118076831418028082/1142235574061781002/bJXZyOZ.png');
            background-size: cover;
            background-repeat: no-repeat;
            background-attachment: fixed;
            background-color: rgba(17, 24, 39, 0.9) !important;
            color: #fff !important;
        }

        .blurry-background {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url('hhttps://cdn.discordapp.com/attachments/1118076831418028082/1142235574061781002/bJXZyOZ.png');
            background-size: cover;
            filter: blur(10px);
            z-index: -1;
        }

        .settings {
            background-color: rgba(31, 41, 55, 0.85) !important;
            border-radius: 8px;
            padding: 20px;
            animation: fadeIn 1s ease-in-out;
        }

        .settings label,
        .settings input[type="text"],
        .settings select {
            opacity: 0;
            transform: translateY(20px);
            animation: slideInUp 1s ease-in-out forwards;
        }

        .settings input[type="color"] {
            width: 100px;
            height: 30px;
            border: none;
            background-color: transparent !important;
        }

        .settings input[type="checkbox"] {
            appearance: none;
            width: 18px;
            height: 18px;
            background-color: #4B5563;
            border: 1px solid #374151;
            border-radius: 4px;
            cursor: pointer;
            vertical-align: middle;
        }

        .settings input[type="checkbox"]:checked {
            background-color: #2563EB;
            border: 1px solid #2563EB;
        }
            @keyframes fadeIn {
            0% {
                opacity: 0;
                transform: translateY(-20px);
            }
            100% {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes slideInUp {
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
            .flex.space-x-4 a {
            opacity: 0;
            transform: translateY(10px);
            animation: fadeInUp 0.5s ease-in-out forwards;
        }

        @keyframes fadeInUp {
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
            .embedWrapper-1MtIDg {
            border: 1px solid rgb(171, 46, 255);
            max-width: 413px;
            border-radius: 8px;
            background-color: rgba(0, 0, 0, 0.8);
            padding: 10px;
            margin: 10px;
            box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
        }

        .embedAuthor-TJIHp5,
        .embedTitle-2n1pEb,
        .embedDescription-1DrJxZ {
            color: #fff;
            margin-bottom: 8px;
        }

        .embedAuthor-TJIHp5 a,
        .embedTitle-2n1pEb a {
            color: #9f5afd;
            text-decoration: none;
            transition: color 0.3s ease-in-out;
        }

        .embedAuthor-TJIHp5 a:hover,
        .embedTitle-2n1pEb a:hover {
            color: #ff73e6;
        }

        .imageContent-3Av-9c {
            display: flex;
            justify-content: center;
            margin-top: 8px;
        }

        .imageWrapper-oMkQl4 {
            max-width: 100%;
            width: auto;
            aspect-ratio: 381 / 300;
            overflow: hidden;
            border-radius: 8px;
            transition: transform 0.3s ease-in-out;
        }

        .imageWrapper-oMkQl4:hover {
            transform: scale(1.05);
        }

        .imageWrapper-oMkQl4 img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            vertical-align: bottom;
        }
            button[type="button"] {
            background-color: #4a90e2;
            color: #fff;
            border: none;
            border-radius: 4px;
            padding: 8px 16px;
            font-size: 14px;
            cursor: pointer;
            transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
        }

        button[type="button"]:hover {
            background-color: #357ebd;
        }
    `;

    // Append the custom styles to the <head> of the page
    document.head.appendChild(customStyles);
})();
