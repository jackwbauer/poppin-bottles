assert = require('chai').assert;
bottles = require('../poppin-bottles');

describe('Poppin Bottles', function() {
  //input of 10
  it("input of 10 should have output of 15 total bottles", function() {
    var input = 10;
    var expected = 15;
    assert.isTrue(bottles(input)['Total Bottles'] === expected);
  });
  it("input of 10 should have output of 1 remaining bottles", function() {
    var input = 10;
    var expected = 1;
    assert.isTrue(bottles(input)['Remaining Bottles'] === expected);
  });
  it("input of 10 should have output of 3 remaining caps", function() {
    var input = 10;
    var expected = 3;
    assert.isTrue(bottles(input)['Remaining Caps'] === expected);
  });

  it("input of 10 should have output of 7 earned bottles", function() {
    var input = 10;
    var expected = 7;
    assert.isTrue(bottles(input)['Total Earned']['Bottles'] === expected);
  });
  it("input of 10 should have output of 3", function() {
    var input = 10;
    var expected = 3;
    assert.isTrue(bottles(input)['Total Earned']['Caps'] === expected);
  });

  //input of 20
   it("input of 20 should have output of 35 total bottles", function() {
    var input = 20;
    var expected = 35;
    assert.isTrue(bottles(input)['Total Bottles'] === expected);
  });
  it("input of 20 should have output of 1 remaining bottles", function() {
    var input = 20;
    var expected = 1;
    assert.isTrue(bottles(input)['Remaining Bottles'] === expected);
  });
  it("input of 20 should have output of 3 remaining caps", function() {
    var input = 20;
    var expected = 3;
    assert.isTrue(bottles(input)['Remaining Caps'] === expected);
  });

  it("input of 20 should have output of 17 earned bottles", function() {
    var input = 20;
    var expected = 17;
    assert.isTrue(bottles(input)['Total Earned']['Bottles'] === expected);
  });
  it("input of 20 should have output of 8", function() {
    var input = 20;
    var expected = 8;
    assert.isTrue(bottles(input)['Total Earned']['Caps'] === expected);
  });

  //input of 30
  it("input of 30 should have output of 55 total bottles", function() {
    var input = 30;
    var expected = 55;
    assert.isTrue(bottles(input)['Total Bottles'] === expected);
  });
  it("input of 30 should have output of 1 remaining bottles", function() {
    var input = 30;
    var expected = 1;
    assert.isTrue(bottles(input)['Remaining Bottles'] === expected);
  });
  it("input of 30 should have output of 3 remaining caps", function() {
    var input = 30;
    var expected = 3;
    assert.isTrue(bottles(input)['Remaining Caps'] === expected);
  });

  it("input of 30 should have output of 27 earned bottles", function() {
    var input = 30;
    var expected = 27;
    assert.isTrue(bottles(input)['Total Earned']['Bottles'] === expected);
  });
  it("input of 30 should have output of 13", function() {
    var input = 30;
    var expected = 13;
    assert.isTrue(bottles(input)['Total Earned']['Caps'] === expected);
  });

  //input of 75
  it("input of 40 should have output of 75 total bottles", function() {
    var input = 40;
    var expected = 75;
    assert.isTrue(bottles(input)['Total Bottles'] === expected);
  });
  it("input of 40 should have output of 1 remaining bottles", function() {
    var input = 40;
    var expected = 1;
    assert.isTrue(bottles(input)['Remaining Bottles'] === expected);
  });
  it("input of 40 should have output of 3 remaining caps", function() {
    var input = 40;
    var expected = 3;
    assert.isTrue(bottles(input)['Remaining Caps'] === expected);
  });

  it("input of 40 should have output of 37 earned bottles", function() {
    var input = 40;
    var expected = 37;
    assert.isTrue(bottles(input)['Total Earned']['Bottles'] === expected);
  });
  it("input of 40 should have output of 18", function() {
    var input = 40;
    var expected = 18;
    assert.isTrue(bottles(input)['Total Earned']['Caps'] === expected);
  });
});
