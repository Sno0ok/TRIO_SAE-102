// Theme switch: adds or removes the second stylesheet (css/dark.css)
const toggle = document.querySelector("#theme-toggle");
const darkSheet = document.createElement("link");
darkSheet.rel = "stylesheet";
darkSheet.href = "css/dark.css";

function applyTheme(dark) {
    // Add or remove the dark stylesheet
    if (dark) document.head.append(darkSheet);
    else darkSheet.remove();
    // Update the button label and its accessibility state
    toggle.textContent = dark ? "Thème clair" : "Thème sombre";
    toggle.setAttribute("aria-pressed", String(dark));
    // Remember the choice for the next page
    localStorage.setItem("theme-dark", dark);
}

// On load, restore the saved theme
applyTheme(localStorage.getItem("theme-dark") === "true");
toggle.addEventListener("click", () => applyTheme(!darkSheet.isConnected));
