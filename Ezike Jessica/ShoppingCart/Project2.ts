// NAME :>      EZIKE JESSICA
//EMAIL :>      jessicaezike.je@gmail.com

// ///////Project2
// /////////////Online Shopping System

class ShoppingCart {
    items: Product[]

    constructor() {
        this.items = []
    }

    addItems(items: Product[]) {
        this.items = [...items] // spread operator
    }

    getTotalPrice() {
        let TotalPriceOfItem = 0

        for(const item of this.items) {
            TotalPriceOfItem += item.GetPrice()
        }
        return TotalPriceOfItem;
    }

}

interface Product {
    GetPrice(): number
}
 

////////Things you can find in the shop
class Groceries {
    quantity: number;

}
class CareProduct implements Product{
    things: "Vitamines" | "Bandages" | "Disinfectant" | "Sunscreen"
    quantity: number

    constructor(things: "Vitamines" | "Bandages" | "Disinfectant" | "Sunscreen", quantity: number) {
        this.things = things
        this.quantity = quantity
    }

    GetPrice(): number {
        switch (this.things) {
            case "Vitamines":
                return 200*this.quantity
            case "Bandages":
                return 1500*this.quantity
            case "Disinfectant":
                return 2000*this.quantity
            case "Sunscreen":
                return 800*this.quantity
            default:
                return 0;
        }
    }
}
class Toiletries implements Product{
    things: ToiletryItems 
    quantity: number

    constructor(things: ToiletryItems, quantity: number) {
        this.things = things
        this.quantity = quantity
    }

    GetPrice(): number {
        switch (this.things) {
            case "Toilet Paper":
                return 200*this.quantity
            case "Towel":
                return 1500*this.quantity
            case "Soap":
                return 2000*this.quantity
            case "Toothpaste":
                return 800*this.quantity
            case "Detergent":
                return 1000*this.quantity
            default:
                return 0;
        }
    }
}



///Things that are concidered Groceries
class Bread extends Groceries implements Product{
    type: breadType
    PackagingStyle: "Sliced" | "Unsliced" 

    constructor(type: breadType, PackagingStyle: "Sliced" | "Unsliced", quantity: number) {
        super();
        this.type = type
        this.PackagingStyle = PackagingStyle
        this.quantity = quantity
    }

    GetPrice(): number {
        switch (this.type) {
            case "Sugar Bread":
                return 200*this.quantity
            case "Sardine Bread":
                return 300*this.quantity
            case "Coconut Bread":
                return 250*this.quantity
            case "Chocolate Bread":
                return 400*this.quantity
            default:
                return 0;
        }
    }
}

class Fruit  extends Groceries implements Product{
    type: fruitType
    
    constructor(type: fruitType, quantity: number) {
        super();
        this.type = type  
        this.quantity = quantity
    }

    GetPrice(): number {
        switch (this.type) {
            case "Apple":
                return 200*this.quantity
            case "Orange":
                return 150*this.quantity
            case "Grapes":
                return 400*this.quantity
            case "Mango":
                return 300*this.quantity
            case "Watermellon":
                return 1000*this.quantity
            default:
                return 0;
        }
    }
}

class Vegetables extends Groceries implements Product{
    type: "Carrot" | "Tomato"

    constructor(type: "Carrot" | "Tomato", quantity: number) {
        super();
        this.type = type
        this.quantity = quantity
    }

    GetPrice(): number {
        switch (this.type) {
            case "Carrot":
                return 500*this.quantity
            case "Tomato":
                return 300*this.quantity
            default:
                return 0;
        }
    }
}

class DairyProduct extends Groceries implements Product{
    type: "Milk" | "Yogurt" | "Cheese"

    constructor(type: "Milk" | "Yogurt" | "Cheese", quantity: number) {
        super();
        this.type = type
        this.quantity = quantity
    }

    GetPrice(): number {
        switch (this.type) {
            case "Milk":
                return 1500*this.quantity
            case "Yogurt":
                return 2000*this.quantity
            case "Cheese":
                return 1500*this.quantity
            default:
                return 0;
        }
    }
}



//defining the types
type ToiletryItems = "Toilet Paper" | "Towel" | "Soap" | "Toothpaste" | "Detergent"
type fruitType = "Apple" | "Orange" | "Grapes" | "Mango" | "Watermellon"
type breadType = "Sugar Bread" | "Sardine Bread" | "Coconut Bread" | "Chocolate Bread"


export{ShoppingCart, Groceries, CareProduct, Toiletries, Product, Bread, Fruit, Vegetables, DairyProduct}

