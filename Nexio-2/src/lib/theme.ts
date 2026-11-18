export const THEME_KEY = "nexio-theme";

/**
 * Runs before first paint (inlined in <head>) so there is no theme flash.
 * Rules: default LIGHT; only an explicit saved choice switches to dark;
 * the OS `prefers-color-scheme` setting is deliberately ignored.
 */
export const themeInitScript = `(function(){var d=document.documentElement;try{var t=localStorage.getItem('${THEME_KEY}');d.setAttribute('data-theme',t==='dark'?'dark':'light');}catch(e){d.setAttribute('data-theme','light');}d.classList.add('js');})();`;
