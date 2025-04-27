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
addBookToLibrary('Game of Thrones', 'George R.R. Martin', '2158', 'Read');
addBookToLibrary('Harry Potter', 'JK Rowling', '1657', 'Not Read');
addBookToLibrary('Game of Thrones', 'George R.R. Martin', '2158', 'Read');
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

    let pAuthor = document.createElement("p");
    pAuthor.setAttribute("class", "author");
    pAuthor.textContent = `by ${book.author}`;

    let pStatus = document.createElement("p");
    pStatus.setAttribute("class", "status");
    pStatus.textContent = book.status;

    let toggleButton = document.createElement("button");
    toggleButton.setAttribute("class", "toggle-status");
    toggleButton.textContent = book.status === "Read" ? "Mark as Unread" : "Mark as Read";

    // **Apply correct color when book is created**
    if (book.status === "Read") {
        toggleButton.classList.add("read");
    }

    toggleButton.addEventListener("click", () => {
        book.status = book.status === "Read" ? "Not Read" : "Read";
        pStatus.textContent = book.status;
        toggleButton.textContent = book.status === "Read" ? "Mark as Unread" : "Mark as Read";
        
        // **Update button color dynamically**
        toggleButton.classList.toggle("read", book.status === "Read");
    });

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

    let actionsContainer = document.createElement("div");
    actionsContainer.setAttribute("class", "book-actions");
    actionsContainer.appendChild(toggleButton);
    actionsContainer.appendChild(deleteButton);

    bookCardElement.appendChild(pAuthor);
    bookCardElement.appendChild(pStatus);
    bookCardElement.appendChild(actionsContainer);
    container.appendChild(bookCardElement);
}









// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
    document.body.classList.add("modal-open"); // Disable scrolling
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    document.body.classList.remove("modal-open"); // Enable scrolling
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.classList.remove("modal-open"); // Enable scrolling
    }
};




let form = document.querySelector("form");
let addNewBook = document.querySelector(".addNewBook");
let formTitle = document.querySelector("#form-title");
let formAuthor = document.querySelector("#form-author");
let formPages = document.querySelector("#form-pages");
let formStatus = document.querySelector("#form-status"); // Correctly selecting checkbox

addNewBook.addEventListener("click", (event) => {
    event.preventDefault();
    
    let readStatus = formStatus.checked ? "Read" : "Not Read"; // Correctly checks if it's checked
    addBookToLibrary(formTitle.value, formAuthor.value, formPages.value, readStatus);
    modal.style.display = "none";
    form.reset();
});


