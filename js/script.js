/* detects changes */
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    setTheme(event.matches ? "dark" : "light");
});

/* checks color scheme on load */
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    setTheme("dark");
} else {
    setTheme("light")
}

/* sets theme to dark (default) or light */
function setTheme(color) {
    switch (color) {
        case "light":
            document.getElementById("theme-switcher").checked = true;
            break;
    
        default:
            document.getElementById("theme-switcher").checked = false;
            break;
    }
}