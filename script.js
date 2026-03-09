// ============================================================
// NEURON: Lava Series — Client-Side Validation
// script.js
// ============================================================

// --- UTILITY: Show error under a field ---
function showError(input, message) {
  clearError(input);
  input.classList.add("input-error");

  const err = document.createElement("span");
  err.className = "error-msg";
  err.textContent = message;
  input.insertAdjacentElement("afterend", err);
}

// --- UTILITY: Clear error on a field ---
function clearError(input) {
  input.classList.remove("input-error");
  const next = input.nextElementSibling;
  if (next && next.classList.contains("error-msg")) {
    next.remove();
  }
}

// --- UTILITY: Show success toast notification ---
function showToast(message, type = "success") {
  let toast = document.getElementById("lava-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "lava-toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.className = "lava-toast " + type;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3000);
}

// ============================================================
// LOGIN FORM VALIDATION
// ============================================================
function initLoginValidation() {
  const form = document.getElementById("login-form");
  if (!form) return;

  const emailInput = document.getElementById("login-email");
  const passwordInput = document.getElementById("login-password");

  // Live validation
  emailInput.addEventListener("input", () => {
    if (emailInput.value.trim()) clearError(emailInput);
  });
  passwordInput.addEventListener("input", () => {
    if (passwordInput.value.trim()) clearError(passwordInput);
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let valid = true;

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    // Email validation
    if (!email) {
      showError(emailInput, "⚠ Email is required.");
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showError(emailInput, "⚠ Please enter a valid email address.");
      valid = false;
    } else {
      clearError(emailInput);
    }

    // Password validation
    if (!password) {
      showError(passwordInput, "⚠ Password is required.");
      valid = false;
    } else if (password.length < 6) {
      showError(passwordInput, "⚠ Password must be at least 6 characters.");
      valid = false;
    } else {
      clearError(passwordInput);
    }

    if (valid) {
      showToast("✔ Login successful! Redirecting...", "success");
      setTimeout(() => {
        const role = sessionStorage.getItem("userRole");
        if (role === "admin") {
          window.location.href = "admin.html";
        } else {
          window.location.href = "profile.html";
        }
      }, 1500);
    }
  });
}

// ============================================================
// SIGNUP FORM VALIDATION
// ============================================================
function initSignupValidation() {
  const form = document.getElementById("signup-form");
  if (!form) return;

  const nameInput = document.getElementById("signup-name");
  const emailInput = document.getElementById("signup-email");
  const passwordInput = document.getElementById("signup-password");
  const confirmInput = document.getElementById("signup-confirm");

  // Live validation
  [nameInput, emailInput, passwordInput, confirmInput].forEach((input) => {
    input.addEventListener("input", () => {
      if (input.value.trim()) clearError(input);
    });
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let valid = true;

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    const confirm = confirmInput.value;

    // Name
    if (!name) {
      showError(nameInput, "⚠ Full name is required.");
      valid = false;
    } else if (name.length < 2) {
      showError(nameInput, "⚠ Name must be at least 2 characters.");
      valid = false;
    } else {
      clearError(nameInput);
    }

    // Email
    if (!email) {
      showError(emailInput, "⚠ Email is required.");
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showError(emailInput, "⚠ Please enter a valid email address.");
      valid = false;
    } else {
      clearError(emailInput);
    }

    // Password
    if (!password) {
      showError(passwordInput, "⚠ Password is required.");
      valid = false;
    } else if (password.length < 6) {
      showError(passwordInput, "⚠ Password must be at least 6 characters.");
      valid = false;
    } else if (!/[A-Z]/.test(password)) {
      showError(
        passwordInput,
        "⚠ Password must contain at least one uppercase letter.",
      );
      valid = false;
    } else if (!/[0-9]/.test(password)) {
      showError(passwordInput, "⚠ Password must contain at least one number.");
      valid = false;
    } else {
      clearError(passwordInput);
    }

    // Confirm Password
    if (!confirm) {
      showError(confirmInput, "⚠ Please confirm your password.");
      valid = false;
    } else if (confirm !== password) {
      showError(confirmInput, "⚠ Passwords do not match.");
      valid = false;
    } else {
      clearError(confirmInput);
    }

    if (valid) {
      showToast("✔ Account created! Redirecting to login...", "success");
      setTimeout(() => {
        window.location.href = "login.html";
      }, 1500);
    }
  });
}

// ============================================================
// SETTINGS FORM VALIDATION
// ============================================================
function initSettingsValidation() {
  const form = document.getElementById("settings-form");
  if (!form) return;

  const emailInput = document.getElementById("settings-email");
  const passwordInput = document.getElementById("settings-password");
  const confirmInput = document.getElementById("settings-confirm");

  [emailInput, passwordInput, confirmInput].forEach((input) => {
    if (input) {
      input.addEventListener("input", () => {
        if (input.value.trim()) clearError(input);
      });
    }
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let valid = true;

    const email = emailInput ? emailInput.value.trim() : "";
    const password = passwordInput ? passwordInput.value : "";
    const confirm = confirmInput ? confirmInput.value : "";

    // Email (optional but must be valid if filled)
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showError(emailInput, "⚠ Please enter a valid email address.");
      valid = false;
    } else if (emailInput) {
      clearError(emailInput);
    }

    // Password (optional but must be strong if filled)
    if (password) {
      if (password.length < 6) {
        showError(passwordInput, "⚠ Password must be at least 6 characters.");
        valid = false;
      } else if (!/[A-Z]/.test(password)) {
        showError(
          passwordInput,
          "⚠ Password must contain at least one uppercase letter.",
        );
        valid = false;
      } else if (!/[0-9]/.test(password)) {
        showError(
          passwordInput,
          "⚠ Password must contain at least one number.",
        );
        valid = false;
      } else {
        clearError(passwordInput);
        // Confirm must match if password is filled
        if (!confirm) {
          showError(confirmInput, "⚠ Please confirm your new password.");
          valid = false;
        } else if (confirm !== password) {
          showError(confirmInput, "⚠ Passwords do not match.");
          valid = false;
        } else {
          clearError(confirmInput);
        }
      }
    } else if (passwordInput) {
      clearError(passwordInput);
      if (confirmInput) clearError(confirmInput);
    }

    if (valid) {
      showToast("✔ Settings saved successfully!", "success");
    }
  });
}

// ============================================================
// INIT ALL ON DOM READY
// ============================================================
document.addEventListener("DOMContentLoaded", function () {
  initLoginValidation();
  initSignupValidation();
  initSettingsValidation();
});
