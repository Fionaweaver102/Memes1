function init() {

}

function createMeme(e) {
  e.preventDefault();

  const meme = {
    title: e.target[0].value,
    content: e.target[1].value,
    image_url: e.target[2].value
  }

  fetch("/api/meme", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(meme)
  })
    .then(r => r.json())
    .then(data => handleResult(data))
}

function handleResult(data) {
  console.log(data);
}