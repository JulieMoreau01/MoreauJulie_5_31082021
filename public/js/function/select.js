const list = document.querySelector('.list')
const dropdown = document.querySelector('.dropdown')
const listContainer = document.querySelector('.list-container')
const listItems = document.querySelectorAll('.list-item')
const dropdownSelectedNode = document.querySelector('#selected')
const listItemIds = []

function setSelectedListItem (event) {
  const selectedTextToAppend = document.createTextNode(event.target.innerText)
  dropdownSelectedNode.textContent = null
  dropdownSelectedNode.appendChild(selectedTextToAppend)
}

function closeList () {
  list.classList.remove('open')
  dropdown.classList.remove('arrowOpen')
  listContainer.setAttribute('aria-expanded', false)
}

function focusNextListItem (direction) {
  const activeElementId = document.activeElement.id
  const currentActiveElementIndex = listItemIds.indexOf(activeElementId)
  if (activeElementId === 'selected') {
    document.querySelector(`#${listItemIds[0]}`).focus()
  } else if (direction === 'ArrowDown') {
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

export function select () {
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
          return

        default:
          console.log('default')
      }
    })
  })

  function toggleListVisibility (event) {
    const openDropDown = event.key === 'Enter'
    if (event.key === 'Escape') {
      closeList()
    }
    if (event.type === 'click' || openDropDown) {
      list.classList.toggle('open')
      dropdown.classList.toggle('arrowOpen')
      listContainer.setAttribute(
        'aria-expanded',
        list.classList.contains('open')
      )
    }
    if (event.key === 'Tab') {
      listItems.forEach(item => {
        item.setAttribute('tabindex', '-1')
      })
    }
    if (event.key === 'ArrowDown') {
      focusNextListItem('ArrowDown')
    }
    if (event.key === 'ArrowUp') {
      focusNextListItem('ArrowUp')
    }
  }

  dropdownSelectedNode.addEventListener('click', event =>
    toggleListVisibility(event)
  )
  dropdownSelectedNode.addEventListener('keydown', event =>
    toggleListVisibility(event)
  )
}
