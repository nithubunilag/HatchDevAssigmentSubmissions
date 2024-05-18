import { DeliveryType, IProduct, OrderState } from "./types";
import { generateId, isProduct, sendResponse } from "./utils";

export class User {
  id: string;
  private firsName: string;
  private lastName: string;
  username: string;
  private email: string;
  private password: string;
  isAdmin: boolean = false;

  constructor(
    firstName: string,
    lastName: string,
    username: string,
    email: string,
    password: string
  ) {
    this.id = generateId();
    this.firsName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.username = username;
    this.password = password;
  }

  get fullName() {
    return `${this.firsName} ${this.lastName}`;
  }

  setToAdmin() {
    this.isAdmin = true;
  }
}

export class Store {
  private allProducts: Product[] = [];
  private user: User;
  private cart: Cart;

  constructor(user: User) {
    this.user = user;
    this.cart = new Cart(user.id);
  }

  addToCart(productId: string) {
    // Checking if product is in cart
    const foundProduct = this.allProducts.find(
      (product) => product.id === productId
    );

    // If no product, return error
    if (!foundProduct) return sendResponse(false, "Product Not found", 404);

    if (isProduct(foundProduct)) {
      // If not in storck, return error
      if (foundProduct.amountInStock <= 0)
        return sendResponse(false, "Product not in stock");

      this.cart.addProduct(foundProduct);
      return sendResponse(true, "Product Added to cart", 200);
    }
  }

  removeFromCart(productId: string) {
    const foundProduct = this.allProducts.find(
      (product) => product.id === productId
    );
    if (!foundProduct) return sendResponse(false, "Product Not found", 404);

    if (isProduct(foundProduct)) {
      // If not in storck, return error
      this.cart.items = this.cart.items.filter(
        (item) => item.product.id !== productId
      );
    }
  }

  createProduct(
    name: string,
    price: number,
    description: string,
    amountInStock: number,
    isCategorized: boolean = false,
    category?: Category
  ) {
    let newProduct: Product;

    if (isCategorized && category) {
      newProduct = new CategorisedProduct(
        name,
        price,
        description,
        amountInStock,
        category
      );
    } else {
      newProduct = new Product(name, price, description, amountInStock);
    }
    this.allProducts.push(newProduct);
    sendResponse(true, "Successfully created product", 201);
    return newProduct;
  }

  increaseAmount(productId: string) {
    const foundItem = this.cart.items.find(
      (item) => item.product.id === productId
    );
    if (!foundItem) return sendResponse(false, "Product not in cart", 404);
    if (foundItem.product.amountInStock <= 0)
      return sendResponse(false, "Product not in stock", 400);

    foundItem.increaseCount();
    return sendResponse(true, "Product Added to cart", 200);
  }

  decreaseAmount(productId: string) {
    const foundItem = this.cart.items.find(
      (item) => item.product.id === productId
    );
    if (!foundItem) return sendResponse(false, "Product not in cart", 404);
    if (foundItem.count === 1) {
      this.removeFromCart(foundItem.product.id);
      return sendResponse(true, "Item removed from cart", 200);
    }

    foundItem.decreaseCount();
    return sendResponse(true, "Reduced amount in cart", 200);
  }
}

class CartItem {
  product: Product;
  count: number = 1;

  increaseCount() {
    this.count += 1;
    this.product.reduceAmountInStock();
  }

  decreaseCount() {
    this.count -= 1;
    this.product.increaseAmountInStock();
  }
  constructor(product: Product, count?: number) {
    this.product = product;
    this.count = count ? count : 1;
  }
}

export class Cart {
  items: CartItem[] = [];
  private ownedBy: string;

  constructor(userId: string) {
    this.ownedBy = userId;
  }

  addProduct(product: Product) {
    const newItem = new CartItem(product, 1);
    this.items.push(newItem);
    product.reduceAmountInStock();
  }

  calculateTotal() {
    // this.items.reduce((a, c)=>{a.product.price + c.product.price},{})
  }
}

export class Product implements IProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  amountInStock: number;

  constructor(
    name: string,
    price: number,
    description: string,
    amountInStock: number
  ) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.amountInStock = amountInStock;
    this.id = generateId(10);
  }

  reduceAmountInStock() {
    this.amountInStock -= 1;
  }

  increaseAmountInStock() {
    this.amountInStock += 1;
  }
}

export class Category {
  name: string;
  description?: string;

  constructor(name: string, description?: string) {
    this.name = name;
    this.description = description;
  }
}

// FIRA CODE ISCRIPT
export class CategorisedProduct extends Product {
  category: Category;
  constructor(
    name: string,
    price: number,
    description: string,
    amountInStock: number,
    category: Category
  ) {
    super(name, price, description, amountInStock);
    this.category = category;
  }
}

export class Order {
  order: OrderState = "not-started";
  deliveryType: DeliveryType = DeliveryType.payOnDelivery;

  private setDeliveryType(deliveryType: DeliveryType) {
    this.deliveryType = deliveryType;
  }

  constructor(deliveryType: DeliveryType) {
    this.deliveryType = deliveryType;
  }
}
