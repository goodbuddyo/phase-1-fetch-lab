
// To pass the tests, don't forget to return your fetch!

function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then((resp) => resp.json())
    .then((resp) => renderBooks(resp))

  //.then((resp) => console.log(resp))
  //.then((resp) => resp.json())



  //.then((data) => console.log(data[0]))
  //.then((data) => renderBooks(data))
};

function renderBooks(books) {
  const main=document.querySelector('main');
  books.forEach(book => {
    const h2=document.createElement('h2');
    h2.innerHTML=book.name;
    main.appendChild(h2);
  });
}




document.addEventListener('DOMContentLoaded',function() {
  //fetchBooks()
  return fetchBooks()
  //renderBooks(fetchBooks)
}
)
