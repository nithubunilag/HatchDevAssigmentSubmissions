import { Furniture, Grocery, Accessories } from "./interfaces";

export class GroceryItems implements Grocery {
    id: number;
    name: string;
    price: number;
    quantity: number;
    amount: number;
    category: string;
    brand: string;

    constructor(id: number, name: string, price: number, quantity: number, amount: number, category: string, brand: string) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.amount = amount;
        this.category = category;
        this.brand = brand;
    }
}

export class FurnitureItems implements Furniture {
    id: number;
    name: string;
    price: number;
    quantity: number;
    amount: number;
    category: string;
    color: string;
    size: string;
    material: string;

    constructor(id: number, name: string, price: number, quantity: number, amount: number, category: string, color: string, size: string, material: string) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.amount = amount;
        this.category = category;
        this.color = color;
        this.size = size;
        this.material = material;
    }
}

export class AccessoriesItems implements Accessories {
    id: number;
    name: string;
    price: number;
    quantity: number;
    amount: number;
    category: string;
    design: string;

    constructor(id: number, name: string, price: number, quantity: number, amount: number, category: string, design: string) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.amount = amount;
        this.category = category;
        this.design = design;
    }
}