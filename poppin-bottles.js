var myArg = process.argv[2];
poppinBottles(myArg);

function poppinBottles(investment) {
  //initial purchase
  var result = {};
  var total = Math.floor(investment / 2);
  // console.log('initial total:', total);
  var fulls = total;
  var empties = 0;
  var caps = 0;
  var earnedFromCaps = 0;
  var earnedFromBottles = 0;

  while(fulls > 0) {
    empties++;
    caps++;
    fulls--;
    while(empties > 1) {
      empties -= 2;
      fulls++;
      total++;
      earnedFromBottles++;
      while(caps > 3) {
        caps -= 4;
        fulls++;
        total++;
        earnedFromCaps++;
      }
    }
  }

  result['Total Bottles'] = total;
  result['Remaining Bottles'] = empties;
  result['Remaining Caps'] = caps;
  result['Total Earned'] = {
    'Bottles' : earnedFromBottles,
    'Caps' : earnedFromCaps
  };
  console.log(result);
  return result;
}

module.exports = poppinBottles;