/**
 * GET JSON DATA
 * @returns Ok or Error
 */
async function getData () {
  const url = 'https://juliemoreau01.github.io/MoreauJulie_5_31082021/public/json/FishEyeData.json'
  try {
    const res = await fetch(url)
    alert('1.good')
    return await res.json()
  } catch (error) {
    console.log(error)
    alert('1.error')
  }
}

/**
 * GET TABLE PHOTOGRAPHER
 */
async function getDataPhotographer () {
  const dataJson = await getData()
  const dataPhotographers = dataJson.photographers
  alert('2.good')
  return await dataPhotographers
}

/**
 * GET TABLE MEDIA
 */
async function getDataMedia () {
  const dataJson = await getData()
  const dataMedia = dataJson.media
  alert('3.good')
  return await dataMedia
}

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

/**
 * Template HTML Page Index
 */
async function renderPhotographers () {
  const dataPhotographers = await getDataPhotographer()
  alert('4.good')
  dataPhotographers.forEach(dataPhotographers => {
    const photograpeTemplate = new Photographer(dataPhotographers)
    const indexPhotographer = photograpeTemplate.creatHtmlIndex()
    const container = document.getElementById('index')
    container.innerHTML += indexPhotographer
    alert('5.good')
  })
  filtre()
}

async function filtre () {
  alert('6.good')
  const main = document.getElementById('index')
const sectionPhotographe = main.children

const tags = document.getElementsByClassName('tag')

console.log(tags)
console.log(tags.length)

console.log(sectionPhotographe)
console.log(sectionPhotographe.length)
  for (let item = 0; item < tags.length; item++) {
    tags[item].addEventListener('click', function () {
      tagName = tags[item].getAttribute('class').replace('tag ', '')
      for (let i = 1; i < sectionPhotographe.length; i++) {
        if (sectionPhotographe[i].classList.contains(tagName) === true) {
          sectionPhotographe[i].style.display = 'flex'
        } else {
          sectionPhotographe[i].style.display = 'none'
        }
      }
    })
  }
}

const initIndex = async () => {
  renderPhotographers()
}

initIndex()
