class ShoppingSystem {
    cart: Cart;
    products: Products[];
  
    constructor() {
      this.cart = new Cart();
      this.products = [];
    }
   
    addProductToCart(product: Products, quantity: number) {
      this.cart.addCartItem(new CartItem(product, quantity));
    }
  
    removeProductFromCart(product: Products, quantity: number) {
      this.cart.removeCartItem(product,quantity);
    }
  
    checkout() {
      // Logic for processing the order, clearing the cart, etc.
    }
  }
  
  class Products {
    constructor(private readonly id: number, private readonly name: string, private readonly price: number) { }
  }
  
  class Cart {
    private readonly cartItems: CartItem[];
  
    constructor() {
      this.cartItems = [];
    }
  
    addCartItem(cartItem: CartItem) {
      this.cartItems.push(cartItem);
    }
  
    removeCartItem(product: Products, quantity: number) {
      const index = this.cartItems.findIndex(item => item.product === product);
      if (index !== -1) {
        this.cartItems.splice(index, 1);
      } 
    }
  }
  
  class CartItem {
    constructor(public product: Products, public quantity: number) { }
  }
  
  class Order {
    // Order properties and methods would go here
  }
  
  // Example usage:
  const shoppingSystem = new ShoppingSystem();
  
  const product1 = new Products(1, "Product 1", 10);
  const product2 = new Products(2, "Product 2", 20);
  
  shoppingSystem.addProductToCart(product1, 2);
  shoppingSystem.addProductToCart(product2, 1);
  
  console.log(shoppingSystem.cart); // Check the contents of the cart
  
  shoppingSystem.removeProductFromCart(product1,10);
  
  console.log(shoppingSystem.cart); // Check the contents of the cart after removing a product
  
  