//Define Interfaces for Products

interface Product {
    get_price(): number;
    get_name(): string;
}

//Implement Specific Product Types

class Book implements Product {
    constructor(public title: string, public price: number) {}

    get_price(): number {
        return this.price;
    }

    get_name(): string {
        return this.title;
    }
}

class Electronics implements Product {
    constructor(public model: string, public price: number) {}

    get_price(): number {
        return this.price;
    }

    get_name(): string {
        return this.model;
    }
}

class Clothing implements Product {
    constructor(public style: string, public price: number) {}

    get_price(): number {
        return this.price;
    }

    get_name(): string {
        return this.style;
    }
}

//Define the Shopping Cart

class ShoppingCart {
    private items: Product[] = [];

    add_item(item: Product): void {
        this.items.push(item);
    }

    remove_item(item: Product): void {
        const index = this.items.indexOf(item);
        if (index > -1) {
            this.items.splice(index, 1);
        }
    }

    total_price(): number {
        return this.items.reduce((total, item) => total + item.get_price(), 0);
    }
}


//Demonstrate Usage

function main() {
    const cart = new ShoppingCart();
    cart.add_item(new Book("TypeScript Programming", 29.99));
    cart.add_item(new Electronics("Laptop", 799.99));
    cart.add_item(new Clothing("T-Shirt", 19.99));

    console.log(`Total price: ${cart.total_price()}`);
}

main();