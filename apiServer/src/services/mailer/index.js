
const createService = require('feathers-mongoose');
const createModel = require('./mailer-model');
const hooks = require('./mailer-hooks');
const filters = require('./mailer-filter');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'mailer',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/mailer', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('mailer');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
