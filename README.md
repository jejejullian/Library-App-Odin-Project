
# 📚 Library App

A simple web application built as part of [The Odin Project's](https://www.theodinproject.com/) JavaScript curriculum. Users can add books to a virtual library, track their reading status, and remove books.

## 🔗 Live Demo

[Live Show Link Here](https://your-link.netlify.app) <!-- Ganti ini dengan link kamu -->

## ✨ Features

- Add new books with title, author, pages, and read status
- Display books in a styled grid layout
- Toggle read/unread status dynamically
- Remove books from the library
- Save library to `localStorage` so data persists after page reload

## 🛠️ Built With

- **HTML5**
- **SCSS** (modular and responsive)
- **JavaScript (ES6+)**
- `localStorage` for persistence

## 📁 Project Structure

```
📦library-app
 ┣ 📂css/
 ┃ ┗ style.css (compiled from SCSS)
 ┣ 📂scss/
 ┃ ┗ main.scss
 ┣ index.html
 ┣ script.js
 ┗ README.md
```

## 📌 How It Works

- When a book is added, it is stored in the `library` array.
- `displayBooks()` renders all books to the DOM.
- Book objects use a class `Book` with properties and methods.
- Read status can be toggled using a dropdown (`select`).
- Data is synced to `localStorage` using `JSON.stringify()` and loaded on page refresh using `JSON.parse()`.

## 📚 Learning Notes

- Practiced using **constructor functions & classes**
- Manipulated the DOM with event listeners
- Used `data-*` attributes to bind DOM elements to JS objects
- Improved responsive design using SCSS variables and media queries
- Learned how to persist data with `localStorage`

---

🧠 *This project helped reinforce core DOM manipulation and object-oriented programming concepts in vanilla JavaScript.*
