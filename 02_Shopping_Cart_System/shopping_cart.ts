// Interface for Product
interface Product {
    name: string;
    price: number;
}

// Concrete Product Implementations
class Beverages implements Product {
    constructor(public name: string, public price: number) {}
}
class Electronic implements Product {
    constructor(public name: string, public price: number) {}
}
class Food implements Product{
    constructor(public name: string, public price:number){}
}

// Shopping Cart
class ShoppingCart {
    private items: Product[] = [];

    addItem(item: Product) {
        this.items.push(item);
    }

    removeItem(item: Product) {
        const index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    }

    getTotalPrice(): number {
        return this.items.reduce((total, item) => total + item.price, 0);
    }
}

// Usage
const cart = new ShoppingCart();

// Testing with some items
const book = new Beverages("Coffee", 29000);
const phone = new Electronic("Tecno Camon 19", 182000);
const food = new Food("Tickle Catering Services Plate Of Rice", 1200)

cart.addItem(book);
cart.addItem(phone);

// Display total price
console.log("Total Price: NGN" + cart.getTotalPrice());