/**
 * GET DATA
 * @returns url or error
 */
export async function getData () {
  const url = './public/json/FishEyeData.json'
  try {
    const res = await fetch(url)
    return await res.json()
  } catch (error) {
    const containerIndex = document.getElementById('index')
    containerIndex.innerHTML = '"Erreur avec les données"'
  }
}
