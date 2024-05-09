// Interface for Product
interface Product {
    id: number;
    name: string;
    price: number;
}

// Interface for CartItem
interface CartItem {
    product: Product;
    quantity: number;
    subtotal(): number;
}

// Interface for PaymentProcessor
interface PaymentProcessor {
    pay(amount: number): void;
}

// Interface for ShippingProcessor
interface ShippingProcessor {
    ship(items: CartItem[]): void;
}

// Concrete implementation of a product
class ConcreteProduct implements Product {
    constructor(public id: number, public name: string, public price: number) {}
}

// Concrete implementation of a cart item
class ConcreteCartItem implements CartItem {
    constructor(public product: Product, public quantity: number) {}

    subtotal(): number {
        return this.product.price * this.quantity;
    }
}

// Concrete implementation of PaymentProcessor
class ConcretePaymentProcessor implements PaymentProcessor {
    pay(amount: number): void {
        console.log(`Payment of ${amount} processed successfully.`);
    }
}

// Concrete implementation of ShippingProcessor
class ConcreteShippingProcessor implements ShippingProcessor {
    ship(items: CartItem[]): void {
        console.log(`Shipping ${items.length} items...`);
    }
}

// Shopping Cart class demonstrating composition
class ShoppingCart {
    private items: CartItem[] = [];

    constructor(private paymentProcessor: PaymentProcessor, private shippingProcessor: ShippingProcessor) {}

    addItem(item: CartItem): void {
        this.items.push(item);
    }

    removeItem(index: number): void {
        this.items.splice(index, 1);
    }

    calculateTotal(): number {
        return this.items.reduce((total, item) => total + item.subtotal(), 0);
    }

    checkout(): void {
        const totalAmount = this.calculateTotal();
        this.paymentProcessor.pay(totalAmount);
        this.shippingProcessor.ship(this.items);
    }
}

// Usage
const product1 = new ConcreteProduct(1, 'Laptop', 1000);
const product2 = new ConcreteProduct(2, 'Phone', 500);

const cartItem1 = new ConcreteCartItem(product1, 2);
const cartItem2 = new ConcreteCartItem(product2, 1);

const paymentProcessor = new ConcretePaymentProcessor();
const shippingProcessor = new ConcreteShippingProcessor();

const shoppingCart = new ShoppingCart(paymentProcessor, shippingProcessor);

shoppingCart.addItem(cartItem1);
shoppingCart.addItem(cartItem2);

console.log(`Total amount: ${shoppingCart.calculateTotal()}`);
shoppingCart.checkout();


// Note:
/*
This implementation demonstrates:

1. Interfaces for Product and CartItem: These interfaces define the structure that concrete products and cart items should follow, ensuring consistency and allowing for polymorphism.
2. Composition for ShoppingCart: The ShoppingCart class is composed of a PaymentProcessor and a ShippingProcessor, demonstrating the "has-a" relationship. This allows for flexibility in swapping out different payment or shipping processors without modifying the ShoppingCart class itself.
3. SOLID Principles:
- Single Responsibility Principle (SRP): Each class has a single responsibility. For example, the PaymentProcessor is responsible for processing payments, and the ShoppingCart is responsible for managing cart items and the checkout process.
-Open/Closed Principle (OCP): The design is open for extension but closed for modification. We can easily add new types of products or payment/shipping processors without altering existing classes.
-Liskov Substitution Principle (LSP): Concrete implementations of interfaces (ConcreteProduct, ConcreteCartItem, etc.) can be substituted for their base types (Product, CartItem, etc.) without affecting the correctness of the program.
-Interface Segregation Principle (ISP): Interfaces are kept small and focused on specific responsibilities, such as PaymentProcessor and ShippingProcessor.
-Dependency Inversion Principle (DIP): High-level modules (e.g., ShoppingCart) depend on abstractions (e.g., PaymentProcessor, ShippingProcessor) rather than concrete implementations. This allows for decoupling and easier unit testing.

*/
