import { getProduct } from "../database.ts";
import { Screen, State } from "../main.ts";
import { formatPrice, getUserChoice } from "../utils.ts";
import checkoutScreen from "./checkoutScreen.ts";
import homeScreen from "./homeScreen.ts";
import mainMenuScreen from "./mainMenuScreen.ts";

const cartScreen: Screen = async (state: State) => {
    if (!state.user) return mainMenuScreen;
    await state.user.cart.printSummary();

    console.log("Your Cart");
    const products = await Promise.all(state.user.cart.items.map(async id => await getProduct(id)));
    products.forEach(product => {
        console.log(`${product.name} - ${formatPrice(product.price)}`);
    });

    const choice = getUserChoice([
        "Back to home",
        "Checkout"
    ])
    switch (choice) {
        case 1:
            return homeScreen;
        case 2:
            return checkoutScreen;
    }
    return null;
};

export default cartScreen;