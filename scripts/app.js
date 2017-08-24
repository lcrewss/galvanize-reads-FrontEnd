$(document).ready(function(){

  $('#modal1').modal();
const baseURL = "postgres://xlmshnsteptxcr:163bd40f4cd9563bb0889e328ee411d933e7f92d5d4e8edf0f9e7f4ebcb1781d@ec2-107-22-167-179.compute-1.amazonaws.com:5432/ddv7fg66p0q0k5"
// const baseURL = "http://localhost:8080/books"

$.get(`${baseURL}`)
  .then(function (data) {
    for (var i = 0; i < data.length; i++) {
      appendBook(data[i])

    }
  })

function appendBook(book) {
		$('#bookCover').append(
    `<div class="card col s12 m3">
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
      </div>`
  )
}

const authorURL = "http://localhost:8080/author"
$.get(`${authorURL}`)
  .then(function (data) {
    for (var i = 0; i < data.length; i++) {
      appendAuthor(data[i])

    }
  })

function appendAuthor(author) {
  console.log('hello');
		// $('#authorCover').append
  //   `<div class="card col s12 m3">
  //       <div class="card-image waves-effect waves-block waves-light">
  //         <img class="activator" src="${author.portrait} ">
  //       </div>
  //       <div class="card-content">
  //         <span class="card-title activator grey-text text-darken-4">${author.}<i class="material-icons right">more_vert</i></span>
  //         <p><a href="#">Delete Book</a></p>
  //       </div>
  //       <div class="card-reveal">
  //         <span class="card-title grey-text text-darken-4">${book.bookTitle}<i class="material-icons right">close</i></span>
  //         <p>${book.bookDescription}</p>
  //       </div>
  //     </div>`
  // )
};
});
