
interface Product {
  id: number;
  name: string;
  price: number;
}

class ElectronicProduct implements Product {
  constructor(public id: number, public name: string, public price: number) {}
}

class BookProduct implements Product {
  constructor(public id: number, public name: string, public price: number) {}
}


interface CartItem {
  product: Product;
  quantity: number;
  getTotal(): number;
}

class CartItemImpl implements CartItem {
  constructor(public product: Product, public quantity: number) {}

  getTotal(): number {
    return this.product.price * this.quantity;
  }
}


interface ShoppingCart {
  items: CartItem[];
  addItem(item: CartItem): void;
  removeItem(productId: number): void;
  getTotal(): number;
}


class ShoppingCartImpl implements ShoppingCart {
  constructor(public items: CartItem[] = []) {}

  addItem(item: CartItem): void {
    this.items.push(item);
  }

  removeItem(productId: number): void {
    this.items = this.items.filter(item => item.product.id !== productId);
  }

  getTotal(): number {
    return this.items.reduce((total, item) => total + item.getTotal(), 0);
  }
}


const electronicProduct = new ElectronicProduct(1, "Laptop", 1000);
const bookProduct = new BookProduct(2, "JavaScript: The Good Parts", 30);

const cartItem1 = new CartItemImpl(electronicProduct, 2);
const cartItem2 = new CartItemImpl(bookProduct, 1);

const shoppingCart = new ShoppingCartImpl();
shoppingCart.addItem(cartItem1);
shoppingCart.addItem(cartItem2);

console.log("Total: $" + shoppingCart.getTotal());


