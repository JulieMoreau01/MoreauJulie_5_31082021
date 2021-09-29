const containerModal = document.getElementById('modal')
// Only letters and not numbers
const InputFormat = /^[a-zA-Z]*$/u
const minLength = 2

/**
  * Validation PRENOM
  */
const inputPrenom = document.getElementById('prenom')
const parentInputPrenom = inputPrenom.parentElement

function prenomFunction () {
  const inputPrenomValue = inputPrenom.value.replace(/ /g, '')
  if ((inputPrenomValue !== '') &&
   (inputPrenomValue.length >= minLength) &&
   (inputPrenomValue.match(InputFormat))) {
    parentInputPrenom.setAttribute('data-error-visible', 'false')
    parentInputPrenom.setAttribute('data-error', '')
    return inputPrenomValue
  }
  parentInputPrenom.setAttribute('data-error', '2 caractères valide ou plus')
  parentInputPrenom.setAttribute('data-error-visible', 'true')
  return false
}

/**
 * Validation NOM
 */
const inputNom = document.getElementById('nom')
const parentinputNom = inputNom.parentElement

function nomFunction () {
  const inputNomValue = inputNom.value.replace(/ /g, '')
  if ((inputNomValue !== '') &&
  (inputNomValue.length >= minLength) &&
  (inputNomValue.match(InputFormat))) {
    parentinputNom.setAttribute('data-error-visible', 'false')
    parentinputNom.setAttribute('data-error', '')
    return inputNomValue
  }
  parentinputNom.setAttribute('data-error', '2 caractères valide ou plus')
  parentinputNom.setAttribute('data-error-visible', 'true')
  return false
}

/**
 * VALIDATION EMAIL
 * @returns Boolean True or False
 */
const emailInput = document.getElementById('email')
const parentEmailInput = emailInput.parentElement
const mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/u

function emailFunction () {
  if (emailInput.value.match(mailFormat)) {
    parentEmailInput.setAttribute('data-error-visible', 'false')
    parentEmailInput.setAttribute('data-error', '')
    return emailInput.value
  }
  parentEmailInput.setAttribute('data-error', 'Adresse Invalide')
  parentEmailInput.setAttribute('data-error-visible', 'true')
  return false
}

/**
 * VALIDATION TEXTAREA
 */
const textarea = document.getElementById('textarea')
const parentTextarea = textarea.parentElement
function textareaFunction () {
  const textareaValue = textarea.value.replace(/ /g, '')
  if ((textareaValue !== '') && (textareaValue.length >= minLength)) {
    parentTextarea.setAttribute('data-error-visible', 'false')
    parentTextarea.setAttribute('data-error', '')
    return textareaValue
  }
  parentTextarea.setAttribute('data-error', 'Minimun 2 caractères')
  parentTextarea.setAttribute('data-error-visible', 'true')
  return false
}

/**
 * FORM VALIDATION
 * @returns Boolean True or False
 */
function validateForm () {
  const checkPrenom = prenomFunction()
  const checkNom = nomFunction()
  const checkEmail = emailFunction()
  const checktextarea = textareaFunction()
  if ((checkPrenom !== true) &&
  (checkNom !== true) &&
  (checkEmail !== true) &&
  (checktextarea !== false)) {
    const result = `${checktextarea} ${checkEmail} ${checkNom} ${checkPrenom}`
    return result
  }
  return false
}

function actionOnForm () {
  inputNom.addEventListener('change', nomFunction)
  inputPrenom.addEventListener('change', prenomFunction)
  emailInput.addEventListener('change', emailFunction)
  textarea.addEventListener('change', textareaFunction)
}

function displayModal (arg1, arg2) {
  containerModal.style.display = arg1
  containerModal.setAttribute('aria-hidden', arg2)
}

export function modal () {
  const btnContact = document.getElementById('contact')
  const btnCloseModal = document.querySelector('p.close-modal')
  const formContact = document.getElementById('formcontact')

  window.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      displayModal('none', 'true')
    }
  })

  btnContact.addEventListener('click', function () {
    displayModal('flex', 'false')
    containerModal.focus()
  })
  btnContact.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      displayModal('flex', 'false')
    }
  })
  btnCloseModal.addEventListener('click', function () {
    displayModal('none', 'true')
  })
  btnCloseModal.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      displayModal('none', 'true')
    }
  })

  actionOnForm()

  /**
   * If ValidateForm = True Send Success Message and Reset Form
   */
  formContact.addEventListener('submit', function (event) {
    event.preventDefault()
    if (validateForm() !== true) {
      console.log(validateForm())
      formContact.reset()
    }
  })
}
