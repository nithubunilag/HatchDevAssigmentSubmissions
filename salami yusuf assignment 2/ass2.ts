interface Guide {
    getName(): string;
    getPrice(): number;
}

class Products implements Guide {

    constructor( public ProductName:string ,public  ProductPrice:number){}

    getName():string {
        return this.ProductName;
    }

    getPrice(): number {
        return this.ProductPrice;
    }

}

class ShoppingCart {
    private items: Guide[] = [];

    addItems(item: Guide):void {
        this.items.push(item)
    }
    
    removeItem(item:Guide):void {
        const index = this.items.indexOf(item);
        if(index !== -1){
            this.items.splice(index,1);
        }
    }
}

const rice = new Products("rice", 100);
const cassavaFlakes = new Products("garri", 50)

const order = new ShoppingCart();

order.addItems(rice);
order.addItems(cassavaFlakes);

console.log(order)