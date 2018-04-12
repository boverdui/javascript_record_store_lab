const assert = require('assert');
const Record = require('../models/record.js');
const RecordStore = require('../models/recordstore.js');

describe('RecordStore', function() {

  let recordstore;

  beforeEach(function() {
    record = new Record("Muse", "Origin of Symmetry", "Alternative Rock", 12.99);
    recordstore = new RecordStore('The Black Circle', 'Edinburgh', [record], 1000);
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

  it('should have a record in the inventory', function() {
    const actual = recordstore.inventory;
    assert.deepStrictEqual(actual, [record]);
  });

});
