/**
 * FILTRES TAG
 */

const portrait = document.getElementsByClassName('tag portrait')
const art = document.getElementsByClassName('tag art')
const fashion = document.getElementsByClassName('tag fashion')
const architecture = document.getElementsByClassName('tag architecture')
const travel = document.getElementsByClassName('tag travel')
const sport = document.getElementsByClassName('.tag.sport')
const animals = document.getElementsByClassName('.tag.animals')
const events = document.getElementsByClassName('.tag.events')

console.log(portrait)
console.log(typeof portrait)
console.log(portrait.length)
console.log(portrait.item(0))
console.log(portrait.item(1))
console.log(portrait.item(2))
console.log(portrait.item(3))

//portrait.forEach(el => console.log(el))

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
