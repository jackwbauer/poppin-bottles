var myArg = process.argv[2];
poppinBottles(myArg);

function poppinBottles(investment) {
  //initial purchase
  var total = Math.floor(investment / 2);
  console.log('initial total:', total);
  var fulls = total;
  var empties = 0;
  var caps = 0;

  while(fulls > 0) {
    empties++;
    caps++;
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

  console.log('total: ', total);
  console.log('empties: ', empties);
  console.log('caps: ', caps);
  return total;
}

module.exports = poppinBottles;