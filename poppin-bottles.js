var myArg = process.argv[2];
poppinBottles(myArg);

function poppinBottles(investment) {
  //initial purchase
  var result = {};
  var total = Math.floor(investment / 2);
  console.log('initial total:', total);
  var fulls = total;
  var empties = 0;
  var caps = 0;
  var totalCaps = 0;
  var totalEmpties = 0;

  while(fulls > 0) {
    empties++;
    totalEmpties++;
    caps++;
    totalCaps++;
    fulls--;
    while(empties > 1) {
      empties -= 2;
      fulls++;
      total++;
      while(caps > 3) {
        caps -= 4;
        fulls++;
        total++;
      }
    }
  }

  result['Total Bottles'] = total;
  result['Remaining Bottles'] = empties;
  result['Remaining Caps'] = caps;
  result['Total Earned'] = {
    'Total Empties' : totalEmpties,
    'Total Caps' : totalCaps
  };

  console.log('total: ', total);
  console.log('empties: ', empties);
  console.log('caps: ', caps);
  return result;
}

module.exports = poppinBottles;