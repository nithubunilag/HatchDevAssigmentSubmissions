import { getProducts } from "../database.ts";
import { Screen, State } from "../main.ts";
import { formatPrice, getUserChoice } from "../utils.ts";
import homeScreen from "./homeScreen.ts";
import mainMenuScreen from "./mainMenuScreen.ts";
import getProductScreen from "./productScreen.ts";

const productsScreen: Screen = async (state: State) => {
    if (!state.user) return mainMenuScreen;
    await state.user.cart.printSummary();

    const products = await getProducts();
    const choice = getUserChoice([
        "Back to home",
        ...products.map(p => `${p.name} - ${formatPrice(p.price)}`)
    ], 0);
    
    if (choice === 0) return homeScreen;
    return getProductScreen(products[choice-1].id);
}

export default productsScreen;