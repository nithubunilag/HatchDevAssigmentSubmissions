import { ElectronicProduct, BookProduct, ClothingProduct } from "./products.ts"
import { ShoppingCart, CartItem } from "./cart.ts"



// Creating instances of products
const laptop = new ElectronicProduct(1, "Laptop", 999.99, "Dell");
const book = new BookProduct(2, "Clean Code", 29.99, "Robert C. Martin");
const shirt = new ClothingProduct(3, "T-shirt", 19.99, "Medium");

// Creating a shopping cart and adding items
const cart = new ShoppingCart();
cart.addItem(new CartItem(laptop, 1));
cart.addItem(new CartItem(book, 2));
cart.addItem(new CartItem(shirt, 3));

// Calculating total price
console.log("Total price:", cart.getTotalPrice());
