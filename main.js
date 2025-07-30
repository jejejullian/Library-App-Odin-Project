// === DOM ELEMENTS (form inputs & table) ===
const bookTitleInput  = document.getElementById("title");
const bookAuthorInput = document.getElementById("author");
const bookPagesInput  = document.getElementById("pages");
const bookStatusInput = document.getElementById("status");
const bookForm        = document.getElementById("book-form");
const tableItems      = document.querySelector(".table__items");

// Data Library
let library = [];

// === Book Class ===
class Book {
  constructor(title, author, pages, isRead) {
    this.id      = crypto.randomUUID();
    this.title   = title;
    this.author  = author;
    this.pages   = pages;
    this.isRead  = isRead;
  }

  toggleReadStatus() {
    this.isRead = !this.isRead;
  }
}

// === Local Storage ===
function updateLocalStorage() {
  localStorage.setItem("library", JSON.stringify(library));
}

function loadFromLocalStorage() {
  const stored = localStorage.getItem("library");
  if (!stored) return;

  const parsed = JSON.parse(stored);
  library = parsed.map((b, idx) => {
    const book = new Book(b.title, b.author, b.pages, b.isRead);
    book.id = parsed[idx].id;
    return book;
  });

  displayBooks();
}

// === Add Book Handler ===
function addToBookLibrary(e) {
  e.preventDefault();

  const title   = bookTitleInput.value.trim();
  const author  = bookAuthorInput.value.trim();
  const pages   = bookPagesInput.value;
  const status  = bookStatusInput.value;

  if (title === "" || author === "" || pages === "" || status === "0") {
    alert("Please fill in all fields.");
    return;
  }

  const newBook = new Book(title, author, parseInt(pages), status === "read");
  library.push(newBook);
  updateLocalStorage();
  displayBooks();
  bookForm.reset();
}

// === Render Book List ===
function displayBooks() {
  tableItems.innerHTML = library.map((book) => `
    <tr id="${book.id}">
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.pages}</td>
      <td>
        <select class="status ${book.isRead ? "status--read" : "status--notread"}"
                data-id="${book.id}">
          <option value="read" ${book.isRead ? "selected" : ""}>read</option>
          <option value="not read" ${!book.isRead ? "selected" : ""}>not read</option>
        </select>
      </td>
      <td><button class="btn btn--delete">Delete</button></td>
    </tr>
  `).join("");

  removeItemBook();
  handleToggleReadStatus();
}

// === Handle Read/Not Read Toggle ===
function handleToggleReadStatus() {
  document.querySelectorAll(".status").forEach((select) => {
    select.addEventListener("change", () => {
      const bookId     = select.dataset.id;
      const findBook   = library.find((b) => b.id === bookId);
      if (findBook) {
        findBook.isRead = select.value === "read";
        updateLocalStorage();
        displayBooks();
      }
    });
  });
}

// === Handle Delete Book ===
function removeItemBook() {
  document.querySelectorAll(".btn--delete").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const row    = e.target.closest("tr");
      const bookId = row.id;
      library = library.filter((b) => b.id !== bookId);
      updateLocalStorage();
      displayBooks();
    });
  });
}

// === Init App ===
window.addEventListener("DOMContentLoaded", loadFromLocalStorage);
bookForm.addEventListener("submit", addToBookLibrary);
