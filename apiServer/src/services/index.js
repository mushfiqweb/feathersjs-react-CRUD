const studentService = require('./student/student.service');
const mailerService = require('./mailer');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(studentService);
  app.configure(mailerService);
};