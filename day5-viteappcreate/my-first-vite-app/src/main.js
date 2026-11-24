import { student, calculateGrade } from "./student.js";
import "./style.css";

const grade = calculateGrade(student.marks);

document.querySelector("#app").innerHTML = `
  <h1>Student Details</h1>
  <p>Name: ${student.name}</p>
  <p>Marks: ${student.marks}</p>
  <p>Grade: ${grade}</p>
`;