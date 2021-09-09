/**
 * GET JSON DATA
 * @returns Ok or Error
 */
async function getData () {
  const url = './public/json/FishEyeData.json'
  try {
    const res = await fetch(url)
    return await res.json()
  } catch (error) {
    console.log(error)
  }
}

/**
 * GET TABLE PHOTOGRAPHER
 */
async function getDataPhotographer () {
  const dataJson = await getData()
  const dataPhotographers = dataJson.photographers
  return await dataPhotographers
}

/**
 * GET TABLE MEDIA
 */
async function getDataMedia () {
  const dataJson = await getData()
  const dataMedia = dataJson.media
  return await dataMedia
}
