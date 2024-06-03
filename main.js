import { getBooks  } from "./api-books.js";
import { getAndDisplayBooks  } from "./main-logic.js";

const isReadClickHandler = function (bookId, books) {
    books.forEach((book) => {
        console.log(`compare ${book.id} to ${bookId}`);
        if (bookId === `isRead_${book.id}`) {
            console.log('book clicked!', book.id);
            book.read = !book.read; // toggle the read property
        }
    });   
    console.log(`books`, books); 
}

getAndDisplayBooks(getBooks, document, isReadClickHandler);