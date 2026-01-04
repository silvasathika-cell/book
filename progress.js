/* HAMBURGER MENU */
document.getElementById("hamburger").addEventListener("click", function () {
  document.getElementById("navLinks").classList.toggle("show");
});

/* ACTIVE PAGE UNDERLINE */
let currentPage = window.location.pathname.split("/").pop();
document.querySelectorAll(".nav-links a").forEach(function (link) {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

/* CALCULATE PROGRESS */
document.getElementById("progressForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const total = Number(document.getElementById("totalPages").value);
  const read = Number(document.getElementById("pagesRead").value);
  const speed = Number(document.getElementById("speed").value);

  if (total === 0 || speed === 0) {
    alert("Please enter valid numbers");
    return;
  }

  const percent = Math.min((read / total) * 100, 100).toFixed(1);
  const remaining = total - read;
  const days = Math.ceil(remaining / speed);

  document.getElementById("percent").textContent = percent + "%";
  document.getElementById("finishTime").textContent = days + " days";
  document.getElementById("progressFill").style.width = percent + "%";
});


/* SAVE TO LOCAL STORAGE */
document.getElementById("saveBtn").addEventListener("click", function () {
  const data = {
    total: document.getElementById("totalPages").value,
    read: document.getElementById("pagesRead").value,
    speed: document.getElementById("speed").value
  };

  localStorage.setItem("readingProgress", JSON.stringify(data));
  alert("Progress saved!");
});


/* LOAD SAVED DATA */
window.addEventListener("load", function () {
  const saved = JSON.parse(localStorage.getItem("readingProgress"));

  if (saved) {
    document.getElementById("totalPages").value = saved.total;
    document.getElementById("pagesRead").value = saved.read;
    document.getElementById("speed").value = saved.speed;
  }
});


/* NEWSLETTER */
subscribeBtn.onclick = () => {
  const email = newsletterEmail.value;
  if (!email) return;

  localStorage.setItem("newsletterEmail", email);
  msg.textContent = "Subscribed successfully!";
};
