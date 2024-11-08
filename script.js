"use strict";

function init() {
  console.log("Programmet kører");
}

// 1. Et loop som går gennem hele arrayet, og holder styr på længden for at vide
// 1. ... hvor mange iterationer der kræves for at være gennem alle tal

// 2. For hver iteration af det ydre loop skal vi have et indre loop til at sammenligne det nuværende
// 2. og det næste element gennem hele arrayet.

// 3. Når vi har været gennem det indre loop skal vi tilbage til det ydre loop, inkrementere med 1,
// 3. På den måde gentager vi hele processen indtil at i har itereret gennem hele arrayet

// 4. Vi skal evt. have klik events.


/*
SØVDO KODE

while array not sorted {
for element in array {
  if (Arr[index] > Arr[index] + 1){
  // swap elements
  } else{
  continue 
  }
}
}
*/

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
