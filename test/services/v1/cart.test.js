const app = require('../../../src/app');

describe('\'v1/cart\' service', () => {
  it('registered the service', () => {
    const service = app.service('v1/cart');
    expect(service).toBeTruthy();
  });
});
