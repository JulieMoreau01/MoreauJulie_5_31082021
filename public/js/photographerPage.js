
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
  const selectTemplate = htmlSelect()
  const containerSelect = document.getElementById('select')
  containerSelect.innerHTML += selectTemplate

  const array = []

  dataMedia.forEach(data => {
    const stringId = (data.photographerId).toString()
    if (idUrlPage === stringId) {
      const titleInfo = data
      const tab = new Array(titleInfo)
      array.push(titleInfo)
    }
  })

  function gallery () {
    console.log(array)
    array.forEach(item => {
      const containerGallery = document.getElementById('gallery')
      const mediaTemplate = new MediaFactory(item)
      containerGallery.innerHTML += mediaTemplate.creatHtmlGallery()
    })
  }

  function galleryOut () {
    console.log(array)
    array.forEach(item => {
      const containerGallery = document.getElementById('gallery')
      containerGallery.innerHTML = ''
    })
  }

  function triTitle () {
    array.sort(function compare (a, b) {
      if (a.title < b.title) {
        return -1
      } if (a.title > b.title) {
        return 1
      }
      return 0
    })
    galleryOut()
    gallery()
  }

  function triPopularite () {
    array.sort(function (a, b) {
      return b.likes - a.likes
    })
    galleryOut()
    gallery()
  }

  function triDate () {
    array.sort(function (a, b) {
      return new Date(b.date) - new Date(a.date)
    })
    galleryOut()
    gallery()
  }

  // Tri par popularite
  const triPopulariteId = document.getElementById('option-1')
  triPopulariteId.addEventListener('click', function () {
    triPopularite()
  })

  // Tri par Date
  const triDateId = document.getElementById('option-2')
  triDateId.addEventListener('click', function () {
    triDate()
  })

  // Tri par Titre
  const triTitleId = document.getElementById('option-3')
  triTitleId.addEventListener('click', function () {
    triTitle()
  })

  // Par default
  triPopularite()
  gallery()

  // Function Like & Select
  likeCounterFunction()
  select()
}

const init = async () => {
  idUrl()
  renderPhotographersPageFiche()
  renderPhotographersPageGallery()
}

init()
