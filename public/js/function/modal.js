function modal () {
  const btnContact = document.getElementById('contact')
  const btnCloseModal = document.querySelector('p.close-modal')

  containerModal.style.display = 'none'

  btnContact.addEventListener('click', function () {
    containerModal.style.display = 'flex'
  })
  btnContact.addEventListener('keydown', function () {
    containerModal.style.display = 'flex'
  })
  btnCloseModal.addEventListener('click', function () {
    containerModal.style.display = 'none'
  })
}
