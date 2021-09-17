
function lightbox () {
  const containerLightbox = document.getElementById('lightbox')
  const imgGallery = document.querySelectorAll('section figure img')
  containerLightbox.style.display = 'none'

  //console.log(imgGallery)

  imgGallery.forEach(img => {
    img.addEventListener('click', function () {
      //console.log(img)
      containerLightbox.style.display = 'block'
      const newBtnClose = document.createElement('button')
      containerLightbox.appendChild(newBtnClose)
      newBtnClose.classList.add('close-lightbox')
      newBtnClose.setAttribute('aria-label', 'Fermer la lightbox')
      newBtnClose.innerHTML = 'x'
      closeLightbox()
      const ImageSrc = img.getAttribute('src')
      //console.log(ImageSrc)
      const figureGallery = document.querySelectorAll('section#lightbox figure')
      console.log(figureGallery)
      figureGallery.forEach(item => {
        item.style.display = 'none'
        const thisImage = item.children
        console.log(thisImage)
        const allsrc = thisImage.item(0).getAttribute('src')
        console.log(allsrc)
        if (allsrc === ImageSrc) {
          // figure.img.style.display = 'block'
          item.style.display = 'flex'
        }
      })

    })
  })

  // function lightboxTemplate (item) {
  //   const lightboxTemplate = new MediaFactory(item)
  //   containerLightbox.innerHTML += lightboxTemplate.creatHtmlImgLightbox()
  // }

  function closeLightbox () {
    const btnClose = document.querySelector('button')
    btnClose.addEventListener('click', function () {
      containerLightbox.style.display = 'none'
      containerLightbox.removeChild(btnClose)
    })
  }
}
