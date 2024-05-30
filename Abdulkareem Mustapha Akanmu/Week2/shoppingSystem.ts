/**
 * FULL NAME: Abdulkareem Mustapha Akanmu
 * EMAIL: aphatheology@gmail.com
 * GITHUB USERNAME: Aphatheology
 */

// Design and implement a simple online shopping system. Use interfaces for different types of products, and demonstrate composition and aggregation for the shopping cart. Apply SOLID principles in your design.

interface Product {
  getId(): string;
  getName(): string;
  getPrice(): number;
}

class ElectronicProduct implements Product {
  private id: string;
  private name: string;
  private price: number;

  constructor(id: string, name: string, price: number) {
      this.id = id;
      this.name = name;
      this.price = price;
  }

  public getId(): string {
      return this.id;
  }

  public getName(): string {
      return this.name;
  }

  public getPrice(): number {
      return this.price;
  }
}

class GroceryProduct implements Product {
  private id: string;
  private name: string;
  private price: number;

  constructor(id: string, name: string, price: number) {
      this.id = id;
      this.name = name;
      this.price = price;
  }

  public getId(): string {
      return this.id;
  }

  public getName(): string {
      return this.name;
  }

  public getPrice(): number {
      return this.price;
  }
}

class ShoppingCart {
  private items: { product: Product, quantity: number }[] = [];

  public addProduct(product: Product, quantity: number): void {
      this.items.push({ product, quantity });
  }

  public removeProduct(productId: string): void {
      this.items = this.items.filter(item => item.product.getId() !== productId);
  }

  public getTotalPrice(): number {
      return this.items.reduce((total, item) => total + item.product.getPrice() * item.quantity, 0);
  }

  public listItems(): void {
    if(!this.items.length) {
      console.log("You do not have any item in your Cart...")
    } else {
      this.items.forEach(item => {
          console.log(`Product: ${item.product.getName()}, Quantity: ${item.quantity}, Price: ${item.product.getPrice()}`);
      });
    }
      
  }
}

class Customer {
  private name: string;
  private cart: ShoppingCart;

  constructor(name: string) {
      this.name = name;
      this.cart = new ShoppingCart();
  }

  public getCart(): ShoppingCart {
      return this.cart;
  }

  public getName(): string {
      return this.name;
  }
}

// Example
const customer = new Customer("Alice");

const laptop = new ElectronicProduct("1", "Laptop", 1200);
const smartphone = new ElectronicProduct("2", "Smartphone", 800);
const apple = new GroceryProduct("3", "Mango", 2);

const cart = customer.getCart();
cart.listItems();
cart.addProduct(laptop, 1);
cart.addProduct(smartphone, 2);
cart.addProduct(apple, 10);

cart.listItems();
console.log(`Total Price: ${cart.getTotalPrice()}`);

// Study Notes
// Aggregation
// With an aggregation, the child can exist independently of the parent.

// So thinking of a Car and an Engine, the Engine doesn't need to be destroyed when the Car is destroyed.

// Composition
// Composition implies that the contained class cannot exist independently of the container. If the container is destroyed, the child is also destroyed.

// Take for example a Page and a Book. The Page cannot exist without the Book, because the book is composed of Pages. If the Book is destroyed, the Page is also destroyed.