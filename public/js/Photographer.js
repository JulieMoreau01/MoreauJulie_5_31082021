class Photographer {
  constructor (data) {
    this.name = data.name
    this.id = data.id
    this.city = data.city
    this.country = data.country
    this.tags = data.tags
    this.tagline = data.tagline
    this.price = data.price
    this.portrait = data.portrait
    this.liTags = data.tags.map(tag => `<li><a href="#" class="tag ${tag}" tab-index="5">#${tag}</a></li>`).join(' ')
    this.classTag = data.tags.join(' ')
  }

  creatHtmlIndex () {
    return `
    <section class="index ${this.classTag}">
    <figure>
    <a href="photographer.html?id=${this.id}" alt="${this.name}" tabindex="5">
    <img src="public/images/photographers_id_photos/${this.portrait}" alt="${this.name}" />
    <figcaption class="index_name">${this.name}</figcaption>
    </a>
    </figure>
    <p>
    <a href="photographer.html?id=${this.id}" alt="${this.name}" tabindex="5" >
    <span class="index_country">${this.city}, ${this.country}</span>
    <span class="index_tagline">${this.tagline}</span>
    <span class="index_price">${this.price} €/jour</span></a></p>
    <ul>${this.liTags}</ul>
    </section>
    `
  }

  creatHtmlPhotographer () {
    return `
    <p class="name" id="thename" tabindex="2">${this.name}</p>
    <p tabindex="5"><a href="" class="btn" tabindex="3">Contactez-moi</a></p>
    <p class="country" tabindex="3">${this.city}, ${this.country}</p>
    <p class="tagline" tabindex="3">${this.tagline}</p>
    <ul tabindex="4">${this.liTags}</ul>
    <figure>
    <a href="photographer.html?id=${this.id}" alt="${this.name}" tabindex="6">
    <img src="public/images/photographers_id_photos/${this.portrait}" alt="${this.name}" tabindex="6" />
    </a>
    </figure>
    `
  }

  nameOfPhotographer () {
    return this.name
  }
}
