const form = document.getElementById("memeForm")
form.addEventListener("submit", handleSubmit)

function redirect() {
  window.location.href = "index.html";
}

function handleSubmit(e) {
  e.preventDefault();
  console.log(e);
  const memeInfo = {
    title: e.target[0].value,
    image_url: e.target[1].value
  }

  fetch("http://localhost:3000/memes", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(memeInfo)
  })
    .then(r => r.json())
    .then(redirect)
}

// function postMeme(meme) {
//   let div = document.createElement("div")
//   let li = document.createElement("li")
//   let p1 = document.createElement("p")
//   let img = document.createElement("img")

//   p1.innerText = meme.title
//   img.innerText = meme.image_url

//   li.append(p1, img)
//   div.append(li)
//   // ul.append(div)
// }

// function append(memes) {
//   let ul = document.createElement('ul');
//   ul.setAttribute('id', 'meme-list');
//   document.getElementById('render-list').appendChild(ul);

//   console.log(memes)

//   for (let i = 0; i < memes.length; i++) {
//     let meme = memes[i];

//     let img = document.createElement('img');
//     img.src = meme.attributes.image_url;
//     let p = document.createElement("p");
//     p.setAttribute('class', 'text-lg leading-6 font-medium text-gray-900 px-4 py-5 sm:px-6');
//     p.innerText = meme.attributes.title;

//     createList(ul, img, p, meme.id);
//   }
// }

// function createList(ul, img, p, id) {
//   let li = make("li")

//   let commentForm = document.querySelector('#comment-form').cloneNode(true);
//   commentForm.setAttribute('id', "comment-form-1" + id)
//   commentForm.setAttribute('class', '')
//   li.setAttribute('class', 'bg-white shadow overflow-hidden sm:rounded-lg mt-8');
//   li.append(img);
//   li.append(p);
//   li.append(commentForm)
//   ul.append(li);
// }



// let serializeForm = function (form) {
//   var obj = {};
//   var formData = new FormData(form);
//   for (var key of formData.keys()) {
//     obj[key] = formData.get(key);
//   }
//   return obj;
// };



// document.addEventListener('submit', function (event) {

//   // Prevent form from submitting to the server
//   event.preventDefault();
//   let form = serializeForm(event.target);
//   // Do some stuff...
//   let meme = new Meme(form);

//   meme.createMeme()
//   //const obj = new Meme()

// });

