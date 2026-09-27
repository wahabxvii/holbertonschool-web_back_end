export default function updateStudentGradeByCity(arrStudents, city, newGrades) {
  return arrStudents
    .filter((student) => student.location === city)
    .map((student) => {
      const entry = newGrades.find((g) => g.studentId === student.id);
      return { ...student, grade: entry ? entry.grade : 'N/A'};
    });
}
