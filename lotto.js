// function to simulate a lotto draw
function lottoDraw() {
  // create an array to store the randomly picked numbers
  let drawNumbers = [];

  // use a while loop to pick 6 random numbers from 1 to 45
  while (drawNumbers.length < 6) {
    let number = Math.floor(Math.random() * 45) + 1;
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
let matches = 0;
let totalDrawsMade = 0;
let totalDraws = 100000000;

for (let i = 0; i < totalDraws; i++) {
  let draw = lottoDraw();
  totalDrawsMade++;
  if (checkNumbers(myNumbers, draw)) {
    matches++;
    if (matches === 1) {
      console.log('Matched after ' + i + ' draws');
      break;
    }
  }
}
console.log('Total Matches: ' + matches);
// console.log('Total Draws: ' + totalDraws);
console.log('Total Years: ' + Math.floor(totalDrawsMade / (365.25 / 7)));
console.log('Percentage of Matches: ' + (matches / totalDraws) * 100 + '%');
