const app = require('../../src/app');

describe('\'food-items\' service', () => {
  it('registered the service', () => {
    const service = app.service('food-items');
    expect(service).toBeTruthy();
  });
});
