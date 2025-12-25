const BASE_URL = "http://localhost:5000"; // backend URL
let jwtToken = ""; // store token globally

// LOGIN FUNCTION
async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const res = await fetch(`${BASE_URL}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (res.ok && data.token) {
      jwtToken = data.token;
      document.getElementById("token").innerText = jwtToken;
      alert("Login successful!");
    } else {
      document.getElementById("token").innerText = data.message || "Login failed";
    }

    console.log("JWT Token:", jwtToken);
  } catch (err) {
    console.error(err);
    document.getElementById("token").innerText = "Error connecting to server";
  }
}

// FETCH DOCUMENTS
async function getDocs() {
  if (!jwtToken) {
    alert("Please login first!");
    return;
  }

  try {
    const res = await fetch(`${BASE_URL}/api/docs`, {
      headers: {
        "Authorization": `Bearer ${jwtToken}`
      }
    });

    const data = await res.json();
    document.getElementById("docs").innerText = JSON.stringify(data, null, 2);

  } catch (err) {
    console.error(err);
    document.getElementById("docs").innerText = "Error fetching documents";
  }
}
