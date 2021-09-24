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
containerLightbox.style.display = 'none'
const containerModal = document.getElementById('modal')
containerModal.style.display = 'none'

/**
 * TEMPLATE FICHE PHOTOGRAPHER & PRICE & SELECT
 */
async function photographerPageTop () {
  const dataPhotographers = await getDataPhotographer()

  // GET TABLE WITH GOOD PHOTOGRAPHER ID
  const getPhotographerById = dataPhotographers.findIndex(function (item, i) {
    const stringId = (item.id).toString()
    return stringId === idUrlPage
  })

  // DISPLAY FICHE PHOTOGRAPHER & PRICE
  const data = dataPhotographers[getPhotographerById]
  const photograpeTemplate = new Photographer(data)
  containerFiche.innerHTML += photograpeTemplate.creatHtmlPhotographerFiche()
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
      const lightboxTemplate = new LightBox(item)
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
