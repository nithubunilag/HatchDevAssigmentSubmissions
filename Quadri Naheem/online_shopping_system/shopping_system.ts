import { Product, DigitalProduct, PhysicalProduct } from "./shopping_product.ts";

/**
 * class to model cart item
 */
class CartItem {
    private product: Product;
    private quantity: number;

    constructor(product: Product, quantity: number) {
        this.product = product;
        this.quantity = quantity;
    }

    getTotalPrice(): number {
        return this.product.getPrice() * this.quantity;
    }

    getProduct(): Product{
        return this.product;
    }
}

/**
 * class to model online shopping cart system
 */
class ShoppingSystem {
    private cartItems: CartItem[] = [];

    addItem(product: Product, quantity: number): void {
        this.cartItems.push(new CartItem(product, quantity));
    }

    removeItem(product: Product): void {
        this.cartItems = this.cartItems.filter((item) => item.getProduct() !== product);
        console.log(`Item ${product.getName()} removed`)
    }

    searchItem(product: Product): string {
        //if product is present, the index will be returned else -1 will be returned
        let index = this.cartItems.findIndex((cartItem) => product.getName() == cartItem.getProduct().getName());
        if(index != -1){
            return `${product.getName()} found`;
        }else{
            return `${product.getName()} not found`;
        }
    }

    getItems(): string {
        let product_names = "";
        this.cartItems.forEach((cartItem)=>{
            product_names += `${cartItem.getProduct().getName()}, `
        })
        return product_names;
    }

    getTotalPrice(): number {
        //return the sum of all the product prices
        return this.cartItems.reduce((total, item) => total + item.getTotalPrice(), 0);
    }
}

// Example Usage
const book = new PhysicalProduct("King of Boyz", 15.99, 0.5, {
    width: 8,
    height: 10,
});

const movie = new DigitalProduct("Brotherhood", 12, "download-link");
const pdf = new DigitalProduct("Introduction to Typescript", 15, "download-link");
const pdf2 = new DigitalProduct("Introduction to Programming", 15, "download-link");

const cart = new ShoppingSystem();
cart.addItem(book, 2);
cart.addItem(movie, 1);
cart.addItem(pdf,2);

console.log("Total Price:", cart.getTotalPrice());
console.log("Items:", cart.getItems());
console.log("Items seen: ", cart.searchItem(pdf));
cart.removeItem(pdf);
console.log("Items:", cart.getItems());