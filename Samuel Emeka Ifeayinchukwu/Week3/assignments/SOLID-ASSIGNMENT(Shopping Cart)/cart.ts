import { Product } from "./products";

export class CartItem {
    constructor(public product: Product, public quantity: number) {}

    getTotal(): number {
        return this.product.price * this.quantity;
    }
}

export class ShoppingCart {
    private items: CartItem[] = [];

    addItem(item: CartItem): void {
        this.items.push(item);
    }

    removeItem(index: number): void {
        this.items.splice(index, 1);
    }

    getTotalPrice(): number {
        return this.items.reduce((total, item) => total + item.getTotal(), 0);
    }
}


