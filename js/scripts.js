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

function Cart() {
  this.pizzas = {};
}

Cart.prototype.addPizza = function(pizza) {
  this.pizzas[pizza.toppings] = pizza
};

// Everything below this line is placed here strickly for testing purposes. 
const myPizza1 = new Pizza(["cheddar","onions","bacon"], "red sauce", "medium");
const myPizza2 = new Pizza (["pepperoni", "cheese"], "red sauce", "small");

const cart = new Cart();
cart.addPizza(myPizza1);
cart.addPizza(myPizza2);