interface Product {
  name: string;
  price: number;
  description: string;
}

interface Clothing extends Product {
  size: string;
  color: string;
}
interface Electronics extends Product {
  brand: string;
}
interface Books extends Product {
  author: string;
}

class ShoppingCart {
  items: Product[] = [];

  addItem(item: Product) {
    this.items.push(item);
  }
  removeItem(index: number) {
    this.items.splice(index, 1);
  }
  getTotal(): number {
    return this.items.reduce((total, item) => total + item.price, 0);
  }
}

const shirt: Clothing = {
  name: 'T-shirt',
  price: 12345,
  description: 'Xlarge',
  size: 'XL',
  color: 'Red',
};
const jungleBoy: Books = {
  name: 'Jungle Boy',
  price: 123,
  description: 'Very Adventurous',
  author: 'John Doe',
};
const phone: Electronics = {
  name: 'Samsung-X-series',
  price: 1500,
  description: 'Smart phone',
  brand: 'Samsung',
};

const cart = new ShoppingCart();
cart.addItem(shirt);
cart.addItem(jungleBoy);
cart.addItem(phone);
cart.removeItem(2);
console.log('Total: ', cart.getTotal());
console.log('Items: ', cart.items[1]);
