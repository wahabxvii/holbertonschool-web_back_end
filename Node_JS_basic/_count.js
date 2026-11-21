function report (data) {
  const rows = data.toString().split('\n').filter((row) => row.length > 0);
  const headers = rows[0].split(';');
  const students = rows.slice(1).map((row) => {
    const values = row.split(';');
    const student = {};
    headers.forEach((header, index) => {
      student[header] = values[index];
    });
    return student;
  });
  console.log(`Number of students: ${students.length}`);
  const groups = {};
  for (const student of students) {
    if (!student.field) {
      continue;
    }
    if (!groups[student.field]) {
      groups[student.field] = [];
    }
    groups[student.field].push(student.firstname);
  }
  for (const field of Object.keys(groups)) {
    console.log(`Number of students in ${field}: ${groups[field].length}. List: ${groups[field].join(', ')}`);
  }
}

module.exports = report;
