async function likeCounterFunction () {
  const heartIcon = document.querySelectorAll('i')
  const allCounter = document.querySelectorAll('span.counter')

  heartIcon.forEach(element => {
    element.addEventListener('click', function () {
      counter = allCounter[0]
      counterValue = counter.textContent
      nbCounterValue = parseInt(counterValue, 10)
      counterNewValue = (nbCounterValue + 1)
      counter.textContent = counterNewValue
      // TOTAL LIKE
      let total = 0
      allCounter.forEach(element => {
        oneCounter = parseInt(element.textContent, 10)
        total += oneCounter
      })
      console.log(total)
      const totalLikeId = document.getElementById('total_like')
      totalLikeId.textContent = total
    })
  })
}
