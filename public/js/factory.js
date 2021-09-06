/**
 * GET JSON DATA
 * @returns Ok or Error
 */
async function getData () {
  const url = 'https://juliemoreau01.github.io/MoreauJulie_5_31082021/public/js/FishEyeData.json'
  try {
    const res = await fetch(url)
    return await res.json()
  } catch (error) {
    console.log(error)
  }
}

/**
 * Template HTML Page Index
 */
async function renderPhotographers () {
  const data = await getData()
  let indexPhotographer = ''
  const dataPhotographers = data.photographers
  dataPhotographers.forEach(photographers => {
    const photographeId = `${photographers.id}`
    const photographePortrait = `${photographers.portrait}`
    const photographeName = `${photographers.name}`
    const photographeCity = `${photographers.city}`
    const photographeCountry = `${photographers.country}`
    const photographeTagLine = `${photographers.tagline}`
    const photographePrice = `${photographers.price}`
    const photographeTag = `${photographers.tags.join(' ')}`
    const photographeTagLi = `${photographers.tags.map(tag => `<li><a href="#" class="tag" tab-index="5">#${tag}</a></li>`).join('')}`
    indexPhotographer += '<section id="' + photographeCountry + '" class="' + photographeTag + '">'
    indexPhotographer += '<figure>'
    indexPhotographer += '<a href="pages/photographes.html?id=' + photographeId + '" alt="photographeName" tabindex="5">'
    indexPhotographer += '<img src="public/images/photographers_id_photos/' + photographePortrait + '" alt="' + photographeName + '" />'
    indexPhotographer += '<figcaption class="photographer_name">' + photographeName + '</figcaption>'
    indexPhotographer += '</a>'
    indexPhotographer += '</figure>'
    indexPhotographer += '<p><a href="pages/photographes.html?id=' + photographeId + '" alt="photographeName" tabindex="5" arial-label="Test" ><span class="photographer_country">' + photographeCity + ' ' + photographeCountry + '</span>'
    indexPhotographer += '<span class="photographer_tagline">' + photographeTagLine + '</span>'
    indexPhotographer += '<span class="photographer_price">' + photographePrice + '€/jour' + '</span></a></p>'
    indexPhotographer += '<ul>' + photographeTagLi + '</ul>'
    indexPhotographer += '</section>'
  })
  const container = document.getElementById('index')
  container.innerHTML += indexPhotographer
}

renderPhotographers()

/** FACTORY */
function createPhotographe (name, id, city, country, tag, tagline, price, portrait) {
  return {
    name,
    id,
    city,
    country,
    tag,
    tagline,
    price,
    portrait
  }
}

const photographe1 = createPhotographe('MIMI', '243', 'London', 'UK', 'tag', 'Voir le beau dans le quotidien', '400', 'image')

console.log(photographe1)

/**
 * FILTRES TAG
 */
const tagPortrait = document.getElementById('portrait')
const tagArt = document.getElementById('art')
const tagFashion = document.getElementById('fashion')
const tagArchitecture = document.getElementById('architecture')
const tagTravel = document.getElementById('travel')
const tagSport = document.getElementById('sport')
const tagAnimals = document.getElementById('animals')
const tagEvents = document.getElementById('events')

const filtreTags = document.querySelectorAll('nav ul li a')

console.log(filtreTags)

const main = document.getElementById('index')
const sectionPhotographe = main.children

tagPortrait.addEventListener('click', showSectionPortrait)
tagArt.addEventListener('click', showSectionArt)
tagFashion.addEventListener('click', showSectionFashion)
tagArchitecture.addEventListener('click', showSectionArchitecture)
tagTravel.addEventListener('click', showSectionTravel)
tagSport.addEventListener('click', showSectionSport)
tagAnimals.addEventListener('click', showSectionAnimals)
tagEvents.addEventListener('click', showSectionEvents)

function showSectionPortrait () {
  for (let i = 1; i < 7; i++) {
    if (sectionPhotographe[i].classList.contains('portrait') === true) {
      sectionPhotographe[i].style.display = 'flex'
    } else {
      sectionPhotographe[i].style.display = 'none'
    }
  }
}

function showSectionArt () {
  for (let i = 1; i < 7; i++) {
    if (sectionPhotographe[i].classList.contains('art') === true) {
      sectionPhotographe[i].style.display = 'flex'
    } else {
      sectionPhotographe[i].style.display = 'none'
    }
  }
}

function showSectionFashion () {
  for (let i = 1; i < 7; i++) {
    if (sectionPhotographe[i].classList.contains('fashion') === true) {
      sectionPhotographe[i].style.display = 'flex'
    } else {
      sectionPhotographe[i].style.display = 'none'
    }
  }
}

function showSectionArchitecture () {
  for (let i = 1; i < 7; i++) {
    if (sectionPhotographe[i].classList.contains('architecture') === true) {
      sectionPhotographe[i].style.display = 'flex'
    } else {
      sectionPhotographe[i].style.display = 'none'
    }
  }
}

function showSectionTravel () {
  for (let i = 1; i < 7; i++) {
    if (sectionPhotographe[i].classList.contains('travel') === true) {
      sectionPhotographe[i].style.display = 'flex'
    } else {
      sectionPhotographe[i].style.display = 'none'
    }
  }
}
function showSectionSport () {
  for (let i = 1; i < 7; i++) {
    if (sectionPhotographe[i].classList.contains('sport') === true) {
      sectionPhotographe[i].style.display = 'flex'
    } else {
      sectionPhotographe[i].style.display = 'none'
    }
  }
}
function showSectionAnimals () {
  for (let i = 1; i < 7; i++) {
    if (sectionPhotographe[i].classList.contains('animals') === true) {
      sectionPhotographe[i].style.display = 'flex'
    } else {
      sectionPhotographe[i].style.display = 'none'
    }
  }
}
function showSectionEvents () {
  for (let i = 1; i < 7; i++) {
    if (sectionPhotographe[i].classList.contains('events') === true) {
      sectionPhotographe[i].style.display = 'flex'
    } else {
      sectionPhotographe[i].style.display = 'none'
    }
  }
}
