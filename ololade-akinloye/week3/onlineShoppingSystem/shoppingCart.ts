import { Items } from "./interfaces";
import { FurnitureItems, GroceryItems, AccessoriesItems } from "./products";

// Implementing Composition and Aggregation

class ShoppingCart {
    private items: Items[] = [];

    addItems(item: Items): void {
        this.items.push(item);
    }

    removeItems(itemName: string, quantity: number): void {
        this.items = this.items.map(item => {
            if (item.name === itemName && item.quantity >= quantity) {
                item.quantity -= quantity;
            }
            return item;
        }).filter(item => item.quantity > 0);
    }

    get total(): { items: Items[], totalAmount: number } {
        const totalAmount = this.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
        return { items: this.items, totalAmount };
    }
    get totalAmount(): number {
        return this.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    }
    get totalQuantity(): number {
        return this.items.reduce((acc, item) => acc + item.quantity, 0);
    }
    get totalItems(): Items[] {
        return this.items;
    }
    displayProducts() : void {
        if (this.items.length === 0){
            console.log("Shopping Cart is empty");
            return;
        }
        console.log("Items in Shopping Cart: ");
        this.items.forEach((items) => 
        console.log(`Name: ${items.name}, Price: ${items.price}, Quantity: ${items.quantity}, Amount: ${items.amount}, Category: ${items.category}`));
    }
    checkout() : void {
        if(this.items.length === 0) {
            console.log("Empty Cart, nothing to checkout pick an item");
            return;
        }
        console.log("Receipt:");
        this.displayProducts();
        console.log("Thanks for your patronage!!")
        setTimeout(() => {
            this.items = [];
            this.displayProducts();

        }, 5000);
    }
}

const table = new FurnitureItems(
    1,
    "Table",
    20000,
    1,
    20000,
    "Furniture",
    "Brown",
    "Medium",
    "Wood"
);

const noodles = new GroceryItems(
    2,
    "Provisions",
    5000,
    2,
    10000,
    "Grocery",
    "Indomie"
);

const jewelry = new AccessoriesItems(
    3,
    "Jewelry",
    1000,
    3,
    3000,
    "Accessories",
    "Gold"
);
const cart = new ShoppingCart;
cart.addItems(table);
cart.addItems(noodles);
cart.addItems(jewelry);
cart.displayProducts();
cart.checkout()

console.log(cart)
