//Buisness Logic
function Pizza (toppings, sauce, size) {
  this.toppings = toppings;
  this.sauce = sauce;
  this.size = size;
};

Pizza.prototype.price = function() {
  console.Log(Pizza.toppings.length);
};
