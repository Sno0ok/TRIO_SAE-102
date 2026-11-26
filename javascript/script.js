const toggle = document.querySelector("#theme-toggle");
const darkSheet = document.createElement("link");
darkSheet.rel = "stylesheet";
darkSheet.href = "css/dark.css";

function applyTheme(dark) {
    if (dark) document.head.append(darkSheet);
    else darkSheet.remove();
    toggle.textContent = dark ? "Thème clair" : "Thème sombre";
    toggle.setAttribute("aria-pressed", String(dark));
    localStorage.setItem("theme-dark", dark);
}

applyTheme(localStorage.getItem("theme-dark") === "true");
toggle.addEventListener("click", () => applyTheme(!darkSheet.isConnected));
