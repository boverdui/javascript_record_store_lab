const assert = require('assert');
const RecordStore = require('../models/recordstore.js');

describe('RecordStore', function() {

  let recordstore;

  beforeEach(function() {
    recordstore = new RecordStore('The Black Circle', 'Edinburgh', 1000);
  });

  it('should have a name', function() {
    const actual = recordstore.name;
    assert.strictEqual(actual, 'The Black Circle');
  });

  it('should have a city', function() {
    const actual = recordstore.city;
    assert.strictEqual(actual, 'Edinburgh');
  });

  it('should have an empty inventory', function() {
    const actual = recordstore.inventory;
    assert.deepStrictEqual(actual, []);
  });


  it('should have a balance', function() {
    const actual = recordstore.balance;
    assert.strictEqual(actual, 1000);
  });
  
});
