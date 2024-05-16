import { Screen, State } from "../main.ts";
import { getUserChoice } from "../utils.ts";
import homeScreen from "./homeScreen.ts";
import loginScreen from "./loginScreen.ts";
import signUpScreen from "./signUpScreen.ts";


const mainMenuScreen: Screen = (state: State) => {
    console.log("Online Shopping System");
    if (state.user) return homeScreen;

    const choice = getUserChoice([
        "Login",
        "Sign Up",
        "Exit"
    ])

    switch (choice) {
        case 1:
            return loginScreen;
        case 2:
            return signUpScreen;
    }
    return null;
}

export default mainMenuScreen;