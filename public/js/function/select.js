function select () {
  const SPACEBAR_KEY_CODE = [0, 32]
  const ENTER_KEY_CODE = 13
  const DOWN_ARROW_KEY_CODE = 40
  const UP_ARROW_KEY_CODE = 38
  const ESCAPE_KEY_CODE = 27

  const list = document.querySelector('.dropdown__list')
  const listContainer = document.querySelector('.dropdown__list-container')
  const dropdownArrow = document.querySelector('.dropdown__arrow')
  const listItems = document.querySelectorAll('.dropdown__list-item')
  const dropdownSelectedNode = document.querySelector('#dropdown__selected')
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
    const pictoI = '<i class="fas fa-chevron-down dropdown__arrow" viewBox="0 0 10 5" fill-rule="evenodd"></i>'
    dropdownSelectedNode.textContent = null
    dropdownSelectedNode.appendChild(selectedTextToAppend)
    dropdownSelectedNode.innerHTML += pictoI
  }

  function closeList () {
    list.classList.remove('open')
    dropdownArrow.classList.remove('expanded')
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
      dropdownArrow.classList.toggle('expanded')
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
    if (activeElementId === 'dropdown__selected') {
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

function htmlSelect () {
  return `
      <ul class="dropdown" tabindex="8">
          <li id="dropdown-label" class="dropdown-label" tabindex="8">
            Trier par
          </li>
          <li role="button" aria-labelledby="dropdown-label" id="dropdown__selected" tabindex="8">
            Popularité <i class="fas fa-chevron-down dropdown__arrow" viewBox="0 0 10 5" fill-rule="evenodd"></i>
          </li>
          
          <li aria-expanded="false" role="list" class="dropdown__list-container">
            <ul class="dropdown__list">
              <li class="dropdown__list-item" tabindex="8" id="option-1" role="button" aria-labelledby="dropdown-label" id="dropdown__selected" tabindex="8">
                Popularité
              </li>
              <li class="dropdown__list-item" tabindex="8" id="option-2">
                Date
              </li>
              <li class="dropdown__list-item" tabindex="8" id="option-3">
                Titre
              </li>
            </ul>
          </li>
        </ul>
  `
}
