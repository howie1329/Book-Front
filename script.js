const form = document.getElementById('form')
const bookTitle = document.getElementById('book-title')
const bookAuthor = document.getElementById('book-author')
const bookPages = document.getElementById('book-pages')
const bookStatus = document.getElementById('book-status')
const submitBtn = document.getElementById('submit-btn')
const output_Div = document.getElementById('output')

submitBtn.addEventListener('click', addbook)

output_Div.addEventListener('click', deleteBook)

function deleteBook(e){
    if(e.target.classList.contains('delete-btn')){
        e.target.parentElement.remove();
    }
    
    e.preventDefault();
}

function addbook(e){
    let title = bookTitle.value;
    let author = bookAuthor.value;
    let pages = bookPages.value;
    let status = bookStatus.checked;

    const card = document.createElement('div')
    card.className = 'card'

    const header = document.createElement('h3')
    header.textContent = 'Book Title: '+ title;

    const authorText = document.createElement('p')
    authorText.textContent = 'Book Author: ' + author;

    const pageText = document.createElement('p')
    pageText.textContent ='Number Of Pages: ' + pages;

    const btn = document.createElement('button')
    btn.textContent = 'Delete Book'
    btn.className = 'delete-btn'

    console.log(status)
    if(status == true){
        card.classList.add('read')
    }

    card.appendChild(header)
    card.appendChild(authorText)
    card.appendChild(pageText)
    card.appendChild(btn)

    output_Div.appendChild(card)

    bookTitle.value = '';
    bookAuthor.value = '';
    bookPages.value = '';
    bookStatus.checked = false;

    e.preventDefault();

}