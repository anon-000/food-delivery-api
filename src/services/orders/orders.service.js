// Initializes the `orders` service on path `/orders`
import { Orders } from './orders.class';

import createModel from '../../models/orders.model';
import hooks from './orders.hooks';

export default function (app) {
    const options = {
        Model: createModel(app),
    };

    // Initialize our service with any options it requires
    app.use('/orders', new Orders(options, app));

    // Get our initialized service so that we can register hooks
    const service = app.service('orders');

    service.hooks(hooks);
}
