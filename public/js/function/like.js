const valuePerLike = 1

function totalLike () {
  const allCounter = document.querySelectorAll('span.counter')
  const allCounterArray = Array.from(allCounter, e => parseFloat(e.innerText))
  const reducer = (previousValue, currentValue) => previousValue + currentValue
  const sumAllCounter = allCounterArray.reduce(reducer)
  const totalLikeId = document.getElementById('total_like')
  totalLikeId.textContent = sumAllCounter
}

function addALike (element) {
  const counter = element.previousElementSibling
  const counterValue = counter.textContent
  const nbCounterValue = parseInt(counterValue, 10)
  const counterNewValue = (nbCounterValue + valuePerLike)
  counter.textContent = counterNewValue
  element.setAttribute('aria-label', 'vous avez liké cette photo')
  element.setAttribute('aria-expanded', 'true')
  element.classList.add('newcolor')
}

function removeLike (element) {
  const counter = element.previousElementSibling
  const counterValue = counter.textContent
  const nbCounterValue = parseInt(counterValue, 10)
  const counterNewValue = (nbCounterValue - valuePerLike)
  counter.textContent = counterNewValue
  element.setAttribute('aria-label', 'vous n avez pas liké cette photo')
  element.setAttribute('aria-expanded', 'false')
  element.classList.remove('newcolor')
}

export function likeCounterFunction () {
  const heartIcon = document.querySelectorAll('i.fa-heart')
  totalLike()

  heartIcon.forEach(element => {
    function displayLike () {
      const ariaExpanded = element.getAttribute('aria-expanded')
      if (ariaExpanded === 'false') {
        addALike(element)
        totalLike()
      } else {
        removeLike(element)
        totalLike()
      }
    }
    element.addEventListener('click', function () {
      displayLike()
    })
    element.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        displayLike()
      }
    })
  })
}
