import { getItemPrice } from "./database.ts";
import { formatPrice } from "./utils.ts";

export interface CartJSON {
    items: number[];
}

export class ShoppingCart {
    private _itemIDs: number[] = [];

    constructor(cart: CartJSON = { items: [] }) {
        this._itemIDs = cart.items;
    }

    toJSON(): CartJSON {
        return {
            items: this._itemIDs
        }
    }

    addItem(itemID: number): void {
        this._itemIDs.push(itemID);
    }

    removeItem(id: number): void {
        this._itemIDs = this._itemIDs.filter((itemID: number) => {
            return itemID !== id;
        })
    }

    checkout() {
        this._itemIDs = [];
    }

    get items(): number[] {
        return this._itemIDs;
    }

    async getTotalAmount(): Promise<number> {
        const itemPrices = await Promise.all(this.items.map(getItemPrice));
        return itemPrices.reduce((total, price) => total + price, 0);
    }

    async printSummary() {
        if (this.items.length > 0) {
            console.log("Your cart has", this.items.length, "items");
            console.log("Total:", formatPrice(await this.getTotalAmount()));
        } else {
            console.log("Your cart is empty");
        }
        console.log();
    }
}