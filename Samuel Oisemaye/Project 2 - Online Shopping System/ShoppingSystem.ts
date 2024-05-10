// Interface for different types of products
interface Product {
  name: string;
  price: number;
}
interface electronicProduct extends Product {
  warranty: string;
}
interface book extends Product {
  author: string;
}
const HPLaptop1: electronicProduct = {
  name: "HP Pavilion",
  price: 550000,
  warranty: "2 years",
};
const HPLaptop2: electronicProduct = {
  name: "HP Spectre",
  price: 750000,
  warranty: "3 years",
};
const SamsungPhone1: electronicProduct = {
  name: "Samsung S24",
  price: 300000,
  warranty: "1 year",
};
const Book1: book = {
  name: "Oliver Twist",
  price: 5000,
  author: "Charles Darwin",
};

// CartItem class
class CartItem {
  constructor(
    public product: Product,
    public quantity: number,
  ) {}

  // Calculates sub-total for the items in the cart
  calculateSubtotal(): number {
    return this.product.price * this.quantity;
  }
}
class ShoppingCart {
  private items: CartItem[] = [];

  //add an item to the cart
  addItem(product: Product, quantity: number) {
    const existingItem = this.items.find(
      (item) => item.product.name === product.name,
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push(new CartItem(product, quantity));
    }
  }

  //remove an item from the cart
  removeItem(product: Product, quantity: number) {
    const existingItem = this.items.find(
      (item) => item.product.name === product.name,
    );
    if (existingItem) {
      existingItem.quantity -= quantity;
    } else {
      this.items = this.items.filter(
        (item) => item.product.name !== product.name,
      );
    }
  }
  // Calculates total for all the items in the cart
  calculateTotal(): number {
    let total = 0;
    for (const item of this.items) {
      total += item.calculateSubtotal();
    }
    return total;
  }
  // Displays cart items, price and quantity
  showCart() {
    console.log("Products in the cart:");
    this.items.forEach((item) => {
      console.log(
        `Name: ${item.product.name}, Price: ${item.product.price}, Quantity: ${item.quantity}`,
      );
    });
  }
}

const cart = new ShoppingCart();
cart.addItem(HPLaptop2, 2);
cart.addItem(SamsungPhone1, 1);
cart.addItem(HPLaptop1, 2);
cart.removeItem(HPLaptop2, 1);

cart.showCart();
console.log("Total cost:", cart.calculateTotal());
