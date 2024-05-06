interface product{
    id: number;
    name: string;
    price: number;
}
class Book implements product {
     id: number;
    name: string;
    price: number;
    author: string;

    constructor(id: number, name: string, price: number, author: string) {
        this.id = 1;
        this.name = 'Tears of delight';
        this.price = 5000;
        this.author = 'OverNight';
    }
}

class Electronics implements product {
    id: number;
    name: string;
    price: number;
    brand: string;

    constructor(id: number, name: string, price: number, brand: string) {
        this.id = 1;
        this.name = 'Realblend';
        this.price = 25000;
        this.brand = 'Binatone';
    }
}
class Dispenser implements product {
    id: number;
    name: string;
    price: number;
    brand: string;

    constructor(id: number, name: string, price: number, author: string, brand: string) {
        this.id = 3;
        this.name = 'Water300';
        this.price = 20000;
        this.brand = 'Cway';
    }
}

interface ShoppingCartItem {
    product: Electronics;
    quantity: 1;

}

// class ShoppingCart {
//     private items: ShoppingCartItem['product'] = [ Electronics];
    
//     addProduct(product: Book, quantity: 3) {
//         const Book = this.items.find((book) => (this.) === (this.id))
//     if (existingItem) {
//       existingItem.quantity += quantity;
//     } else {
//       this.items.push({ product, quantity });
//     }
//   }

//   removeProduct(productId: 3) {
//     this. = this.items.filter((item) => (link unavailable) !== productId);
//   }

//   getItems() {
//     return this.items;
//   }

//   getTotalPrice() {
//     return this.items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
//   }
// }
class CartItem {
    static getProduct: any;
    constructor(private Name: Electronics,private Brand: string, private quantity: number) {}

    getProduct(): Electronics {
        return this.Name;
    }
    getBrand(): string {
        return this.Brand
    }

    getQuantity(): number {
        return this.quantity;
    }
}

class ShoppingCart {
    private items: CartItem[] = [];

    addItem(item: CartItem): void {
        this.items.push(item);
    }

    getTotalPrice(): number {
        return this.items.reduce((total, item) => total + (CartItem.getProduct() * item.getQuantity()), 0);
    }
}
const cart = new ShoppingCart();

const book = new Book(1, 'Book Title', 19.99, 'Author Name');
const electronics = new Electronics(2, 'Electronics Item', 99.99, 'Brand Name');
const cartitem = new CartItem(electronics,"brand", 20)

cart.addItem(cartitem); 
console.log(cart.getTotalPrice());
