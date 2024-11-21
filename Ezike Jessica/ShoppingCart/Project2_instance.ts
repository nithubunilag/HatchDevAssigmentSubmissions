// NAME :>      EZIKE JESSICA
//EMAIL :>      jessicaezike.je@gmail.com

import{ShoppingCart, Groceries, CareProduct, Toiletries, Product, Bread, Fruit, Vegetables, DairyProduct} from "./Project2.ts";

//defining instance
const shoppingBasket = new ShoppingCart

const item1 =  new Bread("Sugar Bread", "Sliced", 2)
const item2 = new Fruit("Apple", 3);
const item3 = new Vegetables("Tomato", 1);
const item4 = new DairyProduct("Milk", 1);
const item5 = new CareProduct("Bandages", 2,);
const item6 = new Toiletries("Toothpaste", 1);
const item7 = new DairyProduct("Cheese", 1);



///logs
console.log(shoppingBasket)
console.log("Ready to shop with us......")
shoppingBasket.addItems([item1, item2, item3, item4, item5, item6, item7])
console.log(shoppingBasket)
console.log(`The total Price of all the items you have chosen is $${shoppingBasket.getTotalPrice()}`)
