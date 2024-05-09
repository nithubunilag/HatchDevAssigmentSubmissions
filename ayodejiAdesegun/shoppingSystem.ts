class shoppingSystem {
    shoppingCart: shoppingCart;
    constructor(shoppingCart: shoppingCart) {
        this.shoppingCart = shoppingCart
    }
};
class shoppingCart {
    sausage: Sausage;
    vodka: Vodka;
    noodles: Noodles;
    constructor(sausage: Sausage, vodka: Vodka, noodles: Noodles) {
        this.sausage = Sausage;
        this.vodka = Vodka;
        this.noodles = Noodles;
    }
};
type sausageKind = "Gala" | "Rite" | "Bigi" | "SuperBite";
class Sausage {
    kind: sausageKind
    constructor(kind: sausageKind) {
        this.kind = kind;
    };
    add() {

    }
};
class Vodka {

};
type noodlesKind = "Indomie" | "Golden Penny" | "Chiki Chiki";
class Noodles {
    noodles: noodlesKind
    constructor(noodles: noodlesKind) {
        this.noodles = noodles;
    }

};
class Always {

};