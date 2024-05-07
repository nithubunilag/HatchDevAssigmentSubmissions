interface MyProduct {
  name: string;
  price: number;
  tags: string[];
  expires: Date;
  inStock: boolean;
  description: string;
}

interface Grocery extends MyProduct {
  perishable: boolean;
  weight: number;
  brand: string;
  category: string;
}

interface MyPaymentMethod {
  pay(amount: number): void;
}

class MyATMCardPayment implements MyPaymentMethod {
  constructor(private cardNumber: string, private cvv: string) {
    this.cardNumber = cardNumber;
    this.cvv = cvv;
  }

  pay(amount: number): void {
    console.log(`Paid $${amount} with ATM card.`);
  }
}

class MyCartItem {
  constructor(public product: MyProduct, public quantity: number) {}
}

class MyShoppingCart {
  private item: MyCartItem[] = [];

  constructor(item: MyCartItem[] = []) {
    this.item = item;
  }

  addItem(item: MyCartItem): void {
    this.item.push(item);
  }

  removeItem(item: MyCartItem): void {
    this.item = this.item.filter(
      (cartItem) => cartItem.product.name !== item.product.name
    );
  }

  calculateTotal(): number {
    return this.item.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  }

  checkout(paymentMethod: MyPaymentMethod): void {
    const totalAmount = this.calculateTotal();
    paymentMethod.pay(totalAmount);
    console.log("Checkout successful!");
  }
}

const UmarGrocery: Grocery = {
  name: "Umar Biscuit",
  price: 100,
  tags: ["food", "grocery"],
  expires: new Date(),
  inStock: true,
  description: "This is a grocery item",
  perishable: true,
  weight: 2,
  brand: "Umar Brand",
  category: "grocery",
};

const AbdulLateefGrocery: Grocery = {
  name: "Abdul Lateef Gala",
  price: 1000,
  tags: ["food", "grocery"],
  expires: new Date(),
  inStock: true,
  description: "This is a grocery item",
  perishable: true,
  weight: 6,
  brand: "Abdul Lateef Brand",
  category: "grocery",
};

function IWantToBuySomething() {
  const AbdulLateefShoppingCart = new MyShoppingCart();
  const BiscuitCartItem = new MyCartItem(UmarGrocery, 7);
  const GalaCartItem = new MyCartItem(AbdulLateefGrocery, 20);
  const addedBiscuit = AbdulLateefShoppingCart.addItem(BiscuitCartItem);
  const removedBiscuit = AbdulLateefShoppingCart.removeItem(BiscuitCartItem);
  const addedGala = AbdulLateefShoppingCart.addItem(GalaCartItem);
  const newAddedBiscuit = AbdulLateefShoppingCart.addItem(BiscuitCartItem);
  const total = AbdulLateefShoppingCart.calculateTotal();
  const myATMDetails = new MyATMCardPayment("1234567890", "123");
  AbdulLateefShoppingCart.checkout(myATMDetails);
  console.log(total);
}

IWantToBuySomething();
