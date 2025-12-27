// Protect page
if (!localStorage.getItem("token")) {
  window.location.href = "login.html";
}

async function fetchDocs() {
  const res = await DocsAPI.getAll();
  renderDocs(res.data);
}

function renderDocs(docs) {
  docsContainer = document.getElementById("docs");
  docsContainer.innerHTML = "";

  docs.forEach(doc => {
    const div = document.createElement("div");
    div.innerHTML = `
      <h4>${doc.title}</h4>
      <p>${doc.content}</p>
      <button onclick="deleteDoc('${doc._id}')">Delete</button>
    `;
    docsContainer.appendChild(div);
  });
}

async function addDoc() {
  await DocsAPI.create({
    title: docTitle.value,
    content: docContent.value
  });
  fetchDocs();
}

async function deleteDoc(id) {
  await DocsAPI.delete(id);
  fetchDocs();
}

function logout() {
  localStorage.removeItem("token");
  window.location.href = "login.html";
}

fetchDocs();
