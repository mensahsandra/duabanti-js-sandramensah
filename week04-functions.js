// 1. Calculate the average of a list of numbers.

function calculateAverage(numbers) {
  if (numbers.length === 0) {
    return 0;
  }

  let total = 0;

  for (let i = 0; i < numbers.length; i++) {
    total = total + numbers[i];
  }

  return total / numbers.length;
}

// 2. Return the grade for a score.

function getGrade(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 50) {
    return "D";
  } else {
    return "F";
  }
}

// 3. Format an amount f Ghana cedis.

function formatCedis(amount) {
  return "GH₵" + amount.toFixed(2);
}

// 4. Check whether a score is a number from 0 to 100.

function isValidScore(score) {
  return typeof score === "number" && score >= 0 && score <= 100;
}

// 5. My own function: return a greeting

sayHi();
function sayHi() {
    console.log("Hi!, I am Sandra, a pleasure to meet you.");
}


// Week 3 grade calculator rewritten.

const scores = [72, 45, 91, -5, 105];
const validScores = [];

console.log(sayHi());

for (let i = 0; i < scores.length; i++) {
const score = scores[i];

if (isValidScore(score)) {
// Store the score at the next free position.
validScores[validScores.length] = score;

console.log("Score: " + score + ", Grade: " + getGrade(score));
} else {
console.log("Score outside the valid range: " + score);
}
}

// Calculate the average using only the valid scores.

console.log("Overall average: " + calculateAverage(validScores));

// Show the currency function separately.
console.log("Amount: " + formatCedis(1250));