const container = document.querySelector(".container");

const myLibrary = [];

function Book(title, author, pages, status, id) {
    if (!new.target) throw Error("Use new on Book");
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.id = id;
}

function addBookToLibrary(title, author, pages, status) {
    let id = crypto.randomUUID();
    const newBook = new Book(title, author, pages, status, id);
    myLibrary.push(newBook);
    renderBook(myLibrary);
}

addBookToLibrary('Harry Potter', 'JK Rowling', '1657', 'Not Read');
// addBookToLibrary('Game of Thrones', 'George R.R. Martin', '2158', 'Read');
// addBookToLibrary('Harry Potter', 'JK Rowling', '1657', 'Not Read');
// addBookToLibrary('Game of Thrones', 'George R.R. Martin', '2158', 'Read');
// addBookToLibrary('Harry Potter', 'JK Rowling', '1657', 'Not Read');
// addBookToLibrary('Game of Thrones', 'George R.R. Martin', '2158', 'Read');
// addBookToLibrary('Harry Potter', 'JK Rowling', '1657', 'Not Read');
// addBookToLibrary('Game of Thrones', 'George R.R. Martin', '2158', 'Not Read');



function renderBook(arrayLibrary) {
    container.innerHTML = '';

    arrayLibrary.forEach(book => {
        createBookCard(book);
    });
}

function createBookCard(book) {
    let bookCardElement = document.createElement("div");
    bookCardElement.setAttribute("class", "book-card");

    // Title & Pages aligned inline
    let bookHeader = document.createElement("div");
    bookHeader.setAttribute("class", "book-header");

    let pTitle = document.createElement("p");
    pTitle.setAttribute("class", "title");
    pTitle.textContent = book.title;

    let pPages = document.createElement("p");
    pPages.setAttribute("class", "pages");
    pPages.textContent = `${book.pages} pages`;

    bookHeader.appendChild(pTitle);
    bookHeader.appendChild(pPages);
    bookCardElement.appendChild(bookHeader);

    // Author and status
    let pAuthor = document.createElement("p");
    pAuthor.setAttribute("class", "author");
    pAuthor.textContent = `by ${book.author}`;

    let pStatus = document.createElement("p");
    pStatus.setAttribute("class", "status");
    pStatus.textContent = book.status;

    // Toggle Read/Unread button
    let toggleButton = document.createElement("button");
    toggleButton.setAttribute("class", "toggle-status");
    toggleButton.textContent = book.status === "Read" ? "Mark as Unread" : "Mark as Read";

    toggleButton.addEventListener("click", () => {
        book.status = book.status === "Read" ? "Not Read" : "Read";
        pStatus.textContent = book.status;
        toggleButton.textContent = book.status === "Read" ? "Mark as Unread" : "Mark as Read";
        toggleButton.classList.toggle("read", book.status === "Read");
    });

    // Delete button
    let deleteButton = document.createElement("button");
    deleteButton.setAttribute("class", "delete-book");
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", () => {
        let index = myLibrary.findIndex(b => b.id === book.id);
        if (index !== -1) {
            myLibrary.splice(index, 1);
            bookCardElement.remove();
        }
    });

    // Container for inline buttons
    let actionsContainer = document.createElement("div");
    actionsContainer.setAttribute("class", "book-actions");
    actionsContainer.appendChild(toggleButton);
    actionsContainer.appendChild(deleteButton);

    bookCardElement.appendChild(pAuthor);
    bookCardElement.appendChild(pStatus);
    bookCardElement.appendChild(actionsContainer);
    container.appendChild(bookCardElement);
}
