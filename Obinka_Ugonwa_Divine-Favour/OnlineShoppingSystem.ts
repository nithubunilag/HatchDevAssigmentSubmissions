// Name: Obinka Ugonwa Divine-Favour
// email: divneobk@gmail.com

class ShoppingCart<T extends Hooks | Yarns | Tools>{
    products: T[] = [];
    orderList: {item: T, quantity:number}[] = []
    totalPrice: number

    // adds items to order list and the method returns the total price 
    addToCart(item: T, quantity: number = 1){ // set default quantity of product to buy to 1
        this.orderList.push({item, quantity})
        this.totalPrice += (item.getPrice() * quantity)
    }

    getTotalPrice(): number{
        return this.totalPrice
    }

    // accepts payment 
    pay(amount: number){
        if (amount < this.totalPrice){
            throw Error (`Total amount to pay is ${this.totalPrice}`)
        }else if(amount = this.totalPrice) {
            console.log("Payment recieved. Order has been processed completely")
        }else{
            const balance = amount - this.totalPrice
            console.log(`Payment recieved. Here's your balance of ${balance}`)
        }
    }
}

// defining producct interface
interface IProducts{
    getPrice(): number
}


class Hooks implements IProducts{

    constructor(private categories: hookType){}
    
    getPrice(): number{
        if(!hookPrice[this.categories]){ // if product is not a key in hookprice hashmap, reutrn error
            throw new Error ("Hook type unavailable in store.")
        }else{
            return hookPrice[this.categories] // else return the value;price of the key;product
        }
    }
}

class Yarns implements IProducts{
    constructor(private categories: yarnType){}

    getPrice(): number{
        if(!yarnPrice[this.categories]){
            throw new Error ("Yarn type unavailable in store.")
        }else{
            return yarnPrice[this.categories]
        }
    }
}

class Tools implements IProducts{
    constructor(private categories: toolType){}

    getPrice(): number{
        if(!toolsPrice[this.categories]){
            throw new Error ("Tool is unavailable in store.")
        }else{
            return toolsPrice[this.categories]
        }
    }
}


// defining prices of products using hashmap/dictionaries
const hookPrice: Record<hookType, number> = {
    "Aluminium" : 1000,
    "Bamboo" : 2000,
    "Acrylic" : 1500,
    "Tunisian" : 1300,
    "Luxury": 2000
}
const yarnPrice: Record<yarnType, number> = {
    "Worsted Weight": 2000,
    "Faux Fur": 2500,
    "Metallic": 4000,
    "Blanket yarn": 2500,
    "T Shirt": 6000,
    "Acrylic": 1200,
    "Milk Cotton": 1300,
    "Silk": 2300
}
const toolsPrice: Record<toolType, number> = {
    "Sentro Machine": 40000,
    "Stitch Markers": 50,
    "Tape Measure": 1000,
    "Tension Ring": 500
}

// defining the type that holds the different product in the main categories
type hookType = "Aluminium" | "Bamboo" | "Acrylic" | "Tunisian" | "Luxury"
type yarnType = "Worsted Weight" | "Faux Fur" | "Metallic" | "Blanket yarn" | "T Shirt" | "Acrylic" | "Milk Cotton" | "Silk";
type toolType = "Sentro Machine" | "Stitch Markers" | "Tape Measure" | "Tension Ring";



//////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
// implementing the shopping system
let myOrder = new ShoppingCart()
let yarnOrder = new Yarns("Acrylic")
let hookOrder = new Hooks("Bamboo")
let toolsOrder = new Tools('Sentro Machine')
let toolsOrder2 = new Tools("Tension Ring")
myOrder.addToCart(yarnOrder, 7)
myOrder.addToCart(hookOrder, 2)
myOrder.addToCart(toolsOrder, 1)
myOrder.addToCart(toolsOrder2, 3)
let amount = myOrder.getTotalPrice()
console.log(amount)
myOrder.pay(60000)
