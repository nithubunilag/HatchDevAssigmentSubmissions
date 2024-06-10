// Implementing Interfaces for products

export interface Items {
    id: number;
    name: string;
    price: number;
    quantity: number;
    amount: number;
    category: string;
}

export interface Furniture extends Items {
    color: string;
    size: string;
    material: string;
}

export interface Grocery extends Items {
    brand: string;
}
export interface Accessories extends Items{
    design: string;
}