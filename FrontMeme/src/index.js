const endPoint = "http://localhost:3000/memes"

const memes = [];



document.addEventListener("DOMContentLoaded", init);

function init() {
  // Meme.getMeme();
  document.getElementById('render-list').innerHTML = '';
  fetch(endPoint)
    .then(response => response.json())
    .then(memes => {
      console.log(memes);
      append(memes);
    })
}

function getAllMemes() {
  fetch(endPoint)
    .then(r => r.json())
    .then(response => {
      console.log(response.data)
      // append(data);
    })
}

function append(memes) {
  let ul = document.createElement('ul');
  ul.setAttribute('id', 'meme-list');
  document.getElementById('render-list').appendChild(ul);

  for (let i = 0; i < memes.length; i++) {
    let meme = memes[i];

    let img = document.createElement('img');
    img.src = meme.image_url;
    let p = document.createElement("p");
    p.setAttribute('class', 'text-lg leading-6 font-medium text-gray-900 px-4 py-5 sm:px-6');
    p.innerText = meme.title;

    createList(ul, img, p, meme);
  }
}

function getCommentsElem(comments) {
  let container = document.createElement("div");
  container.setAttribute("class", "comments-container");
  for (let i = 0; i < comments.length; i++) {
    let comment = comments[i];
    let elem = document.createElement("div");

    elem.innerHTML = comment.content;
    container.append(elem);
  }

  return container;
}

function createList(ul, img, p, meme) {
  let li = make("li")

  let commentForm = document.querySelector('#comment-form').cloneNode(true);
  commentForm.setAttribute('id', "comment-form-" + meme.id)
  commentForm.setAttribute('class', '')
  li.setAttribute('class', 'bg-white shadow overflow-hidden sm:rounded-lg mt-8');
  li.append(img);
  li.append(p);
  li.append(getCommentsElem(meme.comments))

  li.append(commentForm);
  ul.append(li);

  document.getElementById("comment-form-" + meme.id).addEventListener("submit", function (e) {
    e.preventDefault();
    let form = Comment.serialize(e.target)
    let comment = new Comment(form.content, meme.id);
    comment.post();
    setTimeout(() => {
      init();
    }, 500)
    //do whatever an submit the form
  });
}


function make(element) {
  return document.createElement(element)
}

function putMemeOnDom(meme) {
  let title = document.getElementsByClassName("text-lg leading-6 font-medium text-gray-900")
  let image = document.getElementsByClassName("image")

  title.innerText = meme.title
  image.innerText = meme.img_url
}

// function postComment(comment) {

// }

// window.onload = function () {
//   var form = document.querySelector("comment-form");
//   form.onsubmit = submitted.bind(form);
// }




// function submitted(e) {
//   console.log(e);
//   e.preventDefault();

//   // comment.render();
//   comment.memeId
// }

function postMeme(meme) {
  let div = document.createElement("div")
  let li = document.createElement("li")
  let p1 = document.createElement("p")
  let img = document.createElement("img")

  p1.innerText = meme.title
  img.innerText = meme.image_url

  li.append(p1, img)
  div.append(li)
  // ul.append(div)
}
  // fetch("http://localhost:3000/memes", {
  //   method: "POST",
  //   headers: this.headers,
  //   body: JSON.stringify(this.meme)
  // }).then(function (data) {
  //   console.log(data)
  // })

// function handleMemes(memeArr) {
//   memeArr.data.forEach(m => {
//     putMemeOnDom(m)
//   })
// }