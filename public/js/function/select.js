// VARIABLES
const list = document.querySelector('.list')
const dropdown = document.querySelector('.dropdown')
const listContainer = document.querySelector('.list-container')
const listItems = document.querySelectorAll('.list-item')
const dropdownSelectedNode = document.querySelector('#selected button')
const listItemIds = []

// DISPLAY SELECTED SORT NAME ON BUTTON
function setSelectedListItem (event) {
  const selectedTextToAppend = document.createTextNode(event.target.innerText)
  dropdownSelectedNode.textContent = null
  dropdownSelectedNode.appendChild(selectedTextToAppend)
}

// CLOSE THE DROPDOWN MENU
function closeList () {
  list.classList.remove('open')
  dropdown.classList.remove('arrowOpen')
  listContainer.setAttribute('aria-expanded', false)
}

// FOCUS ON NEXT ELEMENT WITH ARROW
function focusNextListItem (direction) {
  const activeElementId = document.activeElement.id
  const currentActiveElementIndex = listItemIds.indexOf(activeElementId)
  if (direction === 'ArrowDown') {
    const currentActiveElementIsNotLastItem =
      currentActiveElementIndex < listItemIds.length - 1
    if (currentActiveElementIsNotLastItem) {
      const nextListItemId = listItemIds[currentActiveElementIndex + 1]
      document.querySelector(`#${nextListItemId}`).focus()
    }
  } else if (direction === 'ArrowUp') {
    const currentActiveElementIsNotFirstItem =
    currentActiveElementIndex > 0
    if (currentActiveElementIsNotFirstItem) {
      const nextListItemId = listItemIds[currentActiveElementIndex - 1]
      document.querySelector(`#${nextListItemId}`).focus()
    }
  }
}

// OPEN DROPDOWN AND NEXT ACTION
function toggleListVisibility () {
  // Open the Dropdown Menu
  list.classList.toggle('open')
  dropdown.classList.toggle('arrowOpen')
  dropdownSelectedNode.innerHTML = dropdownSelectedNode.innerHTML + '<span class="sr-only" role="alert" tabindex="-1">Le Menu est ouvert</span>'
  listContainer.setAttribute(
    'aria-expanded',
    list.classList.contains('open')
  )
  listItems[0].focus()
  // Then
  dropdownSelectedNode.addEventListener('keydown', (event) => {
    // CLose Dropdown if Escape
    if (event.key === 'Escape') {
      closeList()
    }
    // Go Down
    if (event.key === 'ArrowDown') {
      focusNextListItem('ArrowDown')
    }
    // Go Up
    if (event.key === 'ArrowUp') {
      focusNextListItem('ArrowUp')
    }
  })
}

export function select () {
  // CLICK OR ENTER ON THE BUTTON
  dropdownSelectedNode.addEventListener('click', (event) => {
    if ((event.key === 'Enter') || (event.type === 'click')) {
      toggleListVisibility()
    }
  }, false)

  // PASS ON NEXT ELEMENT IF TAB
  dropdownSelectedNode.addEventListener('keydown', (event) => {
    if (event.key === 'Tab') {
      listItems.forEach(item => {
        item.setAttribute('tabindex', '-1')
      })
    }
  }, false)

  // EVENT ON LIST ITEM
  listItems.forEach(item => listItemIds.push(item.id))

  listItems.forEach(item => {
    item.addEventListener('click', event => {
      setSelectedListItem(event)
      closeList()
    })
    item.addEventListener('keydown', event => {
      switch (event.key) {
        case 'Enter':
          setSelectedListItem(event)
          closeList()
          return

        case 'ArrowDown':
          focusNextListItem('ArrowDown')
          return

        case 'ArrowUp':
          focusNextListItem('ArrowUp')
          return

        case 'Escape':
          closeList()
      }
    })
  })
}
