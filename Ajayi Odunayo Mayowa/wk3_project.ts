//Creating a shopping system
type ClothingType = "t-shirt" | "shirt" | "blouse" | "tank top" | "sweatshirt" | "hoodie" | "sweater" | "jacket" | "coat" | "jeans" | "shorts" | "skirt" | "dress" | "suit" | "pajamas" | "joggers" | "palazzo" | "leggings" | "jumpsuit" ;
type FootwareType = "sneakers" | "sandals" | "flip-flops" | "slides" |"loafers" | "boot" | "flat" | "heel" | "wedge" |"slippers";
type BooksType = "fiction" | "non-fiction" | "biography" | "autobiography" | "cookbook" | "textbook" | "encyclopedia" | "dictionary" | "thesaurus" | "history" | "mystery" | "thriller" | "horror" | "science fiction" | "fantasy" | "romance" | "adventure";
type BeautyType = "makeup" | "skincare" | "haircare" | "fragrance" | "nail polish" | "body" | "shower" | "shampoo" | "conditioner" | "lotion" | "moisturizer" | "mask" | "cleanser";
type FoodAndGroceriesType = "fruit" | "vegetable" | "meat" | "dairy" | "bread" | "cereal" | "pasta" | "rice" | "grains" | "beans" | "nuts" | "seeds" | "oil" | "vinegar" | "sauce" | "condiment" | "spice" | "herb" | "seasoning" | "baking" | "flour" | "sugar" | "candy" | "chocolate" | "snack" | "chip" | "cracker" | "cookie" | "biscuit" | "cake" | "pie" | "pastry" | "dessert" | "ice cream" | "frozen" | "beverage" | "water" | "juice" | "soda" | "tea" | "coffee" | "alcohol" | "beer" | "wine" | "liquor";

interface Product { 
    getName(): string;
    getPrice(): number;
    getQuantity(): number;
}

interface Clothing extends Product {
    type: ClothingType;
}
interface Footware extends Product {
    type: FootwareType;
}
interface Books extends Product {
    type: BooksType;
}

interface Beauty extends Product {
    type: BeautyType;
}
interface FoodAndGroceries extends Product {
    type: FoodAndGroceriesType;
}

class ClothingProduct implements  Clothing{
    type: ClothingType;
    price: number;
    quantity: number;
    
    constructor(type: ClothingType, price: number, quantity: number) {
        this.type = type;
        this.price = price;
        this.quantity = quantity;
    }
    

    getName(): string {
        return this.type;
    }

    getPrice(): number {
        return this.price;
    }
    getQuantity(): number {
        return this.quantity;
    }
}

class FootwareProduct implements Footware {
     type: FootwareType;
     price: number;
     quantity: number;

    constructor(type: FootwareType, price: number, quantity: number) {
        this.type = type;
        this.price = price;
        this.quantity = quantity;
    }

    getName(): string {
        return this.type;
    }

    getPrice(): number {
        return this.price;
    }
    getQuantity(): number {
        return this.quantity;
    }
}

class BooksProduct implements Books {
     type: BooksType;
     price: number;
     quantity: number;

    constructor(type: BooksType, price: number, quantity: number) {
        this.type = type;
        this.price = price;
        this.quantity = quantity;
    }

    getName(): string {
        return this.type;
    }

    getPrice(): number {
        return this.price;
    }
    getQuantity(): number {
        return this.quantity;
    }
}

class BeautyProduct implements Beauty {
    type: BeautyType;
    price: number;
    quantity: number;

    constructor(type: BeautyType, price: number, quantity: number) {
        this.type = type;
        this.price = price;
        this.quantity = quantity;
    }


    getName(): string {
        return this.type;
    }

    getPrice(): number {
        return this.price;
    }
    getQuantity(): number {
        return this.quantity;
    }
}

class FoodAndGroceriesProduct implements FoodAndGroceries {
     type: FoodAndGroceriesType;
     price: number;
     quantity: number;

    constructor(type: FoodAndGroceriesType, price: number, quantity: number) {
        this.type = type;
        this.price = price;
        this.quantity = quantity;
    }

    getName(): string {
        return this.type;
    }

    getPrice(): number {
        return this.price;
    }
    getQuantity(): number {
        return this.quantity;
    }
}

class ShoppingCart {
     products: Product[] = [];

    addProduct(product: Product) {
        this.products.push(product);
    }

    removeProduct(product: Product) {
        const index = this.products.indexOf(product);
        if (index >= 0) {
            this.products.splice(index, 1);
        }
    }
    getProducts(): Product[] {
        return this.products;
    }
    calculateTotal(): number {
        return this.products.reduce((total, product) => total + product.getPrice() * product.getQuantity(), 0);
    }
}

let tshirt = new ClothingProduct("t-shirt", 20, 2);
let book = new BooksProduct("fiction", 15, 3);
let beauty = new BeautyProduct("makeup", 50, 1);
let food = new FoodAndGroceriesProduct("fruit", 5, 1);


let cart = new ShoppingCart();
cart.addProduct(tshirt);
cart.addProduct(book);
cart.addProduct(beauty);
cart.addProduct(food);
// cart.removeProduct(book);
console.log("Items in cart: " ,  cart.getProducts());
console.log("Total: #" + cart.calculateTotal());