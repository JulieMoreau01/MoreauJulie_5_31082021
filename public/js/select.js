
async function select () {
  const dropdown = document.querySelector('.dropdown')
  const dropdownBtn = document.querySelector('.dropdown-btn')
  const dropdownContent = document.querySelector('.dropdown-content')
  const dropdownItem = document.querySelectorAll('.dropdown-item')
  const arrow = document.querySelector('.fas')

  document.addEventListener('click', function (e) {
    if (e.target === dropdownBtn) {
      // return
      console.log(e.target)
    } else {
      if (dropdownContent.classList.contains('active')) {
        dropdownContent.classList.remove('active')
        dropdownBtn.classList.remove('active')
        dropdownBtn.classList.remove('active')
        arrow.classList.remove('fa-chevron-up')
        console.log(e.target)
      }
    }
  })

  dropdown.addEventListener('click', function () {
    this.classList.toggle('active')
    dropdownContent.classList.toggle('active')
    dropdownBtn.classList.toggle('active')
    arrow.classList.toggle('fa-chevron-up')
  })

  for (let i = 0; i < dropdownItem.length; i++) {
    dropdownItem[i].addEventListener('click', function () {
      dropdownBtn.getElementsByTagName('p')[0].textContent = this.textContent
      // console.log(this.dataset.value);
    })
  }
}
