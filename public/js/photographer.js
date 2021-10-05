import { LightBox } from './class/LightBox.js'
import { MediaFactory } from './class/Media.js'
import { Photographer } from './class/Photographer.js'
import { getData } from './data.js'
import { displayLightbox } from './function/lightbox.js'
import { likeCounter } from './function/like.js'
import { modalContact } from './function/modal.js'
import { dropdownSort } from './function/dropdownSort.js'
import { sortGallery } from './function/sortGallery.js'
import { focusModal } from './function/focusModal.js'

/**
 * VARIABLE
 */
const urlPage = window.location.search
const idUrlPage = urlPage.replace('?id=', '')
const containerFiche = document.getElementById('fiche')
const containerPrice = document.getElementById('price')
const containerGallery = document.getElementById('gallery')
const containerLightbox = document.getElementById('lightbox')

/**
 * TEMPLATE FICHE PHOTOGRAPHER & PRICE & SELECT
 */
function photographerPageTop (photographers) {
  const dataPhotographers = photographers

  // Get table with good photographer ID
  const getPhotographerById = dataPhotographers.findIndex(function (item) {
    const stringId = (item.id).toString()
    return stringId === idUrlPage
  })

  // Display fiche Photographer & Price
  const data = dataPhotographers[getPhotographerById]
  const photographeTemplate = new Photographer(data)
  containerFiche.innerHTML += photographeTemplate.creatHtmlPhotographerFiche()
  containerPrice.innerHTML += photographeTemplate.creatHtmlPhotographerPrice()

  // Display the modal Contact
  modalContact()

  // Display Dropdown Menu for sort the Gallery
  dropdownSort()
}

/**
 * TEMPLATE GALLERY
 */
export function photographerPageGallery (media) {
  // Result of sortGallery
  const arrayTri = sortGallery(media)

  // Display Gallery
  containerGallery.innerHTML = ''
  arrayTri.forEach(item => {
    const mediaTemplate = new MediaFactory(item)
    containerGallery.innerHTML += mediaTemplate.creatHtmlGallery()
  })

  // Make a image of the video
  const video = document.querySelector('video')
  video.removeAttribute('controls')

  // Display Function Heart for count the like
  likeCounter()
}

/**
 * TEMPLATE LIGHTBOX
 */
export function photographerPagelightBox (media) {
  // Display Lightbox with display:none
  function lightboxHidden () {
    const arrayTri = sortGallery(media)
    arrayTri.forEach(item => {
      const lightboxTemplate = new LightBox(item)
      containerLightbox.innerHTML = lightboxTemplate.creatHtmlImgLightbox() + containerLightbox.innerHTML
    })
  }

  // Grouping of images & video on a new Array
  const imgGallery = document.querySelectorAll('section#gallery figure img')
  const videoGallery = document.querySelectorAll('section#gallery figure video')
  const allImgGallery = [].slice.call(imgGallery)
  const allVideoGallery = [].slice.call(videoGallery)
  const mediaGallery = allImgGallery.concat(allVideoGallery)

  // On click on each element of the new Array
  mediaGallery.forEach(elt => {
    elt.addEventListener('click', event => {
      lightboxHidden()
      displayLightbox(event, elt)
      focusModal(containerLightbox)
    })
    elt.addEventListener('keydown', event => {
      if (event.key === 'Enter') {
        lightboxHidden()
        displayLightbox(event, elt)
        focusModal(containerLightbox)
      }
    })
  })
}

const init = async () => {
  const { photographers, media } = await getData()
  photographerPageTop(photographers)
  photographerPageGallery(media)
  photographerPagelightBox(media)
}

init()
