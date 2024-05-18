// Define interfaces for different types of farm products
interface Product {
    id: number;
    name: string;
    price: number;
}

interface Fruit extends Product {
    size: 'Small' | 'Medium' | 'Big';
}

interface PhoneProduct extends Product {
    brand: string;
}

// Implement concrete product classes
class GeneralFruit implements Fruit {
    constructor(
        public id: number,
        public name: string,
        public price: number,
        public size: 'Small' | 'Medium' | 'Big'
    ) {}
}

class Phone implements PhoneProduct {
    constructor(
        public id: number,
        public name: string,
        public price: number,
        public brand: string,
    ) {}
}

// Define ShoppingCartItem class to represent items in the shopping cart
class ShoppingCartItem {
    constructor(public product: Product, public quantity: number) {}
}

// Define ShoppingCart class to represent the shopping cart
class ShoppingCart {
    private items: ShoppingCartItem[] = [];

    // Add item to the shopping cart
    addItem(item: ShoppingCartItem): void {
        this.items.push(item);
    }

    getItems() {
        return this.items;
    }

    deleteItemInCart(id: number) {
        const index = this.items.findIndex(item => item.product.id === id);
        if (index !== -1) {
            this.items.splice(index, 1);
            console.log(`Item with ID ${id} removed from cart.`);
        } else {
            console.error(`Item with ID ${id} not found in cart.`);
        }
    }

    // Calculate the total price of items in the shopping cart
    calculateTotal(): number {
        return this.items.reduce((total, item) => total + item.product.price * item.quantity, 0);
    }
}

// Example usage
const apple = new GeneralFruit(1, "Granny Smith Apple", 200, "Small");
const samsungGalaxy = new Phone(2, "Samsung Galaxy S24 Ultra", 400000, "Samsung");
const orangeFruit = new GeneralFruit(3, 'Orange Fruit', 350, 'Medium');
const iphoneBrand = new Phone(4, "iPhone 12 Pro", 4000000, "iPhone");

const cart = new ShoppingCart();
cart.addItem(new ShoppingCartItem(apple, 2));
cart.addItem(new ShoppingCartItem(samsungGalaxy, 1));
cart.addItem(new ShoppingCartItem(orangeFruit, 3));
cart.addItem(new ShoppingCartItem(iphoneBrand, 1));
cart.deleteItemInCart(2);

console.log('Items In Cart:');
console.log(cart.getItems());
console.log('Total price: #' + cart.calculateTotal());
