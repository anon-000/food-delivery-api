// Initializes the `food-items` service on path `/food-items`
const { FoodItems } = require('./food-items.class');
const createModel = require('../../models/food-items.model');
const hooks = require('./food-items.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/food-items', new FoodItems(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('food-items');

  service.hooks(hooks);
};
