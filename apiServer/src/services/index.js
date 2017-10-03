const studentService = require('./student/student.service');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(studentService);
};