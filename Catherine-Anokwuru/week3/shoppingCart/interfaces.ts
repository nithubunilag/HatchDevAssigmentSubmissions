export interface Item {
  id: number;
  name: string;
  price: number;
  amount: number;
}

export interface Electronics extends Item {
  brand: string;
}
export interface Beauty extends Item {
  category: string;
}
export interface Fashion extends Item {
  size: string;
}


