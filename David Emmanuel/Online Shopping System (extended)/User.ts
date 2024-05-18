import { CartJSON, ShoppingCart } from "./Cart.ts";

export interface IUser {
    username: string;
    email: string;
    cart: CartJSON;
    password: string;
}

export class User {
    private _username: string;
    private _email: string;
    private _cart: ShoppingCart;

    constructor(userDetails: IUser) {
        this._username = userDetails.username;
        this._email = userDetails.email;
        this._cart = new ShoppingCart(userDetails.cart);
    }

    get username() {
        return this._username;
    }

    get email() {
        return this._email;
    }

    get cart() {
        return this._cart;
    }
}