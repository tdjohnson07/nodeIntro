var randomNum = require('./modone.js');
var money= require('./modtwo.js');
module.exports={
  amount: money(randomNum(100, 1000000)),
  message: 'Account balance: \n'
}
