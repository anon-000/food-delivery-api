// Initializes the `orders` service on path `/orders`
const { Orders } = require('./orders.class');
const createModel = require('../../models/orders.model');
const hooks = require('./orders.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/orders', new Orders(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('orders');

  service.hooks(hooks);
};
