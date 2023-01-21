const totalNumbersInDraw = 45;

// function to simulate a lotto draw
function lottoDraw() {
  // create an array to store the randomly picked numbers
  let drawNumbers = [];

  // use a while loop to pick 6 random numbers from 1 to 45
  while (drawNumbers.length < 6) {
    let number = Math.floor(Math.random() * totalNumbersInDraw) + 1;
    if (!drawNumbers.includes(number)) {
      drawNumbers.push(number);
    }
  }

  // sort the array of randomly picked numbers
  drawNumbers.sort(function (a, b) {
    return a - b;
  });

  return drawNumbers;
}

// function to check the chosen numbers against the draw numbers
function checkNumbers(chosenNumbers, drawNumbers) {
  // sort the array of chosen numbers
  chosenNumbers.sort(function (a, b) {
    return a - b;
  });

  // use a for loop to check if each chosen number is in the draw numbers
  let matchedNumbers = 0;
  for (let i = 0; i < chosenNumbers.length; i++) {
    if (drawNumbers.includes(chosenNumbers[i])) {
      matchedNumbers++;
    }
  }

  return matchedNumbers === 6;
}

// example usage:
let myNumbers = [1, 2, 3, 4, 5, 6];
let wins = 0;
let totalDrawsMade = 0;
let totalDrawAttempts = 100000000;

console.log(
  `Let\'s play Saturday night TattsLotto in Australia with these numbers: [${myNumbers.join(
    ", "
  )}]`
);
console.log(
  "Total Draws to be attempted: " + totalDrawAttempts.toLocaleString()
);
console.log(
  `To win the lotto, you need to match all 6 numbers out of ${totalNumbersInDraw} numbers`
);
console.log("Let's see how long it takes to win the lotto...");
console.log("--------------------------------------------------");

for (let i = 0; i < totalDrawAttempts; i++) {
  let draw = lottoDraw();
  totalDrawsMade++;
  if (totalDrawsMade % 500000 === 0) {
    console.log("Total Draws so far: " + totalDrawsMade.toLocaleString());
  }
  if (checkNumbers(myNumbers, draw)) {
    wins++;
    if (wins === 1) {
      console.log(
        `Won the lotto after ${totalDrawsMade.toLocaleString()} attempts!`
      );
      break;
    }
  }
}
console.log(
  `If each draw was made weekly, it would have taken you ${Math.floor(
    totalDrawsMade / (365.25 / 7)
  ).toLocaleString()} years to win.`
);
