const emailField = document.querySelector('.email-field')
const emailLabel = document.querySelector('.email-label')
const emailError = document.querySelector('.email-error')

const passField = document.querySelector('.pass-field')
const passLabel = document.querySelector('.pass-label')
const passError = document.querySelector('.pass-error')

function validateEmail() {
    emailLabel.style.bottom = "5.9rem"
    
    if(!emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = "Provide a valid e-mail."
        emailField.style.borderBottomColor = "red"
        emailError.style.top = "4rem"
        return false
    }

    emailError.innerHTML = ""
    emailField.style.borderBottomColor = "#4d4d4d"
    emailError.style.top = "110%"
    return true
}

function validatePass() {
    passLabel.style.bottom = "5.9rem"
    passField.style.borderBottomColor = "#4d4d4d"
    return true
}