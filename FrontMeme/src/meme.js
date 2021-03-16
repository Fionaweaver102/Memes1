class Meme {
  // constructor(meme, memeAttributes) {
  //   this.id = meme.id
  //   this.name = memeAttributes.name,
  //     this.image_url = memeAttributes.image_url
  //   Meme.all.push(this)
  // }

  renderMeme() {
    let li = document.createElement("li");
    let button = document.createElement("button");
    button.className = 'btn btn-light';
    button.innerText = this.name;
  }

  static getMeme() {
    // list.innerText = ""
    fetch(baseUrl)
      .then(r => r.json())
      .then(data => {
        data.forEach(element => {
          let meme = new Meme(element.id, element.name, element.image_url);
          meme.renderMeme();
        });
      })


    // Meme.all = [];



    //   image_url: params.image_url,
    //   title: params.title,
    //   memelord: params.memelord
    // }

    // this.headers = {
    //   'Content-Type': 'application/json; charset=UTF-8',
    // };

    // this.createMeme()
    //   }

    // createMeme() {
    //   console.log(this.meme)

    // fetch("http://localhost:3000/memes", {
    //   method: "POST",
    //   headers: this.headers,
    //   body: JSON.stringify(this.meme)
    // }).then(function (data) {
    //   console.log(data)
    // })
    //   let urlParams = new URLSearchParams(this.meme);
    //   fetch("http://localhost:3000/FrontMeme/create.html" + urlParams, {
    //     method: "GET",
    //     mode: "no-cors",
    //     headers: {
    //       'Content-Type': 'application/json; charset=UTF-8',
    //     }
    //   }).then(function (data) {
    //     console.log(data)
    //   })
    // }

    // handle(data) {
    //   console.log(data)
    //   window.location.href = "index.html"
  }
}