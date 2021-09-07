/**
 * Template HTML Page Index
 */
async function renderPhotographers () {
  const dataJson = await getData()
  const dataPhotographers = dataJson.photographers
  dataPhotographers.forEach(dataPhotographers => {
    const photograpeTemplate = new Photographer(dataPhotographers)
    const indexPhotographer = photograpeTemplate.creatHtmlIndex()
    const container = document.getElementById('index')
    container.innerHTML += indexPhotographer
  })
}

const init = async () => {
  getData()
  renderPhotographers()
}

init()
