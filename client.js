const Library = require('./Library');

let collection = new Library('mongodb://localhost:27017', 'library', 'books');
collection.test();

// Finding All Books
const allBooks = async () => {
    const books = await collection.allBooks();
    books.forEach(book => console.log(book));
}

// Find One Book
const findOneBook = async () => {
    const foundBook = await collection.findOneBook('63e2ddc35688e0b8830c94b0');
    foundBook.forEach(book => console.log(book));
}

// Find Many Books
const findManyBooks = async () => {
    const manyFoundBooks = await collection.findManyBooks({"_id": "63e2ddc35688e0b8830c94b0", "qty": 1});
    manyFoundBooks.forEach(books => console.log(books));
}

// Add Book
const addBook = collection.insertOne(
   
    {
        "title": "adding title",
        "author": "adding author",
        "copies": 1
    }
)

// Change Book



module.exports = Library;