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

const init = async () => {
  getData()
  getDataPhotographer()
  renderPhotographers()
}

init()
