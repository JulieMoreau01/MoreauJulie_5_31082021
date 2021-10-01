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
  } else {
    figureNext.style.display = 'flex'
    figureNext.classList.add('active')
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
  } else {
    figurePrevious.style.display = 'flex'
    figurePrevious.classList.add('active')
  }
}

function lightboxAction () {
  const btnRight = document.querySelector('button.btnright-lightbox')
  const btnLeft = document.querySelector('button.btnleft-lightbox')
  const btnClose = document.querySelector('button.close-lightbox')
  window.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      containerLightbox.style.display = 'none'
    } else if (event.key === 'ArrowLeft') {
      goLeft()
    } else if (event.key === 'ArrowRight') {
      goRight()
    }
  })

  btnLeft.addEventListener('click', function () {
    goLeft()
  })
  btnRight.addEventListener('click', function () {
    goRight()
  })
  btnClose.addEventListener('click', function () {
    containerLightbox.style.display = 'none'
    containerLightbox.setAttribute('aria-hidden', 'true')
    const figureGallery = document.querySelectorAll('section#lightbox figure')
    figureGallery.forEach(figure => {
      containerLightbox.removeChild(figure)
    })
  })
}

export function displayLightbox (event, img) {
  containerLightbox.style.display = 'flex'
  containerLightbox.setAttribute('aria-hidden', 'false')
  containerLightbox.focus()
  const ImageSrc = img.getAttribute('src')
  // DISPLAY PICTURE CLICKED ON LIGHTBOX
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
