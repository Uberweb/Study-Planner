//Time index: index is the day of the week index 0 = monday to 6 = sunday
let UserPass = {Users: [ //javascript object to store information about each user
        {Username: "test1", Password: "123", Subjects: ["English Advance", "Maths Advance", "Maths Extension 1", "Physics", "SDD", "IPT"],
            Assessments: ["SDD", "math_adv", "math_ext1"], Time: [4, 4, 3, 5, 4, 3, 4],
            DDate: ["28/07/21", "30/08/21", "15/08/21"]},
        {Username: "test2", Password: "321", Subjects: ["English Advance", "English Extension 1", "English Extension 2", "Modern History", "Business Studies", "Art"],
            Assessments: ["English Extension 1", "English Advance", "Art"], Time: [2, 5, 3, 5, 4, 3, ]}
    ]
};
console.log(UserPass);

let n = 0 //stored the index value of the stored account

function Register() {
    let RegisterMenu = document.getElementById("RegisterMenu"); //displaying the register elements
    RegisterMenu.style.display = "inline-block";
    let SignIn_RegisterMenu = document.getElementById("Sign-in/Register"); //hiding the sign-in or register elements
    SignIn_RegisterMenu.style.display = "none";
    let SignInMenu = document.getElementById("Sign-inMenu"); //hiding the sign-in menu elements
    SignInMenu.style.display = "none"
}

function R_Verification() {
    let Password = document.getElementById('R_Password').value; //getting value of registering username
    let Username = document.getElementById('R_Username').value; //getting value of registering password
    if (VerifyPassword(Password) === false) {
        let V_Password = document.getElementById("V_Password"); //displaying the incorrect password requirements text
        V_Password.style.display = "inline-block";
    }
    VerifyUsername(Username);
    if (VerifyUsername()  === false) {
        let V_Username = document.getElementById("V_User"); //displaying the incorrect username requirement text
        V_Username.style.display = "inline-block";
    }
}

function VerifyPassword(Password) {
    let reg = new RegExp("^(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$"); //regular expression pattern checking if the password has
    return reg.test(Password); //boolean value
}

function VerifyUsername(Username) {}

function Sign_inMenu() { //displays the sign-in menu
    console.log("sign-in menu");
    let Sign_inMenu = document.getElementById('Sign-inMenu'); //displaying the sign-in menu element
    Sign_inMenu.style.display = "inline-block";
    let SignIn_RegisterMenu = document.getElementById("Sign-in/Register"); //hiding the register menu element
    SignIn_RegisterMenu.style.display = "none";
}

function ValidateUser(){
    let incorrect_login = document.getElementById('incorrect_login'); //setting the incorrect login text as a variable for display options later on if the function doesn't find a matching username and password
    console.log('ValidateUser');
    let Sign_inMenu = document.getElementById('Sign-inMenu');
    let S_Username = document.getElementById('S_Username').value; //getting sign-in username input value
    let S_Password = document.getElementById('S_Password').value; //getting sign-in password input value
    console.log(S_Username);
    console.log(S_Password);
    for (let i = 0; i < UserPass.Users.length; i++) { //loops through the javascript object checking if the username matches with the stored password
        if (S_Username === UserPass.Users[i].Username && S_Password === UserPass.Users[i].Password) {//loops through the user array checking if the input username and password match up with the stored username and password
            Sign_inMenu.style.display = "none";
            console.log(i + " index");
            n = i;
            console.log(n + " i");
            DisplayStudyPlanner(S_Username, i);//parsing the input username and the index username value into the function to get their information in the future
            break; //exits the loop if the user is found, so the loop doesnt keep checking every other index value
        }
    }
    incorrect_login.style.display = "inline-block"; //displays incorrect login text due to the lack of matching in the input username and password towards the stored username and password
}

