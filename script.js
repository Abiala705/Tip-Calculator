const billInput = document.querySelector(".bill");
const peopleInput = document.querySelector(".people_input");
const customInput = document.querySelector("#custom");
const tipPerPerson = document.querySelector(".totalTipAmount");
const totalPerPerson = document.querySelector(".totalFig");
const tips = document.querySelectorAll(".tips");
const restBtn = document.querySelector(".reset");
const error = document.querySelector(".error");

billInput.addEventListener("input", billInputFunction);
peopleInput.addEventListener("input", peopleInputFunction);
customInput.addEventListener("input", customTip);
tips.forEach(function (val) {
  val.addEventListener("click", handleClick);
});

restBtn.addEventListener("click", resetFunc);

billInput.value = "0.0";
peopleInput.value = "1";
tipPerPerson.innerHTML = "$" + (0.0).toFixed(2);
totalPerPerson.innerHTML = "$" + (0.0).toFixed(2);

let billValue = 0;
let peopleValue = 1;
let customValue = 1;

function billInputFunction() {
  billValue = parseFloat(billInput.value);
  calculateTip();
}

function peopleInputFunction() {
  peopleValue = parseFloat(peopleInput.value);
  calculateTip();

  if (peopleValue < 1) {
    error.style.display = "block";
    peopleInput.style.border = "thick solid red";
  } else {
    error.style.display = "none";
    peopleInput.style.border = "none";
    calculateTip();
  }
}

function handleClick(event) {
  tips.forEach(function (val) {
    val.classList.remove("tip-active");
    if (event.target.innerHTML == val.innerHTML) {
      val.classList.add("tip-active");
      tipValue = parseFloat(val.innerHTML) / 100;
      console.log(tipValue);
    }
  });
  calculateTip();
}

function customTip() {
  tipValue = parseFloat(customInput.value) / 100;

  tips.forEach(function (val) {
    val.classList.remove("tip-active");
  });
  calculateTip();
}

function calculateTip() {
  if (peopleValue >= 1) {
    let tipAmt = (billValue * tipValue) / peopleValue;
    let totalFigure = (billValue * tipAmt) / peopleValue;
    tipPerPerson.innerHTML = "$" + tipAmt.toFixed(2);
    totalPerPerson.innerHTML = "$" + totalFigure.toFixed(2);
  }
}

function resetFunc() {
  billInput.value = "0.0";
  peopleInput.value = "1";
  tipPerPerson.innerHTML = "$" + (0.0).toFixed(2);
  totalPerPerson.innerHTML = "$" + (0.0).toFixed(2);
  customInput.value = "Custom";
}
