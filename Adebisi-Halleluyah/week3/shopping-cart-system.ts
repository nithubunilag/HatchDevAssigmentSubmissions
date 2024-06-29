// Interface for all products
interface Product {
    getName(): string;
    getPrice(): number;
    getDescription(): string;
  }


interface Book extends Product {
    getAuthor(): string;
    getIsbn(): string;
  }
  
  // Book Class implementing Product
  class Book implements Product {
    constructor(
      private name: string,
      private author: string,
      private isbn: string,
      private price: number
    ) {}
  
    getName(): string {
      return this.name;
    }
  
    getPrice(): number {
      return this.price;
    }
  
    getDescription(): string {
      return `${this.name} by ${this.author}`;
    }
  }
  
  // Similar implementation for Shirt class
  
  // ShoppingCartItem Class
  class ShoppingCartItem {
    constructor(public product: Product, public quantity: number) {}
  
    getTotalPrice(): number {
      return this.product.getPrice() * this.quantity;
    }
  }
  
  // ShoppingCart Class with Composition and Aggregation
  class ShoppingCart {
    private items: ShoppingCartItem[] = [];
  
    addItem(product: Product, quantity: number): void {
      this.items.push(new ShoppingCartItem(product, quantity));
    }
  
    removeItem(product: Product): void {
      const index = this.items.findIndex((item) => item.product === product);
      if (index > -1) {
        this.items.splice(index, 1);
      } else {
        console.error(`Product ${product.getName()} not found in cart.`);
      }
    }
  
    updateItemQuantity(product: Product, quantity: number): void {
      const index = this.items.findIndex((item) => item.product === product);
      if (index > -1) {
        this.items[index].quantity = quantity;
      } else {
        console.error(`Product ${product.getName()} not found in cart.`);
      }
    }
  
    getTotalPrice(): number {
      let total = 0;
      for (const item of this.items) {
        total += item.getTotalPrice();
      }
      return total;
    }
  }
  
  // Usage Example
  const book = new Book("The Hitchhiker's Guide to the Galaxy", "Douglas Adams", "ISBN 0-345-39180-X", 12.99);
  const cart = new ShoppingCart();
  cart.addItem(book, 2);
  console.log(cart.getTotalPrice()); // Output: 25.98
  
