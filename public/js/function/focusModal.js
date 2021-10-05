export function focusModal (modalShow) {
  // add all the elements inside modal which you want to make focusable
  const focusableElements =
    'form, button, h2, [href], input, select, textarea, figure.active [tabindex]:not([tabindex="-1"])'
  const modal = modalShow

  const firstFocusableElement = modal.querySelectorAll(focusableElements)[0] // get first element to be focused inside modal
  const focusableContent = modal.querySelectorAll(focusableElements)
  const lastFocusableElement = focusableContent[focusableContent.length - 1] // get last element to be focused inside modal
  document.addEventListener('keydown', function (event) {
    const isTabPressed = event.key === 'Tab'
    if (!isTabPressed) {
      return
    }

    if (event.shiftKey) { // if shift key pressed for shift + tab combination
      if (document.activeElement === firstFocusableElement) {
        lastFocusableElement.focus() // add focus for the last focusable element
        event.preventDefault()
      }
    } else { // if tab key is pressed
      if (document.activeElement === lastFocusableElement) { // if focused has reached to last focusable element then focus first focusable element after pressing tab
        firstFocusableElement.focus() // add focus for the first focusable element
        event.preventDefault()
      }
    }
  })

  firstFocusableElement.focus()
}
