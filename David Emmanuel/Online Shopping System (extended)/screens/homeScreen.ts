import { Screen, State } from "../main.ts";
import { getUserChoice } from "../utils.ts";
import cartScreen from "./cartScreen.ts";
import logOutScreen from "./logoutScreen.ts";
import mainMenuScreen from "./mainMenuScreen.ts";
import productsScreen from "./productsScreen.ts";
import sellerScreen from "./sellerScreen.ts";

const homeScreen: Screen = async (state: State) => {
    if (!state.user) return mainMenuScreen;
    console.log("You're logged in as", state.user.username);
    await state.user.cart.printSummary();

    const choice = getUserChoice([
        "View all products",
        "View cart",
        "Sell an item",
        "Log out",
        "Exit"
    ])
    switch (choice) {
        case 1:
            return productsScreen;
        case 2:
            return cartScreen;
        case 3:
            return sellerScreen;
        case 4:
            return logOutScreen;
    }
    return null;
}

export default homeScreen;