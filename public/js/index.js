/**
 * Template HTML Page Index
 */

async function IndexPage () {
  const dataPhotographers = await getDataPhotographer()
  dataPhotographers.forEach(dataPhotographers => {
    const photograpeTemplate = new Photographer(dataPhotographers)
    const containerIndex = document.getElementById('index')
    containerIndex.innerHTML += photograpeTemplate.creatHtmlIndex()
  })
  filtre()
}

const init = async () => {
  IndexPage()
}

init()
