import { ProductDetails, buildProductDetails } from "../Product.ts";
import { addProduct } from "../database.ts";
import { Screen, State } from "../main.ts";
import { getUserChoice } from "../utils.ts";
import mainMenuScreen from "./mainMenuScreen.ts";
import getProductScreen from "./productScreen.ts";

const sellerScreen: Screen = async (state: State) => {
    if (!state.user) return mainMenuScreen;
    console.log("New product");
    
    const productTypes = ["Electronics", "Clothing", "Book", "Laptop"];
    console.log("Product type:");
    const choice = getUserChoice(productTypes);
    const productType = productTypes[choice-1];
    
    const name = prompt("Name:") || '';
    const price = parseInt(prompt("Price:") || '');

    const details: ProductDetails = buildProductDetails(productType);

    const id = await addProduct({
        name,
        price,
        seller: state.user.username,
        details,
        ratings: [],
        id: -1
    });
    state.message = `${name} is now for sale`;
    return await getProductScreen(id);
}

export default sellerScreen;
