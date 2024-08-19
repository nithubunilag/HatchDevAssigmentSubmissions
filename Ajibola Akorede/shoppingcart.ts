// Define parent interface for products
interface Product {
    name: string;
    quantity: any;
    description: string;
}

// Define child interfaces extending the parent interface
interface Clothing extends Product {
    size: string;
    color: string;
}

interface HomeAppliance extends Product {
    powerRating: string;
}

interface BeautyProduct extends Product {
    brand: string;
}

interface Book extends Product {
    author: string;
}

interface Food extends Product {
    expirationDate: string;
}

// Define ShoppingCart class using composition
class ShoppingCart {
    private items: Product[] = [];

    addItem(item: Product) {
        this.items.push(item);
    }

    removeItem(index: number) {
        this.items.splice(index, 1);
    }

    getTotalquantity(): number {
        return this.items.reduce((total, item) => total + item.quantity, 0);
    }
}

// Define Customer class using aggregation
class Customer {
    private shoppingCart: ShoppingCart;

    constructor() {
        this.shoppingCart = new ShoppingCart();
    }

    addToCart(item: Product) {
        this.shoppingCart.addItem(item);
    }

    removeFromCart(index: number) {
        this.shoppingCart.removeItem(index);
    }

    viewCartTotal(): number {
        return this.shoppingCart.getTotalquantity();
    }
}

// Usage
const shirt: Clothing = { name: "T-Shirt", quantity: 20, description: "Comfortable cotton shirt", size: "L", color: "Blue" };
const laptop: HomeAppliance = { name: "Laptop", quantity: 800, description: "High-performance laptop", powerRating: "100W" };
const jeans: Clothing = { name: "Jeans", quantity: 40, description: "Stylish denim jeans", size: "32", color: "Black" };
const toaster: HomeAppliance = { name: "Toaster", quantity: 30, description: "4-slice toaster", powerRating: "800W" };
const lipstick: BeautyProduct = { name: "Lipstick", quantity: 15, description: "Long-lasting lipstick", brand: "Maybelline" };
const blender: HomeAppliance = { name: "Blender", quantity: 50, description: "High-speed blender", powerRating: "600W" };
const novel: Book = { name: "To Kill a Mockingbird", quantity: 10, description: "Classic novel", author: "Harper Lee" };
const banana: Food = { name: "Banana", quantity: 3, description: "Fresh banana", expirationDate: "2024-04-30" };

const customer = new Customer();
customer.addToCart(shirt);
customer.addToCart(laptop);
customer.addToCart(jeans);
customer.addToCart(toaster);
customer.addToCart(lipstick);
customer.addToCart(blender);
customer.addToCart(novel);
customer.addToCart(banana);


console.log("Cart Items:")
console.log(shirt, laptop, jeans,toaster,lipstick,blender,novel,banana)
console.log("Totalquantity:",customer.viewCartTotal()); 
