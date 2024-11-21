"use strict";

function init() {
  console.log("Programmet kører");
}

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    console.log("Før tjekket");
    console.log(array);
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        console.log(array[j] + " er større end " + array[j + 1]);
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
    console.log("Efter tjekket");
    console.log("Iteration: " + i + " " + array);
  }

  return array;
}

console.log(bubbleSort([5, 3, 7, 9, 4]));
