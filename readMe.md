
# Pizza Parlor

Create a website for a pizza company where a user can choose one or more individual toppings (cheese, pepperoni, artichoke, anchovy, etc) and a size to order a pizza and see the final cost.

 * Allow the user to choose toppings and size for the pizza they'd like to order.
 * Create a pizza object constructor with properties for toppings and size.
 * Create a prototype method for the cost of a pizza depending on the selections chosen. Use your own formula for this.

## Specs

### Describe Pizza();

Test: "It should return a Pizza object with properties for toppings sauce and size."
Code: const myPizza = new Pizza(["chicken", "bell peppers", "cheese"], "white sauce", "medium");
Expected Output: Pizza { toppings: ["chicken", "bell peppers", "cheese"], sauce: "white sauce", size: "medium"}

### Decribe PizzaToppings();

Test: "It should return a PizzaToppings object with properties for toppings and their price in alphebetical order."
Code: const myToppings() =  new PizzaToppings(1,1,2,);
Expected Output: PizzaToppings { bell peppers: 1, cheese: 1, chicken 2}

### Decribe PizzaSauce();
Test: "It should return a PizzaSauce object with suace properties and their prices in alphebetical order"
Code: const mySauce() = newPizzaSauce(2,2);
Expected Output: PizzaSauce { red: 2, white: 2}

### Describe PizzaSize();
Test: "It should return a PizzaSize object with size properties and their prices"
Code: const myPizzaSize = new PizzaSize();
Expected Output: PizzaSize{ large: 9, medium: 8, small: 7}

### Describe Pizza.price();
Test: "It should return a Pizza Object with its total price caculated from topping sauce and size"
Code: myPizza.price = 14;
Expected Output:  myPizza

Test:
Code:
Expected Output:

Test:
Code:
Expected Output: