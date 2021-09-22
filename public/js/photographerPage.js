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
 * TEMPLATE FICHE PHOTOGRAPHER & PRICE & SELECT
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
 * TEMPLATE GALLERY & LIGHTBOX
 */
async function photographerPageGallery () {
  const arrayTri = await sortGallery()

  // DISPLAY GALLERY
  containerGallery.innerHTML = ''
  arrayTri.forEach(item => {
    const mediaTemplate = new MediaFactory(item)
    containerGallery.innerHTML += mediaTemplate.creatHtmlGallery()
  })
  templateLightbox()
  video()
  likeCounterFunction()

  // DISPLAY LIGHTBOX
  function templateLightbox () {
    containerLightbox.innerHTML = ''
    arrayTri.forEach(item => {
      const lightboxTemplate = new MediaFactory(item)
      containerLightbox.innerHTML += lightboxTemplate.creatHtmlImgLightbox()
    })
    lightbox()
  }
}

const init = async () => {
  photographerPageTop()
  photographerPageGallery()
}

init()
