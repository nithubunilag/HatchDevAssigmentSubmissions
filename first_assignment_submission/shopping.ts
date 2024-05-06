class User {
  username: string;
  password: string;
  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }

  authenticate(inputPassword: string): boolean {
    return this.password === inputPassword;
  }
}


class Customer extends User {
  cart: ShoppingCart;
  constructor(username: string, password: string) {
    super(username, password);
    this.cart = new ShoppingCart();
  }
}


class Seller extends User {
  products: Product[];
  constructor(username: string, password: string) {
    super(username, password);
    this.products = [];
  }


  addProduct(name: string, price: number, quantity: number): Product {
    const product: Product = new Product(name, price, quantity, this.username);
    this.products.push(product);
    return product;
  }


  deleteProduct(name: string){
    this.products = this.products.filter((product) => product.name !== name);
    console.log(`Product with name '${name}' deleted successfully.`);

    return this.products
    
  }
}


class Product {
  name: string;
  price: number;
  quantity: number;
  seller: string;
  constructor(name: string, price: number, quantity: number, seller: string) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.seller = seller;
  }
}


class ShoppingCart {
  items: { product: Product; quantity: number }[];
  constructor() {
    this.items = [];
  }

  
  addItem(product: Product, quantity: number): void {
    if (quantity > product.quantity) {
      console.log("Insufficient stock.");
      return;
    }

    const cartItem = {
      product: product,
      quantity: quantity,
    };

    this.items.push(cartItem);
    product.quantity -= quantity;
  }

 
  calculateTotalCart(): number {
    return this.items.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  }
}


class Order {
  customer: Customer;
  items: { product: Product; quantity: number }[];
  totalCost: number;
  status: string;
  constructor(customer: Customer, shoppingCart: ShoppingCart) {
    this.customer = customer;
    this.items = shoppingCart.items;
    this.totalCost = shoppingCart.calculateTotalCart();
    this.status = "Pending"; 
  }

  
  processOrder(): void {
    console.log(`Processing order for ${this.customer.username}...`);
    this.status = "Processing";
  }
}

// Payment Class
class Payment {
  order: Order;
  paymentStatus: string;
  constructor(order: Order) {
    this.order = order;
    this.paymentStatus = "Pending"; // Pending, Completed, Failed
  }

  // Method to complete the payment
  completePayment(): void {
    console.log(
      `Completing payment for order of total $${this.order.totalCost}...`
    );
    // Simulate payment success
    this.paymentStatus = "Completed";
    console.log(`Payment completed for order.`);
    this.order.status = "Shipped";
  }
}




const customer = new Customer("customer1", "password");
console.log("Customer authenticated:", customer.authenticate("password"));


const seller = new Seller("seller1", "password");
console.log("Seller authenticated:", seller.authenticate("password"));


const product1 = seller.addProduct("Product1", 100, 10);
const product2 = seller.addProduct("Product2", 50, 20);


customer.cart.addItem(product1, 2);
customer.cart.addItem(product2, 1);


const totalCost = customer.cart.calculateTotalCart();
console.log("Total cost of items in the cart: $" + totalCost);


const order = new Order(customer, customer.cart);
order.processOrder();


const payment = new Payment(order);
payment.completePayment();


console.log("Order status:", order.status);
console.log("Payment status:", payment.paymentStatus);
