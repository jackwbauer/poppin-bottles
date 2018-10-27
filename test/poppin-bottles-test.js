assert = require('chai').assert;
bottles = require('../poppin-bottles');

describe('Poopin Bottles', function() {
  it("input of 10 should have output of 15", function() {
    var expected = 15;
    assert.isTrue(bottles(10)['Total Bottles'] === 15);
    assert.isTrue(bottles(10)['Remaining Bottles'] === 1);
    assert.isTrue(bottles(10)['Remaining Caps'] === 3);
    assert.isTrue(bottles(10)['Total Earned']['Bottles'] === 16);
    assert.isTrue(bottles(10)['Total Bottles'] === 18);
  });
  it("input of 20 should have output of 35", function() {
    var expected = 35;
    assert.isTrue(bottles(20)['Total Bottles'] === 35);
    assert.isTrue(bottles(20)['Remaining Bottles'] === 1);
    assert.isTrue(bottles(20)['Remaining Caps'] === 3);
    assert.isTrue(bottles(20)['Total Earned']['Bottles'] === 36);
    assert.isTrue(bottles(20)['Total Earned']['Caps'] === 38);

  });
  it("input of 30 should have output of 55", function() {
    var expected = 55;
    assert.isTrue(bottles(30)['Total Bottles'] === 55);
    assert.isTrue(bottles(30)['Remaining Bottles'] === 1);
    assert.isTrue(bottles(30)['Remaining Caps'] === 3);
    assert.isTrue(bottles(30)['Total Earned']['Bottles'] === 56);
    assert.isTrue(bottles(30)['Total Earned']['Caps'] === 58);
  });
  it("input of 40 should have output of 75", function() {
    var expected = 75;
    assert.isTrue(bottles(40)['Total Bottles'] === 75);
    assert.isTrue(bottles(40)['Remaining Bottles'] === 1);
    assert.isTrue(bottles(40)['Remaining Caps'] === 3);
    assert.isTrue(bottles(40)['Total Earned']['Bottles'] === 76);
    assert.isTrue(bottles(40)['Total Earned']['Caps'] === 78);
  });
});
