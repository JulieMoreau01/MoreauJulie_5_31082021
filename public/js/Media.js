console.log('01')

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
    this.name = 'Rhode'
  }

  creatSelect () {
    return `
    <label for="photo-tri">Trier par</label>
    <select name="photo" id="photo-tri">
        <option value="popularité">Popularité</option>
        <option value="date">Date</option>
        <option value="Titre">Titre</option>
    </select>
    `
  }

  creatHtmlGallery () {
    return `
    <figure><img class="" src="public/images/${this.name}/${this.image}" id="${this.id}"></figure>
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
