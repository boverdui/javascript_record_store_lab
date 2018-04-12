const assert = require('assert');
const Customer = require('../models/customer.js');

describe('Customer', function() {

  let customer;

  beforeEach(function() {
    customer = new Customer("Bert", 30.00);
  });

  it('should have a name', function () {
    assert.strictEqual(customer.name, "Bert");
  });

  it('should start with no records', function () {
    assert.deepStrictEqual(customer.records, []);
  });

  it('should have a wallet balance', function () {
    assert.strictEqual(customer.walletBalance, 30.00);
  });

});
