const valuePerLike = 1

function totalLike () {
  const allCounter = document.querySelectorAll('span.counter')
  const allCounterArray = Array.from(allCounter, e => parseFloat(e.innerText))
  const reducer = (previousValue, currentValue) => previousValue + currentValue
  const sumAllCounter = allCounterArray.reduce(reducer)
  const totalLikeId = document.getElementById('total_like')
  totalLikeId.innerHTML = sumAllCounter + '<span class="sr-only">like total</span>'
}

function addALike (element) {
  const counter = element.previousElementSibling
  const counterValue = counter.textContent
  const nbCounterValue = parseInt(counterValue, 10)
  const counterNewValue = (nbCounterValue + valuePerLike)
  counter.textContent = counterNewValue
  element.setAttribute('aria-expanded', 'true')
  element.classList.add('newcolor')

  const parent = element.parentElement.parentElement.parentElement
  const alert = parent.querySelector('.alert_like')
  element.setAttribute('aria-invalid', 'true')
  element.setAttribute('aria-live', 'Assertive')
  alert.setAttribute('role', 'alert')
  alert.innerHTML = 'Vous avez ajouter un like'
}

function removeLike (element) {
  const counter = element.previousElementSibling
  const counterValue = counter.textContent
  const nbCounterValue = parseInt(counterValue, 10)
  const counterNewValue = (nbCounterValue - valuePerLike)
  counter.textContent = counterNewValue
  element.setAttribute('aria-expanded', 'false')
  element.classList.remove('newcolor')

  const parent = element.parentElement.parentElement.parentElement
  const alert = parent.querySelector('.alert_like')
  element.setAttribute('aria-invalid', 'true')
  element.setAttribute('aria-live', 'Assertive')
  alert.setAttribute('role', 'alert')
  alert.innerHTML = 'Vous avez retirer un like'
}

export function likeCounter () {
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
