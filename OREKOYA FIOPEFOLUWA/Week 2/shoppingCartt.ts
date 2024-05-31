interface ProductList {
    name : string
    price : number
    tagNumber : string
    quantity : number
}

class TechGagdets implements ProductList{
    constructor(
      public   name : string,
      public   price : number,
      public   tagNumber : string,
      public   quantity : number
    ){}
}
class Foodstuff implements ProductList{
    constructor(
       public  name : string,
       public  price : number,
       public  tagNumber : string,
       public  quantity : number
    ){}
}
class Shoe implements ProductList{
    constructor(
       public  name : string,
       public  price : number,
       public  tagNumber : string,
       public  quantity : number
    ){}
}
class Clothes implements ProductList{
    constructor(
       public  name : string,
       public  price : number,
       public  tagNumber : string,
       public  quantity : number
    ){}
}

class ShoppingCartt{
    items :  ProductList[] = []

    addProduct(items:ProductList){
        this.items.push(items)
    }
    removeProduct(tagNumber: ""){
        const index = this.items.findIndex(items => items.tagNumber === tagNumber)
        if (index > -1){
                        this.items.splice(index, 1)
                    }  
    }
    getProducts(){
        return this.items
    }
    getTotalPrice(): number{
        return this.items.reduce((total, item) => total + item.price, 0)
    }

}

const techGadgets = new TechGagdets("JBLHeadet",40000,"23",1)
const foodStuff = new Foodstuff("Rice",80000,"75",2)
const shoe = new Shoe("Crocs",5000,"3",3)
const clothes = new Clothes("Maxi-skirt",5000,"10",1)

const ShoppingCart = new ShoppingCartt()
ShoppingCart.addProduct(techGadgets)
ShoppingCart.addProduct(foodStuff)
ShoppingCart.addProduct(shoe)
ShoppingCart.addProduct(clothes)
console.log(ShoppingCart.getProducts(), ShoppingCart.getTotalPrice())
