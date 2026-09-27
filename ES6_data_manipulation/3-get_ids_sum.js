export default function getStudentIdsSum(arrStudents) {
  if (!Array.isArray(arrStudents)) {
    return []
  }
  return arrStudents.reduce((sum,student) => sum + student.id, 0)
}
