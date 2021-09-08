async function renderPhotographersPage () {
  // Recuperation de l'Id dans l'URL
  const urlPage = window.location.search
  const idUrlPage = urlPage.replace('?id=', '')

  const dataJson = await getData()
  const dataPhotographers = dataJson.photographers
  const dataMedia = dataJson.media

  console.log(dataMedia)

  // Recuperation de l'objet qui contient l'ID de l'url dans photographer
  const objetIdNb = dataPhotographers.findIndex(function (item, i) {
    const stringId = (item.id).toString()
    return stringId === idUrlPage
  })

  console.log('objetIdNb = ' + objetIdNb)

  console.log('idUrlPage = ' + idUrlPage)

  // Appelle de l'objet de la table photographer dans la balise <main> de la page photographer
  const objetId = dataPhotographers[objetIdNb]
  const photograpeTemplate = new Photographer(objetId)
  const fichePhotographer = photograpeTemplate.creatHtmlPhotographer()
  const container = document.getElementById('fiche')
  container.innerHTML += fichePhotographer

  // Appelle de l'objet de la table media dans la balise <main> de la page photographer
  dataMedia.forEach(item => {
    const stringId = (item.photographerId).toString()
    if (idUrlPage === stringId) {
      const mediaTemplate = new MediaFactory(item)
      const mediaPhotographer = mediaTemplate.creatHtmlGallery()
      const container = document.getElementById('gallery')
      container.innerHTML += mediaPhotographer
      // if (item.type === 'image') {
      //   const mediaTemplate = new Image(item)
      //   const mediaPhotographer = mediaTemplate.creatHtmlGallery()
      //   const container = document.getElementById('gallery')
      //   container.innerHTML += mediaPhotographer
      // } else if (item.type === 'video') {
      //   const mediaTemplate = new Video(item)
      //   const mediaPhotographer = mediaTemplate.creatHtmlGallery()
      //   const container = document.getElementById('gallery')
      //   container.innerHTML += mediaPhotographer
      // }
    }
  })
}



const init = async () => {
  getData()
  renderPhotographersPage()
}

init()
