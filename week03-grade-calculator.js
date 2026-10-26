function isValidScore(score) {
  // A score must be between 0 and 100.
  if (score < 0 || score > 100) {
    return false;
  } else {
    return true;
  }
}

function average(scores) {
  let total = 0;
  let count = 0;

  // Look at each score in the list.
  for (let i = 0; i < scores.length; i++) {
    // Only add and count valid scores.
    if (isValidScore(scores[i])) {
      total = total + scores[i];
      count = count + 1;
    }
  }

  // Return 0 if the list is empty or has no valid scores.
  if (count === 0) {
    return 0;
  }

  // Divide the total by the number of valid scores.
  return total / count;
}

function getGrade(score) {
  // Check the highest grade first.
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

// The list includes two invalid scores to test the checks.
const scores = [72, 45, 91, -5, 105];

// Start at position 0 and move through the list.
for (let i = 0; i < scores.length; i++) {
  const score = scores[i];

  // isValidScore returns true or false.
  // If it returns true, this block runs.
  if (isValidScore(score)) {
    const grade = getGrade(score);
    console.log("Score: " + score + ", Grade: " + grade);
  } else {
    // Invalid scores get a message instead of a grade.
    console.log("Skipped invalid score: " + score);
  }
}

// Calculate and display the average of the valid scores.
console.log("Overall average: " + average(scores));