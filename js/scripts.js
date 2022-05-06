//Buisness Logic
function Pizza (toppings, sauce, size) {
  this.toppings = toppings;
  this.sauce = sauce;
  this.size = size;
};

Pizza.prototype.price = function() {

  if (this.size === "small") {
    console.log(this.toppings.length + 6);
  } else if (this.size === "medium") {
    console.log(this.toppings.length + 7);
  } else {
    console.log(this.toppings.length + 8);
  }
};
