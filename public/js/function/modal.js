function modal () {
  const btnContact = document.getElementById('contact')
  const btnCloseModal = document.querySelector('p.close-modal')
  const formContact = document.getElementById('formcontact')

  window.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      containerModal.style.display = 'none'
    }
  })

  btnContact.addEventListener('click', function () {
    containerModal.style.display = 'flex'
  })
  btnContact.addEventListener('keydown', function (event) {
    if (event.key === 13) {
      containerModal.style.display = 'flex'
    }
  })
  btnCloseModal.addEventListener('click', function () {
    containerModal.style.display = 'none'
  })
  btnCloseModal.addEventListener('keydown', function (event) {
    if (event.key === 13) {
      containerModal.style.display = 'none'
    }
  })

  const InputFormat = /^[a-zA-Z]*$/ // only letters and not numbers

  /**
   * Validation PRENOM
   */
  const inputPrenom = document.getElementById('prenom')
  const parentInputPrenom = inputPrenom.parentElement
  inputPrenom.addEventListener('change', prenomFunction)

  function prenomFunction () {
    const inputPrenomValue = inputPrenom.value.replace(/ /g, '')
    if ((inputPrenomValue !== '') && (inputPrenomValue.length >= 2) && (inputPrenomValue.match(InputFormat))) {
      parentInputPrenom.setAttribute('data-error-visible', 'false')
      parentInputPrenom.setAttribute('data-error', '')
      return inputPrenomValue
    } else {
      parentInputPrenom.setAttribute('data-error', 'Veuillez entrer 2 caractères valide ou plus')
      parentInputPrenom.setAttribute('data-error-visible', 'true')
      return false
    }
  }

  /**
   * Validation NOM
   */
  const inputNom = document.getElementById('nom')
  inputNom.addEventListener('change', nomFunction)
  const parentinputNom = inputNom.parentElement

  function nomFunction () {
    const inputNomValue = inputNom.value.replace(/ /g, '')
    if ((inputNomValue !== '') && (inputNomValue.length >= 2) && (inputNomValue.match(InputFormat))) {
      parentinputNom.setAttribute('data-error-visible', 'false')
      parentinputNom.setAttribute('data-error', '')
      return inputNomValue
    } else {
      parentinputNom.setAttribute('data-error', 'Veuillez entrer 2 caractères valide ou plus')
      parentinputNom.setAttribute('data-error-visible', 'true')
      return false
    }
  }

  /**
 * VALIDATION EMAIL
 * @returns Boolean True or False
 */
  const emailInput = document.getElementById('email')
  const parentEmailInput = emailInput.parentElement
  const mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

  emailInput.addEventListener('change', emailFunction)

  function emailFunction () {
    if (emailInput.value.match(mailFormat)) {
      parentEmailInput.setAttribute('data-error-visible', 'false')
      parentEmailInput.setAttribute('data-error', '')
      return emailInput.value
    } else {
      parentEmailInput.setAttribute('data-error', 'Adresse Invalide')
      parentEmailInput.setAttribute('data-error-visible', 'true')
      return false
    }
  }
  /**
   * VALIDATION TEXTAREA
   */
  const textarea = document.getElementById('textarea')
  const parentTextarea = textarea.parentElement
  textarea.addEventListener('change', textareaFunction)

  function textareaFunction () {
    const textareaValue = textarea.value.replace(/ /g, '')
    if ((textareaValue !== '') && (textareaValue.length >= 2)) {
      parentTextarea.setAttribute('data-error-visible', 'false')
      parentTextarea.setAttribute('data-error', '')
      return textareaValue
    } else {
      parentTextarea.setAttribute('data-error', 'Minimun 2 caractères')
      parentTextarea.setAttribute('data-error-visible', 'true')
      return false
    }
  }

  /**
   * If ValidateForm = True Send Success Message and Reset Form
   */
  console.log(formContact)
  formContact.addEventListener('submit', function (e) {
    e.preventDefault()
    if (validateForm() !== true) {
      console.log(validateForm())
      formContact.reset()
    }
  })

  /**
   * FORM VALIDATION
   * @returns Boolean True or False
   */
  function validateForm () {
    const checkPrenom = prenomFunction()
    const checkNom = nomFunction()
    const checkEmail = emailFunction()
    const checktextarea = textareaFunction()
    if ((checkPrenom !== true) && (checkNom !== true) && (checkEmail !== true) && (checktextarea !== false)) {
      const result = checktextarea + ' ' + checkEmail + ' ' + checkNom + ' ' + checkPrenom
      return result
    } else {
      console.log('BAD')
      return false
    }
  }
}
