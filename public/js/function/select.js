const list = document.querySelector('.list')
const dropdown = document.querySelector('.dropdown')
const listContainer = document.querySelector('.list-container')
const listItems = document.querySelectorAll('.list-item')
const dropdownSelectedNode = document.querySelector('#selected')
const listItemIds = []

function setSelectedListItem (e) {
  const selectedTextToAppend = document.createTextNode(e.target.innerText)
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
  } else {
    if (direction === 'ArrowDown') {
      const currentActiveElementIsNotLastItem = currentActiveElementIndex < listItemIds.length - 1
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
}

export function select () {
  listItems.forEach(item => listItemIds.push(item.id))

  listItems.forEach(item => {
    item.addEventListener('click', e => {
      setSelectedListItem(e)
      closeList()
    })

    item.addEventListener('keydown', e => {
      switch (e.key) {
        case 'Enter':
          setSelectedListItem(e)
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

  function toggleListVisibility (e) {
    const openDropDown = e.key === 'Enter'
    if (e.key === 'Escape') {
      closeList()
    }
    if (e.type === 'click' || openDropDown) {
      list.classList.toggle('open')
      dropdown.classList.toggle('arrowOpen')
      listContainer.setAttribute('aria-expanded', list.classList.contains('open'))
    }
    if (e.key === 'Tab') {
      listItems.forEach(item => {
        item.setAttribute('tabindex', '-1')
      })
    }
    if (e.key === 'ArrowDown') {
      focusNextListItem('ArrowDown')
    }
    if (e.key === 'ArrowUp') {
      focusNextListItem('ArrowUp')
    }
  }

  dropdownSelectedNode.addEventListener('click', e => toggleListVisibility(e))
  dropdownSelectedNode.addEventListener('keydown', e => toggleListVisibility(e))

}
