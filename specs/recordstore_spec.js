const assert = require('assert');
const Record = require('../models/record.js');
const RecordStore = require('../models/recordstore.js');

describe('RecordStore', function() {

  let recordstore;

  beforeEach(function() {
    record1 = new Record("Muse", "Origin of Symmetry", "Alternative Rock", 12.99);
    record2 = new Record("Bruce Springsteen", "Born to Run", "Rock", 11.99);
    record3 = new Record("Bruce Springsteen", "The River", "Rock", 19.99);
    recordstore = new RecordStore('The Black Circle', 'Edinburgh', [record1, record2, record3], 1000);
  });

  it('should have a name', function() {
    const actual = recordstore.name;
    assert.strictEqual(actual, 'The Black Circle');
  });

  it('should have a city', function() {
    const actual = recordstore.city;
    assert.strictEqual(actual, 'Edinburgh');
  });

  it('should have a balance', function() {
    const actual = recordstore.balance;
    assert.strictEqual(actual, 1000);
  });

  it('should have records in the inventory', function() {
    const actual = recordstore.inventory;
    assert.deepStrictEqual(actual, [record1, record2, record3]);
  });

  it('should be able to sell a record and adjusts the store balance to account for the record being sold', function() {
    recordstore.sellRecord(record1);
    assert.deepStrictEqual(recordstore.inventory, [record2, record3]);
    assert.strictEqual(recordstore.balance, 1012.99);
  });

  it('should be able to report the value of all records in the store inventory', function() {
    const actual = 44.97;
    assert.deepStrictEqual(actual, recordstore.calculateValueInventory())
  });

  it('should be able to view all records of a certain genre', function() {
    const actual = [record2, record3];
    assert.deepStrictEqual(actual, recordstore.viewByGenre("Rock"))
  });

});
