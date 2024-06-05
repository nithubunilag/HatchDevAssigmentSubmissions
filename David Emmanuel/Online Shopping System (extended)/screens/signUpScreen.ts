import { signUp } from "../database.ts";
import { Screen, State } from "../main.ts";
import mainMenuScreen from "./mainMenuScreen.ts";

const signUpScreen: Screen = async (state: State) => {
    const username = prompt("Username:") || '';
    const email = prompt("Email:") || '';
    const password = prompt("Password:") || '';

    console.log("Creating new account...");
    await signUp({
        username,
        email,
        password,
        cart: { items: [] }
    });
    state.message = "Account created successfully!";
    return mainMenuScreen;
}

export default signUpScreen;