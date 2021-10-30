const app = require('../../src/app');

describe('\'user-address\' service', () => {
  it('registered the service', () => {
    const service = app.service('user-address');
    expect(service).toBeTruthy();
  });
});
