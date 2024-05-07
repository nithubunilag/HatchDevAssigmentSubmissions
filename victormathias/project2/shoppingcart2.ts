import{ShoppingCart, item, Groceries, CareProduct, Toiletries, Product, Bread, Fruit, Vegetables, DairyProduct} from "./Project2.ts";

//defining instance
const shoppingBasket = new ShoppingCart
const items = new item();

//picking items
items.groceries = new Groceries();
items.groceries.bread = new Bread("Sugar Bread", "Sliced", 2);
items.groceries.fruits = new Fruit("Apple", 3);
items.groceries.veggies = new Vegetables("Tomato", 1);
items.groceries.dairyPrd = new DairyProduct("Milk", 1);
items.healthCarePrd = new CareProduct("Bandages", 2,);
items.toiletries = new Toiletries("Toothpaste", 1);


///logs
console.log(shoppingBasket)
console.log("Ready to shop with us......")
shoppingBasket.addItems(items)
console.log(shoppingBasket)
console.log(`The total Price of all the items you have chosen is $${items.TotalPriceOfItem()}`)

