// class cart {
//     items: Item[] = [];
//     order: Order;
//     id: string;

//     constructor(
//         id: string,
//         order: Order,
//         items:Item[] ) {
//         this.id = id;
//     }
// }

// class Item {}

// class Order{}

import { DeliveryType, IProduct, OrderState } from "./Types";
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
    //This is used for checking if the product is in cart
    const foundProduct = this.allProducts.find(
      (product) => product.id === productId
    );

    //If the product isn't found return error
    if (!foundProduct) return sendResponse(false, "product not found", 404);

    if (isProduct(foundProduct)) {
      //If the product isn't in stock return an error
      if (foundProduct.amountInStock <= 0)
        return sendResponse(
          false,
          "Baba product don finish, wetin you want",
          400
        );
      //If the product is in stock, add it to the cart
      this.cart.addProduct(foundProduct);
      return sendResponse(true, "Product added to cart", 200);
    }
  }

  removeFromCart(productId: string) {}

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
    sendResponse(true, "Product created", 201);
    return newProduct;
  }

  increaseAmount(productId: string, amount?: number) {
    const foundItem = this.cart.items.find(
      (item) => item.product.id === productId
    );
    if (!foundItem)
      return sendResponse(false, "The product no dey here abeg", 404);
    if (foundItem.product.amountInStock <= 0)
      return sendResponse(false, "Product don finish baba, no vex");
    foundItem.increaseCount();
    return sendResponse(true, "Product added to cart", 200);
  }

  decreaseAmount(productId: string, amount: number) {
    const foundItem = this.cart.items.find(
      (item) => item.product.id === productId
    );
    if (!foundItem)
      return sendResponse(false, "The product no dey here abeg", 404);
    if (foundItem.count === 1) {
      this.removeFromCart(foundItem.product.id);
      return sendResponse(true, "Product removed from cart", 200);
    } 
    foundItem.decreaseCount();
    return sendResponse(true, "We don comot am", 200)
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

  increaseAmountInStock() {
    this.amountInStock = this.amountInStock + 1;
  }

  reduceAmountInStock() {
    this.amountInStock = this.amountInStock - 1;
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