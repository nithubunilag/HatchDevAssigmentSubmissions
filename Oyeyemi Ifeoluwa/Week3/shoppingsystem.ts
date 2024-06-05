interface Shopping {
    id : string
    name : string
    quantity: number
    price : number
}

class Dress implements Shopping{
    constructor(
        public id: string,
        public name: string,
        public quantity: number,
        public price: number) {}
}
class Shoe implements Shopping{
    constructor(
        public id: string,
        public name: string,
        public quantity: number,
        public price: number) {}
}
class Bag implements Shopping{
    constructor(
        public id: string,
        public name: string,
        public quantity: number,
        public price: number) {}
}
class Cart {
    private product: (Bag | Shoe)[] = []

    addProduct(product:Bag | Shoe){
        this.product.push(product)
    }
    removeProduct(id: string) {
        const index = this.product.findIndex(product => product.id === id)
        if (index > -1){
            this.product.splice(index, 1)
        }
        // const Id = this.product.filter((product) => product.id !==id)
    }
    getProduct(){
        return this.product
    }
    getTotal(){
        return this.product.reduce((total, product) => total + product.price, 0)
    }
}

const dress = new Dress("A", "Maxi", 2, 6000)
const shoe = new Shoe("B", "Flat", 4, 16000 )
const bag = new Bag("C", "Tote", 3, 7500)

const shoppingCart = new Cart()
shoppingCart.addProduct(dress)
shoppingCart.addProduct(shoe)
shoppingCart.addProduct(bag)

console.log(shoppingCart.getProduct(), shoppingCart.getTotal())