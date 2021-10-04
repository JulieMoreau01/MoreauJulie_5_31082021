class ImageLightBox {
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
    if (this.photographerId === 243) {
      this.name = 'Mimi'
    } else if (this.photographerId === 930) {
      this.name = 'Ellie-Rose'
    } else if (this.photographerId === 82) {
      this.name = 'Tracy'
    } else if (this.photographerId === 527) {
      this.name = 'Nabeel'
    } else if (this.photographerId === 195) {
      this.name = 'Marcel'
    } else if (this.photographerId === 925) {
      this.name = 'Rhode'
    }
  }

  creatHtmlImgLightbox () {
    return `
    <figure>
      <img src="public/images/${this.name}/${this.image}" title="${this.title}" alt="${this.title}" />
      <figcaption tabindex="12">${this.title}</figcaption>
    </figure>
    `
  }
}
class VideoLightBox {
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
    if (this.photographerId === 243) {
      this.name = 'Mimi'
    } else if (this.photographerId === 930) {
      this.name = 'Ellie-Rose'
    } else if (this.photographerId === 82) {
      this.name = 'Tracy'
    } else if (this.photographerId === 527) {
      this.name = 'Nabeel'
    } else if (this.photographerId === 195) {
      this.name = 'Marcel'
    } else if (this.photographerId === 925) {
      this.name = 'Rhode'
    }
  }

  creatHtmlImgLightbox () {
    return `
    <figure>
      <video controls width="350">
        <source src="public/images/${this.name}/${this.video}" type="video/mp4" aria-label="${this.title}">
          So sorry, your browser doesn't support embedded videos.
      </video>
      <figcaption tabindex="12">${this.title}</figcaption>
    </figure>
    `
  }
}
export class LightBox {
  constructor (item) {
    if (item.type === 'image') {
      return new ImageLightBox(item)
    } else if (item.type === 'video') {
      return new VideoLightBox(item)
    }
  }
}
