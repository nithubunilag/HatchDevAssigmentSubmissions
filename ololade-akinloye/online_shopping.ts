interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}
interface Grocery extends Product {
  category: string;
}
interface ShoppingCart {
  addProduct(product: Grocery): void;
  removeProduct(productName: string, quantity: number): void;
  total: {items: Grocery[], totalAmount: number};
}

class GroceryItem implements Grocery {
  id: number;
  name: string;
  price: number;
  quantity: number;
  category: string;

  constructor(id: number, name: string, price: number, quantity: number, category: string) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
  }
}

class Cart implements ShoppingCart {
  private products: Grocery[] = [];

  addProduct(product: Grocery): void {
    this.products.push(product);
  }

  removeProduct(productName: string, quantity: number): void {
    this.products = this.products.map(product => {
      if (product.name === productName && product.quantity >= quantity) {
        product.quantity -= quantity;
      }
      return product;
    }).filter(product => product.quantity > 0);
  }

  get total(): {items: Grocery[], totalAmount: number} {
    const totalAmount = this.products.reduce((acc, product) => acc + product.price * product.quantity, 0);
    return {items: this.products, totalAmount };
  }
}

const milk = new GroceryItem(1, "Milk", 300, 1, "Dairy");
const bread = new GroceryItem(2, "Bread", 1200, 2, "Bakery");
const eggs = new GroceryItem(3, "Eggs", 150, 1, "Dairy");

const cart = new Cart();
cart.addProduct(milk);
cart.addProduct(bread);
cart.addProduct(eggs);

cart.removeProduct("Bread", 1); 

const cartDetails = cart.total;

console.log("Items in the cart:");
cartDetails.items.forEach(item => {
  console.log(`- ${item.quantity} x ${item.name} (${item.category}): ₦${item.price * item.quantity}`);
});

console.log("Total amount:", cartDetails.totalAmount);