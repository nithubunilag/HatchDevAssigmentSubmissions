// interfaces for different types of products
interface Product {
    id: number;
    name: string;
    price: number;
}

interface Electronic extends Product {
    brand: string;
}

interface Clothing extends Product {
    size: string;
}

interface Food extends Product {
    expirationDate: string;
}

// Class for ShoppingCart
class myCart {
    private items: CartItem[] = [];

    // Adding product to cart
    addProduct(product: Product, quantity: number): void {
        if (quantity <= 0) {
            throw new Error("Quantity should be a positive number");
        }
        this.items.push({ product, quantity });
    }

    // Calculating total price of items
    getTotalPrice(): number {
        return this.items.reduce((total, item) => total + item.product.price * item.quantity, 0);
    }

    // Generate receipt
    generateReceipt(): string {
        let receipt = '';
        receipt += 'Receipt\n';
        receipt += '\n';
        this.items.forEach(item => {
            if ('brand' in item.product) {
                const electronic = item.product as Electronic;
                receipt += `${electronic.name} (${electronic.brand}): $${electronic.price} x ${item.quantity}\n`;
            } else if ('size' in item.product) {
                const clothing = item.product as Clothing;
                receipt += `${clothing.name} (Size: ${clothing.size}): $${clothing.price} x ${item.quantity}\n`;
            } else if ('expirationDate' in item.product) {
                const food = item.product as Food;
                receipt += `${food.name} (Expires: ${food.expirationDate}): $${food.price} x ${item.quantity}\n`;
            }
        });
        receipt += '\n';
        receipt += `Total: ${this.getTotalPrice()}\n`;
        return receipt;
    }
}

// Class representing a cart item
class CartItem {
    constructor(public product: Product, public quantity: number) {}
}

// Class representing available items for sale
class AvailableItems {
    private electronics: Electronic[] = [];
    private clothes: Clothing[] = [];
    private foods: Food[] = [];

    // Add electronic item
    addElectronic(item: Electronic): void {
        this.electronics.push(item);
    }

    // Add clothing item
    addClothing(item: Clothing): void {
        this.clothes.push(item);
    }

    // Add food item
    addFood(item: Food): void {
        this.foods.push(item);
    }

    // Display available items
    displayItems(): void {
        console.log(" Electronics:");
        console.log(this.electronics.map(item => `${item.name} (${item.brand}) - $${item.price}`));
        console.log(" Clothes:");
        console.log(this.clothes.map(item => `${item.name} (Size: ${item.size}) - $${item.price}`));
        console.log(" Foods:");
        console.log(this.foods.map(item => `${item.name} (Expires: ${item.expirationDate}) - $${item.price}`));
    }
}

// products
const laptop: Electronic = { id: 1, name: 'HP Elitebook', price: 999, brand: 'HP' };
const smartphone: Electronic = { id: 2, name: 'iPhone', price: 899, brand: 'Apple' };
const itel: Electronic = { id: 3, name: 'Deyplay!', price: 99, brand: 'itel' };
const tShirt: Clothing = { id: 4, name: 'T-shirt', price: 20, size: 'M' };
const burger: Food = { id: 5, name: 'Burger', price: 5, expirationDate: '05-15-24' };
const suya: Food = { id: 6, name: 'Suya', price: 3, expirationDate: 'None' };

// Create available items
const availableItems = new AvailableItems();
availableItems.addElectronic(laptop);
availableItems.addElectronic(smartphone);
availableItems.addClothing(tShirt);
availableItems.addFood(burger);

// Display available items
availableItems.displayItems();

// Create a shopping cart and add products
const livecart = new myCart();
livecart.addProduct(laptop, 1);
livecart.addProduct(smartphone, 2);
livecart.addProduct(tShirt, 3);
livecart.addProduct(burger, 4);

// Display receipt
console.log(livecart.generateReceipt());
// Get total amount 
console.log('$' + livecart.getTotalPrice())
