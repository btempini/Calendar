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

  if (7 < moment().format("H")) {
    sevenBlock.setAttribute("class", "past");
  } else if (7 == moment().format("H")) {
    sevenBlock.setAttribute("class", "present");
  } else {
    sevenBlock.setAttribute("class", "future");
  }

  if (8 < moment().format("H")) {
    eightBlock.setAttribute("class", "past");
  } else if (8 == moment().format("H")) {
    eightBlock.setAttribute("class", "present");
  } else {
    eightBlock.setAttribute("class", "future");
  }

  if (9 < moment().format("H")) {
    nineBlock.setAttribute("class", "past");
  } else if (9 == moment().format("H")) {
    nineBlock.setAttribute("class", "present");
  } else {
    nineBlock.setAttribute("class", "future");
  }

  if (10 < moment().format("H")) {
    tenBlock.setAttribute("class", "past");
  } else if (10 == moment().format("H")) {
    tenBlock.setAttribute("class", "present");
  } else {
    tenBlock.setAttribute("class", "future");
  }

  if (11 < moment().format("H")) {
    elevenBlock.setAttribute("class", "past");
  } else if (11 == moment().format("H")) {
    elevenBlock.setAttribute("class", "present");
  } else {
    elevenBlock.setAttribute("class", "future");
  }

  if (12 < moment().format("H")) {
    twelveBlock.setAttribute("class", "past");
  } else if (12 == moment().format("H")) {
    twelveBlock.setAttribute("class", "present");
  } else {
    twelveBlock.setAttribute("class", "future");
  }

  if (13 < moment().format("H")) {
    oneBlock.setAttribute("class", "past");
  } else if (13 == moment().format("H")) {
    oneBlock.setAttribute("class", "present");
  } else {
    oneBlock.setAttribute("class", "future");
  }

  if (14 < moment().format("H")) {
    twoBlock.setAttribute("class", "past");
  } else if (14 == moment().format("H")) {
    twoBlock.setAttribute("class", "present");
  } else {
    twoBlock.setAttribute("class", "future");
  }

  if (15 < moment().format("H")) {
    threeBlock.setAttribute("class", "past");
  } else if (15 == moment().format("H")) {
    threeBlock.setAttribute("class", "present");
  } else {
    threeBlock.setAttribute("class", "future");
  }

  if (16 < moment().format("H")) {
    fourBlock.setAttribute("class", "past");
  } else if (16 == moment().format("H")) {
    fourBlock.setAttribute("class", "present");
  } else {
    fourBlock.setAttribute("class", "future");
  }

  if (17 < moment().format("H")) {
    fiveBlock.setAttribute("class", "past");
  } else if (17 == moment().format("H")) {
    fiveBlock.setAttribute("class", "present");
  } else {
    fiveBlock.setAttribute("class", "future");
  }
}

setTime();
console.log(moment().format("H"));
