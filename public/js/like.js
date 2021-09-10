async function likeCounterFunction () {
  const heartIcon = document.querySelectorAll('i')

  heartIcon.forEach(element => {
    element.addEventListener('click', function () {
      const parent = element.parentElement
      firstCHild = parent.children
      counter = firstCHild[0]
      counterValue = counter.textContent
      nbCounterValue = parseInt(counterValue, 10)
      counterNewValue = (nbCounterValue + 1)
      counter.textContent = counterNewValue
    })
  })
}
