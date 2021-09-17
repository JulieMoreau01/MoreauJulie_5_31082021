function dropdown () {
  const arrayTri = []
  const containerGallery = document.getElementById('gallery')
  function gallery () {
    containerGallery.innerHTML = ''
    arrayTri.forEach(item => {
      const mediaTemplate = new MediaFactory(item)
      containerGallery.innerHTML += mediaTemplate.creatHtmlGallery()
      const containerLightbox = document.getElementById('lightbox')
      const lightboxTemplate = new MediaFactory(item)
      containerLightbox.innerHTML += lightboxTemplate.creatHtmlImgLightbox()
    })
  }
  // Tri par default popularite
  triPopularite()

  function triPopularite () {
    arrayTri.sort(function (a, b) {
      return b.likes - a.likes
    })
    gallery()
  }

  const triPopulariteId = document.getElementById('option-1')
  triPopulariteId.addEventListener('click', function () {
    triPopularite()
  })

  // Tri par Date
  const triDateId = document.getElementById('option-2')
  triDateId.addEventListener('click', function () {
    arrayTri.sort(function (a, b) {
      return new Date(b.date) - new Date(a.date)
    })
    gallery()
  })

  // Tri par Titre
  const triTitleId = document.getElementById('option-3')
  triTitleId.addEventListener('click', function () {
    arrayTri.sort(function compare (a, b) {
      if (a.title < b.title) {
        return -1
      } if (a.title > b.title) {
        return 1
      }
      return 0
    })
    gallery()
  })
}