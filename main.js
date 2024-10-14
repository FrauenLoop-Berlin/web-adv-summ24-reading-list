const request = new XMLHttpRequest();
request.open("GET", "https://openlibrary.org/people/mekBot/books/want-to-read.json", false);
request.send(null);
const response = request.responseText;

const listItemsHTML = JSON.parse(response).reading_log_entries.map((entry) => { //usando .parse() para converter os dados da api em obj
        const titleHTML = `<b>${entry.work.title}</b>`;
        const authorsHTML = `${entry.work.author_names.join(" & ")}`;
        const buttonHTML = `<button class="button">Mark as read ⏳</button>`;

        return `
            <div class="book">
                ${titleHTML} by ${authorsHTML} ${buttonHTML}
            </div>
        `;
    });

const booksListDiv = document.querySelector("#books_list");
booksListDiv.innerHTML = listItemsHTML.join(""); //.join() para juntar minhas strings e não ter vírgula entre elas

const buttons = document.querySelectorAll(".button");
buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const currentText = e.currentTarget.innerHTML;

        if (currentText === "Mark as read ⏳") {
            e.currentTarget.innerHTML = "Read ✅";
        } else {
            e.currentTarget.innerHTML = "Mark as read ⏳";
        }
    });
});