interface Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

interface Book extends Product {
    author: string;
}

interface Cloth extends Product {
    size: string;
}

interface Shoe extends Product {
    size: number;
}

class ShoppingCart {
    private items: Product[] = [];

    addItem(item: Product){
        this.items.push(item)
    }

    removeItem(id:number){
        this.items = this.items.filter(item => item.id !== id)
    }

    getTotal(): number {
        return this.items.reduce((total, item) => total + item.price, 0);
    }

    getitems(): Product[] {
        return this.items
    }

    // Composition is shown here: The 'ShoppingCart' class composes of 'Product' objects. The shopping cart "has-a" collection of products
    // Aggregation is also shown: The ShoppingCart class aggregates 'Product' objects in its 'items' array
    
}

// Implementation of the three Concrete Product Classes

class BookProduct implements Book {
    constructor(public id: number,
       public author: string,
       public name: string,
       public price: number,
       public quantity: number){}   
}

class ClothProduct implements Cloth {
    constructor(  public id: number,
        public size: string,
        public name: string,
        public price: number,
        public quantity: number){}    
}

class ShoeProduct implements Shoe{
    constructor( public id: number,
        public size: number,
        public name: string,
        public price: number,
        public quantity: number){}   
}

const cart = new ShoppingCart();

const book = new BookProduct(1,"The Lion and the Jewel", "Wole Soyinka", 19, 1);
const cloth = new ClothProduct( 2, "Sweatshirt","M", 25, 1)
const shoe = new ShoeProduct(3, 8, "Puma Sneakers",  50, 1)

cart.addItem(book)
cart.addItem(cloth)
cart.addItem(shoe)

console.log("Total price:", cart.getTotal());
console.log("Items in cart:", cart.getitems());

cart.removeItem(2);

console.log("Total price after removing item:", cart.getTotal());
console.log("Items in cart after removing item:", cart.getitems());
