let comfPassword = document.querySelector('.comfPassword')
let password = document.querySelector('.password')
let postalCode = document.querySelector('.postalCode')
let email = document.querySelector('.email')
let country = document.querySelector('.country')
let badEmail = document.querySelector('.badEmail')
let badCountry = document.querySelector('.badCountry')
let badPostalCode = document.querySelector('.badPostalCode')
let badPassword = document.querySelector('.badPassword')
let badComfPassword = document.querySelector('.badComfPassword')
let submit = document.querySelector('.submit')

let emailGood = false
let passwordGood = false
let comfPasswordGood = false
let countryGood = false
let postalCodeGood = false


// validity
email.addEventListener('input', () => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
    const emailValue = email.value;

    if (!emailRegex.test(emailValue)) {
        badEmail.textContent = 'Please enter a valid email address.'
        badEmail.classList.add('red')
        emailGood = false
    } else {
        badEmail.textContent = ''
        badEmail.classList.remove('red')
        emailGood = true
    }

    if (emailValue.length === 0 ){
        badEmail.textContent = ''
        badEmail.classList.remove('red')
        emailGood = false
    }
})

password.addEventListener('input', () => {
    let passwordValue = password.value
    if (passwordValue.length < 8){
        badPassword.textContent = 'please enter at least 8 characters'
        badPassword.classList.add('red')
        passwordGood = false
    } else {
        badPassword.textContent = ''
        badPassword.classList.remove('red')
        passwordGood = true
    }

    if (passwordValue.length == 0) {
        badPassword.textContent = ''
        badPassword.classList.remove('red')
        passwordGood = false
    }

    if (comfPassword.value !== password.value) {
        comfPassword.setCustomValidity('Passwords must match')
        badComfPassword.textContent = 'Passwords must match'
        badComfPassword.classList.add('red')
        comfPasswordGood = false
    } else {
        comfPassword.setCustomValidity('')
        badComfPassword.textContent = ''
        badComfPassword.classList.remove('red')
        comfPasswordGood = true
    }
})

comfPassword.addEventListener('input', () => {
    if (comfPassword.value !== password.value) {
        comfPassword.setCustomValidity('Passwords must match')
        badComfPassword.textContent = 'Passwords must match'
        badComfPassword.classList.add('red')
        comfPasswordGood = false
    } else {
        comfPassword.setCustomValidity('')
        badComfPassword.textContent = ''
        badComfPassword.classList.remove('red')
        comfPasswordGood = true
    }
})

postalCode.addEventListener('input', () => {
    let postalCodeValue = postalCode.value
    if (postalCodeValue.length < 3){
        badPostalCode.textContent = 'your code is too short'
        badPostalCode.classList.add('red')
        postalCodeGood = false
    } else if (postalCodeValue.length > 10) {
        badPostalCode.textContent = 'your code is too long'
        badPostalCode.classList.add('red') 
        postalCodeGood = false
    } else {
        badPostalCode.textContent = ''
        badPostalCode.classList.remove('red') 
        postalCodeGood = true
    }

    if (postalCodeValue.length === 0) {
        badPostalCode.textContent = ''
        badPostalCode.classList.remove('red') 
        postalCodeGood = false
    }
})

const validCountries = [
    "russia", "canada", "united states", "china", "brazil", "australia", "india", 
    "argentina", "kazakhstan", "algeria", "congo (democratic republic)", "greenland", 
    "saudi arabia", "mexico", "indonesia", "sudan", "libya", "iran", "mongolia", 
    "peru", "chad", "niger", "angola", "mali", "south africa", "colombia", "ethiopia", 
    "bolivia", "mauritania", "egypt", "tanzania", "nigeria", "venezuela", "pakistan", 
    "namibia", "mozambique", "turkey", "chile", "zambia", "myanmar", "afghanistan", 
    "south sudan", "france", "ukraine", "spain", "morocco", "iraq", "paraguay", "japan", 
    "germany", "finland", "vietnam", "malaysia", "thailand", "turkmenistan"
  ]
  
country.addEventListener('input', () => {
    const countryValue = country.value.toLowerCase()

    if (!validCountries.includes(countryValue)) {
        badCountry.textContent = "Please enter a valid country."
        badCountry.classList.add('red')
        countryGood = false
    } else {
        badCountry.textContent = ""
        badCountry.classList.remove('red')
        countryGood = true
    }

    if (countryValue.length === 0) {
        badCountry.textContent = ""
        badCountry.classList.remove('red')
        countryGood = false
    }
})

submit.addEventListener('click', () => {
    if (
        comfPasswordGood === true && 
        countryGood === true && 
        postalCodeGood === true && 
        passwordGood === true && 
        comfPasswordGood === true) {
            alert('good job and thank you for stopping by')
        } else {
            alert('fill in all inputs please')
        }
})

