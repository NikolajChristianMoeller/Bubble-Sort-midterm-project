window.addEventListener("load", init);

let gameInterval;

let i = 0;
let j = 0;
let array = [];
let sortedElements = [];

// #Region Controller
function init() {
  reset();
  const button = document.querySelector("#start-button");
  const inputField = document.querySelector('.inputField');
  inputField.addEventListener('change', launchGenerateArray);
  generateArray(6)
  button.addEventListener("click", startSort);
  renderArray();
}

function startSort() {
  clearInterval(gameInterval)
  gameInterval = setInterval(() => {
    bubbleSort(array);
    renderArray();
  }, 2000);
}

function reset() {
  i = 0;
  j = 0;
  array = [];
  sortedElements = [];
}

// #region Model
function bubbleSort(array) {
  if (isSorted(array)) {
    clearInterval(gameInterval);
    renderArray();
    return;
  }
  if (i < array.length - 1) {
    compareValues();
  }
  return array;
}

function isSorted(array) {
  for (let i = 0; i < array.length - 1; i++) {
    if (!(array[i] <= array[i + 1])) return false;
  }
  return true;
}

function compareValues() {
  if (array[j] > array[j + 1]) {
    let temp = array[j];
    array[j] = array[j + 1];
    array[j + 1] = temp;
  }
  j++;
  renderArray();
  if (j >= array.length - 1 - i) {
    sortedElements.push(array[j])
    console.log(sortedElements);
    j = 0;
    i++;
  }
}

function generateArray(arraylength) {
  array = [];
  for (let i = 0; i < arraylength; i++) {
    const randomNumber = Math.floor(Math.random() * 50);
    array.push(randomNumber);
  }
  renderArray();
}

 // #Region view
function showArray(element, index) {
  const container = document.querySelector("#container");

  const html = /*html*/ `
  <div class='box ${index > array.length - i - 1 ? "sortedElement" : " "} ${
    isSorted(array) ? "sortedElement" : ""
  }' ' >${element}</div>
  `;

  container.insertAdjacentHTML("beforeend", html);
  const boxes = document.querySelectorAll(".box");
  if (boxes[j] && boxes[j + 1]) {
    boxes[j].classList.add("lookingAt");
    boxes[j + 1].classList.add("lookingAt");
  }
}

function renderArray() {
  const container = document.querySelector("#container");
  container.innerHTML = "";
  array.forEach(showArray);
}

function launchGenerateArray(event) {
  reset();
  event.preventDefault();
  const arraylength = event.target.value
  console.log(event.target.value);
  generateArray(arraylength);
}
