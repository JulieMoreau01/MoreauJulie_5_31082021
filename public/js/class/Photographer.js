export class Photographer {
  constructor (data) {
    this.name = data.name
    this.id = data.id
    this.city = data.city
    this.country = data.country
    this.tags = data.tags
    this.tagline = data.tagline
    this.price = data.price
    this.portrait = data.portrait
    this.liTags = data.tags.map(tag => `<li class="tag ${tag}"><a href="index.html?${tag}" tabindex="5" aria-label="cliquez pour trier par ${tag}">#${tag}</a></li>`).join(' ')
    this.classTag = data.tags.join(' ')
  }

  creatPrice () {
    return `
    <p aria-label="like total">
      <span id="total_like" tabindex="8"></span>
      <i class="fas fa-heart" aria-hidden="true"></i>
      <span tabindex="8">${this.price}€ / jour</span>
    </p>
    `
  }

  creatHtmlIndex () {
    return `
    <section class="index ${this.classTag}">
      <figure>
        <a href="photographer.html?id=${this.id}" alt="${this.name}" tabindex="5">
          <img src="public/images/photographers_id_photos/${this.portrait}" alt="" />
          <figcaption class="index_name" aria-label="${this.name} cliquer pour voir sa fiche">${this.name}</figcaption>
        </a>
      </figure>
      <p>
        <a href="photographer.html?id=${this.id}" alt="${this.name}" tabindex="5">
          <span class="index_country">${this.city}, ${this.country}</span>
          <span class="index_tagline">${this.tagline}</span>
          <span class="index_price">${this.price} €/jour</span></a>
      </p>
      <ul>${this.liTags}</ul>
    </section>
    `
  }

  creatHtmlPhotographerFiche () {
    return `
    <h2 class="name" id="thename" tabindex="3">${this.name}</h2>
    <p class="contact">
      <button class="btn" tabindex="6" id="contact">Contactez-moi</button>
    </p>
    <p class="country" tabindex="4">${this.city}, ${this.country}</p>
    <p class="tagline" tabindex="4">${this.tagline}</p>
    <ul>${this.liTags}</ul>
    <figure>
      <img src="public/images/photographers_id_photos/${this.portrait}" alt="${this.name}" tabindex="7" />
    </figure>
    `
  }
}
