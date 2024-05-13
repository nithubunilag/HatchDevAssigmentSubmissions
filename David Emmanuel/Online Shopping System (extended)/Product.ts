import { newId } from "./database.ts";
import { formatPrice } from "./utils.ts";

export interface ProductJSON {
    id: number;
    name: string;
    price: number;
    ratings: number[];
    details: ProductDetails;
    seller: string;
}

export class Product {
    private _id: number;
    private _name: string;
    private _price: number;
    private _ratings: number[];
    private _details: ProductDetails;
    private _seller: string;

    constructor({ name, price, details, seller, ratings = [], id = -1 }: {
        name: string,
        price: number,
        details: ProductDetails,
        seller: string,
        ratings: number[],
        id: number
    }) {
        this._id = id;
        this._name = name;
        this._price = price;
        this._ratings = ratings;
        this._details = details;
        this._seller = seller;

        if (id === -1) this.assignId();
    }

    toJSON: () => ProductJSON = () => {
        return {
            id: this.id,
            name: this.name,
            price: this.price,
            ratings: this._ratings,
            details: this._details,
            seller: this._seller
        }
    }

    async assignId() {
        if (this._id === -1) {
            const id = await newId();
            this._id = id;
        }
    }

    display() {
        console.log(this._name);
        console.log(formatPrice(this._price));
        if (this._ratings.length === 0) {
            console.log("No ratings yet");
        } else {
            console.log(`${this.averageRating()}/5 (Rated by ${this._ratings.length} users)`);
        }
        console.log("Seller:", this._seller);
        console.log("\nProduct details:");
        Object.entries(this._details).forEach(([key, value]) => {
            console.log(`   ${key}: ${value}`);
        });
    }

    get id() {
        if (this._id === -1) throw new Error("Product has not been assigned an id");
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    get price(): number {
        return this._price;
    }

    get ratings(): number[] {
        return this._ratings;
    }

    averageRating(): number {
        if (this._ratings.length === 0) {
            return 0;
        }

        const sum = this._ratings.reduce((total, rating) => total + rating, 0);
        return sum / this._ratings.length;
    }

    addRating(rating: number) {
        this._ratings.push(rating);
    }

    get details(): ProductDetails {
        return this._details;
    }

    get seller(): string {
        return this._seller;
    }
}

export type ProductDetails = ElectronicsDetails | BookDetails | ClothingDetails | LaptopDetails;

export function buildProductDetails(productType: string): ProductDetails {
    switch (productType) {
        case "Electronics":
            return {
                manufacturer: prompt("Manufacturer:") || "",
                model: prompt("Model:") || "",
                year: parseInt(prompt("Year:") || "")
            } as ElectronicsDetails;
        case "Book":
            return {
                title: prompt("Title:") || "",
                author: prompt("Author:") || "",
                isbn: prompt("ISBN:") || "",
            } as BookDetails;
        case "Clothing":
            return {
                size: prompt("Size:") || "",
                color: prompt("Color:") || "",
                material: prompt("Material:") || "",
                brand: prompt("Brand:") || ""
            } as ClothingDetails;
        case "Laptop":
            return {
                processor: prompt("Processor:") || "",
                ramGB: parseInt(prompt("RAM (GB):") || "0"),
                storageGB: parseInt(prompt("Storage (GB):") || "0"),
                storageType: prompt("Storage type (SSD/HDD):")?.toUpperCase() as "SSD" | "HDD" || "HDD",
                display: prompt("Display:") || "",
                os: prompt("OS:") as "Windows" | "MacOS" | "Linux" | "Other" || "Other"
            } as LaptopDetails;
        default:
            throw new Error("Invalid product type");
    }
}

export interface ElectronicsDetails {
    [key: string]: string | number;
    manufacturer: string;
    model: string;
    year: number;
}

export interface BookDetails {
    [key: string]: string;
    title: string;
    author: string;
    isbn: string;
}

export interface ClothingDetails {
    [key: string]: string;
    size: string;
    color: string;
    material: string;
    brand: string;
}

export interface LaptopDetails {
    [key: string]: string | number;
    processor: string;
    ramGB: number;
    storageGB: number;
    storageType: "SSD" | "HDD";
    display: string;
    os: "Windows" | "MacOS" | "Linux" | "Other";
}