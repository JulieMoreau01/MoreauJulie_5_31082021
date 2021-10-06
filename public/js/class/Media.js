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

  // Template HTML for photographer.html
  creatHtmlGallery () {
    return `
    <figure>
      <img src="public/images/${this.name}/${this.image}" id="${this.id}" tabindex="11" alt="Agrandir">
      <figcaption aria-hidden="true">
        <span class="title" tabindex="11">
          ${this.title}
        </span>
        <span class="like">
          <span class="counter" tabindex="11">
            ${this.likes} <span class="sr-only">like</span>
          </span> 
          <i class="fas fa-heart" aria-expanded="false" tabindex="11"></i>
        </span>
      </figcaption>
      <span class="sr-only alert_like"></span>
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

  // Template HTML for photographer.html
  creatHtmlGallery () {
    return `
    <figure id="video">
      <video controls width="350" tabindex="11" aria-label="CLiquez pour agrandir">
        <source src="public/images/${this.name}/${this.video}" type="video/mp4">
          So sorry, your browser doesn't support embedded videos.
        </video>
        <figcaption aria-hidden="true">
          <span class="title" tabindex="11">${this.title}</span>
          <span class="like">
          <span class="counter" tabindex="11">
            ${this.likes} <span class="sr-only">like</span>
          </span> 
            <i class="fas fa-heart" aria-expanded="false" tabindex="11"></i>
          </span>
        </figcaption>
        <span class="sr-only alert_like"></span>
    </figure>
    `
  }
}

export class MediaFactory {
  constructor (item) {
    if (item.type === 'image') {
      return new Image(item)
    } else if (item.type === 'video') {
      return new Video(item)
    }
  }
}
