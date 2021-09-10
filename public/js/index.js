/**
 * Template HTML Page Index
 */
async function renderPhotographers () {
  const dataPhotographers = await getDataPhotographer()
  dataPhotographers.forEach(dataPhotographers => {
    const photograpeTemplate = new Photographer(dataPhotographers)
    const indexPhotographer = photograpeTemplate.creatHtmlIndex()
    const container = document.getElementById('index')
    container.innerHTML += indexPhotographer
  })
  filtre()
}

const initIndex = async () => {
  renderPhotographers()
}

initIndex()
