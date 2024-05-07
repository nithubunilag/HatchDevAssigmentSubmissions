// ///////Project2
// /////////////Online Shopping System

class ShoppingCart {
    item: item[] = []

    addItems(item: item) {
        this.item.push(item)
    }
}

class item {
    groceries: Groceries
    healthCarePrd: CareProduct 
    toiletries: Toiletries

    constructor() {
        
    }

    private TotalGroceriesPrice(groceries: Groceries): number {
        let groceriesTotal = 0;
        groceriesTotal += groceries.bread.GetPrice();
        groceriesTotal += groceries.fruits.GetPrice();
        groceriesTotal += groceries.veggies.GetPrice();
        groceriesTotal += groceries.dairyPrd.GetPrice();
        return groceriesTotal;
    }

    TotalPriceOfItem(): number {
        let Total = 0
        Total += this.TotalGroceriesPrice(this.groceries)
        Total += this.healthCarePrd.GetPrice()
        Total += this.toiletries.GetPrice()

        return Total;
    }

}


interface Product {
    quantity: number
    GetPrice(): number
}


////////Things in the Item class
class Groceries {
    bread: Bread
    fruits: Fruit
    veggies: Vegetables
    dairyPrd: DairyProduct
}
class CareProduct implements Product{
    things: "Vitamines" | "Bandages" | "Disinfectant" | "Sunscreen"
    quantity: number

    constructor(things: "Vitamines" | "Bandages" | "Disinfectant" | "Sunscreen", quantity: number) {
        this.things = this.things
        this.quantity = this.quantity
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




///Things in the Groceries class
class Bread implements Product{
    type: breadType
    PackagingStyle: "Sliced" | "Unsliced" 
    quantity: number;

    constructor(type: breadType, PackagingStyle: "Sliced" | "Unsliced", quantity: number) {
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
class Fruit implements Product{
    type: fruitType
    quantity: number;

    constructor(type: fruitType, quantity: number) {
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
class Vegetables implements Product{
    type: "Carrot" | "Tomato"
    quantity: number;

    constructor(type: "Carrot" | "Tomato", quantity: number) {
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
class DairyProduct implements Product{
    type: "Milk" | "Yogurt" | "Cheese"
    quantity: number;

    constructor(type: "Milk" | "Yogurt" | "Cheese", quantity: number) {
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


export{ShoppingCart, item, Groceries, CareProduct, Toiletries, Product, Bread, Fruit, Vegetables, DairyProduct}
