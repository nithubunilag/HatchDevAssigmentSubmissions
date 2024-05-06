// Interface  
interface AlphaProduct {
    id: string;
    price: number;
    currency: string
    display(): void;
  }
  
  // Product class implements AlphaProduct interface
  class Product implements AlphaProduct {
    constructor(
      public id: string,
      public price: number,
      public currency: string
    ) {}
  
    display(): void {
      console.log(
        `ID: ${this.id}, Price: ${this.price}, ${this.currency}`
      );
    }
  }
  
  // Book class extends Product and adds author and title properties
  class Book extends Product {
    constructor(
      id: string,  
      price: number,
      currency: string,
      public author: string,
      public title: string
    ) {
      super(id, price, currency);
    }
  
    display(): void {
      super.display();
      console.log(`Author: ${this.author}, Title: ${this.title}`);
      console.log("--------------------------------------------------------------");
    }
  }
  
  // Electronic class extends Product, adds brand and model properties
  class Techtronic extends Product {
    constructor(
      id: string,
      price: number,
      currency: string,
      public brand: string,
      public model: string,
      public core: string
    ) {
      super(id, price, currency);
    }
  
    display(): void {
      super.display();
      console.log(`Brand: ${this.brand}, Model: ${this.model}, Core: ${this.core}`);
      console.log("---------------------------------------------------------------");
    }
  }
  
  // ShoppingCart class responsible for managing a collection of products
  class ShoppingCart {
    _items: AlphaProduct[] = [];
  
    // Add product to the shopping cart
    addProduct(product: AlphaProduct): void {
      this._items.push(product);
    }
  
    // Display all products in the shopping cart
    displayProducts(): void {
      this._items.forEach((product) => {
        product.display();
      });
    }
  
    // Calculate total price of all products in the shopping cart
    calculateTotalPrice(): number {
      return this._items.reduce((total, product) => total + product.price, 0);
    }
  }
  
  // Usage
  let book = new Book(
    "1.0", 
    4000, 
    "NGN",
    "Mutiah Badruddeen",
    "Rekhiya and Z" 
);
  let techtronic = new Techtronic(
    "1.1",
    150000,
    "NGN",
    "HP",
    "810 G3",
    "Core 15"
  );
  
  let shoppingCart = new ShoppingCart();
  shoppingCart.addProduct(book);
  shoppingCart.addProduct(techtronic);
  
  shoppingCart.displayProducts();
  console.log("Total Fee:", shoppingCart.calculateTotalPrice());
   
  