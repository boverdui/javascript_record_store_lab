const Customer = function(name, walletBalance) {
  this.name = name;
  this.walletBalance = walletBalance;
  this.records = [];
}

module.exports = Customer;
