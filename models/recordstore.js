const RecordStore = function(name, city, inventory, balance) {
  this.name = name;
  this.city = city;
  this.inventory = inventory;
  this.balance = balance;
};

RecordStore.prototype.sellRecord = function (record) {
  const index = this.inventory.indexOf(record);
  this.inventory.splice(index, 1);
  this.balance += record.price;
};

RecordStore.prototype.calculateValueInventory = function () {
  return this.inventory.reduce((sum, record) => sum + record.price, 0);
};

RecordStore.prototype.viewByGenre = function (genre) {
  return this.inventory.filter((record) => record.genre === genre);
};

module.exports = RecordStore;
