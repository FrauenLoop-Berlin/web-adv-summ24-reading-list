// I will put the main logic to display books in a function
// so later on I can do some unit tests on this piece of code
async function getAndDisplayBooks(getBooks, domRoot, isReadClickHandler) {
    // This can fail, so I wrap it with a try / catch
    try {
        const books = await getBooks();
        console.log('Books received: ', books);
        if (books) {
            books.forEach((book) => {
                // Create a div (or card) for the book 
                let cardDiv = domRoot.createElement('div');
                cardDiv.classList.add("row");
            
                let initialCheckState = (book.read) ? 'checked="true"' : '';
            
                // Set the content of the book div with all the details like title, 
                cardDiv.innerHTML = `
                <div class="card mb-3" style="max-width: 540px;">
                    <div class="row g-0">
                        <div class="col-md-4">
                        <img src="${book.coverImage}" class="card-img-top" />
                        </div>
                        <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${book.title}</h5>
                            <p class="card-text"><b>Authors:</b> ${book.authors}</p>
                            <p class="card-text"><b>Year:</b> ${book.year}</p>
                            <p class="card-text">${book.description}</p>
                            <input type="checkbox" name="isRead" id="isRead_${book.id}" value="true" ${initialCheckState} /> Read it
                        </div>
                        </div>
                    </div>
                </div>  
                `;
            
                // add this book to the main container element
                domRoot.getElementById('baseContainer').append(cardDiv);

                // Attach the event listener to the checkbox
                const checkbox = cardDiv.querySelector(`#isRead_${book.id}`);
                checkbox.addEventListener('click', function(e) {
                    isReadClickHandler(e.target.id, books);
                });
            }); 
        }    
    } catch (error) {
        // show some error block
        console.log('an error happened', error);

        let failDiv = domRoot.createElement('div');
        failDiv.classList.add('row');
        failDiv.innerHTML = "Could not load the books";
        domRoot.getElementById('baseContainer').append(failDiv);
    }
}

export { getAndDisplayBooks };