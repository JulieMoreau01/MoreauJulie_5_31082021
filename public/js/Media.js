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
    <figure tabindex="10">
    <img src="public/images/${this.name}/${this.image}" id="${this.id}" title="${this.title}" tabindex="10">
    <figcaption tabindex="10">
    <span class="title" tabindex="10">${this.title}</span>
    <span class="like" tabindex="10">
    <span class="counter" tabindex="10" aria-label="${this.likes} like sur cette photo">${this.likes}</span> 
    <i class="fas fa-heart" tabindex="10" aria-label="ajouter un like" aria-expanded="false"></i>
    </span>
    </figcaption>
    </figure>
    `
  }

  creatHtmlImgLightbox () {
    return `
    <figure>
    <img src="public/images/${this.name}/${this.image}" title="${this.title}" />
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
    <div class="video"><video controls width="350" tabindex="10">
    <source src="public/images/${this.name}/${this.video}" type="video/mp4">
    So sorry, your browser doesn't support embedded videos.
    </video>
    <p class="video">
    <span class="title" tabindex="12">${this.title}</span>
    <span class="like"><span class="counter" tabindex="13">${this.likes}</span> <i class="fas fa-heart" aria-label="ajouter un like" aria-expanded="false"></i></span>
    </p>
    </div>
    `
  }

  creatHtmlImgLightbox () {
    return `
    <figure>
    <img src="public/images/${this.name}/${this.image}" title="${this.title}" />
    </figure>
    `
  }
}
