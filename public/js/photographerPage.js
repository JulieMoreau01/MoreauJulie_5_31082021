async function renderPhotographersPage () {
  const urlPage = window.location.search
  const idUrlPage = urlPage.replace('?id=', '')
  console.log(idUrlPage)

  const dataJson = await getData()
  const dataPhotographers = dataJson.photographers

  const objetId = dataPhotographers.findIndex(function (item, i) {
    return item.id == idUrlPage
  })

  const thegood = dataPhotographers[objetId]

  const photograpeTemplate = new Photographer(thegood)
  const indexPhotographer = photograpeTemplate.creatHtmlPage()
  const container = document.getElementById('index')
  container.innerHTML += indexPhotographer
}

const init = async () => {
  getData()
  renderPhotographersPage()
}

init()
