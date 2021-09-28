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
