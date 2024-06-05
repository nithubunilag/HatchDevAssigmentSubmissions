import { Beauty, Electronics, Fashion } from "./interfaces.ts";

export class ElectronicItems implements Electronics {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public amount: number,
    public brand: string
  ) {}
}
export class BeautyItems implements Beauty {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public amount: number,
    public category: string
  ) {}
}
export class FashionItem implements Fashion {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public amount: number,
    public size: string
  ) {}
}