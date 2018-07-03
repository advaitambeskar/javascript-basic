
var balanceManager = require('./balanceManager');
var changeHandler = require('./changeHandler');
var productInventory = require('./productInventory');



var products = [
  {
    name: 'Skittles',
    price: 85,
    id: 'A1'
  }
];

module.exports = {
  
  isValidAmount: function(amount){
    if(amount === null){
      return false;
    } else {
      return true;
    }
    },

    insertCoin: function(coinType){
      var value = this.getAmount(coinType);
      this.increaseBalance(value);
      },
      
    releaseChange: function(){
      var currentBalance = this.getBalance();
       this.decreaseBalance(currentBalance);
      return this.convertToChange(currentBalance);
      }
};
