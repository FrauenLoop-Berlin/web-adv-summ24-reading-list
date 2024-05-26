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

export const getBooks = async () => {
    return books;
}