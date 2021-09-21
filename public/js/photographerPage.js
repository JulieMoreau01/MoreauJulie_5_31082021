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
const containerModal = document.getElementById('modal')

/**
 * TEMPLATE FICHE PHOTOGRAPHER & PRICE
 */
async function photographerPageTop () {
  const dataPhotographers = await getDataPhotographer()

  // GET TABLE WITH GOOD PHOTOGRAPHER ID
  const objetIdNb = dataPhotographers.findIndex(function (item, i) {
    const stringId = (item.id).toString()
    return stringId === idUrlPage
  })

  // DISPLAY FICHE PHOTOGRAPHER & PRICE
  const data = dataPhotographers[objetIdNb]
  const photograpeTemplate = new Photographer(data)
  containerFiche.innerHTML += photograpeTemplate.creatHtmlPhotographer()
  containerPrice.innerHTML += photograpeTemplate.creatPrice()
  select()
  modal()
}

/**
 * TEMPLATE GALLERY
 */
async function photographerPageGallery () {
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

  function templateLightbox () {
    containerLightbox.innerHTML = ''
    arrayTri.forEach(item => {
      const lightboxTemplate = new MediaFactory(item)
      containerLightbox.innerHTML += lightboxTemplate.creatHtmlImgLightbox()
    })
    lightbox()
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

const init = async () => {
  photographerPageTop()
  photographerPageGallery()
}

init()
