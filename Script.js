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

function VerifyUsername(Username) {}

function Sign_inMenu() {
    console.log("sign-in menu");
    let Sign_inMenu = document.getElementById('Sign-inMenu');
    Sign_inMenu.style.display = "inline-block";
    let SignIn_RegisterMenu = document.getElementById("Sign-in/Register");
    SignIn_RegisterMenu.style.display = "none";
    let incorrect_login = document.getElementById('incorrect_login');
}

function ValidateUser(){
    console.log('ValidateUser');
    let Sign_inMenu = document.getElementById('Sign-inMenu');
    let S_Username = document.getElementById('S_Username').value;
    let S_Password = document.getElementById('S_Password').value;
    for (let i = 0; i < UserPass.Users.length; i++) {
        console.log("loop");
        console.log(UserPass.Users[i].Username);
        console.log(UserPass.Users[i].Password);
        console.log(S_Username);
        console.log(S_Password);
        if (S_Username === UserPass.Users[i].Username && S_Password === UserPass.Users[i].Password) {
            Sign_inMenu.style.display = "none";
            console.log(i + " index");
            DisplayStudyPlanner(S_Username, i);
            break;
        }
    }
    incorrect_login.style.display = "inline-block";
}

function DisplayStudyPlanner(S_Username, i) {
    console.log('D_StudyPlanner');
    let D_StudyPlanner = document.getElementById('DisplayStudyPlanner');
    D_StudyPlanner.style.display = "inline-block";
    let StudyPlanner = document.getElementById('StudyPlanner');
    let total_periods = (UserPass.Users[i].Subjects).length + (UserPass.Users[i].Assessments).length;
    console.log(total_periods);
    console.log(UserPass.Users[i].Subjects + " Subjects");
    console.log(UserPass.Users[i].Assessments + " Assessments");
    let today = new Date();
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


