export default function getStudentByLocation(arrStudents,city) {
  if (!Array.isArray(arrStudents)) {
    return []
  }
  if (typeof city !== 'string') {
    throw new TypeError('City must be a string')
  }

  return arrStudents.filter((student) => student.location === city);
}
