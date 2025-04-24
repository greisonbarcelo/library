const container = document.querySelector(".container");

const myLibrary = [];

function Book(title, author, pages, status, id) {
  if (!new.target) {
    throw Error("use new on Book");
  }
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
  this.id = id;
}

function addBookToLibrary(title, author, pages, status) {
  // take params, create a book then store it in the array
  let id = crypto.randomUUID();
  const newBook = new Book(title, author, pages, status, id);
  myLibrary.push(newBook);

  // function to display the book to the page
  renderBook(myLibrary);
}

addBookToLibrary('SampleOne', 'a', '1', 'read');
addBookToLibrary('SampleTwo', 'b', '2', 'read');


console.log(myLibrary);

function renderBook(arrayLibrary) {
  container.innerHTML = ''; // Clear existing content

  arrayLibrary.forEach(book => {
    createBookCard(book);
  });
}

function createBookCard(book) {
  const properties = ['title', 'author', 'pages', 'status', 'id'];

  let bookCardElement = document.createElement("div");
  let pTitle = document.createElement("p");
  let pAuthor = document.createElement("p");
  let pPages = document.createElement("p");
  let pStatus = document.createElement("p");
  let pId = document.createElement("p");

  bookCardElement.setAttribute("class", "book-card");
  pTitle.setAttribute("class", "title");
  pAuthor.setAttribute("class", "author");
  pPages.setAttribute("class", "pages");
  pStatus.setAttribute("class", "status");
  pId.setAttribute("class", "id");

  pTitle.textContent = book.title;
  pAuthor.textContent = book.author;
  pPages.textContent = book.pages;
  pStatus.textContent = book.status;
  pId.textContent = book.id;

  container.appendChild(bookCardElement);
  bookCardElement.appendChild(pTitle);
  bookCardElement.appendChild(pAuthor);
  bookCardElement.appendChild(pPages);
  bookCardElement.appendChild(pStatus);
  bookCardElement.appendChild(pId);
}
