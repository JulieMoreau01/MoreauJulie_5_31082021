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
}

const initIndex = async () => {
  getData()
  getDataPhotographer()
  getDataMedia()
  renderPhotographers()
}

initIndex()
