let UserPass = {Users: [
        {Username: "test1", Password: "Cheeseman123", Subjects: ["eng_adv", "math_adv", "math_ext1", "phy", "SDD", "IPT"],
            Assessments: ["SDD", "math_adv", "math_ext1"], Time: [{Mon: "a"}, {Tue: "b"}, {Wed: "c"}, {Thu: "d"}, {Fri: "e"}, {Sat: "g"}, {Sun: "h"}]},
        {Username: "test2", Password: "Wowowow321"}
    ]
};
console.log(UserPass);

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

function Sign_inMenu() {
    console.log("sign-in menu")
    let Sign_inMenu = document.getElementById('Sign-inMenu');
    Sign_inMenu.style.display = "inline-block";
    let SignIn_RegisterMenu = document.getElementById("Sign-in/Register");
    SignIn_RegisterMenu.style.display = "none";
    let incorrect_login = document.getElementById('incorrect_login');
    let S_Username = document.getElementById('S_Username');
    let S_Password = document.getElementById('S_Password');
}

function ValidateUser(S_Username, S_Password){
    console.log('ValidateUser');
    for (let i = 0; i < UserPass.Users.length; i++) {
        if (S_Username === UserPass.Users[i].Username && S_Password === UserPass.Users[i].Password) {
            DisplayStudyPlanner(S_Username);
            return true;
        }
    }
    incorrect_login.style.display = "inline-block";
    return false;
}

function DisplayStudyPlanner(S_Username) {
    console.log('D_StudyPlanner')
    let StudyPlanner = document.getElementById('StudyPlanner');
    let total_periods = UserPass.Users.Subjects.length + UserPass.Users.Assessments.length;
    for (let i = 0; i < total_periods; i++) {
        let row = StudyPlanner.insertRow(i);
        let time = row.insertCell(0);
        let period = row.insertCell(1);
        time.innerHTML = "HI";
        period.innerHTML = "WOWOW";
    }
}

function ReadSubjects(){}
function ReadAssessments(){}
function ReadStartTime(){}
function AssessmentCalender(){}


