import { focusModal } from './focusModal.js'
const containerLightbox = document.getElementById('lightbox')

function goRight () {
  const actifImg = document.querySelector('.active')
  const figureNext = actifImg.nextElementSibling
  const btnRight = document.querySelector('button.btnright-lightbox')
  actifImg.style.display = 'none'
  actifImg.classList.remove('active')
  if (figureNext === btnRight) {
    const firstFigure = containerLightbox.firstElementChild
    firstFigure.style.display = 'flex'
    firstFigure.classList.add('active')
    focusModal(containerLightbox)
  } else {
    figureNext.style.display = 'flex'
    figureNext.classList.add('active')
    focusModal(containerLightbox)
  }
}

function goLeft () {
  const actifImg = document.querySelector('.active')
  const figurePrevious = actifImg.previousElementSibling
  const figureGallery = document.querySelectorAll('section#lightbox figure')
  actifImg.style.display = 'none'
  actifImg.classList.remove('active')
  if (figurePrevious === null) {
    const figureNbombre = (figureGallery.length) - 1
    const lastFigure = figureGallery[figureNbombre]
    lastFigure.style.display = 'flex'
    lastFigure.classList.add('active')
    focusModal(containerLightbox)
  } else {
    figurePrevious.style.display = 'flex'
    figurePrevious.classList.add('active')
    focusModal(containerLightbox)
  }
}

function lightboxAction () {
  const btnRight = document.querySelector('button.btnright-lightbox')
  const btnLeft = document.querySelector('button.btnleft-lightbox')
  const btnClose = document.querySelector('button.close-lightbox')

  // Keyboard Action
  window.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      containerLightbox.classList.add('hidden')
    } else if (event.key === 'ArrowLeft') {
      goLeft()
    } else if (event.key === 'ArrowRight') {
      goRight()
    }
  })

  // Mouse Action
  btnLeft.addEventListener('click', function () { goLeft() })
  btnRight.addEventListener('click', function () { goRight() })
  btnClose.addEventListener('click', function () {
    containerLightbox.classList.add('hidden')
    containerLightbox.setAttribute('aria-hidden', 'true')
    const figureGalleryFirst = document.querySelector('section#gallery figure img')
    figureGalleryFirst.focus()
    const figureGallery = document.querySelectorAll('section#lightbox figure')
    figureGallery.forEach(figure => {
      containerLightbox.removeChild(figure)
    })
  })
}

/**
 * Display LightBOx Function
 * @param {*} elt Clicked element
 */
export function displayLightbox (event, elt) {
  containerLightbox.classList.remove('hidden')
  containerLightbox.setAttribute('aria-hidden', 'false')
  containerLightbox.focus()
  const ImageSrc = elt.getAttribute('src')

  // Display Picture clicked on lightBox
  const figureGallery = document.querySelectorAll('section#lightbox figure')
  figureGallery.forEach(item => {
    item.style.display = 'none'
    const thisImage = item.children
    const allsrc = thisImage.item(0).getAttribute('src')
    if (allsrc === ImageSrc) {
      item.style.display = 'flex'
      item.classList.add('active')
    }
  })
  lightboxAction()
}
