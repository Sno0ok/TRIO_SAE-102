const themeToggle = document.querySelector("#theme-toggle");

themeToggle.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("theme-dark");
    themeToggle.textContent = isDark ? "Thème clair" : "Thème sombre";
    themeToggle.setAttribute("aria-pressed", String(isDark));
});