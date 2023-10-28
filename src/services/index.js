import users from './users/users.service.js';
import orders from './orders/orders.service.js';
import userAddress from './user-address/user-address.service';
import uploadService from './upload/upload.service';

// eslint-disable-next-line no-unused-vars
export default function (app) {
    app.configure(users);
    app.configure(orders);
    app.configure(userAddress);
    app.configure(uploadService);
}
