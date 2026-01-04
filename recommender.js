/* HAMBURGER */
document.getElementById("hamburger").onclick = () => {
  document.getElementById("navLinks").classList.toggle("show");
};

/* BOOK DATA (JSON OBJECT) */
const books = [
  { title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", genre: "Business", length: "medium" },
  { title: "Shoe Dog", author: "Phil Knight", genre: "Business", length: "medium" },
  { title: "How to Win Friends & Influence People", author: "Dale Carnegie", genre: "Business", length: "short" },
  { title: "Heated Rivalry", author: "Rachel Reid", genre: "Romance", length: "medium" },
  { title: "Terms and Conditions", author: "Lauren Asher", genre: "Romance", length: "long" },
  { title: "Fourth Wing", author: "Rebecca Yarros", genre: "Fantasy", length: "long" },
  { title: "A Court of Thorns and Roses", author: "Sarah J. Maas", genre: "Fantasy", length: "long" }
];

let currentBook = null;

function recommendBook() {
  const genre = genreSelect.value;
  const length = lengthSelect.value;

  const filtered = books.filter(book =>
    (genre === "all" || book.genre === genre) &&
    (length === "all" || book.length === length)
  );

  if (filtered.length === 0) {
    bookTitle.textContent = "No books found";
    bookAuthor.textContent = "";
    bookInfo.textContent = "";
    return;
  }

  currentBook = filtered[Math.floor(Math.random() * filtered.length)];

  bookTitle.textContent = currentBook.title;
  bookAuthor.textContent = "by " + currentBook.author;
  bookInfo.textContent = currentBook.genre + " • " + currentBook.length;
}

pickBtn.onclick = recommendBook;
pickAgainBtn.onclick = recommendBook;

/* SAVE TO READING LIST */
saveBtn.onclick = () => {
  if (!currentBook) return;

  let list = JSON.parse(localStorage.getItem("readingList")) || [];
  list.push(currentBook);
  localStorage.setItem("readingList", JSON.stringify(list));

  message.textContent = "Saved to reading list!";
};

/* NEWSLETTER */
subscribeBtn.onclick = () => {
  const email = newsletterEmail.value;
  if (!email.includes("@")) return;

  localStorage.setItem("newsletterEmail", email);
  newsletterMessage.textContent = "Subscribed successfully!";
};
