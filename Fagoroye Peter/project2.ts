// Interface for a product
interface Product<T extends shopItems> {
    items: T;
}

// Interface for a cart item
interface Item {
    product: Product<shopItems>;
    quantity: number;
}

// Interface for a discount strategy
interface Discount {
    applyDiscount(price: number): number;
}

// Discount strategy for applying a percentage discount
class PercentageDiscount implements Discount {
    constructor(private percentage: number) {}

    applyDiscount(price: number) {
        return price - (price * this.percentage) / 100;
    }
}

// Class of a shopping cart
class ShoppingCart {
    private items: Item[] = [];
    private discountStrategy: Discount;

    constructor(discountStrategy: Discount) {
        this.discountStrategy = discountStrategy;
    }

    // Add a product to the cart
    addItem(product: Product<shopItems>, quantity: number): void {
        this.items.push({ product, quantity });
    }

    // Remove a product from the cart
    removeItem(productName: string): void {
        this.items = this.items.filter((item) => {
            const product = item.product.items;
            if (product instanceof Beverages || product instanceof Shoes || product instanceof Phone) {
                return product.kind !== productName;
            }
            return true;
        });
    }

    // Calculate the total price of all items in the cart
    calculateTotal(): number {
        let totalPrice: number = 0;
        for (let item of this.items) {
            const product = item.product.items;
            if (product instanceof Beverages) {
                totalPrice += product.price * item.quantity;
            }
        }
        const discountedTotalPrice = this.discountStrategy.applyDiscount(totalPrice);
        return discountedTotalPrice;
    }
}

type beverageKind = "Milo" | "Three Crown" | "Milk" | "Oats" | "Custard" | "Coco Pops";

class Beverages  {
    kind: beverageKind;
    price: number = 0;

    constructor(kind: beverageKind) {
        this.kind = kind;
        this.attachPrice();
    }

    attachPrice() {
        switch (this.kind) {
            case "Milo":
                this.price = 200;
                break;
            case "Three Crown":
                this.price = 180;
                break;
            case "Milk":
                this.price = 150;
                break;
            case "Oats":
                this.price = 2000;
                break;
            case "Custard":
                this.price = 300;
                break;
            case "Coco Pops":
                this.price = 250;
                break;

            default:
                this.price = 0; // Default price
        }
    }
}


type shoeKind = "Nike" | "Adidas" | "Versace"
class Shoes {
    // Add properties to shoes
    kind: shoeKind;
    price: number = 0;

    constructor(kind: shoeKind) {
        this.kind = kind;
        this.attachPrice();
    }

    attachPrice() {
        switch (this.kind) {
            case "Nike":
                this.price = 25000;
                break;
            case "Versace":
                this.price = 18000;
                break;
            case "Adidas":
                this.price = 20000;
                break;
    

            default:
                this.price = 0; // Default price
        }
    }
}

type phoneKind = "IPhone" | "Samsung" | "Others"

class Phone {
    // Add properties to phones
    kind: phoneKind;
    price: number = 0;

    constructor(kind: phoneKind) {
        this.kind = kind;
        this.attachPrice();
    }

    attachPrice() {
        switch (this.kind) {
            case "IPhone":
                this.price = 200000;
                break;
            case "Samsung":
                this.price = 180000;
                break;
            case "Others":
                this.price = 100000;
                break;

            default:
                this.price = 0; // Default price
        }
    }
}

type shopItems = Beverages | Shoes | Phone;

// Instantiating the product class
const miloProduct: Product<Beverages> = { items: new Beverages("Milo") };
const cart = new ShoppingCart(new PercentageDiscount(6)); // Apply 6% discount
cart.addItem(miloProduct, 2);
console.log("Total price after discount:", cart.calculateTotal());

