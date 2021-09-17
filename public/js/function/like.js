async function likeCounterFunction () {
  const heartIcon = document.querySelectorAll('i.fa-heart')

  totalLike()

  heartIcon.forEach(element => {
    element.addEventListener('click', function () {
      ariaExpanded = element.getAttribute('aria-expanded')
      if (ariaExpanded === 'false') {
        addALike(element)
        totalLike()
      } else {
        removeLike(element)
        totalLike()
      }
    })
    element.addEventListener('keydown', function () {
      ariaExpanded = element.getAttribute('aria-expanded')
      if (ariaExpanded === 'false') {
        addALike(element)
        totalLike()
      } else {
        removeLike(element)
        totalLike()
      }
    })
  })

  function addALike (element) {
    const counter = element.previousElementSibling
    counterValue = counter.textContent
    nbCounterValue = parseInt(counterValue, 10)
    counterNewValue = (nbCounterValue + 1)
    counter.textContent = counterNewValue
    element.setAttribute('aria-label', 'vous avez liké cette photo')
    element.setAttribute('aria-expanded', 'true')
    element.classList.add('newcolor')
  }

  function removeLike (element) {
    const counter = element.previousElementSibling
    counterValue = counter.textContent
    nbCounterValue = parseInt(counterValue, 10)
    counterNewValue = (nbCounterValue - 1)
    counter.textContent = counterNewValue
    element.setAttribute('aria-label', 'vous n avez pas liké cette photo')
    element.setAttribute('aria-expanded', 'false')
    element.classList.remove('newcolor')
  }

  function totalLike () {
    const allCounter = document.querySelectorAll('span.counter')
    allCounterArray = Array.from(allCounter, e => parseFloat(e.innerText))
    const reducer = (previousValue, currentValue) => previousValue + currentValue
    const sumAllCounter = allCounterArray.reduce(reducer)
    const totalLikeId = document.getElementById('total_like')
    totalLikeId.textContent = sumAllCounter
  }
}
