const assert = require('assert');
const Record = require('../models/record.js');

describe('Record', function() {

  let record;

  beforeEach(function() {
    record = new Record("Muse", "Origin of Symmetry", "Alternative Rock", 12.99);
  });

  it('should have an artist', function() {
    assert.strictEqual(record.artist, "Muse");
  });

  it('should have a title', function () {
    assert.strictEqual(record.title, "Origin of Symmetry");
  });

  it('should have a genre', function () {
    assert.strictEqual(record.genre, "Alternative Rock");
  });

  it('should have a price', function () {
    assert.strictEqual(record.price, 12.99);
  });

});
