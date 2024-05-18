import { Category, Store, User } from "./shopping-cart";
import { createAdminUser } from "./utils";

const kingsley = createAdminUser(
  "Kingsley",
  "Ihemelandu",
  "kijuchihe",
  "kijuchihe@gmail.com",
  "YourPapa2024"
);

const store = new Store(kingsley);

const fruitCategory = new Category("Fruits");

const newProduct = store.createProduct(
  "Apple",
  450,
  "An apple is good for you",
  50,
  true,
  fruitCategory
);

const orangeFruit = store.createProduct(
  "Orange",
  450,
  "An apple is good for you",
  50,
  true,
  fruitCategory
);

const { id: productId } = newProduct;

store.addToCart(productId);

store.increaseAmount(productId);

console.log(store);
