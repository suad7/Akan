function onCalculate(){
    var maleName = ["Sunday: Kwasi","Monday Kwadwo","Tuesday: kwabena","Wednesday: Kwaku","Thursday :Yaw","Friday: Kofi","Saturday: Kwame"];
    var femaleName = ["Sunday: Akosua","Monday Adwoa","Tuesday:Abenaa","Wednesday: Akua"," Thursday: Yaa","Friday: Afua","Saturday: Ama"];
    var DD = document.getElementById("day").value;
    var cc;
    var MM = document.getElementById("month").value;
    var YY = document.getElementById("year").value.toString();
    var CCArray = YY.split("");
    var CC = parseInt(`${CCArray[0]}${CCArray[1]}`)
    var male = document.getElementById("male");
    var female = document.getElementById("female");
    var weekDay = Math.round(( ( (CC/4) - (2 * (CC - 1))) + ((5 * (YY/4)) ) + ((26 * (MM + 1)/10)) + DD ) % 7);
    //if (weekDay === 7){ weekDay = 0; }
    if (male.checked==true){
    alert("You were born on " + maleName[weekDay - 1]);
    }
    else if (female.checked==true){
    alert("You were born on " + femaleName[weekDay - 1]);
}
}

  






