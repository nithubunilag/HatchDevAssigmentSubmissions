interface Product {
    id: number;
    name: string;
    price: number;
}

interface CartItem {
    product: Product;
    quantity: number;
}

interface ShoppingCart {
    items: CartItem[];
    addItem(product: Product, quantity: number): void;
    removeItem(itemName: string): void;
    calculateTotal(): number;
}

class ActualProduct implements Product {
    constructor(public id: number, public name: string, public price: number) {}
}

class ActualShoppingCart implements ShoppingCart {
    items: CartItem[] = [];

    addItem(product: Product, quantity: number): void {
        const existingItem = this.items.find(item => item.product.id === product.id);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push({ product, quantity });
        }
    }

    removeItem(itemName: string): void {
        const index = this.items.findIndex(item => item.product.name === itemName);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    }
    

    calculateTotal(): number {
        return this.items.reduce((total, item) => total + item.product.price * item.quantity, 0);
    }
}

const laptop: Product = new ActualProduct(1, 'Laptop', 999);
const phone: Product = new ActualProduct(2, 'Phone', 699);

const shoppingCart: ShoppingCart = new ActualShoppingCart();
shoppingCart.addItem(laptop, 1);
shoppingCart.addItem(phone, 2);
shoppingCart.removeItem('Laptop');

console.log('Items in cart:', shoppingCart.items);
console.log('Total:', shoppingCart.calculateTotal());
