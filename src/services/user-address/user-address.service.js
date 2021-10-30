// Initializes the `user-address` service on path `/user-address`
import { UserAddress } from './user-address.class';

import createModel from '../../models/user-address.model';
import hooks from './user-address.hooks';

export default function (app) {
    const options = {
        Model: createModel(app),
        paginate: app.get('paginate')
    };

    // Initialize our service with any options it requires
    app.use('/user-address', new UserAddress(options, app));

    // Get our initialized service so that we can register hooks
    const service = app.service('user-address');

    service.hooks(hooks);
}
