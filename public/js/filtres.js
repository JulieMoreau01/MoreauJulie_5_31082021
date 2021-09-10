/**
 * FILTRES TAG
 */
async function filtre () {
  const main = document.getElementById('index')
  const sectionPhotographe = main.children
  const tags = document.getElementsByClassName('tag')
  for (let item = 0; item < tags.length; item++) {
    tags[item].addEventListener('click', function () {
      tagName = tags[item].getAttribute('class').replace('tag ', '')
      for (let i = 1; i < sectionPhotographe.length; i++) {
        if (sectionPhotographe[i].classList.contains(tagName) === true) {
          sectionPhotographe[i].style.display = 'flex'
        } else {
          sectionPhotographe[i].style.display = 'none'
        }
      }
    })
  }
}