function DisplayStudyPlanner(S_Username, i) {
    console.log('D_StudyPlanner');
    let D_StudyPlanner = document.getElementById('DisplayStudyPlanner'); //displaying this element
    D_StudyPlanner.style.display = "inline-block";
    let StudyPlanner = document.getElementById('StudyPlanner');
    let total_periods = (UserPass.Users[i].Subjects).length + (UserPass.Users[i].Assessments).length; //total amount of things to study and prepare for
    console.log(total_periods);
    console.log(UserPass.Users[i].Subjects + " Subjects");
    console.log(UserPass.Users[i].Assessments + " Assessments");
    let d = new Date(); //setting new date
    console.log(d + "d");
    let weekday = new Array(7); //setting the day so get when the study periods should start, set by the student
    weekday[0] = 6; //Sun, all weekdays are ordered by index due to the array of the start study time starting from monday
    weekday[1] = 0; //Mon
    weekday[2] = 1; //Tue
    weekday[3] = 2; //Wed
    weekday[4] = 3; //Thu
    weekday[5] = 4; //Fri
    weekday[6] = 5; //Sat
    let n = weekday[d.getDay()];
    let s_time = UserPass.Users[i].Time[n]; //starting study time from the student
    console.log(i)
    //for loop adds a row for each subject and the time to study for each subject
    for (let j = 0; j < (UserPass.Users[i].Subjects).length; j++) { //need to change for all (UserPass.Users[i].Subjects).length to all periods
        let row = StudyPlanner.insertRow(j);
        let time = row.insertCell(0);
        let period = row.insertCell(1);
        time.innerHTML = s_time + "-" + (s_time + 1) + " pm"; //setting the html tag of time to the starting time, plus 1 for each hour
        period.innerHTML = UserPass.Users[i].Subjects[j];
        s_time = s_time + 1;
    }
}

function DisplayAssessmentCalender() {//displaying the assessment calender for the specific user
    console.log(UserPass.Users[n].DDate[0]);
    console.log(new Date().getMonth());
    console.log(new Date().getDate());
    let D_StudyPlanner = document.getElementById('DisplayStudyPlanner'); //hiding all other elements
    D_StudyPlanner.style.display = "none";
    let ACalenderMenu = document.getElementById('ACalenderMenu'); //displaying the assessment calender elements
    ACalenderMenu.style.display = "flex"; //to fit the items within the page
    let date = new Date(); //setting current date
    let renderCalender = () => {
        date.setDate(1);// setting the date as 1 so that the date is 1 and not 0 for future calculations
        let monthDays = document.querySelector('.days'); //sets the month days
        let lastDay = new Date(date.getFullYear(),date.getMonth() + 1,0).getDate();//gets last date of the current month
        let firstDayIndex = date.getDay(); //sets the index value for the first day, the weekday because not all months start on the monday
        let prevLastDay = new Date(date.getFullYear(),date.getMonth(),0).getDate(); //gets the last day to display from the month before (not the last date of the month)
        let lastDayIndex = new Date(date.getFullYear(),date.getMonth() + 1,0).getDay(); //index the last day
        let nextDays = 7 - lastDayIndex - 1; //the next day's after the current month
        const months = [ //index the months in order
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
        document.querySelector(".date h2").innerHTML = months[date.getMonth()]; //changes the html tag to the month
        document.querySelector(".date p").innerHTML = date.toDateString(); //changes the html tag to the date
        let days = "";
        for (let x = firstDayIndex; x > 0; x--){ //creating a new div element for previous month days
            days += `<div class="prev-date>${prevLastDay - x + 1}</div>`;//adding previous month days, in the current month displayed to the prev-date class so that they display a lighter colour due to the css class
        }
        for (let i = 1; i <= lastDay; i++) { //loops through to displays each day
            if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) { //checks if the current date is on the calender is the current date to highlight the current date
                days += `<div class="today">${i}</div>`; //giving it the css tag so the background of the current date is highlighted
            }
            else if (checkdday(i, UserPass.Users[n].DDate, date)) { //checks if the function is true for a due date
                days += `<div class="DDate">${i}</div>`; //gives the days the due date class so that the background of the date is highlighted by the css class
            }
            else {
                days += `<div>${i}</div>`; //x += 10 to add the next day
            }
        }
        for (let j = 1; j<= nextDays; j++) {
            days += `<div class="next-date">${j}</div>`;// gives the next date class so that the days on the next month in the calender
        }
        monthDays.innerHTML = days; //displays the days for the calender
    }
    document.querySelector('.prev').addEventListener('click', () => { //updates the calender to the previous month when the user clicks on the left arrow
        date.setMonth(date.getMonth() - 1);//changes the current month to the previous month
        renderCalender();//renders calender everytime button is pressed
    });
    document.querySelector('.next').addEventListener('click', () => { //updates the calender to the next month when the user clicks on the right arrow
        date.setMonth(date.getMonth() + 1); //changes the current month to the next month
        renderCalender();//renders calender when button is pressed
    });
    renderCalender();//renders calender with current month, previous and next month buttons havnt been pressed yet
}

function checkdday(day, d_days, date) { //checks if the day has a due date
    for (let d of d_days) {
        let parts = d.split('/');//due dates stored as a string therefore need to split up the components of the dates
        if (parseInt(parts[0]) === day && date.getMonth() === (parts[1]-1)) { //checks if the current date is the same as the due date
            return true;
        }
    }
    return false;
}
