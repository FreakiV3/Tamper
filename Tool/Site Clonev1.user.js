// ==UserScript==
// @name         🌐 Télécharger le HTML et le CSS
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  📦 Ajoute un élément au menu contextuel pour télécharger le HTML et le CSS de la page actuelle, enregistrés dans des fichiers distincts avec le nom du site. 🖌️
// @author       Freakidann
// @match        *://*/*
// @grant        GM_registerMenuCommand
// @icon         https://metropolebangkok.com/wp-content/uploads/2020/10/download-logo-png-image-77292.png
// ==/UserScript==

(function() {
    'use strict';

    // Fonction pour télécharger le HTML et le CSS de la page
    function downloadHTMLAndCSS() {
        const html = document.documentElement.outerHTML;
        const css = Array.from(document.styleSheets).map(sheet => {
            try {
                return Array.from(sheet.cssRules).map(rule => rule.cssText).join('\n');
            } catch (error) {
                console.error('Failed to access CSS rules from:', sheet.href, error);
                return '';
            }
        }).join('\n');

        const siteName = window.location.hostname.replace(/\./g, '_');
        const htmlBlob = new Blob([html], { type: 'text/html' });
        const cssBlob = new Blob([css], { type: 'text/css' });

        const htmlUrl = URL.createObjectURL(htmlBlob);
        const cssUrl = URL.createObjectURL(cssBlob);

        const aHtml = document.createElement('a');
        aHtml.href = htmlUrl;
        aHtml.download = siteName + '_page.html';
        aHtml.click();

        const aCss = document.createElement('a');
        aCss.href = cssUrl;
        aCss.download = siteName + '_styles.css';
        aCss.click();

        URL.revokeObjectURL(htmlUrl);
        URL.revokeObjectURL(cssUrl);
    }

    // Ajouter un élément au menu contextuel
    GM_registerMenuCommand('Télécharger le HTML et le CSS de la page', downloadHTMLAndCSS);
})();
