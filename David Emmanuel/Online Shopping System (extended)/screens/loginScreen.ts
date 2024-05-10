import { login } from "../database.ts";
import { Screen, State } from "../main.ts";
import { getUserChoice } from "../utils.ts";
import homeScreen from "./homeScreen.ts";
import signUpScreen from "./signUpScreen.ts";
import { IUser, User } from "../User.ts";

const loginScreen: Screen = async (state: State) => {
    const username = prompt("Username:") || '';
    const password = prompt("Password:") || '';

    let user: IUser | null = null;
    user = await login(username, password);
    if (user === null) {
        console.log("Invalid login");
        const choice = getUserChoice([
            "Try again",
            "Sign up"
        ]);
        switch (choice) {
            case 2:
                return signUpScreen;
            default:
                return loginScreen;
        }
    } else {
        state.user = new User(user);
        state.message = `Welcome back, ${user.username}!`;
        return homeScreen;
    }
}

export default loginScreen;