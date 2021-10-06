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

  // Template HTML for index.html
  creatHtmlIndex () {
    return `
    <section class="index ${this.classTag}">
      <a href="photographer.html?id=${this.id}" aria-label="Galerie des travaux de ${this.name}" tabindex="5">
        <figure>
          <img src="public/images/photographers_id_photos/${this.portrait}" alt="" />
        </figure>
        <h2>${this.name}</h2>
      </a>
      <p class="index_country" tabindex="5">${this.city}, ${this.country}</p>
      <p class="index_tagline" tabindex="5">${this.tagline}</p>
      <p class="index_price" tabindex="5" aria-label="${this.price} € par jour">${this.price} €/jour</p>
      <ul>${this.liTags}</ul>
    </section>
    `
  }

  // Template HTML for photographer.html
  creatHtmlPhotographerFiche () {
    return `
    <h2 class="name" id="thename" tabindex="3">${this.name}</h2>
    <p class="contact">
      <button class="btn" tabindex="6" id="contact" aria-label="Ouvrir formulaire de contact">Contactez-moi</button>
    </p>
    <p class="country" tabindex="4">${this.city}, ${this.country}</p>
    <p class="tagline" tabindex="4">${this.tagline}</p>
    <ul>${this.liTags}</ul>
    <figure>
      <img src="public/images/photographers_id_photos/${this.portrait}" alt="${this.name}" tabindex="7" />
    </figure>
    `
  }

  // Template Vignette Price
  creatHtmlPhotographerPrice () {
    return `
    <span tabindex="8" class="like">
      <span id="total_like"></span> 
      <i class="fas fa-heart" aria-hidden="true"></i>
    </span>
    <span tabindex="8" aria-label="${this.price} € par jour">${this.price}€ / jour</span>
    `
  }
}
