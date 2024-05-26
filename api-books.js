
export const getBooks = async () => {
    let response = await fetch('http://openlibrary.org/subjects/love.json')
    let data = await response.json()

    console.log('data', data);

    // the format of the books coming from the API does not match
    // my initial model, I will transform each work / book into that
    // before returning
    return data.works.map(book => ({
        id: book.key.replace('/works/', ''),
        title: book.title,
        authors: book.authors.map(author => author.name).join(", "),
        year: book.first_publish_year,
        description: 'Not available',
        coverImage: `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`,
        read: false
    }));
}    