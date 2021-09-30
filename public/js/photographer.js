import { LightBox } from './class/LightBox.js'
import { MediaFactory } from './class/Media.js'
import { Photographer } from './class/Photographer.js'
import { getData } from './data.js'
import { displayLightbox } from './function/lightbox.js'
import { likeCounterFunction } from './function/like.js'
import { modal } from './function/modal.js'
import { select } from './function/select.js'
import { sortGallery } from './function/sortGallery.js'

/**
 * VARIABLE
 */
const urlPage = window.location.search
const idUrlPage = urlPage.replace('?id=', '')
const containerFiche = document.getElementById('fiche')
const containerPrice = document.getElementById('price')
const containerGallery = document.getElementById('gallery')
const containerLightbox = document.getElementById('lightbox')
containerLightbox.style.display = 'none'
const containerModal = document.getElementById('modal')
containerModal.style.display = 'none'

/**
 * TEMPLATE FICHE PHOTOGRAPHER & PRICE & SELECT
 */
function photographerPageTop (photographers) {
  const dataPhotographers = photographers

  // GET TABLE WITH GOOD PHOTOGRAPHER ID
  const getPhotographerById = dataPhotographers.findIndex(function (item) {
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
export function photographerPageGallery (media) {
  // RESULT OF SORT GALLERY
  const arrayTri = sortGallery(media)

  // DISPLAY GALLERY
  containerGallery.innerHTML = ''
  arrayTri.forEach(item => {
    console.log(item)
    const mediaTemplate = new MediaFactory(item)
    containerGallery.innerHTML += mediaTemplate.creatHtmlGallery()
  })

  // Make a image of the video
  const video = document.querySelector('video')
  video.removeAttribute('controls')
  likeCounterFunction()
  lightBox(media)
}

// DISPLAY LIGHTBOX
function lightBox (media) {
  function lightboxHidden () {
    const arrayTri = sortGallery(media)
    arrayTri.forEach(item => {
      const lightboxTemplate = new LightBox(item)
      containerLightbox.innerHTML = lightboxTemplate.creatHtmlImgLightbox() + containerLightbox.innerHTML
    })
  }
  const imgGallery = document.querySelectorAll('section#gallery figure img')
  const videoGallery = document.querySelectorAll('section#gallery figure video')

  const allImgGallery = [].slice.call(imgGallery)
  const allVideoGallery = [].slice.call(videoGallery)
  const mediaGallery = allImgGallery.concat(allVideoGallery)

  mediaGallery.forEach(img => {
    img.addEventListener('click', event => {
      lightboxHidden()
      displayLightbox(event, img)
    })
    img.addEventListener('keydown', event => {
      if (event.key === 'Enter') {
        lightboxHidden()
        displayLightbox(event, img)
      }
    })
  })
}

const init = async () => {
  const { photographers, media } = await getData()
  photographerPageTop(photographers)
  photographerPageGallery(media)
}

init()
