/**
 * product interface
 */
export interface Product {
    getName(): string;
    getPrice(): number;
}
/**
 * physical product interface
 */
export interface PhysicalProduct extends Product {
    getWeight(): number;
    getDimensions(): { width: number; height: number };
}
/**
 * digital product interface
 */
export interface DigitalProduct extends Product {
    getDownloadLink(): string;
}

/**
 * abstract class
 */
export abstract class ProductBase implements Product {
    protected _name: string;
    protected _price: number;

    constructor(name: string, price: number) {
        this._name = name;
        this._price = price;
    }
    
    getName(): string {
        return this._name;
    }

    getPrice(): number {
        return this._price;
    }
}

/**
 * implementation of interface and abstract class
 */
export class PhysicalProduct extends ProductBase implements PhysicalProduct {
    private weight: number;
    private dimensions: { width: number; height: number };

    constructor(
        name: string,
        price: number,
        weight: number,
        dimensions: { width: number; height: number }
    ) {
        super(name, price);
        this.weight = weight;
        this.dimensions = dimensions;
    }

    getWeight(): number {
        return this.weight;
    }

    getDimensions(): { width: number; height: number } {
        return this.dimensions;
    }
}

/**
 * implementation of interface and abstract class
 */
export class DigitalProduct extends ProductBase implements DigitalProduct {
    private downloadLink: string;

    constructor(name: string, price: number, downloadLink: string) {
        super(name, price);
        this.downloadLink = downloadLink;
    }

    getDownloadLink(): string {
        return this.downloadLink;
    }
}