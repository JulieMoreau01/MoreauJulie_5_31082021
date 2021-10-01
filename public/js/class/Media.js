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

  creatHtmlGallery () {
    return `
    <figure>
      <img src="public/images/${this.name}/${this.image}" id="${this.id}" alt="Cliquer pour agrandir" tabindex="11">
      <figcaption aria-hidden="true">
        <span class="title" tabindex="11" aria-label="${this.title}">
          ${this.title}
        </span>
        <span class="like">
        <span class="counter" aria-label="${this.likes} like sur cette photo" tabindex="11">
          ${this.likes}
        </span> 
          <i class="fas fa-heart" aria-label="ajouter un like" aria-expanded="false" tabindex="11"></i>
          <span class="sr-only">
            like - cliquer sur le coeur pour ajouter ou retirer un like
          </span>
        </span>
      </figcaption>
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

  creatHtmlGallery () {
    return `
    <figure id="video">
      <video controls width="350" tabindex="11" aria-label="${this.title}">
        <source src="public/images/${this.name}/${this.video}" type="video/mp4">
          So sorry, your browser doesn't support embedded videos.
        </video>
        <figcaption aria-hidden="true">
          <span class="title" tabindex="11">${this.title}</span>
          <span class="like">
          <span class="counter" aria-label="${this.likes} like sur cette video" tabindex="11">
            ${this.likes}
          </span> 
            <i class="fas fa-heart" aria-label="ajouter un like" aria-expanded="false" tabindex="11"></i>
          </span>
          <span class="sr-only">
            like - cliquer sur le coeur pour ajouter ou retirer un like
          </span>
        </figcaption>
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
