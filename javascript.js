const myLibrary = [];

function Book(title, author, pages, read) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor!");
    }
    this.id = generateID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
  // take params, create a book then store it in the array
}

//generates random id for new books || when called it returns the random id
function generateID() {
    return crypto.randomUUID();
}

const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', '295', 'not read yet');
console.log(theHobbit);