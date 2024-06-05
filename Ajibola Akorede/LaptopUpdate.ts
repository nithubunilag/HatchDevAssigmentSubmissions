class Laptop {
  keyboard: KeyBoard[] = [];
  networkInterfaceCard: NetworkInterfaceCard;
  screen: Display;
  hardDisk: HardDisk;
  powerState: boolean = false;
  bitKind: BitKind;
  os: operatingSystem;

  constructor(
    bit: BitKind,
    screen: Display,
    nic: NetworkInterfaceCard,
    hd: HardDisk,
    keyboards: KeyBoard[],
    os: operatingSystem
  ) {
    this.bitKind = bit;
    this.screen = screen;
    this.networkInterfaceCard = nic;
    this.hardDisk = hd;
    this.keyboard = keyboards;
    this.os = os;
    this.powerState = true;
  }
  switchOn() {
    this.powerState = true;
  }
  shutDown() {
    this.powerState = false;
  }
  update(version: number, kind: osKind) {
    this.os = new operatingSystem(kind, version);
    return this;
  }
}

class operatingSystem {
  //type:osKind
  //version:number
  constructor(public readonly type: osKind, public readonly version: number) {}
}

class HardDisk {
  // type: "SSD"|"HDD"
  //size: number
  constructor(
    public readonly type: "SSD" | "HDD",
    public readonly size: number
  ) {}
}

class Display {
  size: number;
  type: DisplayType;

  constructor(size: number, type: DisplayType) {
    this.size = size;
    this.type = type;
  }

  /* set displaySize(val:number){
        this.size= val;
    }
    setDisplayType(type:DisplayType){
        this.type= type;
    }*/
}
type DisplayType = "AMOLED" | "LCD" | "OLED";

class NetworkInterfaceCard {
  constructor(public readonly name: string) {}
}
class KeyBoard {
  // kind: KeyBoardKind
  // layout:KeyBoardLayout

  constructor(
    public readonly kind: KeyBoardKind,
    public readonly layout: KeyBoardLayout
  ) {}
}

type KeyBoardKind = "in-built" | "external";
type KeyBoardLayout = "QWERTY" | "QUERTZ" | "AZERTY";
type osKind = "Windows" | "Linux" | "MacOS";
type BitKind = "X64" | "X32" | "X86";

const display = new Display(16, "LCD");
//display.displaySize =16
//display.setDisplayType("AMOLED")

const os = new operatingSystem("Windows", 10);
const hd = new HardDisk("SSD", 256);
const nic = new NetworkInterfaceCard("Ethernet");

const keyboards = [
  new KeyBoard("in-built", "QWERTY"),
  new KeyBoard("external", "QWERTY"),
  
  
];

const laptop = new Laptop("X64", display, nic, hd, keyboards, os);

 console.log("About:", laptop);

const UpdatedLaptop = laptop.update(11, "Windows");
 console.log("UpdatedAbout: ", UpdatedLaptop);


