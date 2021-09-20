/**
 * VARIABLE
 */
const urlPage = window.location.search
const idUrlPage = urlPage.replace('?id=', '')
const containerFiche = document.getElementById('fiche')
const containerPrice = document.getElementById('price')
const containerSelect = document.getElementById('select')
const containerGallery = document.getElementById('gallery')
const containerLightbox = document.getElementById('lightbox')

/**
 * RECUPERATION DE l'ID DANS l'URL
 */

async function idUrl () {
  const dataPhotographers = await getDataPhotographer()

  // Recuperation de l'objet qui contient l'ID de l'url dans photographer
  const objetIdNb = dataPhotographers.findIndex(function (item, i) {
    const stringId = (item.id).toString()
    return stringId === idUrlPage
  })
  const data = dataPhotographers[objetIdNb]
  return await data
}

/**
 * TEMPLATE FICHE PHOTOGRAPHER & PRICE
 */
async function templateFiche () {
  const data = await idUrl()

  const photograpeTemplate = new Photographer(data)
  containerFiche.innerHTML += photograpeTemplate.creatHtmlPhotographer()

  containerPrice.innerHTML += photograpeTemplate.creatPrice()
}

/**
 * TEMPLATE SELECT
 */
async function templateSelect () {
  containerSelect.innerHTML += htmlSelect()
  select()
}

/**
 * TEMPLATE GALLERY
 */
async function templateGallery () {
  const dataMedia = await getDataMedia()
  const arrayTri = []

  dataMedia.forEach(data => {
    const stringId = (data.photographerId).toString()
    if (idUrlPage === stringId) {
      arrayTri.push(data)
    }
  })

  function gallery () {
    containerGallery.innerHTML = ''
    arrayTri.forEach(item => {
      const mediaTemplate = new MediaFactory(item)
      containerGallery.innerHTML += mediaTemplate.creatHtmlGallery()
    })
    templateLightbox()
    video()
    likeCounterFunction()
  }

  // Tri par default popularite
  triPopularite()

  function triPopularite () {
    arrayTri.sort(function (a, b) {
      return b.likes - a.likes
    })
    gallery()
  }

  const triPopulariteId = document.getElementById('option-1')
  triPopulariteId.addEventListener('click', function () {
    triPopularite()
  })

  // Tri par Date
  const triDateId = document.getElementById('option-2')
  triDateId.addEventListener('click', function () {
    arrayTri.sort(function (a, b) {
      return new Date(b.date) - new Date(a.date)
    })
    gallery()
  })

  // Tri par Titre
  const triTitleId = document.getElementById('option-3')
  triTitleId.addEventListener('click', function () {
    arrayTri.sort(function compare (a, b) {
      if (a.title < b.title) {
        return -1
      } if (a.title > b.title) {
        return 1
      }
      return 0
    })
    gallery()
  })
}

/**
 * TEMPLATE LIGHTBOX
 */
async function templateLightbox () {
  const dataMedia = await getDataMedia()
  const arrayTri = []
  containerLightbox.innerHTML = ''

  dataMedia.forEach(data => {
    const stringId = (data.photographerId).toString()
    if (idUrlPage === stringId) {
      arrayTri.push(data)
    }
  })

  arrayTri.forEach(item => {
    const lightboxTemplate = new MediaFactory(item)
    containerLightbox.innerHTML += lightboxTemplate.creatHtmlImgLightbox()
  })
  lightbox()
}

const init = async () => {
  templateFiche()
  templateSelect()
  templateGallery()
}

init()
