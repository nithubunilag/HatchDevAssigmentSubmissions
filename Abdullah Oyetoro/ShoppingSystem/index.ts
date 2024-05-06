class Product{
  protected productId : string;
  protected productName: string;
  protected price: number;
  description:string = "";
  protected category: string;
  constructor(productName: string, price:number, category:string, productId:string){
    this.productName = productName
    this.price = price
    this.category = category
    this.productId = productId
  }

  get getPrice(){
    return this.price
  }
  categoryLookup(): string {
    return this.category
  }
  set setName(name:string){
    this.productName = name
  }
  set setDescription(description:string){
    this.description = description
  }
   get getName(){
    return this.productName
  }
  get getDescription(){
    return this.description
  }
  get getProductId(){
    return this.productId
  }

}

class Category {
  name:string;
  products:Product[]= [];
  constructor(name:string){
    this.name = name
  }
  addProduct(product:Product){
    if (product.categoryLookup().toLowerCase() == this.name.toLowerCase()){
      this.products.push(product)
    }
    else{
      console.log('Not part of the category')
    }
  }
  set removeProduct(productName:string){
    let i = this.products.findIndex((object)=>{
      object.getName.toLowerCase == productName.toLowerCase
    })
    if (i != -1){
      this.products.splice(i)
    }
  }
}
class Shop{

}
class ShoppingCart {
  name: string;
  protected cart: Product[]= [];
  protected priceList: number[] = [];
  constructor(name: string){
    this.name = name
  }
  getCart(){
    return this.cart
  }
  set addToCart(product:Product){
    this.cart.push(product)
  }
  getPricelist(){   
    this.cart.filter((object)=>{
      this.priceList.push(object.getPrice)
    })
    return this.priceList
  }
  get subtotal(){
    let sublist  = this.getPricelist()
    let total = 0
    for (let i = 0; i<sublist.length; i++){
      total +=sublist[i]
    }
    return total
  }
}
export{Product,Category,ShoppingCart}




