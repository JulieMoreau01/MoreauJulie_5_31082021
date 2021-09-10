/**
 * Template HTML Page Index
 */
 async function renderPhotographers () {
  const dataPhotographers = await getDataPhotographer()
  alert('4.good')
  dataPhotographers.forEach(dataPhotographers => {
    const photograpeTemplate = new Photographer(dataPhotographers)
    const indexPhotographer = photograpeTemplate.creatHtmlIndex()
    const container = document.getElementById('index')
    container.innerHTML += indexPhotographer
    alert('5.good')
  })
  filtre()
}

const initIndex = async () => {
  renderPhotographers()
}

initIndex()
