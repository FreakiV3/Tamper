// ==UserScript==
// @name         💮 Thème Anime Girl 💮
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Applique un thème Anime Girl à tous les sites web. ❤
// @author       Freakidann
// @match        *://*/*
// @grant        none
// @icon         https://www.pngplay.com/wp-content/uploads/12/Anime-Girls-With-Brown-Hair-PNG-Clipart-Background.png
// ==/UserScript==

(function() {
    'use strict';

    // Crée un conteneur pour le contenu du site
    const siteContent = document.createElement('div');
    siteContent.style.position = 'relative';
    siteContent.style.zIndex = '1';

    // Met le contenu du site dans le conteneur
    while (document.body.firstChild) {
        siteContent.appendChild(document.body.firstChild);
    }

    // Ajoute le conteneur au corps de la page
    document.body.appendChild(siteContent);

    // Définir le fond d'écran anime girl avec flou
    siteContent.style.backgroundImage = 'url(https://motionbgs.com/media/1105/anime-girl.jpg)';
    siteContent.style.backgroundSize = 'cover';
    siteContent.style.backgroundAttachment = 'fixed';

    // Appliquer une couleur de texte rose
    siteContent.style.color = 'pink';

    // Appliquer une ombre de texte aux éléments de la page
    const textShadow = '2px 2px 4px rgba(0, 0, 0, 0.5)';
    siteContent.style.textShadow = textShadow;

    // Appliquer une police de texte spécifique
    siteContent.style.fontFamily = 'VotrePolice, sans-serif';

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
                filter: blur(10px);
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
    const elementsToAnimate = siteContent.querySelectorAll('*');
    elementsToAnimate.forEach(element => {
        element.style.animation = 'fadeIn 1s ease, slideIn 1s ease';
    });

    // Supprimer le flou avec une animation plus douce
    setTimeout(() => {
        siteContent.style.animation = 'removeBlur 2s ease';
    }, 1000); // Démarre l'animation après 1 seconde

    // Ajouter des icônes d'anime aux liens
    const animeIcon = document.createElement('i');
    animeIcon.classList.add('fas', 'fa-heart', 'fa-2x');
    animeIcon.style.color = 'pink';

    const links = siteContent.querySelectorAll('a');
    links.forEach(link => {
        link.insertBefore(animeIcon.cloneNode(true), link.firstChild);
    });

    // Ajouter une icône anime pour les boutons
    const buttons = siteContent.querySelectorAll('button');
    buttons.forEach(button => {
        button.innerHTML = `<i class="fas fa-star"></i> ${button.innerHTML}`;
    });

    // Ajouter une icône d'anime à la barre de navigation
    const navIcon = document.createElement('i');
    navIcon.classList.add('fas', 'fa-leaf', 'fa-2x');
    navIcon.style.color = 'pink';

    const navItems = document.querySelectorAll('nav a');
    navItems.forEach(navItem => {
        navItem.insertBefore(navIcon.cloneNode(true), navItem.firstChild);
    });

    // Ajouter un anime girl flottant
    const floatingAnimeGirl = document.createElement('img');
    floatingAnimeGirl.src = 'https://www.pngplay.com/wp-content/uploads/12/Anime-Girls-With-Brown-Hair-PNG-Clipart-Background.png'; // Remplacez par l'URL de votre image anime girl
    floatingAnimeGirl.style.position = 'fixed';
    floatingAnimeGirl.style.bottom = '20px';
    floatingAnimeGirl.style.right = '20px';
    floatingAnimeGirl.style.width = '100px'; // Ajustez la taille
    floatingAnimeGirl.style.zIndex = '9999';
    document.body.appendChild(floatingAnimeGirl);

})();
