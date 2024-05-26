let books = [
    {
        id: "b1",
        title: 'Künstliche Intelligenz',
        authors: 'H. L Dreyfus & S. E Dreyfus',
        year: '1986',
        description: 'a great book about AI',
        coverImage: 'https://m.media-amazon.com/images/I/71HV7JNWBgL._AC_UF894,1000_QL80_.jpg',
        read: false
    }, {
        id: "b2",
        title: 'Neuromancer',
        authors: 'William Gibson',
        year: '1984',
        description: 'a classic cyberpunk novel',
        coverImage: 'https://m.media-amazon.com/images/I/71HV7JNWBgL._AC_UF894,1000_QL80_.jpg',
        read: true
    },
    {
        id: "b3",
        title: 'The Hitchhiker\'s Guide to the Galaxy',
        authors: 'Douglas Adams',
        year: '1979',
        description: 'a hilarious science fiction classic',
        coverImage: 'https://m.media-amazon.com/images/I/71HV7JNWBgL._AC_UF894,1000_QL80_.jpg',
        read: true
    },
    {
        id: "b4",
        title: 'Pride and Prejudice',
        authors: 'Jane Austen',
        year: '1813',
        description: 'a classic novel of manners and love',
        coverImage: 'https://m.media-amazon.com/images/I/71HV7JNWBgL._AC_UF894,1000_QL80_.jpg',
        read: false
    },
    {
        id: "b4",
        title: 'To the Lighthouse',
        authors: 'Virginia Woolf',
        year: '1927',
        description: 'a modernist novel exploring consciousness and perception',
        coverImage: 'https://m.media-amazon.com/images/I/71HV7JNWBgL._AC_UF894,1000_QL80_.jpg',
        read: false
    }, {
        id: "b5",
        title: 'The Handmaid\'s Tale',
        authors: 'Margaret Atwood',
        year: '1985',
        description: 'a dystopian novel exploring themes of power and control',
        coverImage: 'https://m.media-amazon.com/images/I/71HV7JNWBgL._AC_UF894,1000_QL80_.jpg',
        read: false
    },
    {
        id: "b6",
        title: 'To Kill a Mockingbird',
        authors: 'Harper Lee',
        year: '1960',
        description: 'a powerful novel addressing racial injustice',
        coverImage: 'https://m.media-amazon.com/images/I/71HV7JNWBgL._AC_UF894,1000_QL80_.jpg',
        read: false
    }
];

function isReadClick(e) {
    console.log(e);
    console.log(`This was called from ${e.target.id}`);
    alert("called");
}

books.forEach((book) => {
    // Create a div (or card) for the book 
    let cardDiv = document.createElement('div');
    cardDiv.classList.add("row");
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
                <input type="checkbox" name="isRead" id="isRead_${book.id}" value="true" ${initialCheckState} onclick="javascript:isReadClick(event)"/> Read it
            </div>
            </div>
        </div>
    </div>  
    `;

    // add this book to the main container element
    document.getElementById('baseContainer').append(cardDiv);
});  