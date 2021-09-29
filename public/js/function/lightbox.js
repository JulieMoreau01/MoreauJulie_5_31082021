const containerLightbox = document.getElementById('lightbox')
console.log(containerLightbox)

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
    console.log(lastFigure)
    lastFigure.style.display = 'flex'
    lastFigure.classList.add('active')
  } else {
    figurePrevious.style.display = 'flex'
    figurePrevious.classList.add('active')
  }
}

function closeLightbox () {
  const newBtnClose = document.createElement('button')
  containerLightbox.appendChild(newBtnClose)
  newBtnClose.classList.add('close-lightbox')
  newBtnClose.setAttribute('aria-label', 'Fermer la lightbox')
  newBtnClose.innerHTML = '<i class="fas fa-times" tabindex="12"></i>'
}

function rightLightbox () {
  const newBtnRight = document.createElement('button')
  containerLightbox.appendChild(newBtnRight)
  newBtnRight.classList.add('btnright-lightbox')
  newBtnRight.setAttribute('aria-label', 'Photo suivante')
  newBtnRight.innerHTML = '<i class="fas fa-chevron-right" tabindex="12"></i>'
}

function leftLightbox () {
  const newBtnLeft = document.createElement('button')
  containerLightbox.appendChild(newBtnLeft)
  newBtnLeft.classList.add('btnleft-lightbox')
  newBtnLeft.setAttribute('aria-label', 'Photo précedente')
  newBtnLeft.innerHTML = '<i class="fas fa-chevron-left" tabindex="12"></i>'
}

function action () {
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
  })
}

function lightboxAction () {
  rightLightbox()
  leftLightbox()
  closeLightbox()
  action()
}

export function lightbox () {
  const imgGallery = document.querySelectorAll('section#gallery figure img')
  const videoGallery = document.querySelectorAll('section#gallery figure video')
  const figureGallery = document.querySelectorAll('section#lightbox figure')
  // Creat array with Image & Video
  const mediaGallery = []
  const args = [
    imgGallery,
    videoGallery
  ]
  mediaGallery.push.apply(mediaGallery, ...args)
  // Display the lightbox Section and get the src of click picture on gallery
  mediaGallery.forEach(img => {
    function displayLightbox () {
      containerLightbox.style.display = 'flex'
      containerLightbox.setAttribute('aria-hidden', 'false')
      containerLightbox.focus()
      const ImageSrc = img.getAttribute('src')
      // DISPLAY PICTURE CLICKED ON LIGHTBOX
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
    img.addEventListener('click', event => displayLightbox(event))
    img.addEventListener('keydown', event => {
      if (event.key === 'Enter') {
        displayLightbox(event)
      }
    })
  })
}
