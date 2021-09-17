
function lightbox () {
  const containerLightbox = document.getElementById('lightbox')
  containerLightbox.style.display = 'none'

  const figureGallery = document.querySelectorAll('section#lightbox figure')
  const imgGallery = document.querySelectorAll('section#gallery figure img')
  const videoGallery = document.querySelectorAll('section#gallery figure video')

  const mediaGallery = []
  mediaGallery.push.apply(mediaGallery, imgGallery)
  mediaGallery.push.apply(mediaGallery, videoGallery)

  mediaGallery.forEach(img => {
    img.addEventListener('click', function () {
      containerLightbox.style.display = 'flex'
      closeLightbox()
      const ImageSrc = img.getAttribute('src')
      // Afficher l'image qui correspond a l'image clické
      figureGallery.forEach(item => {
        item.style.display = 'none'
        const thisImage = item.children
        const allsrc = thisImage.item(0).getAttribute('src')
        if (allsrc === ImageSrc) {
          item.style.display = 'flex'
          item.classList.add('active')
        }
      })
    })
  })

  function closeLightbox () {
    const newBtnClose = document.createElement('button')
    containerLightbox.appendChild(newBtnClose)
    newBtnClose.classList.add('close-lightbox')
    newBtnClose.setAttribute('aria-label', 'Fermer la lightbox')
    newBtnClose.innerHTML = '<i class="fas fa-times"></i>'
    const btnClose = document.querySelector('button.close-lightbox')
    btnClose.addEventListener('click', function () {
      containerLightbox.style.display = 'none'
      containerLightbox.removeChild(btnClose)
    })
  }

  function arrow () {
    // RIGHT
    const newBtnarrowright = document.createElement('button')
    containerLightbox.appendChild(newBtnarrowright)
    newBtnarrowright.classList.add('btnright-lightbox')
    newBtnarrowright.setAttribute('aria-label', 'Photo suivante')
    newBtnarrowright.innerHTML = '<i class="fas fa-chevron-right"></i>'

    const btnArrowRight = document.querySelector('button.btnright-lightbox')
    btnArrowRight.addEventListener('click', function () {
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
    })

    // LEFT
    const newBtnarrowleft = document.createElement('button')
    containerLightbox.appendChild(newBtnarrowleft)
    newBtnarrowleft.classList.add('btnleft-lightbox')
    newBtnarrowleft.setAttribute('aria-label', 'Photo précedente')
    newBtnarrowleft.innerHTML = '<i class="fas fa-chevron-left"></i>'

    const btnArrowLeft = document.querySelector('button.btnleft-lightbox')
    btnArrowLeft.addEventListener('click', function () {
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
    })
  }
  arrow()
}
