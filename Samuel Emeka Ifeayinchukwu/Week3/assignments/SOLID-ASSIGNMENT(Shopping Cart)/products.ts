export interface Product {
    id: number;
    name: string;
    price: number;
}

interface Electronics extends Product {
    brand: string;
}

interface Book extends Product {
    author: string;
}

interface Clothing extends Product {
    size: string;
}


export class ElectronicProduct implements Electronics {
    constructor(public id: number, public name: string, public price: number, public brand: string) {}
}

export class BookProduct implements Book {
    constructor(public id: number, public name: string, public price: number, public author: string) {}
}

export class ClothingProduct implements Clothing {
    constructor(public id: number, public name: string, public price: number, public size: string) {}
}


