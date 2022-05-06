//Buisness Logic
function Pizza (toppings, sauce, size) {
  this.toppings = toppings;
  this.sauce = sauce;
  this.size = size;
};

Pizza.prototype.price = function() {
  console.log(this.toppings.length);
  
  if (this.size === "small") {
    console.log(6);
  } else if (this.size === "medium") {
    console.log(8);
  } else {
    console.log(9);
  }
};
