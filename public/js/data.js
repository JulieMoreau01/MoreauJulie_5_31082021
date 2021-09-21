/**
 * GET DATA
 * @returns url or error
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
  const { photographers } = await getData()
  return await photographers
}

/**
 * GET TABLE MEDIA
 */
async function getDataMedia () {
  const { media } = await getData()
  return await media
}

