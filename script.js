// Set variable for moment() date.
var today = moment();

// Show Current Day
var dayWeek = today.format("[Today is] dddd");
$("#currentDay").text(dayWeek);

// Show Current Date
$("#currentDate").text(today.format("MMM Do, YYYY"));

// Show Current Time
// TRY TO MAKE THIS A Real Time TICKER?
var time = moment().format("hh:mm:ss");
$("#now").text(time);

// Set variable to get Element by ID for buttons
var sevenButton = document.getElementById("seven");
var eightButton = document.getElementById("eight");
var nineButton = document.getElementById("nine");
var tenButton = document.getElementById("ten");
var elevenButton = document.getElementById("eleven");
var twelveButton = document.getElementById("twelve");
var oneButton = document.getElementById("one");
var twoButton = document.getElementById("two");
var threeButton = document.getElementById("three");
var fourButton = document.getElementById("four");
var fiveButton = document.getElementById("five");

// Set variable get Element by ID for text fields
var input07 = document.getElementById("inputInfo07");
var input08 = document.getElementById("inputInfo08");
var input09 = document.getElementById("inputInfo09");
var input10 = document.getElementById("inputInfo10");
var input11 = document.getElementById("inputInfo11");
var input12 = document.getElementById("inputInfo12");
var input01 = document.getElementById("inputInfo01");
var input02 = document.getElementById("inputInfo02");
var input03 = document.getElementById("inputInfo03");
var input04 = document.getElementById("inputInfo04");
var input05 = document.getElementById("inputInfo05");

// Set variable to get items out of local storage
var getInfoStorage07 = localStorage.getItem("inputInfoStorage07");
var getInfoStorage08 = localStorage.getItem("inputInfoStorage08");
var getInfoStorage09 = localStorage.getItem("inputInfoStorage09");
var getInfoStorage10 = localStorage.getItem("inputInfoStorage10");
var getInfoStorage11 = localStorage.getItem("inputInfoStorage11");
var getInfoStorage12 = localStorage.getItem("inputInfoStorage12");
var getInfoStorage01 = localStorage.getItem("inputInfoStorage01");
var getInfoStorage02 = localStorage.getItem("inputInfoStorage02");
var getInfoStorage03 = localStorage.getItem("inputInfoStorage03");
var getInfoStorage04 = localStorage.getItem("inputInfoStorage04");
var getInfoStorage05 = localStorage.getItem("inputInfoStorage05");

// Setting input variables text contents to new variable
input07.textContent = getInfoStorage07;
input08.textContent = getInfoStorage08;
input09.textContent = getInfoStorage09;
input10.textContent = getInfoStorage10;
input11.textContent = getInfoStorage11;
input12.textContent = getInfoStorage12;
input01.textContent = getInfoStorage01;
input02.textContent = getInfoStorage02;
input03.textContent = getInfoStorage03;
input04.textContent = getInfoStorage04;
input05.textContent = getInfoStorage05;

// Adds event listener to buttons that stores the value in local storage
sevenButton.addEventListener("click", function () {
  localStorage.setItem("inputInfoStorage07", input07.value);
});

eightButton.addEventListener("click", function () {
  localStorage.setItem("inputInfoStorage08", input08.value);
});

nineButton.addEventListener("click", function () {
  localStorage.setItem("inputInfoStorage09", input09.value);
});

tenButton.addEventListener("click", function () {
  localStorage.setItem("inputInfoStorage10", input10.value);
});

elevenButton.addEventListener("click", function () {
  localStorage.setItem("inputInfoStorage11", input11.value);
});

twelveButton.addEventListener("click", function () {
  localStorage.setItem("inputInfoStorage12", input12.value);
});

oneButton.addEventListener("click", function () {
  localStorage.setItem("inputInfoStorage01", input01.value);
});

twoButton.addEventListener("click", function () {
  localStorage.setItem("inputInfoStorage02", input02.value);
});

threeButton.addEventListener("click", function () {
  localStorage.setItem("inputInfoStorage03", input03.value);
});

fourButton.addEventListener("click", function () {
  localStorage.setItem("inputInfoStorage04", input04.value);
});

fiveButton.addEventListener("click", function () {
  localStorage.setItem("inputInfoStorage05", input05.value);
});

