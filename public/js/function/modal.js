import { focusModal } from './focusModal.js'

// VARIABLES
const containerModal = document.getElementById('modal')
const errorSubmit = document.querySelector('.errorSubmit')

const nameFormat = /[A-Za-z]/u // Only letters and not numbers
const mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/u
const textareaFormat = /[a-zA-Z_0-9]/u

const minLength = 2

const inputPrenom = document.getElementById('prenom')
const inputNom = document.getElementById('nom')
const inputEmail = document.getElementById('email')
const textarea = document.getElementById('textarea')

const errorMinCaractere = '2 caractéres minimum'
const errorMail = 'Adresse invalide'

/**
  * Validation INPUT PRENOM, NOM, MAIL et TEXTAREA
  * @returns Boolean True or False
  */
function inputValidation (arg, arg2, arg3) {
  const value = arg.value.replace(/ /g, '')
  const parent = arg.parentElement
  const modalError = parent.querySelector('span')
  console.log(modalError)
  if ((value !== '') && (value.length >= minLength) && (value.match(arg2))) {
    arg.setAttribute('aria-invalid', 'false')
    modalError.innerHTML = ''
    return value
  } else {
    arg.setAttribute('aria-invalid', 'true')
    arg.setAttribute('aria-live', 'Assertive')
    modalError.setAttribute('role', 'alert')
    modalError.innerHTML = arg3
  }
  return false
}

/**
 * FORM VALIDATION
 * @returns Boolean True or False
 */
function validateForm () {
  const checkPrenom = inputValidation(inputPrenom, nameFormat, errorMinCaractere)
  const checkNom = inputValidation(inputNom, nameFormat, errorMinCaractere)
  const checkEmail = inputValidation(inputEmail, mailFormat, errorMail)
  const checktextarea = inputValidation(textarea, textareaFormat, errorMinCaractere)
  if ((checkPrenom !== false) &&
  (checkNom !== false) &&
  (checkEmail !== false) &&
  (checktextarea !== false)) {
    const result = `${checktextarea} ${checkEmail} ${checkNom} ${checkPrenom}`
    return result
  }
  return false
}

// ACTION ON FORM ELEMENT
function actionOnForm () {
  inputPrenom.addEventListener('change', () => {
    inputValidation(inputPrenom, nameFormat, errorMinCaractere)
  }, false)
  inputNom.addEventListener('change', () => {
    inputValidation(inputNom, nameFormat, errorMinCaractere)
  }, false)
  inputEmail.addEventListener('change', () => {
    inputValidation(inputEmail, mailFormat, errorMail)
  }, false)
  textarea.addEventListener('change', () => {
    inputValidation(textarea, textareaFormat, errorMinCaractere)
  }, false)
}

function displayModal (display, aria) {
  containerModal.style.display = display
  containerModal.setAttribute('aria-hidden', aria)
}

export function modal () {
  const btnContact = document.getElementById('contact')
  const btnCloseModal = document.querySelector('button.close-modal')
  const formContact = document.getElementById('formcontact')

  window.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      displayModal('none', 'true')
    }
  })

  btnContact.addEventListener('click', function () {
    displayModal('flex', 'false')
    focusModal(containerModal)
  })
  btnContact.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      focusModal(containerModal)
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
    if (validateForm() !== false) {
      console.log(validateForm())
      formContact.reset()
      errorSubmit.setAttribute('role', 'alert')
      errorSubmit.innerHTML = 'Le formulaire est envoyer'
    } else if (validateForm() === false) {
      errorSubmit.setAttribute('role', 'alert')
      errorSubmit.innerHTML = 'Merci de renseigner tout les champs'
    }
  })
}
