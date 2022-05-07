//Buisness Logic
function Pizza (quantity, toppings, sauce, size) {
  this.quantity = quantity;
  this.toppings = toppings;
  this.sauce = sauce;
  this.size = size;
};

Pizza.prototype.price = function() {

  if (this.size === "small") {
    return (this.toppings.length + 6) * this.quantity;

  } else if (this.size === "medium") {
    return (this.toppings.length + 7) * this.quantity;

  } else {
    return (this.toppings.length + 8) * this.quantity;
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
    
    const toppings = $("input[type=checkbox]:checked").map(function(){ 
      return this.value;
    }).get();

    const quantity = $("#quantity").val();
    const sauce = $("input:radio[name=sauce]:checked").val();
    const size = $("input:radio[name=size]:checked").val();

    const myPizza = new Pizza (quantity,toppings, sauce, size);

    cart.addPizza(myPizza);
    console.log(cart);
    

  });

});


