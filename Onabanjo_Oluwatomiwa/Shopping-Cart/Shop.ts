import { Category, Store, User } from "./Shopping-Carts";
import { createAdminUser } from "./utils";

const Alexa = createAdminUser(
  "Alexa",
  "Amazon",
  "regularAlexa",
  "regularAlexa@gmail.com",
  "YouBeFool2028"
);

const store = new Store(Alexa);

const cookingCategory = new Category("Cooking");

const hotSauce = store.createProduct(
  "Hotsause",
  25000,
  "Omo e go burn ooo",
  120,
  true,
  cookingCategory
);

const { id: productId } = hotSauce;

store.addToCart(productId);

store.increaseAmount(productId);

console.log(store)