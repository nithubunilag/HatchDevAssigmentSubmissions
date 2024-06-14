export type OrderState = "pending" | "successful" | "failed" | "not-started";

export enum DeliveryType {
  "payOnDelivery" = "Pay On Delivery",
  "pickUpStation" = "Pick Up Station",
}

export interface IProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  amountInStock: number;

  reduceAmountInStock(): void;
}