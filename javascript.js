const test = document.querySelector(".test");

const myLibrary = [];

function Book(title, author, pages, status) {
  if (!new.target) {
    throw Error("use new on Book");
  }
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
  this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, status) {
  // take params, create a book then store it in the array
  return myLibrary.push(new Book(title, author, pages, status));
}

addBookToLibrary('SampleOne', 'a', '1', 'read');
// addBookToLibrary('SampleTwo', 'a', '1', 'read');
// console.log(addBookToLibrary('Sample', 'a', '1', 'read'));

// console.log(myLibrary);

function renderBook(arrayLibrary) {
  return test.textContent = arrayLibrary.map(books => books.title) + arrayLibrary.map(books => books.author);
}
console.log(renderBook(myLibrary));

// console.log(myLibrary.map(books => books.title));

// users.map(user => user.name);
