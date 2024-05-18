interface Product{
    getName(): string;
    getPrice() : number;
    getManufacturer() : string;
}

interface PerishableProduct extends Product{
    getExpiryDate(): Date;
}

class FoodProducts implements PerishableProduct{
    constructor(private name: string, private price: number, private manufacturer: string, private expiryDate: Date){

    }

    getName(): string{
        return this.name;
    }

    getPrice(): number {
        return this.price;
    }

    getExpiryDate(): Date{
        return this.expiryDate;
    }

    getManufacturer(): string {
        return this.manufacturer;
    }

}

class NonPerishableProductTemplate implements Product{
    constructor(private name: string, private price:  number, private manufacturer: string){

    }
    getName(): string{
        return this.name;
    }

    getPrice(): number {
        return this.price;
    }

    getManufacturer(): string {
        return this.manufacturer;
    }
}

class ClothingProducts extends NonPerishableProductTemplate{}

class ElectronicProducts extends NonPerishableProductTemplate{}

class BabyProducts extends NonPerishableProductTemplate{}

class MakeUpProducts extends NonPerishableProductTemplate{}

class ShoppingCart{
    private products: Product[] = [];

    addProduct(product: Product) : void{
        this.products.push(product);
    }

    removeProductByName(name: string): void{
        name = name.toLowerCase();
        const index = this.products.findIndex((product) => 
            {return product.getName().toLowerCase() === name}); 
        if(index !== -1){
            this.products.splice(index, 1)
        }
    }

    getTotal(): number{
        return this.products.reduce((total, item) => total + item.getPrice(), 0);
    }

    displayProducts(): void{
        console.log("\nProducts in your cart: ");
        this.products.forEach(product => {
            if ("getExpiryDate" in product) {
                const perishableProduct = product as PerishableProduct;
                console.log(`${perishableProduct.getName()} - ${perishableProduct.getManufacturer()} - Price: N${perishableProduct.getPrice()} - Expiry Date: ${perishableProduct.getExpiryDate().toDateString()}`);
            } else {
                console.log(`${product.getName()} - ${product.getManufacturer()} - Price: N${product.getPrice()}`);
            }
        });
    
        
        console.log("Total (naira)= N", this.getTotal());
    }

}

const myCart = new ShoppingCart();
const pasta = new FoodProducts("Spaghetti", 700, "Golden Penny", new Date(2024, 11, 27));
const abaya = new ClothingProducts("Abaya", 20_000, "Zara Clothings");
const fridge = new ElectronicProducts("Fridge", 600_000, "Thermocool");
const diapers = new BabyProducts("Diapers", 10_000, "Pampers");
const lipstick = new MakeUpProducts("Lipstick", 5_000, "Matte");

myCart.addProduct(pasta);
myCart.addProduct(abaya);
myCart.addProduct(fridge);
myCart.addProduct(diapers);
myCart.addProduct(lipstick);

myCart.displayProducts();

myCart.removeProductByName("Diapers");
myCart.displayProducts();
