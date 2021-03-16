const endPoint = "http://localhost:3000/api/v1/memes"
const memes = [];

document.addEventListener("DOMContentLoaded", init);

function init() {
  // Meme.getMeme();
  fetch(endPoint)
    .then(response => response.json())
    .then(memes => {
      append(memes.data);
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

  console.log(memes)

  for (let i = 0; i < memes.length; i++) {
    let meme = memes[i];

    let img = document.createElement('img');
    img.src = meme.attributes.image_url;
    let p = document.createElement("p");
    p.setAttribute('class', 'text-lg leading-6 font-medium text-gray-900 px-4 py-5 sm:px-6');
    p.innerText = meme.attributes.title;

    createList(ul, img, p, meme.id);
  }
}

function createList(ul, img, p, id) {
  let li = make("li")

  let commentForm = document.querySelector('#comment-form').cloneNode(true);
  commentForm.setAttribute('id', "comment-form-1" + id)
  commentForm.setAttribute('class', '')
  li.setAttribute('class', 'bg-white shadow overflow-hidden sm:rounded-lg mt-8');
  li.append(img);
  li.append(p);
  li.append(commentForm)
  ul.append(li);
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