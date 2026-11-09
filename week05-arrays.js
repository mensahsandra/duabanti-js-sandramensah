// Array of student names and scores
const students = [
  { name: "Ama", score: 72 },
  { name: "Kofi", score: 45 },
  { name: "Esi", score: 91 },
  { name: "Kojo", score: 38 },
  { name: "Abena", score: 89},
  { name: "Yaa", score: 70},
  { name: "Kwaku", score: 55},
  { name: "Sika", score: 94},
];
 
// Return a new array containing only the names.
function getNames(students) {
  return students.map((student) => student.name);
}

// Return the whole student with scores of 50 or more.
function getPassing(students) {
    return students.filter((students) => students.score >= 50);
}

// Add all the scores, starting from 0.
function getTotal(students) {
  return students.reduce((sum, student) => sum + student.score, 0);
}

// Find the top scorer, then return the matching student.
function getTopScorer(students) {
  if (students.length === 0) {
    return undefined;
  }

  let highestScore = students[0].score;

  for (const student of students) {
    if (student.score > highestScore) {
      highestScore = student.score;
    }
  }

  return students.find((student) => {
    return student.score === highestScore;
  });
}

// Copy and returns an array of students sorted by their scores in descending order
function rank(students) {
  return students.slice().sort((a, b) => b.score - a.score);
}

// Print a readable summary.
console.log("Week 5 Array Workout");
console.log("Student names:", getNames(students));
console.log("Passing students:", getPassing(students));
console.log("Total score:", getTotal(students));
console.log("Top scorer:", getTopScorer(students));
console.log("Ranked students:", rank(students));

