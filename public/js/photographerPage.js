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
  const containerFiche = document.getElementById('fiche')
  containerFiche.innerHTML += photograpeTemplate.creatHtmlPhotographer()

  // Template Select
  const containerSelect = document.getElementById('select')
  containerSelect.innerHTML += photograpeTemplate.creatSelect()

  // Template Gallery Photographer
  dataMedia.forEach(data => {
    const stringId = (data.photographerId).toString()
    if (idUrlPage === stringId) {
      const mediaTemplate = new MediaFactory(data)
      const containerGallery = document.getElementById('gallery')
      containerGallery.innerHTML += mediaTemplate.creatHtmlGallery()
      // Tri par popularite date ou Titre
      const itemDropdownActive = document.querySelectorAll('.dropdown-item')
      itemDropdownActive.forEach(element => {
        element.addEventListener('click', function () {
          console.log('je clique')
        })
      })
    }
  })

  // Template Price
  const containerPrice = document.getElementById('price')
  containerPrice.innerHTML += photograpeTemplate.creatPrice()

  // Fonction Like & Price
  likeCounterFunction()
  select()
}

const init = async () => {
  renderPhotographersPage()
}

init()
