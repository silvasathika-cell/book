/* HAMBURGER */
document.getElementById("hamburger").onclick = () => {
  document.getElementById("navLinks").classList.toggle("show");
};

/* FEEDBACK FORM */
document.getElementById("feedbackForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const feedback = {
    name,
    email,
    message,
    date: new Date().toLocaleString()
  };

  localStorage.setItem("feedback", JSON.stringify(feedback));

  document.getElementById("confirmMsg").textContent =
    "Thank you! Your feedback has been submitted.";
  document.getElementById("confirmMsg").style.color = "green";

  this.reset();
});

/* FAQ ACCORDION */
document.querySelectorAll(".faq-question").forEach(btn => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    answer.style.display =
      answer.style.display === "block" ? "none" : "block";
  });
});

/* NEWSLETTER */
document.getElementById("subscribeBtn").onclick = () => {
  const email = document.getElementById("newsletterEmail").value;
  if (!email.includes("@")) return;

  localStorage.setItem("newsletterEmail", email);
  document.getElementById("newsletterMsg").textContent =
    "Subscribed successfully!";
};
