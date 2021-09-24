
function lightbox () {
  const figureGallery = document.querySelectorAll('section#lightbox figure')
  const imgGallery = document.querySelectorAll('section#gallery figure img')
  const videoGallery = document.querySelectorAll('section#gallery figure video')
  rightLightbox()
  leftLightbox()
  closeLightbox()
  action()

  const mediaGallery = []
  mediaGallery.push.apply(mediaGallery, imgGallery)
  mediaGallery.push.apply(mediaGallery, videoGallery)
  mediaGallery.forEach(img => {
    img.addEventListener('click', event => displayLightbox(event))
    img.addEventListener('keydown', event => {
      if (event.keyCode === 13) {
        displayLightbox(event)
      }
    })

    function displayLightbox () {
      containerLightbox.style.display = 'flex'
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
    }
  })

  function closeLightbox () {
    console.log('closeLightbox')
    const newBtnClose = document.createElement('button')
    containerLightbox.appendChild(newBtnClose)
    newBtnClose.classList.add('close-lightbox')
    newBtnClose.setAttribute('aria-label', 'Fermer la lightbox')
    newBtnClose.innerHTML = '<i class="fas fa-times" tabindex="12"></i>'
    const btnClose = document.querySelector('button.close-lightbox')
    btnClose.addEventListener('click', function () {
      containerLightbox.style.display = 'none'
      containerLightbox.removeChild(btnClose)
    })
  }

  function rightLightbox () {
    console.log('rightLightbox')
    const newBtnarrowright = document.createElement('button')
    containerLightbox.appendChild(newBtnarrowright)
    newBtnarrowright.classList.add('btnright-lightbox')
    newBtnarrowright.setAttribute('aria-label', 'Photo suivante')
    newBtnarrowright.innerHTML = '<i class="fas fa-chevron-right" tabindex="12"></i>'
  }

  function leftLightbox () {
    console.log('leftLightbox')
    const newBtnarrowleft = document.createElement('button')
    containerLightbox.appendChild(newBtnarrowleft)
    newBtnarrowleft.classList.add('btnleft-lightbox')
    newBtnarrowleft.setAttribute('aria-label', 'Photo précedente')
    newBtnarrowleft.innerHTML = '<i class="fas fa-chevron-left" tabindex="12"></i>'
  }

  function goLeft () {
    const actifImg = document.querySelector('.active')
    const figurePrevious = actifImg.previousElementSibling
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

  function goRight () {
    const btnArrowRight = document.querySelector('button.btnright-lightbox')
    const actifImg = document.querySelector('.active')
    const figureNext = actifImg.nextElementSibling
    actifImg.style.display = 'none'
    actifImg.classList.remove('active')
    console.log('figureNext = ' + figureNext)
    if (figureNext === btnArrowRight) {
      console.log('youhou')
      firstFigure = figureGallery[0]
      firstFigure.style.display = 'flex'
      firstFigure.classList.add('active')
    } else {
      figureNext.style.display = 'flex'
      figureNext.classList.add('active')
    }
  }

  function action () {
    const btnArrowRight = document.querySelector('button.btnright-lightbox')
    const btnArrowLeft = document.querySelector('button.btnleft-lightbox')
    window.addEventListener('keydown', function (e) {
      console.log('in')
      if (e.key === 'Escape') {
        console.log('escape key')
        containerLightbox.style.display = 'none'
      } else if (e.keyCode === 37) {
        goLeft()
        console.log('left key')
      } else if (e.keyCode === 39) {
        goRight()
        console.log('right key')
      }
    })

    btnArrowLeft.addEventListener('click', function () {
      goLeft()
      console.log('left click')
    })

    btnArrowRight.addEventListener('click', function () {
      goRight()
      console.log('right click')
    })
  }
}
