
# Pizza Parlor

## By Arthur Edward Ortiz

## Assignment Description

Create a website for a pizza company where a user can choose one or more individual toppings (cheese, pepperoni, artichoke, anchovy, etc) and a size to order a pizza and see the final cost.

 * Allow the user to choose toppings and size for the pizza they'd like to order.
 * Create a pizza object constructor with properties for toppings and size.
 * Create a prototype method for the cost of a pizza depending on the selections chosen. Use your own formula for this.

## Technologies Used

* Java Script
* Jquery
* Bootstrap

## Setup/Installtion Requirments

* Clone this repository to your desktop
* Navigate to the top level of the directory
* Open index.html in your browser

## Known Bugs

 * None

## Specs

### Describe Pizza();

Test: "It should return a Pizza object with properties for quantity, toppings sauce and size."
Code: const myPizza = new Pizza(["chicken", "bell peppers", "cheese"], "white sauce", "medium");
Expected Output: Pizza {quantity: 1, toppings: ["chicken", "bell peppers", "cheese"], sauce: "white sauce", size: "medium"}

### Describe Pizza.price();

Test: It should return the quantity of toppings. 
Code: myPizza.price();
Expected Output: 3

Test: It should return a price for the size selected 
Code: myPizzs.price();
Expected Output: 3
                 8

Test: "It should return total price caculated from topping sauce and size"
Code: myPizza.price;
Expected Output:  10;

### Describe Cart();

Test: "It should return a Cart object."
Code: const cart = new Cart();
Expected Output: cart{}

Test: "It should have a prototype that adds pizzas to the Cart object"
Code: const cart = new Cart();
      cart.addPizza(myPizza1);
      cart.addPizza(myPizza2);
Expected Output: Cart {pizzas: {"cheddar, onions, bacon}, {pepperoni, cheese}};

Test: "It should return a Cart with prices that are paired with the pizza."
Code: const cart = new Cart(myPizza, mtPizza2);
Expected Output: Cart {pizzas: {"cheddar, onions, bacon}, {pepperoni, cheese}, total: 18};

## License

Copyright (c) May 7, 2022 Arthur Edward Ortiz

