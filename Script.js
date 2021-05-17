function Register() {
    let RegisterMenu = document.getElementById("RegisterMenu")
    RegisterMenu.style.display = "inline-block"
    let SignIn_RegisterMenu = document.getElementById("Sign-in/Register")
    SignIn_RegisterMenu.style.display = "none"
    let verify = false
    while (verify === false) {
        let Password = document.getElementById('R_Password')
        let Username = document.getElementById('R_Username')
        VerifyPassword(Password)
            if (VerifyP === false) {
                let V_Password = document.getElementById("V_Password")
                V_Password.style.display = "inline-block"
            } VerifyUsername(Username)
        if (VerifyU === false) {

        }
}
function VerifyPassword(Password) {
    let VerifyP = false
    if (length(Password) >= 6) {
        VerifyP = true
        return VerifyP
    }
}

function VerifyUsername(Username) {

}

function Sign_in() {}
