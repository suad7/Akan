var maleNames = {
    Sunday: 'Kwasi',
    Monday: 'Kwadwo',
    Tuesday: 'Kwabena',
    Wednesday: 'Kwaku',
    Thursday: 'Yaw',
    Friday: 'Kofi',
    Saturday: 'Kwame',
};

var femaleNames = {
    Sunday: 'Akosua',
    Monday: 'Adwoa',
    Tuesday: 'Abenaa',
    Wednesday: 'Akua',
    Thursday: 'Yaa',
    Friday: 'Afua',
    Saturday: 'Ama',
};


function validation() {
    var date = document.getElementById("d").value;

    var month = document.getElementById("m").value;
    var year = document.getElementById("yy").value;
    var gen = document.getElementsByName("gd");
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    if (isNaN(date) || date === null || date === "" || date < 1 || date > 31) {

        document.getElementById('one').innerHTML = "invalid day";
        document.getElementById('one').style.color = "red"
        alert("invalid date");
        return false;
    }
    var ListofDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (isNaN(month) || month === "" || month === null || month < 1 || month > 12) {
        document.getElementById('two').innerHTML = "invalid month";
        document.getElementById('two').style.color = "red"
        alert("invalid month");
        return false;
    }
    if (month === 1 || month > 2) {
        if (date > ListofDays[month - 1]) {
            alert('Invalid date format!');
            return false;
        }
    }
    if (month === 2) {
        var lyear = false;
        if ((!(year % 4) && year % 100) || !(year % 400)) {

            lyear = true;
        }
        if ((lyear == false) && (date >= 29)) {
            alert('Invalid date format!');
            return false;
        }
        if ((lyear == true) && (date > 29)) {
            alert('Invalid date format!');
            return false;
        }
    }
    if (isNaN(year) || year === "" || year === null || year < 1900 || year > currentYear) {
        document.getElementById('three').innerHTML = "invalid year";
        document.getElementById('three').style.color = "red"
        alert("invalid year");
        return false;
    }
    if (gen[0].checked === false && gen[1].checked === false) {
        document.getElementById('four').innerHTML = "select gender";
        document.getElementById('four').style.color = "red"
        alert('select gender');

    } else {
        for (i = 0; i < gen.length; i++) {
            if (gen[i].checked) {
                alert(gen[i].value);
                var gend = gen[i].value;
            }
            var userInputs = {
                userDate: date,
                userMonth: month,
                userYear: year,
                userGender: gend
            };

            return userInputs;
        }


    }

}

function execute() {
    var a = validation();
    var DD = parseInt(a.userDate);
    var MM = parseInt(a.userMonth);
    var newYear = a.userYear;
    var YY = parseInt(newYear.slice(2, 4));
    var CC = parseInt(newYear.slice(0, 2));
    var newGender = a.userGender;

    var a = Math.floor((14 - MM) / 12);
    var y = newYear - a;
    var m = MM + 12 * a - 2;
    var dayOfTheWeek = (DD + y + Math.floor(y / 4) - Math.floor(y / 100) +
        Math.floor(newYear / 400) + Math.floor((31 * m) / 12)) % 7;

    var daysOfaweek = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday',
        'Thursday', 'Friday', 'Saturday');

    var realDay = daysOfaweek[dayOfTheWeek];
    if (newGender === "male") {
        for (var name in maleNames) {
            if (maleNames.hasOwnProperty(name)) {
                if (name === realDay) {
                    document.getElementById('ans').innerHTML = maleNames[name];
                    document.getElementById('three').style.backgroundColor = "black";
                    document.getElementById('three').style.color = "white";
                    alert("You are " + maleNames[name]);
                }
            }
        }

    } else {
        for (var name in femaleNames) {
            if (femaleNames.hasOwnProperty(name)) {
                if (name === realDay) {
                    document.getElementById('ans').innerHTML = femaleNames[name];
                    document.getElementById('three').style.backgroundColor = "black";
                    document.getElementById('three').style.color = "white";
                    alert("You are " + femaleNames[name]);
                }
            }
        }

    }
}

