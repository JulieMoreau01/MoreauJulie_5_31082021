/**
 * GET JSON DATA
 * @returns Ok or Error
 */
async function getData () {
  const url = 'https://juliemoreau01.github.io/MoreauJulie_5_31082021/public/json/FishEyeData.json'
  try {
    const res = await fetch(url)
    //alert('1.good')
    return await res.json()
  } catch (error) {
    console.log(error)
    //alert('1.error')
  }
}

/**
 * GET TABLE PHOTOGRAPHER
 */
async function getDataPhotographer () {
  const dataJson = await getData()
  const dataPhotographers = dataJson.photographers
  //alert('2.good')
  return await dataPhotographers
}

/**
 * GET TABLE MEDIA
 */
async function getDataMedia () {
  const dataJson = await getData()
  const dataMedia = dataJson.media
  //alert('3.good')
  return await dataMedia
}
