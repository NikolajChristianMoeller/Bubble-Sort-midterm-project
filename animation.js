window.addEventListener("load", init);

let gameInterval;

let i = 0;
let j = 0;
let array = [5, 3, 7, 9, 4];

function init() {
  const button = document.querySelector("#start-button");
  // const inputField = document.querySelector('.inputField');
  // inputField.addEventListener('change', generateArray);

  button.addEventListener("click", startSort);
  renderArray();
}

function startSort() {
  gameInterval = setInterval(() => {
    bubbleSort(array);
    renderArray();
  }, 2000);
}

function bubbleSort(array) {
  if (isSorted(array)) {
    clearInterval(gameInterval);
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
    j = 0;
    i++;
  }
}

function showArray(element) {
  const container = document.querySelector("#container");

  const html = /*html*/ `
  <div class="box" >${element}</div>
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

// function generateArray(event) {
//     event.preventDefault();
//     console.log(event);
// }
