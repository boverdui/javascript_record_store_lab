const assert = require('assert');
const Customer = require('../models/customer.js');
const Record = require('../models/record.js');

describe('Customer', function() {

  let customer;
  let record1;
  let record2;
  let record3;

  beforeEach(function() {
    customer = new Customer("Bert", 30.00);
    record1 = new Record("Muse", "Origin of Symmetry", "Alternative Rock", 12.98);
    record2 = new Record("Spice Girls", "Spiceworld", "Pop", 40.00);
    record3 = new Record("Oh Wonder", "Oh Wonder", "Alternatice", 10.00);
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

  it('can buy a record', function() {
    customer.buyRecord(record1);
    assert.deepStrictEqual([record1], customer.records);
    assert.deepStrictEqual(17.02, customer.walletBalance);
  });

  it('cannot buy a record if customer does not have enough money', function() {
    customer.buyRecord(record2);
    assert.deepStrictEqual([], customer.records);
    assert.deepStrictEqual(30.00, customer.walletBalance);
  });

  it('cannot buy a record if customer does not have enough money', function() {
    customer.buyRecord(record2);
    assert.deepStrictEqual([], customer.records);
    assert.deepStrictEqual(30.00, customer.walletBalance);
  });

  it('can sell a record', function() {
    customer.buyRecord(record1);
    customer.buyRecord(record3);
    customer.sellRecord(record1);
    assert.deepStrictEqual([record3], customer.records);
    assert.deepStrictEqual(20.00, customer.walletBalance);
  });

});
