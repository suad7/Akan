function onCalculate() {
    var maleName = ["Kwasi", "Kwadwo", " kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var femaleName = ["Akosua", "Adwoa", "Abenaa", " Akua", " Yaa", "Afua", "Ama"];
    var daysOfTheWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    var dd = document.getElementById("day").value;
    var mm = document.getElementById("month").value;
    var yy = document.getElementById("year").value;
    var male = document.getElementById("male");
    var female = document.getElementById("female");
    var date = new Date(yy + "/" + mm + "/" + dd);
    var results = date.getDay();
    console.log(results)
    // var CCArray = YY.split("");
    //var CC = parseInt(`${CCArray[0]}${CCArray[1]}`)
    //var weekDay = Math.round(( ( (CC/4) - (2 * (CC - 1))) + ((5 * (YY/4)) ) + ((26 * (MM + 1)/10)) + DD ) % 7);
    //if (weekDay === 7){ weekDay = 0; }
    if (dd === "" || mm === "" || yy === "") {
        alert("All input fields are required!");
    } else if (parseInt(dd) <= 0 || parseInt(dd) > 31) {
        alert("Enter a valid date!");
    } else if (parseInt(mm) <= 0 || parseInt(mm) > 12) {
        alert("Enter a valid month");
    } else if (parseInt(yy) <= 1900) {
        alert("Enter a valid year");
    }
    else if (male.checked === true) {
        alert("Your akan name is " + maleName[results] + " and you were born on " + daysOfTheWeek[results]);
    }
    else if (female.checked === true) {
        alert("Your akan name is " + femaleName[results] + " and you were born on " + daysOfTheWeek[results]);
    }



}








