
import { Photographer } from './class/Photographer.js'
import { filtre } from './function/filtres.js'
import { getData } from './data.js'

/**
 * TEMPLATE HTML PAGE INDEX WITH CLASS PHOTOGRAPHER
 */

function IndexPage (photographers) {
  const dataPhotographers = photographers
  dataPhotographers.forEach(dataPhotographers => {
    const photograpeTemplate = new Photographer(dataPhotographers)
    const containerIndex = document.getElementById('index')
    containerIndex.innerHTML += photograpeTemplate.creatHtmlIndex()
  })
  // Call the filtre function for sort the photograher by tag
  filtre()
}

const init = async () => {
  const { photographers } = await getData()
  IndexPage(photographers)
}

init()
