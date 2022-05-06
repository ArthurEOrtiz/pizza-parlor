//Buisness Logic
function Pizza (toppings, sauce, size) {
  this.toppings = toppings;
  this.sauce = sauce;
  this.size = size;
};

Pizza.prototype.price = function() {

  if (this.size === "small") {
    return this.toppings.length + 6;

  } else if (this.size === "medium") {
    return this.toppings.length + 7;

  } else {
    return this.toppings.length + 8;
  }
};

function Cart() {
  this.pizzas = {};
  this.total = 0;
}

Cart.prototype.addPizza = function(pizza) {
  this.pizzas[pizza.toppings] = pizza;
  this.total += pizza.price();
};

// Everything below this line is placed here strickly for testing purposes. 
const myPizza1 = new Pizza(["cheddar","onions","bacon"], "red sauce", "medium");
const myPizza2 = new Pizza (["pepperoni", "cheese"], "red sauce", "small");

const cart = new Cart();
cart.addPizza(myPizza1);
cart.addPizza(myPizza2);