import { updateUser } from "../database.ts";
import { Screen, State } from "../main.ts";
import { formatPrice, getUserChoice } from "../utils.ts";
import homeScreen from "./homeScreen.ts";
import mainMenuScreen from "./mainMenuScreen.ts";

const checkoutScreen: Screen = async (state: State) => {
    if (!state.user) return mainMenuScreen;
    console.log("Total price:", formatPrice(await state.user.cart.getTotalAmount()));
    
    const choice = getUserChoice([
        "Confirm order",
        "Go back"
    ]);

    if (choice === 1) {
        state.user.cart.checkout();
        updateUser(state.user);
        state.message = "Your order is being processed and will be delivered soon.";
    }

    return homeScreen;
};

export default checkoutScreen;