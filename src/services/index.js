import users from './users/users.service.js';
import orders from './orders/orders.service.js';

// eslint-disable-next-line no-unused-vars
export default function (app) {
    app.configure(users);
    app.configure(orders);
}
