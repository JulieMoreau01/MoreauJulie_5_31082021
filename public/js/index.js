/**
 * Template HTML Page Index
 */
async function renderPhotographers () {
  const dataPhotographers = await getDataPhotographer()
  dataPhotographers.forEach(dataPhotographers => {
    const photograpeTemplate = new Photographer(dataPhotographers)
    const container = document.getElementById('index')
    container.innerHTML += photograpeTemplate.creatHtmlIndex()
  })
  filtre()
}

const initIndex = async () => {
  renderPhotographers()
}

initIndex()
