// Interfaces for Products
interface Product {
    id: number;
    productName: string;
    price: number;
}

interface ElectronicProduct extends Product {
    brand: string;
}

interface ClothingProduct extends Product {
    size: string;
    color: string;
}

interface BookProduct extends Product {
    author: string;
}

// Shopping Cart Class
class ShoppingCart {
    private items: Product[] = [];

    addItem(item: Product): void {
        this.items.push(item);
    }

    removeItem(itemId: number): void {
        this.items = this.items.filter(item => item.id !== itemId);
    }

    getTotalPrice(): number {
        return this.items.reduce((total, item) => total + item.price, 0);
    }

    getItems(): Product[] {
        return this.items;
    }
}

// Customer Class
class Customer {
    private name: string;
    private email: string;

    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }

    getName(): string {
        return this.name;
    }

    getEmail(): string {
        return this.email;
    }
}

// Main Application Class
class OnlineShoppingApp {
    private customer: Customer;
    private shoppingCart: ShoppingCart;

    constructor(customer: Customer) {
        this.customer = customer;
        this.shoppingCart = new ShoppingCart();
    }

    addToCart(item: Product): void {
        this.shoppingCart.addItem(item);
    }

    removeFromCart(itemId: number): void {
        this.shoppingCart.removeItem(itemId);
    }

    checkout(): void {
        const totalPrice = this.shoppingCart.getTotalPrice();
        console.log(`Total price: $${totalPrice.toFixed(2)}`);
        console.log(`Customer: ${this.customer.getName()} (${this.customer.getEmail()})`);
        console.log("Items in cart:");
        this.shoppingCart.getItems().forEach(item => {
            console.log(`${item.productName} - $${item.price}`);
        });   
    }
}

// Example
const customer = new Customer("Jackson", "jackson123@gmail.com");
const app = new OnlineShoppingApp(customer);

const laptop: ElectronicProduct = { id: 1, productName: "Dell XPS 13", price: 999, brand: "Dell" };
const shirt: ClothingProduct = { id: 2, productName: "Crew Neck T-Shirt", price: 19.99, size: "L", color: "Blue" };
const book: BookProduct = { id: 3, productName: "Harry Potter and the Philosopher's Stone", price: 12.99, author: "J.K. Rowling" };

app.addToCart(laptop);
app.addToCart(shirt);
app.addToCart(book);

app.checkout();
