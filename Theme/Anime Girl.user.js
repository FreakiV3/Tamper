// ==UserScript==
// @name         💮 Thème Anime Girl 💮
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Applique un thème Anime Girl à tous les sites web. ❤
// @author       Freakidann
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Définir le fond d'écran anime girl avec flou
    document.body.style.backgroundImage = 'url(https://motionbgs.com/media/1105/anime-girl.jpg)';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundAttachment = 'fixed';

    // Appliquer une couleur de texte rose
    document.body.style.color = 'pink';

    // Appliquer une police de texte spécifique
    document.body.style.fontFamily = 'VotrePolice, sans-serif';

    // Ajouter des animations de page
    const keyframes = `
        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }

        @keyframes slideIn {
            from {
                transform: translateY(-100%);
            }
            to {
                transform: translateY(0);
            }
        }

        @keyframes removeBlur {
            from {
                filter: blur(5px);
            }
            to {
                filter: blur(0);
            }
        }
    `;

    const style = document.createElement('style');
    style.innerHTML = keyframes;
    document.head.appendChild(style);

    // Appliquer des animations aux éléments de la page
    const elementsToAnimate = document.querySelectorAll('*');
    elementsToAnimate.forEach(element => {
        element.style.animation = 'fadeIn 1s ease, slideIn 1s ease';
    });

    // Supprimer le flou avec une animation
    setTimeout(() => {
        document.body.style.animation = 'removeBlur 2s ease';
    }, 1000); // Démarre l'animation après 1 seconde
})();
