const Customer = function(name, walletBalance) {
  this.name = name;
  this.walletBalance = walletBalance;
  this.records = [];
}

Customer.prototype.buyRecord = function (record) {
  if(this.walletBalance >= record.price) {
    this.records.push(record);
    this.walletBalance -= record.price;
  }
}

Customer.prototype.sellRecord = function (record) {
  for(let i = this.records.length - 1; i >= 0; i--) {
    if (this.records[i] === record) {
      this.records.splice(i,1);
      this.walletBalance += record.price
    }
  }
}

module.exports = Customer;
