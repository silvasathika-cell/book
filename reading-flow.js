/* HAMBURGER MENU */
document.getElementById("hamburger").onclick = () => {
  document.getElementById("navLinks").classList.toggle("show");
};


/* ========================= */
/* BOOK CONTENT – FIRST PAGE */
/* ========================= */

const bookContent = {
  richdad: {
    title: "Rich Dad Poor Dad",
    text: "Growing up, I was guided by two very different father figures who shared completely opposite views about money and success. One believed in working hard, getting a secure job, and relying on academic qualifications to achieve financial stability. The other believed that financial freedom came from understanding how money works and learning to build assets rather than depending on a salary. As a child, these conflicting ideas often confused me, but they also encouraged curiosity. I began to question traditional beliefs about wealth and education. These early conversations shaped my mindset and laid the foundation for lessons about financial independence, risk-taking, and personal responsibility that would influence my future decisions."
  },

  winfriends: {
    title: "How to Win Friends and Influence People",
    text: "Human relationships play a powerful role in shaping success, happiness, and personal growth. This book opens by explaining that many people struggle not because they lack intelligence, but because they fail to understand others. The author introduces the idea that listening, empathy, and appreciation are more effective than criticism or control. Through simple examples, readers are encouraged to reflect on their daily interactions and how small changes in attitude can create meaningful improvements. The opening sets the tone for learning how genuine interest in people can build trust, strengthen communication, and create opportunities in both personal and professional life."
  },

  shoedog: {
    title: "Shoe Dog",
    text: "The story begins with a young man searching for purpose after completing his education. Unsure of his future, he embarks on a journey that introduces him to ideas, cultures, and opportunities that will later define his career. With little money and plenty of doubt, he begins selling shoes from his car, driven by belief rather than certainty. Early challenges include financial stress, skepticism from others, and constant risk. The opening captures the reality of entrepreneurship—uncertain, exhausting, and emotionally demanding—while highlighting the passion and perseverance required to turn a simple idea into something meaningful."
  },

  heatedrivalry: {
    title: "Heated Rivalry",
    text: "The story opens in the intense world of professional sports, where competition defines identity and reputation. Two athletes meet as rivals, each determined to outperform the other on the ice. Their interactions are filled with tension, pride, and unspoken emotions. As the pressure of public expectations grows, both characters struggle to balance ambition with personal desires. The opening chapter establishes a fast-paced environment shaped by rivalry, secrecy, and emotional conflict. Readers are introduced to characters who must navigate fame, performance, and personal identity in a world where vulnerability is rarely accepted."
  },

  terms: {
    title: "Terms and Conditions",
    text: "A structured, controlled world is introduced where power, business, and responsibility dominate everyday life. The main character operates with discipline and authority, believing that rules and contracts define success. Unexpectedly, a personal connection begins to challenge this rigid lifestyle. The opening focuses on professional ambition, internal conflict, and emotional restraint. As boundaries blur between work and personal life, readers sense that control may come at a cost. The first chapter establishes themes of trust, vulnerability, and emotional growth within a high-pressure environment."
  },

  loseguy: {
    title: "How to Lose a Guy in 10 Days",
    text: "The story begins with confidence, humor, and a bold challenge that blends romance with strategy. The main character approaches love with determination and a clear objective, believing she can control the outcome. As the plan unfolds, unexpected emotions begin to interfere. The opening introduces playful tension, misunderstandings, and moments of self-reflection. Readers are drawn into a light-hearted narrative that explores how attraction often ignores logic and expectations. Beneath the humor, the story hints at deeper emotional lessons about honesty, connection, and vulnerability."
  },

  fourthwing: {
    title: "Fourth Wing",
    text: "A dangerous and unforgiving world is introduced where strength determines survival. The main character enters a military academy known for its brutality, where failure often leads to death. Surrounded by competitors who view weakness as opportunity, she must rely on intelligence rather than physical power. The opening chapter establishes constant tension, fear, and determination. Dragons, rivalries, and strict rules shape daily life, forcing characters to adapt quickly. This introduction sets the stage for a story driven by courage, resilience, and the cost of ambition."
  },

  alchemised: {
    title: "Alchemised",
    text: "The opening presents a world filled with secrets, political tension, and moral uncertainty. Characters are introduced in situations where choices are rarely simple and power often demands sacrifice. The atmosphere is dark and thoughtful, encouraging readers to question loyalty and ambition. Through subtle interactions and internal conflict, the story hints at deeper struggles beneath the surface. The first chapter establishes a complex fantasy environment where trust is fragile and survival depends on strategy as much as strength."
  },

  acotar: {
    title: "A Court of Thorns and Roses",
    text: "The story begins in a harsh land where survival depends on skill and caution. Feyre, a young huntress, struggles daily to provide for her family in a world filled with danger. A single decision leads her into an unfamiliar magical realm governed by powerful beings. The opening introduces fear, mystery, and tension as Feyre confronts the consequences of her actions. As she crosses into this new world, readers sense that her life is about to change forever. The chapter sets the foundation for a journey involving magic, danger, and unexpected connection."
  }
};


/* ========================= */
/* BOOK SELECT LOGIC */
/* ========================= */

document.getElementById("bookSelect").addEventListener("change", function () {
  const selectedBook = this.value;

  if (selectedBook === "") {
    bookTitle.innerText = "";
    bookText.innerText = "";
    return;
  }

  bookTitle.innerText = bookContent[selectedBook].title;
  bookText.innerText = bookContent[selectedBook].text;
});


/* COZY SOUND */
const audio = document.getElementById("cozyAudio");

document.getElementById("playSound").onclick = () => {
  audio.play();
};

document.getElementById("stopSound").onclick = () => {
  audio.pause();
  audio.currentTime = 0;
};

/* COMPLETED BOOKS */
const input = document.getElementById("bookInput");
const list = document.getElementById("completedList");

function loadBooks() {
  const saved = JSON.parse(localStorage.getItem("completedBooks")) || [];
  list.innerHTML = "";
  saved.forEach(book => {
    const li = document.createElement("li");
    li.textContent = book;
    list.appendChild(li);
  });
}

document.getElementById("addBook").onclick = () => {
  if (!input.value) return;

  const books = JSON.parse(localStorage.getItem("completedBooks")) || [];
  books.push(input.value);
  localStorage.setItem("completedBooks", JSON.stringify(books));

  input.value = "";
  loadBooks();
};

loadBooks();

/* NEWSLETTER */
document.getElementById("subscribeBtn").onclick = () => {
  const email = newsletterEmail.value;
  if (!email) return;

  localStorage.setItem("newsletterEmail", email);
  newsletterMsg.textContent = "Subscribed successfully!";
  newsletterMsg.style.color = "lightgreen";
  newsletterEmail.value = "";
};
