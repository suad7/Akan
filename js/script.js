function onCalculate() {
    var maleName = ["Kwasi", "Kwadwo", " kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var femaleName = ["Akosua", "Adwoa", "Abenaa", " Akua", " Yaa", "Afua", "Ama"];
    var dd = parseInt(document.getElementById("day").value);
    var daysOfTheWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    var mm = parseInt(document.getElementById("month").value);
    var yy = parseInt(document.getElementById("year").value);
    var date = new Date(yy + "/" + mm + "/" + dd)
    var results = date.getDay();
    // var CCArray = YY.split("");
    //var CC = parseInt(`${CCArray[0]}${CCArray[1]}`)
    var male = document.getElementById("male");
    var female = document.getElementById("female");
    //var weekDay = Math.round(( ( (CC/4) - (2 * (CC - 1))) + ((5 * (YY/4)) ) + ((26 * (MM + 1)/10)) + DD ) % 7);
    //if (weekDay === 7){ weekDay = 0; }
    if (male.checked == true) {
        alert("You were born on " + maleName[results] + " and you were born on " + daysOfTheWeek[results]);
    }
    else if (female.checked == true) {
        alert("You were born on " + femaleName[results] + " and you were born on " + daysOfTheWeek[results]);
    }
}








