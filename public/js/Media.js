class mediaFactory {
  constructor(data) {
    if (data.type === "image") {
      return new Image(data)
    } else if (data.type === "video") {
      return new Video(data)
    }
  }
}

class Image {
  constructor(data) {
    this.id = data.id
    "id": 8328953,
    "photographerId": 82,
    "title": "Wooden Horse Sculpture",
    "video": "Art_Wooden_Horse_Sculpture.mp4",
    "tags": ["art"],
    "likes": 24,
    "date": "2011-12-08",
    "price": 100,
    "type": "video"

  }
  creatHtml() {
    return `
    <img class="" src="public/images/${this.video}" id="">
    `
  }
}

class Video {

}