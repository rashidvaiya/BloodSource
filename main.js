// Toggle dark mode on body when switch is toggled
document.addEventListener("DOMContentLoaded", function () {
  // Enforce lowercase for username input
  const loginUsernameInput = document.getElementById("login-username");
  if (loginUsernameInput) {
    loginUsernameInput.addEventListener("input", function () {
      this.value = this.value.toLowerCase();
    });
  }
  // Password show/hide toggle for login form
  const loginPasswordInput = document.getElementById("login-password");
  const loginPasswordToggle = document.getElementById("loginPasswordToggle");
  if (loginPasswordInput && loginPasswordToggle) {
    loginPasswordToggle.addEventListener("click", function () {
      const icon = loginPasswordToggle.querySelector("i");
      if (loginPasswordInput.type === "password") {
        loginPasswordInput.type = "text";
        if (icon) {
          icon.classList.remove("fa-eye");
          icon.classList.add("fa-eye-slash");
        }
      } else {
        loginPasswordInput.type = "password";
        if (icon) {
          icon.classList.remove("fa-eye-slash");
          icon.classList.add("fa-eye");
        }
      }
    });
  }
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
  const platformStats = document.getElementById("platformStats");
  const rightSocialLogin = document.getElementById("rightSocialLogin");
  const rightSocialTitle = document.getElementById("rightSocialTitle");
  const registerBtn = document.getElementById("registerBtn");
  const homeBtn = document.getElementById("homeBtn");
  if (loginBtn && leftHome && leftLogin && leftRegister && registerBtn) {
    // Initial state: show home, hide login/register/social, show platform stats
    leftHome.style.display = "block";
    leftLogin.style.display = "none";
    leftRegister.style.display = "none";
    rightSocialLogin.style.display = "none";
    platformStats.style.display = "block";

    // Home button logic
    if (homeBtn) {
      homeBtn.addEventListener("click", function (e) {
        e.preventDefault();
        leftHome.style.display = "block";
        leftLogin.style.display = "none";
        leftRegister.style.display = "none";
        rightSocialLogin.style.display = "none";
        platformStats.style.display = "block";
      });
    }

    loginBtn.addEventListener("click", function (e) {
      e.preventDefault();
      leftHome.style.display = "none";
      leftLogin.style.display = "block";
      leftRegister.style.display = "none";
      rightSocialLogin.style.display = "block";
      platformStats.style.display = "none";
      if (rightSocialTitle) rightSocialTitle.textContent = "Login";
    });

    registerBtn.addEventListener("click", function (e) {
      e.preventDefault();
      leftHome.style.display = "none";
      leftLogin.style.display = "none";
      leftRegister.style.display = "block";
      rightSocialLogin.style.display = "block";
      platformStats.style.display = "none";
      if (rightSocialTitle) rightSocialTitle.textContent = "Register";
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
