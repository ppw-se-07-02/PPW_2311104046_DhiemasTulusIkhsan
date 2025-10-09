const links = document.querySelectorAll(".sidebar nav a");
const sections = document.querySelectorAll(".content-section");
const logoutBtn = document.getElementById("logout");
const popup = document.getElementById("logout-popup");
const confirmLogout = document.getElementById("confirm-logout");
const cancelLogout = document.getElementById("cancel-logout");

// navigation switching
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    // skip logout (popup handled separately)
    if (link.id === "logout") return;

    links.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");

    const sectionId = link.getAttribute("data-section");
    sections.forEach((section) => {
      section.classList.remove("active");
      if (section.id === sectionId) section.classList.add("active");
    });
  });
});

// add article logic
const form = document.querySelector(".article-form");
const postList = document.getElementById("post-list");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("article-title").value.trim();
  const content = document.getElementById("article-content").value.trim();
  if (title && content) {
    const li = document.createElement("li");
    li.innerHTML = `✨ ${title} <button class="delete-btn">Delete</button>`;
    postList.appendChild(li);
    form.reset();
    alert("Article published successfully 💫");
  }
});

// delete post
postList.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    e.target.parentElement.remove();
  }
});

// logout popup
logoutBtn.addEventListener("click", (e) => {
  e.preventDefault();
  popup.style.display = "flex";
});

cancelLogout.addEventListener("click", () => {
  popup.style.display = "none";
});

confirmLogout.addEventListener("click", () => {
  popup.style.display = "none";
  alert("You have been logged out 🌸");
});
