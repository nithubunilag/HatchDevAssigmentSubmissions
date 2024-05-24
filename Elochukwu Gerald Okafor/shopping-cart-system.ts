// Interface every product must follow
interface ProductInterface {
    name: string;
    price: number;
    quantity: number;

    increaseQuantity(amount: number): void;
    decreaseQuantity(amount: number): void;
}

// Interface for barcode
interface BarCodeInterface {
    code: string;
    generateCode(): void;
}

// Barcode class
class BarCode implements BarCodeInterface {
    code: string;
    bars: string[] = ['█', '██'];
    // Returns a bar code of the format BAR-PRODUCT_INITIALS-QTY
    generateCode(): void {
        const permutation: string[] = [];

        for (let i = 0; i < 5; i++) {
            permutation.push(this.bars[Math.round(Math.random())]);
        }

        this.code = permutation.join(' ');
    }
}

// Product class
class Product implements ProductInterface {
    id: string;
    name: string;
    price: number;
    quantity: number;
    barcode: BarCode = new BarCode(); // Composition

    // Instantiate a new product with a name and quantity which defaults to 0
    constructor(name: string, price: number, qty: number = 1) {
        this.name = name;
        this.price = price;
        this.quantity = qty;
        this.generateProductID();
        this.barcode.generateCode(); // Barcode for this item
    }

    // Utility methods
    private generateProductID(): void {
        const id = `BAR-${this.name.substring(0, 3).toUpperCase()}-${
            this.quantity + 100
        }`;
        this.id = id;
    }

    // Increase the amount of this product in cart
    increaseQuantity(amount: number): void {
        this.quantity += amount; // No limits to how many the user can add
    }

    // Decrease the amount of this product in cart
    decreaseQuantity(amount: number): void {
        // Ignore calls to decrease quantity if less or equal to 0
        if (this.quantity > 0 && this.quantity - amount > -1) {
            this.quantity -= amount;
        }
    }

    // Return the barcode of the product
    getBarCode(): string {
        return this.barcode.code;
    }
}

// Shopping cart class
class ShoppingCart {
    private products: Product[];

    // Instantiate a shopping class with an initial array of products
    constructor(products: Product[]) {
        this.products = products;
    }

    // Utility method
    private printTitle(title: string): void {
        console.log(`\n${title.toUpperCase()}`);
        console.log('-'.repeat(title.length), '\n');
    }

    // Adds a single product to cart
    addProduct(product: Product): void {
        this.products.push(product);
        console.log('Added 1 product to cart.');
    }

    // Adds an array of products
    addProducts(products: Product[]): void {
        let count = 0;

        for (const newProduct of products) {
            this.products.push(newProduct);
            count += 1;
        }

        console.log(`Added ${count} products to cart.`);
    }

    // Increases the quantity of an item by an amount
    increaseQuantity(productName: string, byAmount: number): void {
        // Increment must be greater than 0
        if (byAmount > 0) {
            const theProduct = this.products.find(
                (product) => product.name == productName
            );
            // Could be non-existent
            if (theProduct) {
                theProduct.increaseQuantity(byAmount);
                console.log(
                    `Increased ${theProduct.name} quantity to ${theProduct.quantity}.`
                );
            }
        }
    }

    // Decreases the quantity of an item
    decreaseQuantity(productName: string, byAmount: number): void {
        // Decrements must be greater than 0
        if (byAmount > 0) {
            const theProduct = this.products.find(
                (product) => product.name == productName
            );
            if (theProduct) {
                theProduct.decreaseQuantity(byAmount);
                console.log(
                    `Decreased ${theProduct.name} quantity to ${theProduct.quantity}.`
                );
            }
        }
    }

    // Displays cart product summary
    displayProductSummary(): void {
        let total = 0;

        this.printTitle('Product Summary');

        console.log('S/N\tPRODUCT\t\tPRICE ($)\tQTY\n');

        for (const [index, product] of this.products.entries()) {
            total += product.price * product.quantity;
            console.log(
                `${index + 1}.\t${product.name}\t${product.price}\t\tx${
                    product.quantity
                }`
            );
        }

        console.log('\nGRAND TOTAL: $', total.toLocaleString());
        console.log('\nGenerated product summary.');
    }

    // Lists product bar codes
    listProductBarCodes(): void {
        this.printTitle('Bar Codes');

        for (const [index, product] of this.products.entries()) {
            console.log(`${index + 1}.`, product.barcode.code, '\n');
        }

        console.log('\nPrinted product bar codes.');
    }
}

// Dummy products
const myProducts = [
    new Product('MacBook Pro', 1900),
    new Product('Skate Board', 80),
    new Product('Power Bank', 25),
    new Product('Raspberry Pi', 65),
];

const cart = new ShoppingCart([]);

cart.addProduct(new Product('Apple Watch', 399));
cart.addProducts(myProducts);

cart.increaseQuantity('MacBook Pro', 2);
cart.increaseQuantity('Skate Board', 4);

cart.decreaseQuantity('Skate Board', 2);

cart.displayProductSummary();
cart.listProductBarCodes();
