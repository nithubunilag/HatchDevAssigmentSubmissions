import { Product, ProductJSON } from "./Product.ts";
import { IUser, User } from "./User.ts";
import * as path from "https://deno.land/std@0.188.0/path/mod.ts";


const databasePath = path.dirname(path.fromFileUrl(import.meta.url)) + '\\database.json';

interface Database {
    lastId: number;
    products: ProductJSON[],
    users: IUser[]
}

async function getDatabase(): Promise<Database> {
    return JSON.parse(await Deno.readTextFile(databasePath)) as Database;
}

async function writeDatabase(data: object) {
    await Deno.writeTextFile(databasePath, JSON.stringify(data, null, 2));
}

export async function newId(): Promise<number> {
    const database = await getDatabase();
    const newId = database.lastId + 1;
    await writeDatabase({ ...database, lastId: newId });
    return newId;
}

export async function getProducts(): Promise<Product[]> {
    const database = await getDatabase();
    const productsJSON = database.products;
    return productsJSON.map((productJSON: ProductJSON) => new Product(productJSON));
}

export async function getProduct(productID: number): Promise<Product> {
    const products = await getProducts();
    const product = products.find(p => p.id === productID);
    if (product) {
        return product;
    } else {
        throw new Error("Product not found");
    }
}

export async function addProduct(productObj: ProductJSON) {
    const database = await getDatabase();
    const product = new Product(productObj);
    await product.assignId();
    database.products.push(product.toJSON());
    await writeDatabase(database);
    return product.id;
}

export async function updateProduct(product: Product) {
    const database = await getDatabase();
    const products = database.products;
    const targetProduct = products.find(p => p.id === product.id);
    if (targetProduct) {
        targetProduct.ratings = product.ratings;
        targetProduct.details = product.details;
        targetProduct.name = product.name;
        targetProduct.price = product.price;
        targetProduct.seller = product.seller;
        await writeDatabase(database);
    } else {
        throw new Error("User not found.");
    }
}

export async function login(username: string, password: string) {
    const users = (await getDatabase()).users;
    const targetUser = users.find(user => user.username === username && user.password === password);
    return targetUser || null;
}

export async function signUp(userDetails: IUser) {
    const database = await getDatabase();
    const existingUser = database.users.find(user => user.username === userDetails.username);
    if (existingUser) throw new Error("User already exists.");
    database.users.push(userDetails);
    await writeDatabase(database);
}

export async function updateUser(user: User) {
    const database = await getDatabase();
    const users = database.users;
    const targetUser = users.find(u => u.username === user.username);
    if (targetUser) {
        targetUser.email = user.email;
        targetUser.cart = user.cart.toJSON();
        await writeDatabase(database);
    } else {
        throw new Error("User not found.");
    }
}

export async function getItemPrice(itemId: number) {
    const products = await getProducts();
    const product = products.find(p => p.id === itemId);
    if (product) {
        return product.price;
    } else {
        throw new Error("Product not found");
    }
}