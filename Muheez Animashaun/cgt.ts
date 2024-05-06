class ShoppingSystem {
    cart: Cart;
    products: Products[];

    constructor() {
        this.cart = new Cart[]; 
        this.products = [];
    }

    addProduct(id: number, name: string, price: number) {
        const product = new Products(id, name, price);
        this.products.push(product);
    }
}

class Products {
    constructor(private readonly id: number, private readonly name: string, private readonly price: number) { }
}

class Cart {
    constructor(private readonly id: number, private readonly cartItems: CartItem[]) { }

    addItem(item: CartItem) {
        this.cartItems.push(item);
    }

    removeItem(item: CartItem) {
        const index = this.cartItems.indexOf(item);
        if (index !== -1) {
            this.cartItems.splice(index, 1);
        }
    }
}

class CartItem extends Products {
    constructor(id: number, name: string, price: number, private readonly quantity: number) {
        super(id, name, price);
    }

    getTotalPrice(): number {'d'
        return this.price * this.quantity;
    }
}

class Order { 
    constructor(private readonly items: CartItem[]) { }

    getTotalOrderPrice(): number {
        return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
    }
}

// Example usage:
const shoppingSystem = new ShoppingSystem();

shoppingSystem.addProduct(1, "Product 1", 10.0);
shoppingSystem.addProduct(2, "Product 2", 20.0);

const cart = new Cart(1, []);
const item1 = new CartItem(1, "Product 1", 10.0, 2);
const item2 = new CartItem(2, "Product 2", 20.0, 1);

cart.addItem(item1);
cart.addItem(item2);

const order = new Order(cart.cartItems);
console.log("Total order price:", order.getTotalOrderPrice());
