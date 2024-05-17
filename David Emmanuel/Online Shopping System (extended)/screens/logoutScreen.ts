import { State, Screen } from "../main.ts";
import mainMenuScreen from "./mainMenuScreen.ts";

const logOutScreen: Screen = (state: State) => {
    state.user = undefined;
    state.message = "Logged out";
    return mainMenuScreen;
}

export default logOutScreen;