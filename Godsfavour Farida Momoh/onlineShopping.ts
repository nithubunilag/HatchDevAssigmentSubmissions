import { v4 as uuidv4 } from 'uuid';

// Enums
enum Role {
    USER = "user",
    ADMIN = "admin",
}

enum DeliveryMethod {
    HomeDelivery = "Home Delivery",
    StorePickup = "Store Pickup",
}

enum OrderStatus {
    Pending = "pending",
    Shipped = "shipped",
    Delivered = "delivered",
}

// Interfaces
interface IUser {
    id: string;
    fullName: string;
    username: string;
    email: string;
    isAdmin: boolean;
}

interface IProduct {
    id: string;
    name: string;
    description: string;
    price: number;
    quantity: number;
    decreaseQuantity(amount: number): void;
}

interface ICartItem {
    product: IProduct;
    quantity: number;
}

// Classes
class RegisteredUser implements IUser {
    id: string;
    fullName: string;
    isAdmin: boolean = false;

    constructor(
        public firstName: string,
        public lastName: string,
        public username: string,
        public email: string
    ) {
        this.id = uuidv4();
        this.fullName = `${firstName} ${lastName}`;
    }

    userIsAdmin(): boolean {
        return this.isAdmin;
    }

    setAdminStatus(isAdmin: boolean) {
        this.isAdmin = isAdmin;
    }
}

class Product implements IProduct {
    id: string;

    constructor(
        public name: string,
        public price: number,
        public description: string,
        public quantity: number
    ) {
        this.id = uuidv4();
    }

    decreaseQuantity(amount: number = 1) {
        if (this.quantity >= amount) {
            this.quantity -= amount;
        } else {
            throw new Error("Quantity cannot be decreased beyond zero.");
        }
    }
}

class ShoppingCart {
    items: ICartItem[] = [];
    userId: string;

    constructor(userId: string) {
        this.userId = userId;
    }

    addProduct(product: IProduct, quantity: number = 1) {
        const newItem: ICartItem = { product, quantity };
        this.items.push(newItem);
        product.decreaseQuantity(quantity);
    }

    removeProduct(productId: string) {
        const index = this.items.findIndex(
            (item) => item.product.id === productId
        );
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    }
}

class Order {
    status: OrderStatus = OrderStatus.Pending;
    deliveryMethod: DeliveryMethod;

    constructor(deliveryMethod: DeliveryMethod) {
        this.deliveryMethod = deliveryMethod;
    }
}
