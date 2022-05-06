
# Pizza Parlor

## Assignment Description

Create a website for a pizza company where a user can choose one or more individual toppings (cheese, pepperoni, artichoke, anchovy, etc) and a size to order a pizza and see the final cost.

 * Allow the user to choose toppings and size for the pizza they'd like to order.
 * Create a pizza object constructor with properties for toppings and size.
 * Create a prototype method for the cost of a pizza depending on the selections chosen. Use your own formula for this.

## Specs

### Describe Pizza();

Test: "It should return a Pizza object with properties for toppings sauce and size."
Code: const myPizza = new Pizza(["chicken", "bell peppers", "cheese"], "white sauce", "medium");
Expected Output: Pizza { toppings: ["chicken", "bell peppers", "cheese"], sauce: "white sauce", size: "medium"}

### Describe Pizza.price();

Test: It should return the quantity of toppings. 
Code: myPizza.price();
Expected Output: 3

Test: It should return a price for the size selected 
Code: myPizzs.price();
Expected Output: 3
                 8

Test: "It should return total price caculated from topping sauce and size"
Code: myPizza.price = 10;
Expected Output:  myPizza

### Describe Cart();

Test: "It should return a Cart object with the multiple pizzas."
Code: const cart = new Cart(myPizza, myPizza2);
Expected Output: cart{ "myPizza", "myPizza2"}

Test: "It should return a Cart with prices that are paired with the pizza."
Code: const cart = new Cart(myPizza, mtPizza2);
Expected Output: cart{ "myPizza", "myPizza2"}

Test:
Code:
Expected Output:

Test:
Code:
Expected Output: