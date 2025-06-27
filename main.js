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

  // Login page fade logic
  const loginBtn = document.getElementById("loginBtn");
  const leftHome = document.getElementById("leftHome");
  const leftLogin = document.getElementById("leftLogin");
  const leftRegister = document.getElementById("leftRegister");
  const registerBtn = document.querySelector(".main-nav .btn:last-child");
  if (loginBtn && leftHome && leftLogin && leftRegister && registerBtn) {
    // Hide login/register by default
    leftLogin.style.display = "none";
    leftLogin.style.opacity = 0;
    leftRegister.style.display = "none";
    leftRegister.style.opacity = 0;
    leftHome.style.opacity = 1;

    // Home button logic
    var homeBtn = document.querySelector(".main-nav .btn:first-child");
    if (homeBtn) {
      homeBtn.addEventListener("click", function (e) {
        e.preventDefault();
        // Fade out login/register, fade in home
        if (leftLogin.style.display === "block") {
          leftLogin.classList.remove("fade-in");
          leftLogin.classList.add("fade-out");
          setTimeout(function () {
            leftLogin.style.display = "none";
            leftHome.style.display = "block";
            leftHome.classList.remove("fade-out");
            setTimeout(function () {
              leftHome.style.opacity = 1;
            }, 10);
          }, 350);
        } else if (leftRegister.style.display === "block") {
          leftRegister.classList.remove("fade-in");
          leftRegister.classList.add("fade-out");
          setTimeout(function () {
            leftRegister.style.display = "none";
            leftHome.style.display = "block";
            leftHome.classList.remove("fade-out");
            setTimeout(function () {
              leftHome.style.opacity = 1;
            }, 10);
          }, 350);
        }
      });
    }

    loginBtn.addEventListener("click", function (e) {
      e.preventDefault();
      // Fade out home/register, fade in login
      if (leftRegister.style.display === "block") {
        leftRegister.classList.remove("fade-in");
        leftRegister.classList.add("fade-out");
        setTimeout(function () {
          leftRegister.style.display = "none";
          leftLogin.style.display = "block";
          setTimeout(function () {
            leftLogin.classList.add("fade-in");
            leftLogin.style.opacity = 1;
          }, 10);
        }, 350);
      } else {
        leftHome.classList.add("fade-out");
        setTimeout(function () {
          leftHome.style.display = "none";
          leftLogin.style.display = "block";
          setTimeout(function () {
            leftLogin.classList.add("fade-in");
            leftLogin.style.opacity = 1;
          }, 10);
        }, 350);
      }
    });

    registerBtn.addEventListener("click", function (e) {
      e.preventDefault();
      // Fade out home/login, fade in register
      if (leftLogin.style.display === "block") {
        leftLogin.classList.remove("fade-in");
        leftLogin.classList.add("fade-out");
        setTimeout(function () {
          leftLogin.style.display = "none";
          leftRegister.style.display = "block";
          setTimeout(function () {
            leftRegister.classList.add("fade-in");
            leftRegister.style.opacity = 1;
          }, 10);
        }, 350);
      } else {
        leftHome.classList.add("fade-out");
        setTimeout(function () {
          leftHome.style.display = "none";
          leftRegister.style.display = "block";
          setTimeout(function () {
            leftRegister.classList.add("fade-in");
            leftRegister.style.opacity = 1;
          }, 10);
        }, 350);
      }
    });

    // Prevent form submit (demo only)
    leftLogin.querySelector("form").addEventListener("submit", function (e) {
      e.preventDefault();
      // Add login logic here
    });
    leftRegister.querySelector("form").addEventListener("submit", function (e) {
      e.preventDefault();
      // Add register logic here
    });
  }
});
