/* HAMBURGER */
document.getElementById("hamburger").onclick = () => {
  document.getElementById("navLinks").classList.toggle("show");
};

/* ACTIVE NAV PAGE */
let currentPage = window.location.pathname.split("/").pop();
document.querySelectorAll(".nav-links a").forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

/* BOOK DATA */
const books = [
  {
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    genre: "Business",
    image: "img/2.jpg",
    synopsis: "A powerful personal finance book that contrasts two perspectives on money, investing, and wealth-building.",
    sequels: ["Cashflow Quadrant"],
    ratings: [{ source: "Goodreads", rating: "4.1" }]
  },
  {
    title: "How to Win Friends and Influence People",
    author: "Dale Carnegie",
    genre: "Business",
    image: "img/5.jpg",
    synopsis: "A timeless guide to communication, leadership, and building meaningful relationships.",
    sequels: [],
    ratings: [{ source: "Goodreads", rating: "4.3" }]
  },
  {
    title: "Shoe Dog",
    author: "Phil Knight",
    genre: "Business",
    image: "img/6.jpg",
    synopsis: "The inspiring memoir of Nike’s founder and the journey behind one of the world’s most iconic brands.",
    sequels: [],
    ratings: [{ source: "Goodreads", rating: "4.5" }]
  },
  {
    title: "Heated Rivalry",
    author: "Rachel Reid",
    genre: "Romance",
    image: "img/4.jpg",
    synopsis: "A passionate enemies-to-lovers romance set in the competitive world of professional hockey.",
    sequels: ["The Long Game"],
    ratings: [{ source: "Goodreads", rating: "4.4" }]
  },
  {
    title: "Terms and Conditions",
    author: "Lauren Asher",
    genre: "Romance",
    image: "img/8.jpg",
    synopsis: "A billionaire romance featuring fake dating, workplace tension, and emotional growth.",
    sequels: ["The Fine Print"],
    ratings: [{ source: "Goodreads", rating: "4.2" }]
  },
  {
    title: "How to Lose a Guy in 10 Days",
    author: "Michele Alexander",
    genre: "Romance",
    image: "img/3.jpg",
    synopsis: "A fun romantic story about love, misunderstandings, and unexpected emotional connections.",
    sequels: [],
    ratings: [{ source: "Goodreads", rating: "3.9" }]
  },
  {
    title: "Fourth Wing",
    author: "Rebecca Yarros",
    genre: "Fantasy",
    image: "img/10.jpg",
    synopsis: "A thrilling fantasy about dragon riders, war colleges, and dangerous magical bonds.",
    sequels: ["Iron Flame"],
    ratings: [{ source: "Goodreads", rating: "4.6" }]
  },
  {
    title: "Alchemised",
    author: "SenLinYu",
    genre: "Fantasy",
    image: "img/11.jpg",
    synopsis: "A dark fantasy filled with political intrigue, power struggles, and moral dilemmas.",
    sequels: [],
    ratings: [{ source: "Goodreads", rating: "4.4" }]
  },
  {
    title: "A Court of Thorns and Roses",
    author: "Sarah J. Maas",
    genre: "Fantasy",
    image: "img/12.jpg",
    synopsis: "A fantasy romance retelling inspired by Beauty and the Beast, filled with magic and danger.",
    sequels: ["A Court of Mist and Fury", "A Court of Wings and Ruin"],
    ratings: [{ source: "Goodreads", rating: "4.5" }]
  }
];

const container = document.getElementById("booksContainer");

/* DISPLAY BOOKS */
function displayBooks(list) {
  container.innerHTML = "";
  list.forEach((book, index) => {
    container.innerHTML += `
      <div class="book-card">
        <img src="${book.image}">
        <h3>${book.title}</h3>
        <p>${book.author}</p>
        <button onclick="openModal(${index})">View Details</button>
      </div>
    `;
  });
}

displayBooks(books);

/* SEARCH & FILTER */
searchInput.addEventListener("input", filterBooks);
genreFilter.addEventListener("change", filterBooks);

function filterBooks() {
  const text = searchInput.value.toLowerCase();
  const genre = genreFilter.value;

  const filtered = books.filter(book =>
    (book.title.toLowerCase().includes(text) ||
     book.author.toLowerCase().includes(text)) &&
    (genre === "all" || book.genre === genre)
  );

  displayBooks(filtered);
}

/* MODAL */
const modal = document.getElementById("bookModal");

function openModal(index) {
  const book = books[index];
  modal.style.display = "flex";

  modalTitle.textContent = book.title;
  modalAuthor.textContent = book.author;
  modalSynopsis.textContent = book.synopsis;
  modalImage.src = book.image;

  modalSequels.innerHTML = book.sequels.length
    ? book.sequels.map(s => `<li>${s}</li>`).join("")
    : "<li>None</li>";

  modalRatings.innerHTML = book.ratings
    .map(r => `<tr><td>${r.source}</td><td>${r.rating}</td></tr>`)
    .join("");
}

closeModal.onclick = () => modal.style.display = "none";

/* NEWSLETTER */
subscribeBtn.onclick = () => {
  const email = newsletterEmail.value;
  if (!email) return;

  localStorage.setItem("newsletterEmail", email);
  subscribeMsg.textContent = "Subscribed successfully!";
};
