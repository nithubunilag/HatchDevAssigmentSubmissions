// Define Product interface following Open-Closed Principle
interface Product {
    name: string;
    price: number;
    description: string;
}

// Define concrete product classes following Open-Closed Principle
class ElectronicProduct implements Product {
    constructor(public name: string, public price: number, public description: string) {}
}

class ClothingProduct implements Product {
    constructor(public name: string, public price: number, public description: string) {}
}

class BookProduct implements Product {
    constructor(public name: string, public price: number, public description: string) {}
}

// Define ShoppingCart class following Single Responsibility Principle
class ShoppingCart {
    private items: Product[] = [];

    addProduct(product: Product) {
        this.items.push(product);
    }

    removeProduct(product: Product) {
        this.items = this.items.filter(item => item !== product);
    }

    getTotalPrice(): number {
        return this.items.reduce((total, item) => total + item.price, 0);
    }

    getNumberOfItems(): number {
        return this.items.length;
    }
}

// Example usage with real-life items
const laptop: Product = new ElectronicProduct("Laptop", 999, "High-performance laptop with SSD storage");
const tshirt: Product = new ClothingProduct("T-shirt", 19.99, "Premium cotton T-shirt with printed logo");
const book: Product = new BookProduct("Book", 29.99, "Bestseller novel by a renowned author");

const cart: ShoppingCart = new ShoppingCart();
cart.addProduct(laptop);
cart.addProduct(tshirt);
cart.addProduct(book);

console.log("Total price:", cart.getTotalPrice());
console.log("Number of items:", cart.getNumberOfItems());

