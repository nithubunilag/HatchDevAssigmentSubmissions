interface Product {
  id: string;
  name: string;
  price: number;
}

interface Book extends Product {
  author: string;
  isbn: string;
}

interface Electronics extends Product {
  brand: string;
  warrantyPeriod: number;
}

class ShoppingCart {
  private items: Product[] = [];

  public addItem(item: Product): void {
    this.items.push(item);
  }

  public removeItem(itemId: string): void {
    this.items = this.items.filter((item) => item.id !== itemId);
  }

  public calculateTotal(): number {
    return this.items.reduce((total, item) => total + item.price, 0);
  }

  public getItems(): Product[] {
    return this.items;
  }
}

const book: Book = {
  id: "book001",
  name: "Introduction to Typescript",
  price: 29.99,
  author: "Manning Books",
  isbn: "1234567890",
};

const laptop: Electronics = {
  id: "laptop001",
  name: "Lenovo Legion",
  price: 999.99,
  brand: "Lenovo",
  warrantyPeriod: 24,
};

const cart = new ShoppingCart();
cart.addItem(book);
cart.addItem(laptop);

const cartTotal = cart.calculateTotal();
console.log("Cart Total:", `$${cartTotal.toFixed(2)}`);
console.log("Cart Items:", cart.getItems());
