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
    // Hide login/register and social buttons by default
    leftLogin.style.display = "none";
    leftLogin.style.opacity = 0;
    leftRegister.style.display = "none";
    leftRegister.style.opacity = 0;
    leftHome.style.opacity = 1;
    rightSocialLogin.style.display = "none";
    rightSocialLogin.style.opacity = 0;

    // Home button logic
    if (homeBtn) {
      homeBtn.addEventListener("click", function (e) {
        e.preventDefault();
        leftLogin.classList.add("fade-out");
        leftRegister.classList.add("fade-out");
        setTimeout(() => {
          leftLogin.style.display = "none";
          leftRegister.style.display = "none";
          leftHome.style.display = "block";
          platformStats.style.display = "block";
          rightSocialLogin.style.display = "none";
          rightSocialLogin.style.opacity = "0";
          setTimeout(() => {
            leftHome.classList.remove("fade-out");
            platformStats.classList.remove("fade-out");
          }, 50);
        }, 500);
      });
    }

    loginBtn.addEventListener("click", function (e) {
      e.preventDefault();
      // Fade out home/register, fade in login
      if (leftRegister.style.display === "block") {
        leftRegister.classList.remove("fade-in");
        leftRegister.classList.add("fade-out");
        platformStats.classList.add("fade-out");
        rightSocialLogin.classList.add("fade-out");
        setTimeout(function () {
          leftRegister.style.display = "none";
          leftLogin.style.display = "block";
          rightSocialLogin.style.display = "block";
          rightSocialLogin.style.opacity = "1";
          if (rightSocialTitle) rightSocialTitle.textContent = "Login";
          setTimeout(function () {
            leftLogin.classList.add("fade-in");
            leftLogin.style.opacity = 1;
            rightSocialLogin.classList.remove("fade-out");
            rightSocialLogin.classList.add("fade-in");
          }, 10);
        }, 350);
      } else {
        leftHome.classList.add("fade-out");
        platformStats.classList.add("fade-out");
        rightSocialLogin.classList.add("fade-out");
        setTimeout(function () {
          leftHome.style.display = "none";
          leftLogin.style.display = "block";
          rightSocialLogin.style.display = "block";
          rightSocialLogin.style.opacity = "1";
          if (rightSocialTitle) rightSocialTitle.textContent = "Login";
          setTimeout(function () {
            leftLogin.classList.add("fade-in");
            leftLogin.style.opacity = 1;
            rightSocialLogin.classList.remove("fade-out");
            rightSocialLogin.classList.add("fade-in");
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
        platformStats.classList.add("fade-out");
        rightSocialLogin.classList.add("fade-out");
        setTimeout(function () {
          leftLogin.style.display = "none";
          leftRegister.style.display = "block";
          rightSocialLogin.style.display = "block";
          rightSocialLogin.style.opacity = "1";
          if (rightSocialTitle) rightSocialTitle.textContent = "Register";
          setTimeout(function () {
            leftRegister.classList.add("fade-in");
            leftRegister.style.opacity = 1;
            rightSocialLogin.classList.remove("fade-out");
            rightSocialLogin.classList.add("fade-in");
          }, 10);
        }, 350);
      } else {
        leftHome.classList.add("fade-out");
        platformStats.classList.add("fade-out");
        rightSocialLogin.classList.add("fade-out");
        setTimeout(function () {
          leftHome.style.display = "none";
          leftRegister.style.display = "block";
          rightSocialLogin.style.display = "block";
          rightSocialLogin.style.opacity = "1";
          if (rightSocialTitle) rightSocialTitle.textContent = "Register";
          setTimeout(function () {
            leftRegister.classList.add("fade-in");
            leftRegister.style.opacity = 1;
            rightSocialLogin.classList.remove("fade-out");
            rightSocialLogin.classList.add("fade-in");
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
