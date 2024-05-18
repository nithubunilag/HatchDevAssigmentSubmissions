import { User } from "./User.ts";
import homeScreen from "./screens/homeScreen.ts";

export class State {
    user?: User;
    message?: string;
}

export type Screen = (state: State) => Screen | null | Promise<Screen | null>;

async function main() {
    let currentScreen: Screen | null = homeScreen;
    const state: State = {};

    while (currentScreen !== null) {
        console.clear();
        console.log('-------------------------------');
        console.log(currentScreen.name);
        if (state.message) {
            console.log(`ALERT: ${state.message}`);
            state.message = undefined;
        }
        console.log('-------------------------------');
        const nextScreen: Screen | null | Promise<Screen | null> = currentScreen(state) || null;
        if (nextScreen instanceof Promise) {
            currentScreen = await nextScreen;
        } else {
            currentScreen = nextScreen;
        }
    }
}

await main();