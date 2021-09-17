
// Recuperation de l'Id dans l'URL
const urlPage = window.location.search
const idUrlPage = urlPage.replace('?id=', '')

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

// Template Fiche Photographer & Price
async function renderPhotographersPageFiche () {
  const data = await idUrl()

  const photograpeTemplate = new Photographer(data)
  const containerFiche = document.getElementById('fiche')
  containerFiche.innerHTML += photograpeTemplate.creatHtmlPhotographer()

  const containerPrice = document.getElementById('price')
  containerPrice.innerHTML += photograpeTemplate.creatPrice()
}

// Template Gallery Photographer & Select
async function renderPhotographersPageGallery () {
  const dataMedia = await getDataMedia()
  const containerSelect = document.getElementById('select')
  containerSelect.innerHTML += htmlSelect()

  const arrayTri = []

  dataMedia.forEach(data => {
    const stringId = (data.photographerId).toString()
    if (idUrlPage === stringId) {
      // const tab = new Array(data)
      arrayTri.push(data)
    }
  })

  const containerGallery = document.getElementById('gallery')

  function gallery () {
    containerGallery.innerHTML = ''
    arrayTri.forEach(item => {
      const mediaTemplate = new MediaFactory(item)
      containerGallery.innerHTML += mediaTemplate.creatHtmlGallery()
      const containerLightbox = document.getElementById('lightbox')
      const lightboxTemplate = new MediaFactory(item)
      containerLightbox.innerHTML += lightboxTemplate.creatHtmlImgLightbox()
    })
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

  // Function Like & Select
  select()
  likeCounterFunction()
  lightbox()
  video()
}

const init = async () => {
  idUrl()
  renderPhotographersPageFiche()
  renderPhotographersPageGallery()
}

init()
