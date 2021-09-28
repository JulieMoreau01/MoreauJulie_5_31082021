/**
 * FILTRES TAG
 */
function filtre () {
  // VARIABLES
  const tagIndex = document.querySelectorAll('.tag a')
  const main = document.getElementById('index')
  const sectionPhotographe = main.children

  //DISPLAY PHOTOGRAPHER BY ACTION
  for (let item = 0; item < tagIndex.length; item++) {
    tagIndex[item].addEventListener('click', function (event) {
      event.preventDefault()
      history.pushState(null, null, tagIndex[item].href)
      displayPhotographerByURL()
    })
    tagIndex[item].addEventListener('keydown', function (event) {
      if (event.keyCode === 13) {
        event.preventDefault()
        history.pushState(null, null, tagIndex[item].href)
        displayPhotographerByURL()
      }
    })
  }

  // DISPLAY PHOTOGRAPHER BY URL
  function displayPhotographerByURL () {
    const urlPageIndex = window.location.search
    const tagUrlPageIndex = urlPageIndex.replace('?', '')
    console.log(tagUrlPageIndex)
    for (let i = 1; i < sectionPhotographe.length; i++) {
      if ((sectionPhotographe[i].classList.contains(tagUrlPageIndex) === true ) || (tagUrlPageIndex === ''))  {
        console.log('1')
        sectionPhotographe[i].style.display = 'flex'
      } else {
        console.log('2')
        sectionPhotographe[i].style.display = 'none'
      }
    }
  }
  displayPhotographerByURL()
}
