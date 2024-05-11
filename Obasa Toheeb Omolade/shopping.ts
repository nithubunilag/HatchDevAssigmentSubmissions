// Product interface
interface Product {
    getProductName(): string;
    getPrice(): number;
}

// Electronic Product class implementing Product interface

class ElectronicProduct implements Product {
    constructor(private productName: string, private price: number) {}

    getProductName(): string {
        return this.productName;
    }

    getPrice(): number {
        return this.price;
    }
}

// Clothing Product class implementing Product interface

class ClothingProduct implements Product {
    constructor(private productName: string, private price: number) {}

    getProductName(): string {
        return this.productName;
    }

    getPrice(): number {
        return this.price;
    }
}

// Shopping Cart class

class ShoppingCart {
    private items: Product[] = [];

    addToCart(product: Product): void {
        this.items.push(product);
    }

    removeFromCart(product: Product): void {
        const index = this.items.indexOf(product);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    }

    calculateTotalPrice(): number {
        let totalPrice = 0;
        for (const item of this.items) {
            totalPrice += item.getPrice();
        }
        return totalPrice;
    }
}

// Usage

const laptop = new ElectronicProduct("Laptop", 1000);
const tShirt = new ClothingProduct("T-Shirt", 500);

const cart = new ShoppingCart();
cart.addToCart(laptop);
cart.addToCart(tShirt);

console.log("Total price:", cart.calculateTotalPrice());