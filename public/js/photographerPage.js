async function renderPhotographersPage () {
  const dataPhotographers = await getDataPhotographer()
  const dataMedia = await getDataMedia()

  // Recuperation de l'Id dans l'URL
  const urlPage = window.location.search
  const idUrlPage = urlPage.replace('?id=', '')

  // Recuperation de l'objet qui contient l'ID de l'url dans photographer
  const objetIdNb = dataPhotographers.findIndex(function (item, i) {
    const stringId = (item.id).toString()
    return stringId === idUrlPage
  })

  // Template Fiche Photographer
  const data = dataPhotographers[objetIdNb]
  const photograpeTemplate = new Photographer(data)
  const fichePhotographer = photograpeTemplate.creatHtmlPhotographer()
  const containerFiche = document.getElementById('fiche')
  containerFiche.innerHTML += fichePhotographer

  // Template Select
  const selectPhotographer = photograpeTemplate.creatSelect()
  const containerSelect = document.getElementById('select')
  containerSelect.innerHTML += selectPhotographer

  // Template Gallery Photographer
  dataMedia.forEach(data => {
    const stringId = (data.photographerId).toString()
    if (idUrlPage === stringId) {
      const mediaTemplate = new MediaFactory(data)
      const mediaPhotographer = mediaTemplate.creatHtmlGallery()
      const containerGallery = document.getElementById('gallery')
      containerGallery.innerHTML += mediaPhotographer
    }
  })

  // Template Price
  const pricePhotographer = photograpeTemplate.creatPrice()
  const containerPrice = document.getElementById('price')
  containerPrice.innerHTML += pricePhotographer

  // Fonction Like & Price
  likeCounterFunction()
  select()
}

const init = async () => {
  renderPhotographersPage()
}

init()
