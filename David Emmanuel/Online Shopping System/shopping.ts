// Project 2: Online Shopping System

/* Design and implement a simple online shopping system.
 * Use interfaces for different types of products,
 * and demonstrate composition and aggregation for the shopping cart.
 * Apply SOLID principles in your design.
 */

const DIVIDER = '-------------------------';

function main() {
    const myCart = new Cart();

    const hp = new Product("HP EliteBook 840", 485950, [5, 5], "Jumia")
        .setDetails<LaptopDetails>({
            processor: "Intel Core i5",
            ramGB: 8,
            storageGB: 256,
            storageType: 'SSD',
            display: "14 inch",
            os: "Windows"
        });
    myCart.addItem(hp);

    const textbook = new Product("Beer and Johnston", 8175, [5, 4, 3, 4, 3], "Amazon")
        .setDetails<BookDetails>({
            title: "Vector Engineering Mechanics: Statics",
            author: "Beer and Johnston",
            isbn: "0071004548"
        });
    myCart.addItem(textbook);

    myCart.printSummary();
    console.log(DIVIDER);
    myCart.display();
    myCart.checkout();
}


class Cart {
    private _items: Product[];

    constructor() {
        this._items = [];
    }

    addItem(item: Product) {
        this._items.push(item);
    }

    removeItem(item: Product) {
        this._items = this._items.filter((i: Product) => i !== item);
    }

    checkout() {
        console.log("Checking out...");
        setTimeout(() => {
            this._items = [];
            console.log("Your order is on its way!")
        }, 3000);
    }

    get items(): Product[] {
        return this._items;
    }

    getTotalAmount(): number {
        return this._items.reduce((total, item) => total + item.price, 0);
    }

    printSummary() {
        if (this.items.length > 0) {
            console.log("Your cart has", this.items.length, "items");
            console.log("Total:", formatPrice(this.getTotalAmount()));
        } else {
            console.log("Your cart is empty");
        }
        console.log();
        this._items.forEach(product => {
            console.log(`${product.name} - ${formatPrice(product.price)}`);
        });
    }

    display() {
        this._items.forEach(product => {
            product.display();
            console.log(DIVIDER);
        })
    }
}

class Product {
    private _name: string;
    private _price: number;
    private _ratings: number[];
    private _details: ProductDetails;
    private _seller: string;

    constructor(name: string, price: number, ratings: number[], seller: string) {
        this._name = name;
        this._price = price;
        this._ratings = ratings;
        this._seller = seller;

        return this;
    }

    display() {
        console.log(this._name);
        console.log(formatPrice(this._price));
        if (this._ratings.length === 0) {
            console.log("No ratings yet");
        } else {
            console.log(`${this.averageRating()}/5 (Rated by ${this._ratings.length} users)`);
        }
        console.log("Seller:", this._seller);

        if (this._details === undefined) return;

        console.log("\nProduct details:");
        Object.entries(this._details).forEach(([key, value]) => {
            console.log(`   ${key}: ${value}`);
        });
    }

    averageRating(): number {
        if (this._ratings.length === 0) {
            return 0;
        }

        const sum = this._ratings.reduce((total, rating) => total + rating, 0);
        return sum / this._ratings.length;
    }

    get name() {
        return this._name;
    }

    get price() {
        return this._price;
    }

    setDetails<T extends ProductDetails>(details: T): Product {
        this._details = details;
        return this;
    }
}

type ProductDetails = ElectronicsDetails | BookDetails | ClothingDetails | LaptopDetails;

interface ElectronicsDetails {
    manufacturer: string;
    model: string;
    year: number;
}

interface BookDetails {
    title: string;
    author: string;
    isbn: string;
}

interface ClothingDetails {
    size: string;
    color: string;
    material: string;
    brand: string;
}

interface LaptopDetails {
    processor: string;
    ramGB: number;
    storageGB: number;
    storageType: "SSD" | "HDD";
    display: string;
    os: "Windows" | "MacOS" | "Linux" | "Other";
}

function formatPrice(price: number) {
    return Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(price);
}

main();