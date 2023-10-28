// Initializes the `cart` service on path `/cart`
const { Cart } = require('./cart.class');
const createModel = require('../../models/cart.model');
const hooks = require('./cart.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/cart', new Cart(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('cart');

  service.hooks(hooks);
};
