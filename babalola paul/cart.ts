// Interface for a general product
interface Product {
    id: number;
    name: string;
    price: number;
}

// Interface for electronic products
interface ElectronicProduct extends Product {
    brand: string;
    warranty: number;
}

// Interface for clothing products
interface ClothingProduct extends Product {
    size: string;
    color: string;
}

// Interface for books
interface BookProduct extends Product {
    author: string;
    genre: string;
}
// ShoppingCartItem class represents an item in the shopping cart
class ShoppingCartItem {
    constructor(public product: Product, public quantity: number) {}
}

// ShoppingCart class represents the shopping cart itself
class ShoppingCart {
    private items: ShoppingCartItem[] = [];

    addItem(item: ShoppingCartItem) {
        this.items.push(item);
    }

    removeItem(id: number) {
        this.items = this.items.filter(item => item.product.id !== id);
    }

    getTotalPrice(): number {
        return this.items.reduce((total, item) => total + item.product.price * item.quantity, 0);
    }

    getItems(): ShoppingCartItem[] {
        return this.items;
    }
}

// ProductCategory class represents a category of products
class ProductCategory<T extends Product> {
    constructor(public products: T[]) {}

    getProductById(id: number): T | undefined {
        return this.products.find(product => product.id === id);
    }
}
// Sample electronic products
const electronics: ElectronicProduct[] = [
    { id: 1, name: "Laptop", price: 1000, brand: "Dell", warranty: 2 },
    { id: 2, name: "Smartphone", price: 800, brand: "Apple", warranty: 1 },
];

// Sample clothing products
const clothing: ClothingProduct[] = [
    { id: 3, name: "T-Shirt", price: 20, size: "M", color: "Blue" },
    { id: 4, name: "Jeans", price: 50, size: "32", color: "Black" },
];

// Sample book products
const books: BookProduct[] = [
    { id: 5, name: "The Great Gatsby", price: 15, author: "F. Scott Fitzgerald", genre: "Fiction" },
    { id: 6, name: "Clean Code", price: 30, author: "Robert C. Martin", genre: "Programming" },
];

// Create a product catalog with different categories
const catalog = {
    electronics: new ProductCategory(electronics),
    clothing: new ProductCategory(clothing),
    books: new ProductCategory(books),
};
// Create a new shopping cart
const cart = new ShoppingCart();

// Add some items to the cart
const laptop = catalog.electronics.getProductById(1);
if (laptop) {
    cart.addItem(new ShoppingCartItem(laptop, 2));
}

const tShirt = catalog.clothing.getProductById(3);
if (tShirt) {
    cart.addItem(new ShoppingCartItem(tShirt, 3));
}

// Get total price and items in the cart
console.log("Total Price:", cart.getTotalPrice());
console.log("Items in Cart:", cart.getItems());

// Remove an item from the cart
cart.removeItem(3);
console.log("Items in Cart after removal:", cart.getItems());
