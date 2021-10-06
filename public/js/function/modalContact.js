import { focusModal } from './focusModal.js'

// VARIABLES
const containerModal = document.getElementById('modal')
const messageSubmit = document.querySelector('.messageSubmit')

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
const errorSubmit = '<span class="red"><i class="fas fa-times-circle"></i> Champs Obligatoire</span>'
const successSubmit = '<span class="green"><i class="fas fa-check-circle"></i> Le formulaire est envoyer</span>'

/**
  * Validation INPUT PRENOM, NOM, MAIL et TEXTAREA
  * @returns Value or False
  */
function inputValidation (arg, arg2, arg3) {
  const value = arg.value.replace(/ /g, '')
  const parent = arg.parentElement
  const modalError = parent.querySelector('span')
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
  const btnContact = document.getElementById('contact')
  const btnCloseModal = document.querySelector('button.close-modal')
  const imgFiche = document.querySelector('section figure img')

  window.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      containerModal.setAttribute('aria-hidden', 'true')
      containerModal.classList.add('hidden')
    }
  })
  btnContact.addEventListener('click', function () {
    containerModal.setAttribute('aria-hidden', 'false')
    containerModal.classList.remove('hidden')
    focusModal(containerModal)
  })
  btnContact.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      focusModal(containerModal)
      containerModal.setAttribute('aria-hidden', 'false')
      containerModal.classList.remove('hidden')
    }
  })
  btnCloseModal.addEventListener('click', function () {
    containerModal.setAttribute('aria-hidden', 'true')
    containerModal.classList.add('hidden')
    imgFiche.focus()
  })
  btnCloseModal.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      containerModal.setAttribute('aria-hidden', 'true')
      containerModal.classList.add('hidden')
      imgFiche.focus()
    }
  })
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

export function modalContact () {
  const formContact = document.getElementById('formcontact')
  const messageOpen = document.getElementsByClassName('messageopen')
  messageOpen.innerHTML = 'Formulaire de contact ouvert'
  actionOnForm()

  /**
   * If ValidateForm != False Send Success Message and Reset Form
   */
  formContact.addEventListener('submit', function (event) {
    event.preventDefault()
    if (validateForm() !== false) {
      console.log(validateForm())
      formContact.reset()
      messageSubmit.setAttribute('role', 'alert')
      messageSubmit.innerHTML = successSubmit
    } else if (validateForm() === false) {
      messageSubmit.setAttribute('role', 'alert')
      messageSubmit.innerHTML = errorSubmit
    }
  })
}
