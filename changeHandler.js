
module.exports = {
  convertToChange: function(cents){
    let quarter = 25;
    let quarterCount = 0;
    let dime = 10;
    let dimeCount = 0;
    let nickel = 5;
    let nickelCount = 0;
    let penny = 1;
    let pennyCount = 0;
      
    quarterCount = Math.floor(cents / quarter);    
    cents = cents % quarter;
    dimeCount = Math.floor(cents / dime);
    cents = cents % dime;
    nickelCount = Math.floor(cents / nickel);
    cents = cents % nickel;
    pennyCount = cents;
      
    let bestWay = new Array();
    for(let i = 0; i < dimeCount; i++){
      bestWay.push('d');
    }
    for(let i = 0; i < nickelCount; i++){
      bestWay.push('n');
    }
    for(let i = 0; i < pennyCount; i++){
      bestWay.push('p');
    }
    for(let i = 0; i < quarterCount; i++){
      bestWay.push('q');
    }
    return bestWay;
  },

  getAmount: function(coinType) {
    // COINS:
    // [p]enny
    // [n]ickel
    // [d]ime
    // [q]uarter
    if (coinType == 'p'){
      return 1;
    }
    else if (coinType == 'n'){
      return 5;
    }
    else if (coinType == 'd'){
      return 10;
    }
    else if (coinType == 'q'){
      return 25;
    }
    else{
      throw new Error('Unrecognized coin ' + coinType);
    }
  },
};