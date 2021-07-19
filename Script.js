//Time index: index is the day of the week index 0 = monday to 6 = sunday
let UserPass = {Users: [
        {Username: "test1", Password: "123", Subjects: ["English Advance", "Maths Advance", "Maths Extension 1", "Physics", "SDD", "IPT"],
            Assessments: ["SDD", "math_adv", "math_ext1"], Time: [4, 4, 3, 5, 4, 3, 4]},
        {Username: "test2", Password: "321", Subjects: ["English Advance", "English Extension 1", "English Extension 2", "Modern History", "Business Studies", "Art"],
            Assessments: ["English Extension 1", "English Advance", "Art"], Time: [2, 5, 3, 5, 4, 3, ]}
    ]
};
console.log(UserPass);

function Register() {
    let RegisterMenu = document.getElementById("RegisterMenu");
    RegisterMenu.style.display = "inline-block";
    let SignIn_RegisterMenu = document.getElementById("Sign-in/Register");
    SignIn_RegisterMenu.style.display = "none";
    let SignInMenu = document.getElementById("Sign-inMenu");
    SignInMenu.style.display = "none"
}

function R_Verification() {
    let Password = document.getElementById('R_Password');
    let Username = document.getElementById('R_Username');
    if (VerifyPassword(Password) === false) {
        let V_Password = document.getElementById("V_Password");
        V_Password.style.display = "inline-block";
    }
    VerifyUsername(Username);
    if (VerifyUsername()  === false) {
        let V_Username = document.getElementById("V_User");
        V_Username.style.display = "inline-block";
    }
}

function VerifyPassword(Password) {
    let reg = new RegExp("^(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$");
    return reg.test(Password);
}

function VerifyUsername(Username) {}

function Sign_inMenu() {
    console.log("sign-in menu");
    let Sign_inMenu = document.getElementById('Sign-inMenu');
    Sign_inMenu.style.display = "inline-block";
    let SignIn_RegisterMenu = document.getElementById("Sign-in/Register");
    SignIn_RegisterMenu.style.display = "none";
}

function ValidateUser(){
    let incorrect_login = document.getElementById('incorrect_login');
    console.log('ValidateUser');
    let Sign_inMenu = document.getElementById('Sign-inMenu');
    let S_Username = document.getElementById('S_Username').value;
    let S_Password = document.getElementById('S_Password').value;
    console.log(S_Username);
    console.log(S_Password);
    for (let i = 0; i < UserPass.Users.length; i++) {
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
    let d = new Date();
    console.log(d + "d");
    let weekday = new Array(7);
    weekday[0] = 6; //Sun
    weekday[1] = 0; //Mon
    weekday[2] = 1; //Tue
    weekday[3] = 2; //Wed
    weekday[4] = 3; //Thu
    weekday[5] = 4; //Fri
    weekday[6] = 5; //Sat
    let n = weekday[d.getDay()];
    let s_time = UserPass.Users[i].Time[n];
    console.log(i)
    for (let j = 0; j < (UserPass.Users[i].Subjects).length; j++) { //need to change for all (UserPass.Users[i].Subjects).length to all periods
        let row = StudyPlanner.insertRow(j);
        let time = row.insertCell(0);
        let period = row.insertCell(1);
        time.innerHTML = s_time + "-" + (s_time + 1) + " pm";
        period.innerHTML = UserPass.Users[i].Subjects[j];
        s_time = s_time + 1;
    }
}

function DisplayAssessmentCalender() {
    let D_StudyPlanner = document.getElementById('DisplayStudyPlanner');
    D_StudyPlanner.style.display = "none";
    let ACalenderMenu = document.getElementById('ACalenderMenu');
    ACalenderMenu.style.display = "flex";
    const renderCalender = () => {
        const date = new Date();
        const lastDay = new Date(date.getFullYear(),date.getMonth() + 1,0).getDate()//gets last date of the current month
        const firstDayIndex = date.getDay()
        const prevLastDay = new Date(date.getFullYear(),date.getMonth(),0).getDate()
        const lastDayIndex = new Date(date.getFullYear(),date.getMonth() + 1,0).getDay()
        const nextDays = 7 - lastDayIndex - 1;
        date.setDate(1);
        const months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ];
        console.log(date);
        console.log(months);
        document.querySelector(".date h2").innerHTML = months[date.getMonth()];
        document.querySelector(".date p").innerHTML = date.toDateString();
        let days = "";
        const monthDays = document.querySelector('.days');
        for (let x = firstDayIndex; x > 0; x--){ //creating a new div element for previous month dates
            days += `<div class="prev-date>${prevLastDay - x + 1}</div>`;
        }
        for (let i = 1; i <= lastDay; i++) { //loops through to displays each day
            if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
                days += `<div class="today">${i}</div>`; //x += 10
            } else {
                days += `<div>${i}</div>`; //x += 10
            }
        }
        for (let j = 1; j<= nextDays; j++) {
            days += `<div class="next-date">${j}</div>`;
        }
        monthDays.innerHTML = days;
    }
    document.querySelector('.prev').addEventListener('click', () => {
        date.setMonth(date.getMonth() - 1);
        renderCalender();
    });
    document.querySelector('.next').addEventListener('click', () => {
        date.setMonth(date.getMonth() + 1);
        renderCalender();
    });
    renderCalender();
}
