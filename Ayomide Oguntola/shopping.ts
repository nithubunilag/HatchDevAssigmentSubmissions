// *Project 2: Online Shopping System*

// - Design and implement a simple online shopping system. 
// Use interfaces for different types of products, 
// and demonstrate composition and aggregation for the shopping user1_cart. 
// Apply SOLID principles in your design.


class User {
    name: string;
    email: string;
    password: string;

    constructor(name: string, email: string, password: string) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    static register(name: string, email: string, password: string): User {
        return new User(name, email, password);
    }

    static login(username: string, password: string, users: User[]): User {
        const user = users.find(u => u.name === username && u.password === password);
        if (user) {
            return user;
        }
        throw new Error("Invalid username or password");
    }
}

class Item {
    name: string;
    price: number;
    quantity: number;

    constructor(name: string, price: number, quantity: number) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}

class ShoppingCart {
    user: User;
    items: Item[];

    constructor(user: User) {
        this.user = user;
        this.items = [];
    }

    addItem(item: Item): void {
        this.items.push(item);
    }

    removeItem(item: Item): void {
        const index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    }

    calculateTotalCost(): number {
        let totalCost = 0;
        for (const item of this.items) {
            totalCost += item.price * item.quantity;
        }
        return totalCost;
    }
}

// register users
const user1 = User.register('Ayson', 'ayson@gmail,com', '123456')
const user2 = User.register('Samide', 'samide@ymail.com', '22222')

// add and remove items to and from the cart
const item1 = new Item('Shirt', 20, 2);
const item2 = new Item('Pants', 30, 1);
const user1_cart = new ShoppingCart(user1);

user1_cart.addItem(item1);
user1_cart.addItem(item2);

// console.log(user1_cart.calculateTotalCost()); // 70
user1_cart.removeItem(item1);
// console.log(user1_cart.calculateTotalCost()); // 30

console.log(user1_cart.items)
console.log(user1.name + `'s total amount is `+ user1_cart.calculateTotalCost()); 


// user2 items
const item3 = new Item('Shoes', 50, 1);
const item4 = new Item('Hat', 10, 2);
const user2_cart = new ShoppingCart(user2);

user2_cart.addItem(item3);
user2_cart.addItem(item4);

console.log(user2_cart.items)
console.log(user2.name + `'s total amount is `+ user2_cart.calculateTotalCost()); 
console.log("Thank you for shopping with us!")

// login users
const userr1 = User.login('Ayson', '123456', [user1]);  // logins successfully
// const userr1 = User.login('Ayson1', '123456', [user1]); throws the error message