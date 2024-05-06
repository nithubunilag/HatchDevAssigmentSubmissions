interface Bag {
    designer: string;
    material: string;
    size: number;
    hasZip: boolean;
    color: string;
    hasHandle: boolean;
    prize: number;
}

interface Shirt {
    designer: string;
    material: string;
    size: number;
    hasCollar: boolean;
    color: string;
    prize: number;
}

class Bag implements Bag {
    designer: string;
    material: string;
    size: number;
    hasZip: boolean;
    color: string;
    hasHandle: boolean;
    prize: number;

    constructor(designer: string, material: string, size: number, hasZip: boolean, color: string, hasHandle: boolean, prize: number) {
        this.designer = designer
        this.material = material
        this.size = size
        this.hasZip = hasZip
        this.color = color
        this.hasHandle = hasHandle
        this.prize = prize
    }
}

class Shirt implements Shirt {
    designer: string;
    material: string;
    size: number;
    hasCollar: boolean;
    color: string;
    prize: number;

    constructor(designer: string, material: string, size: number, hasCollar: boolean, color: string, prize: number) {
        this.designer = designer
        this.material = material
        this.size = size
        this.hasCollar = hasCollar
        this.color = color
        this.prize = prize
    }
}

class Cart {
    private items: (Bag | Shirt)[] = []
    private totalPrice: number = 0
    private totalShirts: number = 0
    private totalBags: number = 0
    private totalItems: number = 0

    addItem(item: Bag | Shirt) {
        if (!(item instanceof Bag) && !(item instanceof Shirt)) {
            console.log("Invalid input: The new value must be an instance of Bag or Shirt")
            return
        }
        this.items.push(item)
    }

    removeItem(item: Bag | Shirt) {
        this.items = this.items.filter(i => i !== item)
    }

    private calculateTotal() {
        this.totalPrice = this.items.reduce((acc, item) => {
            return acc + item.prize
        }, 0)
        this.totalPrice = Math.round(this.totalPrice * 100) / 100
    }

    showTotalPrice() {
        this.calculateTotal();
        console.log(`Total price: ${this.totalPrice}`)
    }

    showItems() {
        //Map through items, if items has goodType shirt, sum up the number of shirt and show totalNumber: shirts and also the same for bags
        this.items.map(item => {
            if (item instanceof Shirt) {
                this.totalShirts++
            } else if (item instanceof Bag) {
                this.totalBags++
            }
        })
        this.totalItems = this.items.length
        console.log(`Total number of shirts: ${this.totalShirts}`)
        console.log(`Total number of bags: ${this.totalBags}`)
        console.log(`Total number of items: ${this.totalItems}`)
        console.log(this.items)
    }
}

const cart = new Cart()
const shirt = new Shirt("Gucci", "Cotton", 38, true, "White", 200)
const bag = new Bag("Prada", "Leather", 12, true, "Black", true, 500)
cart.addItem(shirt)
cart.addItem(bag)
cart.showItems()
cart.showTotalPrice()