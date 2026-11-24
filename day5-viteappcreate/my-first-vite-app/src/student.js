export const student = {
  name: "Rahul",
  marks: 85
};

export function calculateGrade(marks) {
  if (marks >= 90) {
    return "A";
  } else if (marks >= 75) {
    return "B";
  } else {
    return "C";
  }
}