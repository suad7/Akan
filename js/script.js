// This will calculate the specific day of the month 
var century = (year - 1) / 100 + 1;

var dayofweek = Math.floor(((century / 4) - 2 * century - 1) + ((5 * year / 4)) + ((26 * (month + 1) / 10)) + date) % 7;
var theMaleGender = document.getElementById("male");
var theFemaleGender = document.getElementById("female");













