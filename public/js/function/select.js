function select () {
  const SPACEBAR_KEY_CODE = [0, 32]
  const ENTER_KEY_CODE = 13
  const DOWN_ARROW_KEY_CODE = 40
  const UP_ARROW_KEY_CODE = 38
  const ESCAPE_KEY_CODE = 27

  const list = document.querySelector('.list')
  const listContainer = document.querySelector('.list-container')
  const dropdownArrow = document.querySelector('.arrow')
  const listItems = document.querySelectorAll('.list-item')
  const dropdownSelectedNode = document.querySelector('#selected')
  const listItemIds = []

  dropdownSelectedNode.addEventListener('click', e => toggleListVisibility(e))
  dropdownSelectedNode.addEventListener('keydown', e => toggleListVisibility(e))

  listItems.forEach(item => listItemIds.push(item.id))

  listItems.forEach(item => {
    item.addEventListener('click', e => {
      setSelectedListItem(e)
      closeList()
    })

    item.addEventListener('keydown', e => {
      switch (e.keyCode) {
        case ENTER_KEY_CODE:
          setSelectedListItem(e)
          closeList()
          return

        case DOWN_ARROW_KEY_CODE:
          focusNextListItem(DOWN_ARROW_KEY_CODE)
          return

        case UP_ARROW_KEY_CODE:
          focusNextListItem(UP_ARROW_KEY_CODE)
          return

        case ESCAPE_KEY_CODE:
          closeList()
      }
    })
  })

  function setSelectedListItem (e) {
    const selectedTextToAppend = document.createTextNode(e.target.innerText)
    const pictoI = '<i class="fas fa-chevron-down arrow" viewBox="0 0 10 5" fill-rule="evenodd"></i>'
    dropdownSelectedNode.textContent = null
    dropdownSelectedNode.appendChild(selectedTextToAppend)
    dropdownSelectedNode.innerHTML += pictoI
  }

  function closeList () {
    list.classList.remove('open')
    dropdownArrow.classList.remove('expanded')
    console.log(dropdownArrow)
    listContainer.setAttribute('aria-expanded', false)
  }

  function toggleListVisibility (e) {
    const openDropDown =
        SPACEBAR_KEY_CODE.includes(e.keyCode) || e.keyCode === ENTER_KEY_CODE

    if (e.keyCode === ESCAPE_KEY_CODE) {
      closeList()
    }

    if (e.type === 'click' || openDropDown) {
      list.classList.toggle('open')
      dropdownArrow.classList.add('expanded')
      listContainer.setAttribute('aria-expanded', list.classList.contains('open')
      )
    }

    if (e.keyCode === DOWN_ARROW_KEY_CODE) {
      focusNextListItem(DOWN_ARROW_KEY_CODE)
    }
    if (e.keyCode === UP_ARROW_KEY_CODE) {
      focusNextListItem(UP_ARROW_KEY_CODE)
    }
  }

  function focusNextListItem (direction) {
    const activeElementId = document.activeElement.id
    if (activeElementId === 'selected') {
      document.querySelector(`#${listItemIds[0]}`).focus()
    } else {
      const currentActiveElementIndex = listItemIds.indexOf(
        activeElementId
      )
      if (direction === DOWN_ARROW_KEY_CODE) {
        const currentActiveElementIsNotLastItem =
              currentActiveElementIndex < listItemIds.length - 1
        if (currentActiveElementIsNotLastItem) {
          const nextListItemId = listItemIds[currentActiveElementIndex + 1]
          document.querySelector(`#${nextListItemId}`).focus()
        }
      } else if (direction === UP_ARROW_KEY_CODE) {
        const currentActiveElementIsNotFirstItem =
              currentActiveElementIndex > 0
        if (currentActiveElementIsNotFirstItem) {
          const nextListItemId = listItemIds[currentActiveElementIndex - 1]
          document.querySelector(`#${nextListItemId}`).focus()
        }
      }
    }
  }
}
