export default function getStudentIdsSum(arr) {
  return arr.reduce((counter, student) => counter + student.id, 0);
}
