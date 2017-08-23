$(document).ready(function(){

const baseURL = "http://localhost:8080/books"
// const bookTitle = []
// const bookCover = []
// const bookDescription = []

$.get(`${baseURL}`)
  .then(function (data) {
    for (var i = 0; i < data.length; i++) {
      appendBook(data[i])

      // bookTitle.push(data[i].bookTitle);
      // bookCover.push(data[i].bookCover);
      // bookDescription.push(data[i].bookDescription)
    }
    // return data
  })
  // .then(function(data){
  //   appendBookCover(data)
  // })
})

function appendBook(book) {
		$('#bookCover').append(
    `<div class="row">
      <div class="card col s12 m2">
        <div class="card-image waves-effect waves-block waves-light">
          <img class="activator" src="${book.bookCover}">
        </div>
        <div class="card-content">
          <span class="card-title activator grey-text text-darken-4">${book.bookTitle}<i class="material-icons right">more_vert</i></span>
          <p><a href="#">Delete Book</a></p>
        </div>
        <div class="card-reveal">
          <span class="card-title grey-text text-darken-4">${book.bookTitle}<i class="material-icons right">close</i></span>
          <p>${book.bookDescription}</p>
        </div>
      </div>
    </div>`
  )


};
