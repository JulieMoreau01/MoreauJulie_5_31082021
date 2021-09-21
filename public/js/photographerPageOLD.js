
/**
 * VARIABLE
 */
 alert('UP')
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
  alert('idurl')
  const dataPhotographers = await getDataPhotographer()

  // Recuperation de l'objet qui contient l'ID de l'url dans photographer
  const objetIdNb = dataPhotographers.findIndex(function (item, i) {
    const stringId = (item.id).toString()
    return stringId === idUrlPage
  })
  const data = dataPhotographers[objetIdNb]
  console.log(data)
  return await data
}

const data = idUrl()

/**
 * TEMPLATE FICHE PHOTOGRAPHER & PRICE
 */
function PhotographersPageFiche () {
  alert('FICHE & PRICE')
  const photograpeTemplate = new Photographer(data)
  containerFiche.innerHTML += photograpeTemplate.creatHtmlPhotographer()
  containerPrice.innerHTML += photograpeTemplate.creatPrice()
}

PhotographersPageFiche()

/**
 * TEMPLATE DROPDOWN
 */
async function PhotographersPageDropdown () {
  alert('dropdown')
  // const data = await idUrl()
  containerSelect.innerHTML += htmlDropdown()
  select()
  const dataMedia = await getDataMedia()
  const arrayTri = []
  dataMedia.forEach(media => {
    const stringId = (media.photographerId).toString()
    if (idUrlPage === stringId) {
      arrayTri.push(media)
      //triPopularite()

    function triPopularite () {
      arrayTri.sort(function (a, b) {
        return b.likes - a.likes
      })
      gallery()
    }

    }
  })
  return arrayTri
}

/**
 * TEMPLATE GALLERY & LIGHTBOX
 */
async function PhotographersPageGallery () {
  alert('gallery & lightbox')

  const arrayTri = await PhotographersPageDropdown()

  function gallery () {
    // alert('gallery')
    containerGallery.innerHTML = ''
    arrayTri.forEach(item => {
      const mediaTemplate = new MediaFactory(item)
      containerGallery.innerHTML += mediaTemplate.creatHtmlGallery()
    })

    // Function Like & Select
    
    likeCounterFunction()
    lightboxTruc()
    lightbox()
    video()
  }


  // const dataMedia = await getDataMedia()
  // const arrayTri = []

  // dataMedia.forEach(media => {

  //   function triPopularite () {
  //     arrayTri.sort(function (a, b) {
  //       return b.likes - a.likes
  //     })
  //     gallery()
  //   }
    
  //   const stringId = (media.photographerId).toString()
  //   if (idUrlPage === stringId) {
  //     // alert('foreach')
  //     arrayTri.push(media)
  //     triPopularite()
  //   }
  // })

  // function lightboxTruc () {
  //   arrayTri.forEach(item => {
  //     const lightboxTemplate = new MediaFactory(item)
  //     containerLightbox.innerHTML += lightboxTemplate.creatHtmlImgLightbox()
  //   })
  // }





  // const triPopulariteId = document.getElementById('option-1')
  // triPopulariteId.addEventListener('click', function () {
  //   triPopularite()
  //   gallery()
  // })

  // // Tri par Date
  // const triDateId = document.getElementById('option-2')
  // triDateId.addEventListener('click', function () {
  //   alert('Tri par Date')
  //   arrayTri.sort(function (a, b) {
  //     return new Date(b.date) - new Date(a.date)
  //   })
  //   gallery()
  // })

  // // Tri par Titre
  // const triTitleId = document.getElementById('option-3')
  // triTitleId.addEventListener('click', function () {
  //   arrayTri.sort(function compare (a, b) {
  //     if (a.title < b.title) {
  //       return -1
  //     } if (a.title > b.title) {
  //       return 1
  //     }
  //     return 0
  //   })
  //   gallery()
  // })

  // Tri par default popularite
  
}

const init = async () => {
  idUrl()

  // PhotographersPageFiche()
  PhotographersPageDropdown()
  PhotographersPageGallery()
}

init()
