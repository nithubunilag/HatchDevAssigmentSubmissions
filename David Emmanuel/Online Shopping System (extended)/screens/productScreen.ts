import { getProduct, updateProduct, updateUser } from "../database.ts";
import { Screen, State } from "../main.ts";
import { getUserChoice } from "../utils.ts";
import mainMenuScreen from "./mainMenuScreen.ts";
import productsScreen from "./productsScreen.ts";

export default function getProductScreen(productID: number): Screen {
    const productScreen: Screen = async (state: State) => {
        if (!state.user) return mainMenuScreen;
        await state.user.cart.printSummary();

        const product = await getProduct(productID);
        product.display();
        console.log();
        const choice = getUserChoice([
            "Back to products",
            "Add to cart",
            "Rate product"
        ]);

        switch (choice) {
            case 1:
                return productsScreen;
            case 2:
                state.user.cart.addItem(product.id);
                await updateUser(state.user);
                state.message = `${product.name} added to cart`;
                return productsScreen;
            case 3: {
                const rating = parseInt(prompt("Rating (0-5):") || '0');
                if (rating < 1 || rating > 5) {
                    console.log("Invalid rating");
                    return productScreen;
                }
                product.addRating(rating);
                await updateProduct(product);
                return productScreen;
            }
            default:
                return null;
        }
    }
    return productScreen;
}