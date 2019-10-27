var male = {
    Sunday: 'Kwasi',
    Monday: 'Kwadwo',
    Tuesday: 'Kwabena',
    Wednesday: 'Kwaku',
    Thursday: 'Yaw',
    Friday: 'Kofi',
    Saturday: 'Kwame',
   };
   var female = {
    Sunday: 'Akosua',
    Monday: 'Adwoa',
    Tuesday: 'Abenaa',
    Wednesday: 'Akua',
    Thursday: 'Yaa',
    Friday: 'Afua',
    Saturday: 'Ama',
   };
   function validateForm() {
    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;
    var gender = document.getElementsByName("gender");
    if (day == "" || day == null) {
      alert("Enter date");
    } else {
      if (!isNaN(day)) {
        if (day <= 0 || day > 31) {
          alert("invalid day");
        } else {
        }
      } else {
        alert("Number required");
      }
    }
    if (month == "" || month == null) {
      alert("Month is empty");
    } else {
      if (!isNaN(month)) {
        if (month <= 0 || month > 12) {
          alert("Month is invalid");
        } else {
        }
      } else {
        alert("invalid month");
      }
    }
    if (year == "" || year == null) {
      alert("Year is empty");
    } else {
      if (!isNaN(year)) {
        if (year < 1900 || year > 2019) {
          alert("invalid year");
        } else {
        }
      } else {
        alert("invalid year");
      }
    }
    if (gender[0].checked === false && gender[1].checked === false) {
      alert("you have not selected gender");
    } else {
      for (i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
          var usGend = gender[i].value;
        }
      }
    }
    var userInput = {
      userDay: day,
      userMonth: month,
      userYear: year,
      userGender: usGend,
    }
    return userInput;
   }
   function result() {
    var valF = validateForm();
    var dd = parseInt(valF.userDay);
    var mm = parseInt(valF.userMonth);
    var year = parseInt(valF.userYear);
    var gender = valF.userGender;
   // alert(gender);
    var a = Math.floor((14 - mm) / 12);
    var y = year - a;
    var m = mm + 12 * a - 2;
    var day = (dd + y + Math.floor(y / 4) - Math.floor(y / 100) +
      Math.floor(year / 400) + Math.floor((31 * m) / 12)) % 7;
    //alert(day);
    var days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday',
      'Thursday', 'Friday', 'Saturday');
      //alert(days);
    var getDay = days[day];
    //alert(getDay);
    if (gender === "male") {
      for (var a in male) {
        if (male.hasOwnProperty(a)) {
          if (a === getDay) {
            alert(male[a]);
          }
        }
      }
    }
    else if (gender === "female") {
      for (var a in female) {
        if (female.hasOwnProperty(a)) {
          if (a === getDay) {
            alert(female[a]);
          }
        }
      }
    }
   }