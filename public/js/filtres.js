
/**
 * FILTRES TAG
 */

const portrait = document.getElementById('portrait')
const art = document.getElementById('art')
const fashion = document.getElementById('fashion')
const architecture = document.getElementById('architecture')
const travel = document.getElementById('travel')
const sport = document.getElementById('sport')
const animals = document.getElementById('animals')
const events = document.getElementById('events')

console.log(portrait)

const allTags = [portrait, art, fashion, architecture, travel, sport, animals, events]

const main = document.getElementById('index')
const sectionPhotographe = main.children

allTags.forEach(item => {
  item.addEventListener('click', function () {
    const tagName = item.getAttribute('id')
    for (let i = 1; i < 7; i++) {
      if (sectionPhotographe[i].classList.contains(tagName) === true) {
        sectionPhotographe[i].style.display = 'flex'
      } else {
        sectionPhotographe[i].style.display = 'none'
      }
    }
  })
})
