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
    this.liTags = data.tags.map(tag => `<li tabindex="5"><a href="#" class="tag ${tag}" tab-index="5">#${tag}</a></li>`).join(' ')
    this.classTag = data.tags.join(' ')
  }

  creatSelect () {
    return `
    <ul class="dropdown" tabindex="8">
        <li id="dropdown-label" class="dropdown-label" tabindex="8">
          Trier par
        </li>
        <li role="button" aria-labelledby="dropdown-label" id="dropdown__selected" tabindex="8">
          Popularité <i class="fas fa-chevron-down dropdown__arrow" viewBox="0 0 10 5" fill-rule="evenodd"></i>
        </li>
        
        <li aria-expanded="false" role="list" class="dropdown__list-container">
          <ul class="dropdown__list">
            <li class="dropdown__list-item" tabindex="8" id="option-1" role="button" aria-labelledby="dropdown-label" id="dropdown__selected" tabindex="8">
              Popularité
            </li>
            <li class="dropdown__list-item" tabindex="8" id="option-1">
              Date
            </li>
            <li class="dropdown__list-item" tabindex="8" id="option-2">
              Titre
            </li>
          </ul>
        </li>
      </ul>
    `
  }

  creatPrice () {
    return `
    <p><span id="total_like"></span><i class="fas fa-heart"></i> ${this.price}€ / jour</p>
    `
  }

  creatHtmlIndex () {
    return `
    <section class="index ${this.classTag}" tabindex="5">
    <figure tabindex="5">
    <a href="photographer.html?id=${this.id}" alt="${this.name}" tabindex="5">
    <img src="public/images/photographers_id_photos/${this.portrait}" alt="${this.name}" tabindex="5" />
    <figcaption class="index_name" tabindex="5">${this.name}</figcaption>
    </a>
    </figure>
    <p>
    <a href="photographer.html?id=${this.id}" alt="${this.name}" tabindex="5" >
    <span class="index_country" tabindex="5">${this.city}, ${this.country}</span>
    <span class="index_tagline" tabindex="5">${this.tagline}</span>
    <span class="index_price" tabindex="5">${this.price} €/jour</span></a></p>
    <ul tabindex="5">${this.liTags}</ul>
    </section>
    `
  }

  creatHtmlPhotographer () {
    return `
    <p class="name" id="thename" tabindex="2">${this.name}</p>
    <p class="contact" tabindex="5"><a href="" class="btn" tabindex="3">Contactez-moi</a></p>
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
}
