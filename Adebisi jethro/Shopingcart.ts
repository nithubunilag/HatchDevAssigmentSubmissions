
// Interfaces
interface Product {
    getName(): string;
    getPrice(): number;
    getDescription(): string;
  }
  
  interface ElectronicProduct extends Product {
    getBrand(): string;
    getWarranty(): number;
  }
  
  interface ClothingProduct extends Product {
    getSize(): string;
    getColor(): string;
  }
  
  // Concrete Classes
  class ProductImpl implements Product {
    constructor(private name: string, private price: number, private description: string) {}
  
    getName(): string {
      return this.name;
    }
  
    getPrice(): number {
      return this.price;
    }
  
    getDescription(): string {
      return this.description;
    }
  }
  
  class ElectronicProductImpl extends ProductImpl implements ElectronicProduct {
    constructor(
      name: string,
      price: number,
      description: string,
      private brand: string,
      private warranty: number
    ) {
      super(name, price, description);
    }
  
    getBrand(): string {
      return this.brand;
    }
  
    getWarranty(): number {
      return this.warranty;
    }
  }
  
  class ClothingProductImpl extends ProductImpl implements ClothingProduct {
    constructor(
      name: string,
      price: number,
      description: string,
      private size: string,
      private color: string
    ) {
      super(name, price, description);
    }
  
    getSize(): string {
      return this.size;
    }
  
    getColor(): string {
      return this.color;
    }
  }
  
  // Shopping Cart with Composition
  class ShoppingCart {
    private items: Product[] = [];
  
    addItem(item: Product): void {
        this.items.push(item);
    }

    removeItem(item: Product): void {
        const index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    }
  
    getTotalPrice(): number {
      let total = 0;
      for (const item of this.items) {
        total += item.getPrice();
      }
      return total;
    }
  }
  
  // Example Usage
  const tv = new ElectronicProductImpl("Smart TV", 740, "4K Ultra HD TV", "Samsung", 1);
  const shirt = new ClothingProductImpl("T-Shirt", 20, "Cotton T-Shirt", "Medium", "Blue");
  
  const cart = new ShoppingCart();
  cart.addItem(tv);
  cart.addItem(shirt);
  
  console.log(`Total Price: ₦${cart.getTotalPrice()}`);
  
