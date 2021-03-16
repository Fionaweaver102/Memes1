let serializeForm = function (form) {
  var obj = {};
  var formData = new FormData(form);
  for (var key of formData.keys()) {
    obj[key] = formData.get(key);
  }
  return obj;
};

document.addEventListener('submit', function (event) {

  // Prevent form from submitting to the server
  event.preventDefault();
  let form = serializeForm(event.target);
  // Do some stuff...
  let meme = new Meme(form);

  meme.createMeme()
  //const obj = new Meme()

});

fetch("http://localhost:3000/memes", {
  method: "GET",
  mode: "no-cors",
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
  },
}).then(function (data) {
  console.log(data)
})