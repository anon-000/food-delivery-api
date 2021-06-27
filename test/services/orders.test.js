const app = require('../../src/app');

describe('\'orders\' service', () => {
  it('registered the service', () => {
    const service = app.service('orders');
    expect(service).toBeTruthy();
  });
});
