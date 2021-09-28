/**
 * Template HTML Page Index
 */

function IndexPage (photographers) {
  const dataPhotographers = photographers
  dataPhotographers.forEach(dataPhotographers => {
    const photograpeTemplate = new Photographer(dataPhotographers)
    const containerIndex = document.getElementById('index')
    containerIndex.innerHTML += photograpeTemplate.creatHtmlIndex()
  })
  filtre()
}

const init = async () => {
  const { photographers } = await getData()
  IndexPage(photographers)
}

init()
