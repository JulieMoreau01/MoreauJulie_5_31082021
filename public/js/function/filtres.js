/**
 * DISPLAY PHOTOGRAPHER ON INDEX.HTML
 */
export function displayPhotographerByURL () {
  // Constants
  const main = document.getElementById('index')
  const sectionIndex = main.children
  const addValue = 1

  // Get the tag in the Url
  const urlPageIndex = window.location.search
  const tagUrlPageIndex = urlPageIndex.replace('?', '')

  // Display flex or none on section if class match with url
  for (let section = 1; section < sectionIndex.length; section += addValue) {
    if ((sectionIndex[section].classList.contains(tagUrlPageIndex) === true) ||
     (tagUrlPageIndex === '')) {
      sectionIndex[section].style.display = 'flex'
      sectionIndex[0].focus()
    } else {
      sectionIndex[section].style.display = 'none'
    }
  }
}
