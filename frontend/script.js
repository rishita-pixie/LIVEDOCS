/* ======================
   PAGE SWITCHING
====================== */

function showLogin() {
  loginPage.style.display = "block";
  registerPage.style.display = "none";
  dashboard.style.display = "none";
}

function showRegister() {
  loginPage.style.display = "none";
  registerPage.style.display = "block";
  dashboard.style.display = "none";
}

function showDashboard() {
  loginPage.style.display = "none";
  registerPage.style.display = "none";
  dashboard.style.display = "block";
}

/* ======================
   AUTH
====================== */

async function login() {
  try {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const res = await AuthAPI.login({ email, password });

    localStorage.setItem("token", res.data.token);

    showDashboard();
    fetchDocs();
  } catch (err) {
    alert(err.response?.data?.message || "Login failed");
  }
}

async function register() {
  try {
    const email = document.getElementById("regEmail").value;
    const password = document.getElementById("regPassword").value;

    await AuthAPI.register({ email, password });

    alert("Registered successfully");
    showLogin();
  } catch (err) {
    alert(err.response?.data?.message || "Registration failed");
  }
}

/* ======================
   DOCUMENTS
====================== */

async function fetchDocs() {
  try {
    const res = await DocsAPI.getAll();
    renderDocs(res.data);
  } catch {
    document.getElementById("docs").innerText =
      "Failed to load documents";
  }
}

function renderDocs(docs) {
  const container = document.getElementById("docs");
  container.innerHTML = "";

  if (!docs.length) {
    container.innerText = "No documents found";
    return;
  }

  docs.forEach(doc => {
    const div = document.createElement("div");
    div.className = "doc-card";

    div.innerHTML = `
      <h4>${doc.title}</h4>
      <p>${doc.content}</p>
      <button onclick="deleteDoc('${doc._id}')">Delete</button>
    `;

    container.appendChild(div);
  });
}

async function addDoc() {
  try {
    const title = docTitle.value;
    const content = docContent.value;

    if (!title || !content) {
      alert("Fill all fields");
      return;
    }

    await DocsAPI.create({ title, content });

    docTitle.value = "";
    docContent.value = "";

    fetchDocs();
  } catch {
    alert("Failed to add document");
  }
}

async function deleteDoc(id) {
  await DocsAPI.delete(id);
  fetchDocs();
}

/* ======================
   LOGOUT
====================== */

function logout() {
  localStorage.removeItem("token");
  showLogin();
}

/* ======================
   AUTO LOGIN ON REFRESH
====================== */

window.onload = () => {
  const token = localStorage.getItem("token");
  if (token) {
    showDashboard();
    fetchDocs();
  } else {
    showLogin();
  }
};
