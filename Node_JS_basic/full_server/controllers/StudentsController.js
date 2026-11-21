import readDatabase from '../utils';

class StudentsController {
  static getAllStudents (request, response) {
    readDatabase(process.argv[2] || './database.csv')
      .then((students) => {
        const fields = Object.keys(students)
          .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
        const lines = fields.map((field) => `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`);
        response.status(200).send(['This is the list of our students'].concat(lines).join('\n'));
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor (request, response) {
    const { major } = request.params;
    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    readDatabase(process.argv[2] || './database.csv')
      .then((students) => {
        response.status(200).send(`List: ${students[major].join(', ')}`);
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }
}

export default StudentsController;
