import { Item } from "./interfaces.ts";
import {
  BeautyItems,
  ElectronicItems,
  FashionItem,
} from "./items.ts";

class ShoppingCart {
  private products: Item[] = [];

  addItem(product: Item): void {
    this.products.push(product);
  }

  removeItem(id: number): void {
    this.products = this.products.filter(
      (product) => product.id !== id
    );
  }

  getTotalPrice(): number {
    return this.products.reduce(
      (total, product) => total + product.amount * product.price,
      0
    );
  }

  displayProducts(): void {
    if (this.products.length === 0) {
      console.log("There are no products in your cart");
      return;
    }
    console.log("Your cart items:");
    this.products.forEach((product) =>
      console.log(
        `${product.name} (${product.amount}) - ${product.price}`
      )
    );
    console.log(`Total: \u20A6${this.getTotalPrice()}`);
  }

  checkout(): void {
    if (this.products.length === 0) {
      console.log("Your cart is empty. Nothing to checkout");
      return;
    }
    console.log("Receipt:");
    this.displayProducts();
    console.log("Thank you for your purchase!");
    setTimeout(() => {
      this.products = [];
      this.displayProducts();
    }, 5000);
  }
}

const deodorant = new BeautyItems(
  1,
  "Nivea Fresh",
  1200,
  2,
  "Personal care"
);
const phone = new ElectronicItems(
  2,
  "Samsung Fold 3",
  500000,
  1,
  "Samsung"
);
const dress = new FashionItem(3, "Flowered dress", 12000, 3, "md");

const cart = new ShoppingCart();

cart.addItem(deodorant);
cart.addItem(phone);
cart.addItem(dress);

// cart.displayProducts();
cart.checkout();
