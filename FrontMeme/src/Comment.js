
class Comment {
  constructor(content, memeId) {
    this.content = content;
    this.url = "http://localhost:3000/comments";
    this.memeId = memeId;
  }

  post() {
    console.log(this.memeId);
    let params = {
      meme_id: this.memeId,
      content: this.content
    };
    fetch(this.url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(params)
    })
      .then(r => r.json())
      .then(this.handle)
  }

  handle(data) {
    console.log(data);
  }

  static serialize(form) {
    var obj = {};
    var formData = new FormData(form);
    for (var key of formData.keys()) {
      obj[key] = formData.get(key);
    }
    return obj;
  };
}