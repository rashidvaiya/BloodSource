// Toggle dark mode on body when switch is toggled
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("input");
  const root = document.documentElement;
  toggle.addEventListener("change", function () {
    if (toggle.checked) {
      root.setAttribute("data-theme", "dark");
    } else {
      root.removeAttribute("data-theme");
    }
  });
});
