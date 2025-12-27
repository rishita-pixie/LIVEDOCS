import { AuthAPI } from "./api.js";

// REGISTER FUNCTION
async function register() {
  try {
    const name = document.getElementById("regName").value;
    const email = document.getElementById("regEmail").value;
    const password = document.getElementById("regPassword").value;

    if (!name || !email || !password) {
      alert("All fields are required");
      return;
    }

    const res = await AuthAPI.signup({ name, email, password });

    alert(res.data.message);
    window.location.href = "login.html";

  } catch (err) {
    console.error(err.response?.data);
    alert(err.response?.data?.message || "Registration failed");
  }
}

// LOGIN FUNCTION
async function login() {
  try {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const res = await AuthAPI.login({ email, password });

    localStorage.setItem("token", res.data.token);
    window.location.href = "dashboard.html";

  } catch (err) {
    alert(err.response?.data?.message || "Login failed");
  }
}

// ❗ Attach register function to the button
document.getElementById("createAccountBtn").addEventListener("click", register);

// ❗ Optional: make global for inline onclick
window.register = register;
window.login = login;
