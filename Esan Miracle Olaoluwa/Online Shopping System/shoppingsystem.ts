interface Product {
    id: number;
    name: string;
    price: number;
    imageUrl?: string;
    description: string;
    quantity: number;
}

interface Groceries extends Product {
    expiryDate: Date;
    brand: string;
}

interface ElectronicProducts extends Product {
    brand: string;
}

interface ClothingProducts extends Product {
    size: string;
}

interface Books extends Product {
    author: string;
}

class ShoppingCart {
    private items: Product[] = [];

    isAvailable(item: Product) {
        if (item.quantity > 0) {
            return true;
        } else {
            return false;
        }
    }
    addItem(item: Product) {
        if (this.isAvailable(item)) {
            this.items.push(item);
        } else {
            console.log(`"${item.name}" is out of stock.`);
        
        }
    }

    removeItem(item: Product) {
        const index = this.items.findIndex((i) => i.id === item.id);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    }


    getTotalPrice() {
        return this.items.reduce((total, item) => total + item.price, 0);
    }
}


const cart = new ShoppingCart();

const freezer: ElectronicProducts = {
    id: 1,
    name: "Deep freezer",
    price: 850,
    brand: "Thermocool",
    imageUrl: "Imageurl",
    description: "This is a deep freezer",
    quantity: 1
};

const jersey: ClothingProducts = {
    id: 2,
    name: "Super Eagles Jersey",
    price: 40,
    size: "L",
    imageUrl: "Imageurl",
    description: "This is a super eagles jersey",
    quantity: 2
};

const book: Books = {
    id: 3,
    name: "Verity",
    price: 10,
    imageUrl: "Imageurl",
    description: "Verity is Colleen Hoover's best book yet(actually the only book I've read by her)",
    author: "Collen Hover",
    quantity: 1
};

const cereals: Groceries = {
    id: 4,
    name: "Corn flakes",
    price: 5,
    description: "Corn flakes >>>>>>>> golden morn(trash)",
    expiryDate: new Date("2026-11-12"),
    brand: "Kellogs",
    quantity: 0
};

const milk: Groceries = {
    id: 5,
    name: "Hollandia evap milk",
    price: 2,
    description: "The best milk in my opinion",
    expiryDate: new Date("2025-07-01"),
    brand: "Hollandia",
    quantity: 3
};

const products: ( ElectronicProducts | ClothingProducts | Books | Groceries )[] = [freezer, jersey, book, cereals, milk];  
  for (const product of products) {
    cart.addItem(product);
  }
  


console.log("Total price: $", cart.getTotalPrice());

console.log("Items in cart:", cart);
cart.isAvailable(cereals);