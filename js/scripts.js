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
//UI Logic

$(document).ready(function(){
  const cart = new Cart();

  $("#userInput").submit(function(event){
    event.preventDefault();
    
    let toppings = $("input[type=checkbox]:checked").map(function(){ 
      return this.value;
    }).get();

    console.log(toppings);

  });

});


