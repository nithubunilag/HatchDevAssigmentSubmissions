interface ProductInterface {
  name: string
  price: number
  quantityInStock: number
}
interface CartItemInterface extends ProductInterface {
  quantity: number
}
interface DiscountInterface {
  type: string
  percentageAmount: number
  applyDiscount: (amount: number) => number
}
interface ShoppingCartInterface {
  discount: DiscountInterface
  cartItems: CartItemInterface[]
  checkout: () => void
  addItems: (...products: ProductInterface[]) => void
}
interface ShopInterface {
  products: { [key: string]: ProductInterface }
  stockItem: (product: ProductInterface) => void
}

class Shop implements ShopInterface {
  products: { [key: string]: ProductInterface } = {}
  stockItem: (product: ProductInterface) => void = product => {
    if (product.name in this.products) {
      this.products[product.name].quantityInStock++
      return
    }
    this.products[product.name] = product
  }
}
class Product implements ProductInterface {
  name: string
  price: number
  quantityInStock: number

  constructor(name: string, price: number, quantityInStock: number) {
    this.name = name
    this.price = price
    this.quantityInStock = quantityInStock
  }
}

class CartItem extends Product implements CartItemInterface {
  name: string
  price: number
  quantityInStock: number
  quantity: number

  constructor(product: ProductInterface, quantity: number) {
    super(product.name, product.price, product.quantityInStock)
    this.quantity = quantity
  }
}

class Discount implements DiscountInterface {
  type: string
  percentageAmount: number
  applyDiscount: (amount: number) => number

  constructor(type: string, amount: number) {
    this.type = type
    this.percentageAmount = amount
    this.applyDiscount = amount => {
      return amount - (this.percentageAmount / 100) * amount
    }
  }
}

class ShoppingCart implements ShoppingCartInterface {
  cartItems: CartItem[]
  addItems: (...products: Product[]) => void = (...products) => {
    const items = products.reduce((acc: CartItem[], curr) => {
      const item = acc.find(item => item.name === curr.name)
      if (item) {
        item.quantity = item.quantity + 1
        return acc
      }

      return [...acc, new CartItem(curr, 1)]
    }, [])

    this.cartItems = items
  }
  checkout: () => void = () => {
    const totalBill = this.cartItems.reduce((acc, curr) => {
      myMart.products[curr.name].quantityInStock -= curr.quantity
      return acc + curr.price * curr.quantity
    }, 0)

    console.log(
      `Your total bill falls to $${this.discount.applyDiscount(totalBill)}`
    )
  }
  discount: DiscountInterface

  constructor(discount?: string) {
    this.discount = new Discount(
      'store discount',
      discount ? +discount.slice(0, -1) : 0
    )
  }
}

const myMart = new Shop()
myMart.stockItem(new Product('phone', 110, 10))
myMart.stockItem(new Product('water', 10, 10))

const myCart = new ShoppingCart()

myCart.addItems(
  myMart.products.phone,
  myMart.products.phone,
  myMart.products.water,
  myMart.products.water
)

myCart.checkout()

//shopping cart and discount have a composition relationship
//cart item and product have an aggregation relationship
