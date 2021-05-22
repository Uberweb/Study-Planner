let users = fetch("UsernamePassword.json").then(response => users = response);
//objects
console.log(users);

function Register() {
    let RegisterMenu = document.getElementById("RegisterMenu");
    RegisterMenu.style.display = "inline-block";
    let SignIn_RegisterMenu = document.getElementById("Sign-in/Register");
    SignIn_RegisterMenu.style.display = "none";
}

function R_Verification() {
    let Password = document.getElementById('R_Password');
    let Username = document.getElementById('R_Username');
    if (VerifyPassword(Password) === false) {
        let V_Password = document.getElementById("V_Password");
        V_Password.style.display = "inline-block";
    }
    VerifyUsername(Username);
    if (VerifyU === false) {
        let V_Username = document.getElementById("V_User");
        V_Username.style.display = "inline-block";
    }
}

function VerifyPassword(Password) {
    let reg = new RegExp("^(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$");
    if (reg.test(Password)) {
        return true;
    } else {
        return false;
    }
}

function VerifyUsername(Username) {

}

function Sign_in() {
    let Sign_inMenu = document.getElementById('Sign-inMenu')
    Sign_inMenu.style.display = "inline-block"
    let SignIn_RegisterMenu = document.getElementById("Sign-in/Register")
    SignIn_RegisterMenu.style.display = "none"
}


