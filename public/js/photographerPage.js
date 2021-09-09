async function renderPhotographersPage () {
  // Recuperation de l'Id dans l'URL
  const urlPage = window.location.search
  const idUrlPage = urlPage.replace('?id=', '')

  const dataPhotographers = await getDataPhotographer()
  const dataMedia = await getDataMedia()

  // Recuperation de l'objet qui contient l'ID de l'url dans photographer
  const objetIdNb = dataPhotographers.findIndex(function (item, i) {
    const stringId = (item.id).toString()
    return stringId === idUrlPage
  })

  // Appelle de l'objet de la table photographer dans la balise <main> de la page photographer
  const data = dataPhotographers[objetIdNb]
  const photograpeTemplate = new Photographer(data)
  const fichePhotographer = photograpeTemplate.creatHtmlPhotographer()
  const container = document.getElementById('fiche')
  container.innerHTML += fichePhotographer

  // Appelle de l'objet de la table media dans la balise <main> de la page photographer

  dataMedia.forEach(data => {
    const stringId = (data.photographerId).toString()
    if (idUrlPage === stringId) {
      const mediaTemplate = new MediaFactory(data)
      const mediaPhotographer = mediaTemplate.creatHtmlGallery()
      const container = document.getElementById('gallery')
      container.innerHTML += mediaPhotographer
    }
  })
}

const init = async () => {
  getData()
  getDataPhotographer()
  getDataMedia()
  renderPhotographersPage()
}

init()
