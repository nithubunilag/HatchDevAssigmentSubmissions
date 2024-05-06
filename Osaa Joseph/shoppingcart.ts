interface Product {
    id: number;
    name: string;
    price: number;
  }
  
  interface ElectronicProduct extends Product {
    brand: string;
  }
  
  interface ClothingProduct extends Product {
    size: string;
    color: string;
  }
  
  interface BookProduct extends Product {
    author: string;
  }
  
  // Shopping Cart section
  class ShoppingCart {
    private items: Product[] = [];
  
    addItem(item: Product): void {
      this.items.push(item);
    }
  
    removeItem(itemId: number): void {
      this.items = this.items.filter((item) => item.id !== itemId);
    }
  
    getTotalPrice(): number {
      return this.items.reduce((total, item) => total + item.price, 0);
    }
  
    getItems(): Product[] {
      return this.items;
    }
  }
  
  // Customer section
  class Customer {
    private name: string;
    private email: string;
  
    constructor(name: string, email: string) {
      this.name = name;
      this.email = email;
    }
  
    getName(): string {
      return this.name;
    }
  
    getEmail(): string {
      return this.email;
    }
  }
  
  // Main App Section
  class OnlineShoppingApp {
    private customer: Customer;
    private shoppingCart: ShoppingCart;
  
    constructor(customer: Customer) {
      this.customer = customer;
      this.shoppingCart = new ShoppingCart();
    }
  
    addToCart(item: Product): void {
      this.shoppingCart.addItem(item);
    }
  
    removeFromCart(itemId: number): void {
      this.shoppingCart.removeItem(itemId);
    }
  
    checkout(): void {
      const totalPrice = this.shoppingCart.getTotalPrice();
      console.log(`Total price: $${totalPrice.toFixed(2)}`);
      console.log(
        `Customer: ${this.customer.getName()} (${this.customer.getEmail()})`
      );
      console.log("Items in cart:");
      this.shoppingCart.getItems().forEach((item) => {
        console.log(`${item.name} - $${item.price}`);
      });
    }
  }
  
  // Example:
  const customer = new Customer("Opei sd", "opeisd@gmail.com");
  const app = new OnlineShoppingApp(customer);
  
  const phone: ElectronicProduct = {
    id: 1,
    name: "phone",
    price: 799,
    brand: "Oppo",
  };
  const shirt: ClothingProduct = {
    id: 2,
    name: "T-Shirt",
    price: 26.66,
    size: "XL",
    color: "Black",
  };
  const book: BookProduct = {
    id: 3,
    name: "Book",
    price: 15.55,
    author: "William Shakespeare",
  };
  
  app.addToCart(phone);
  app.addToCart(shirt);
  app.addToCart(book);
  
  app.checkout();