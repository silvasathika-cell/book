/* HAMBURGER MENU */
document.getElementById("hamburger").addEventListener("click", function () {
    document.getElementById("navLinks").classList.toggle("show");
});

/* AUTO ROTATING QUOTES */
let quotes = [
    "Books open new worlds.",
    "A reader lives a thousand lives.",
    "Reading feeds the imagination."
];

let quoteElement = document.getElementById("quote");
let quoteIndex = 0;

setInterval(function () {
    if (quoteElement) {
        quoteElement.textContent = quotes[quoteIndex];
        quoteIndex = (quoteIndex + 1) % quotes.length;
    }
}, 3000);

/* AUTHOR OF THE DAY */
let authors = ["Jane Austen", "George Orwell", "J.K. Rowling"];
let authorElement = document.getElementById("author");

if (authorElement) {
    let today = new Date().getDate();
    authorElement.textContent =
        "Author of the Day: " + authors[today % authors.length];
}

/* ACTIVE NAV PAGE */
let currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".nav-links a").forEach(function (link) {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});

/* NEWSLETTER */
document.getElementById("subscribeBtn").addEventListener("click", function () {
    let email = document.getElementById("emailInput").value;
    let message = document.getElementById("newsletterMessage");

    if (email.includes("@")) {
        localStorage.setItem("newsletterEmail", email);
        message.textContent = "Subscribed successfully!";
        message.style.color = "lightgreen";
        emailInput.value = "";
    } else {
        message.textContent = "Please enter a valid email.";
        message.style.color = "red";
    }
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}