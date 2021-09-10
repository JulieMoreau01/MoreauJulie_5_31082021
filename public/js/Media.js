class MediaFactory {
  constructor (item) {
    if (item.type === 'image') {
      return new Image(item)
    } else if (item.type === 'video') {
      return new Video(item)
    }
  }
}

class Image {
  constructor (data) {
    this.id = data.id
    this.photographerId = data.photographerId
    this.title = data.title
    this.image = data.image
    this.tags = data.tags
    this.likes = data.likes
    this.date = data.date
    this.price = data.price
    this.type = data.type
    this.name = 'rhode'
  }

  creatHtmlGallery () {
    return `
    <figure>
    <img class="" src="public/images/${this.name}/${this.image}" id="${this.id}" title="${this.title}">
    <figcaption><span class="title">${this.title}</span><span class="like"><span class="counter">${this.likes}</span> <i class="fas fa-heart"></i></span></figcaption>
    </figure>
    `
  }
}
class Video {
  constructor (data) {
    this.id = data.id
    this.photographerId = data.photographerId
    this.title = data.title
    this.video = data.video
    this.tags = data.tags
    this.likes = data.likes
    this.date = data.date
    this.price = data.price
    this.type = data.type
    this.name = 'Rhode'
  }

  creatHtmlGallery () {
    return `
    <video controls width="350">
    <source src="public/images/${this.name}/${this.video}" type="video/mp4">
    Sorry, your browser doesn't support embedded videos.
    </video>
    `
  }
}
