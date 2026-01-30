const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};
// 1. Calculate total marks
let totalMarks = marks.maths + marks.physics + marks.chemistry + marks.english;
console.log("Total Marks:", totalMarks);
 // 2. Calculate average marks
let averageMarks = totalMarks / 4;
console.log("Average Marks:", averageMarks);
// 3. Find the highest scoring subject
let highestScoringSubject = Object.keys(marks).reduce((a, b) => marks[a] > marks[b] ? a : b);
console.log("Highest Scoring Subject:", highestScoringSubject);
// 4. Add a new subject computer: 90
marks.computer = 90;
console.log("Updated Marks Object:", marks);