// Past, Present, Future Color Setting
function setTime() {
  var sevenBlock = document.getElementById("inputInfo07");
  var eightBlock = document.getElementById("inputInfo08");
  var nineBlock = document.getElementById("inputInfo09");
  var tenBlock = document.getElementById("inputInfo10");
  var elevenBlock = document.getElementById("inputInfo11");
  var twelveBlock = document.getElementById("inputInfo12");
  var oneBlock = document.getElementById("inputInfo01");
  var twoBlock = document.getElementById("inputInfo02");
  var threeBlock = document.getElementById("inputInfo03");
  var fourBlock = document.getElementById("inputInfo04");
  var fiveBlock = document.getElementById("inputInfo05");
  var grabbingHourFor7am = moment();
  var grabbingHourFor8am = moment();
  var grabbingHourFor9am = moment();
  var grabbingHourFor10am = moment();
  var grabbingHourFor11am = moment();
  var grabbingHourFor12pm = moment();
  var grabbingHourFor01pm = moment();
  var grabbingHourFor02pm = moment();
  var grabbingHourFor03pm = moment();
  var grabbingHourFor04pm = moment();
  var grabbingHourFor05pm = moment();

  if (grabbingHourFor7am > moment().format("7")) {
    sevenBlock.setAttribute("class", "past");
  } else if (grabbingHourFor7am === moment().format("7")) {
    sevenBlock.setAttribute("class", "present");
  } else {
    sevenBlock.setAttribute("class", "future");
  }

  if (grabbingHourFor8am > moment().format("8")) {
    eightBlock.setAttribute("class", "past");
  } else if (grabbingHourFor8am === moment().format("8")) {
    eightBlock.setAttribute("class", "present");
  } else {
    eightBlock.setAttribute("class", "future");
  }

  if (grabbingHourFor9am > moment().format("9")) {
    nineBlock.setAttribute("class", "past");
  } else if (grabbingHourFor9am === moment().format("9")) {
    nineBlock.setAttribute("class", "present");
  } else {
    nineBlock.setAttribute("class", "future");
  }

  if (grabbingHourFor10am > moment().format("10")) {
    tenBlock.setAttribute("class", "past");
  } else if (grabbingHourFor10am === moment().format("10")) {
    tenBlock.setAttribute("class", "present");
  } else {
    tenBlock.setAttribute("class", "future");
  }

  if (grabbingHourFor11am > moment().format("11")) {
    elevenBlock.setAttribute("class", "past");
  } else if (grabbingHourFor11am === moment().format("11")) {
    elevenBlock.setAttribute("class", "present");
  } else {
    elevenBlock.setAttribute("class", "future");
  }

  if (grabbingHourFor12pm > moment().format("12")) {
    twelveBlock.setAttribute("class", "past");
  } else if (grabbingHourFor12pm === moment().format("12")) {
    twelveBlock.setAttribute("class", "present");
  } else {
    twelveBlock.setAttribute("class", "future");
  }

  if (grabbingHourFor01pm > moment().format("13")) {
    oneBlock.setAttribute("class", "past");
  } else if (grabbingHourFor01pm === moment().format("13")) {
    oneBlock.setAttribute("class", "present");
  } else {
    oneBlock.setAttribute("class", "future");
  }

  if (grabbingHourFor02pm > moment().format("14")) {
    twoBlock.setAttribute("class", "past");
  } else if (grabbingHourFor02pm === moment().format("14")) {
    twoBlock.setAttribute("class", "present");
  } else {
    twoBlock.setAttribute("class", "future");
  }

  if (grabbingHourFor03pm > moment().format("15")) {
    threeBlock.setAttribute("class", "past");
  } else if (grabbingHourFor03pm === moment().format("15")) {
    threeBlock.setAttribute("class", "present");
  } else {
    threeBlock.setAttribute("class", "future");
  }

  if (grabbingHourFor04pm > moment().format("16")) {
    fourBlock.setAttribute("class", "past");
  } else if (grabbingHourFor04pm === moment().format("16")) {
    fourBlock.setAttribute("class", "present");
  } else {
    fourBlock.setAttribute("class", "future");
  }

  if (grabbingHourFor05pm > moment().format("17")) {
    fiveBlock.setAttribute("class", "past");
  } else if (grabbingHourFor05pm === moment().format("17")) {
    fiveBlock.setAttribute("class", "present");
  } else {
    fiveBlock.setAttribute("class", "future");
  }
}
moment();
setTime();
