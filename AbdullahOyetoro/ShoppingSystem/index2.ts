import {Product,Category,ShoppingCart} from "./index.ts";

let category2 = new Category('Electronics')
let category1 = new Category('Phones')
let product1 = new Product('Showerhead', 4,"plumbing", 'PL1')
let product2 = new Product('bed',4, "electronics",'EL2')
let product3 = new Product('Infinix',4,"Phones",'PH4')
let product4 = new Product('tecno',4,"Phones","PH4")
const myCart = new ShoppingCart('Abdullahs')

category2.addProduct(product1)
category2.addProduct(product2)
category1.addProduct(product3)
category1.addProduct(product4)

// let someProducts:Product[]= [product1,product2,product3,product4]
myCart.addToCart = product1
myCart.addToCart = product2
myCart.addToCart = product3
myCart.addToCart = product4

// category1.addProducts(someProducts)
console.log(myCart.getCart())
console.log(myCart.getPricelist())




