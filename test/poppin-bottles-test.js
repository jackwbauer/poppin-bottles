assert = require('chai').assert;
bottles = require('../poppin-bottles');

describe('Poopin Bottles', function() {
  it("input of 10 should have output of 15", function() {
    var expected = 15;
    assert.isTrue(bottles(10)['Total Bottles'] === 15);
  });
  it("input of 20 should have output of 35", function() {
    var expected = 35;
    assert.isTrue(bottles(20)['Total Bottles'] === 35);
  });
  it("input of 30 should have output of 55", function() {
    var expected = 55;
    assert.isTrue(bottles(30)['Total Bottles'] === 55);
  });
  it("input of 40 should have output of 75", function() {
    var expected = 75;
    assert.isTrue(bottles(40)['Total Bottles'] === 75);
  });
});
