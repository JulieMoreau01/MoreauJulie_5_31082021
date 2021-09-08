/**
 * GET JSON DATA
 * @returns Ok or Error
 */
async function getData () {
  const url = 'https://juliemoreau01.github.io/MoreauJulie_5_31082021/public/js/FishEyeData.json'
  try {
    const res = await fetch(url)
    return await res.json()
  } catch (error) {
    console.log(error)
  }
}
