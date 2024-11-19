window.addEventListener("load", init)

const button = document.querySelector("#start-button")

let gameInterval;

let i = 0;
let j = 0;

let array = [5,3,7,9,4];

function init () {
    console.log("Programmet kører");
    button.addEventListener("click", startSort)
}

function startSort () {
    console.log("Der klikkes på knappen");
    gameInterval = setInterval(() => {
        bubbleSort(array), 2000
    })
    //bubbleSort(array);
    console.log(array);
}

function bubbleSort(array) {
    if(isSorted(array)) {
        clearInterval(gameInterval)
        return;
    }
    if(i < array.length - 1) {
        console.log("i, " + i)
        compareValues();
    }
    console.log(array);
    return array;
}

function isSorted(array) {
  for (let i = 0; i < array.length - 1; i++) {
    if (!(array[i] <= array[i + 1]))
    return false;
  }
  return true;
}

function compareValues() {
  console.log("j, " + j);
  console.log("current " + array[j]);
  console.log("next " + array[j + 1]);
  if (array[j] > array[j + 1]) {
    let temp = array[j];
    array[j] = array[j + 1];
    array[j + 1] = temp;
  }
  if (j < array.length - i - 1) {
    j++;
  } else {
    j = 0;
    i++;
  }
}