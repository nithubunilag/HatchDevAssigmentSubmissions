// class Laptop {
//   keyboard: KeyBoard[] = [];
//   nic: NetworkInterfaceCard;
//   screen: Display;
//   hardDisk: HardDisk;
//   powerState: boolean = false;
//   bitKind: BitKind;

//   constructor(
//     bit: BitKind,
//     display: Display,
//     nic: NetworkInterfaceCard,
//     hd: HardDisk,
//     keyBoards: KeyBoard[]
//   ) {
//     this.bitKind = bit;
//     this.screen = display;
//     this.nic = nic;
//     this.hardDisk = hd;
//     this.keyboard = keyBoards;
//     this.powerState = false; // the laptop is switched off.
//   }

//   switchOn() {
//     this.powerState = true;
//   }

//   update(version: number) {}

//   shutDown() {
//     this.powerState = false;
//   }
// }

// type OsKind = "Linux" | "Mac" | "Windows";
// type BitKind = "x64" | "x32" | "x86";

// class OperatingSystem {
//   kind: OsKind;
//   version: number;
// }

// class HardDisk {
//   type: "ssd" | "hdd";
//   size: number;
// }

// class Display {
//   size: number;
//   type: DisplayType;

//   set displaySize(val: number) {
//     this.size = val;
//   }

//   setDisplayType(type: DisplayType) {
//     this.type = type;
//   }
// }

// type DisplayType = "amoled" | "lcd" | "oled";

// class NetworkInterfaceCard {
//   constructor(public readonly name: string) {}
// }

// class KeyBoard {
//   kind: KeyBoardKind;
//   layout: KeyBoardLayout;

//   constructor(kind: KeyBoardKind) {
//     this.kind = kind;
//   }
// }

// type KeyBoardKind = "in-built" | "external";
// type KeyBoardLayout = "Qwerty" | "Qwrertz" | "Azerty";

// const display = new Display();
// display.displaySize = 16;
// display.setDisplayType("amoled");

// const nic = new NetworkInterfaceCard("nitlap");

// const hd = new HardDisk();
// hd.type = "ssd";
// hd.size = 512;

// const keyboard1 = new KeyBoard("in-built");
// const keyboard2 = new KeyBoard("external");
// const keyboards = [keyboard1, keyboard2];

// const nitLap = new Laptop("x64", display, nic, hd, keyboards);

// console.log(nitLap);
// nitLap.switchOn();
// console.log(nitLap);


// My code using Faizal's update method as a reference


type BitKind = "x64" | "x32" | "x86";

class Display {
  size: number;
  type: DisplayType;
  version: number;

  constructor() {
    this.size = 0;
    this.type = "lcd";
    this.version = 1;
  }
}

type DisplayType = "amoled" | "lcd" | "oled";

class NetworkInterfaceCard {
  name: string;
  version: number;

  constructor(name: string) {
    this.name = name;
    this.version = 1;
  }
}

class HardDisk {
  type: "ssd" | "hdd";
  size: number;
  version: number;

  constructor() {
    this.type = "ssd";
    this.size = 0;
    this.version = 1;
  }
}

class KeyBoard {
  kind: KeyBoardKind;
  layout: KeyBoardLayout;
  version: number;

  constructor(kind: KeyBoardKind) {
    this.kind = kind;
    this.layout = "Qwerty";
    this.version = 1;
  }
}

type KeyBoardKind = "in-built" | "external";
type KeyBoardLayout = "Qwerty" | "Qwrertz" | "Azerty";

class Laptop {
  keyboard: KeyBoard[] = [];
  nic: NetworkInterfaceCard;
  screen: Display;
  hardDisk: HardDisk;
  powerState: boolean = false;
  bitKind: BitKind;
  updatedComponents: {
    [component: string]: { previousVersion: number; newVersion: number };
  } = {};

  constructor(
    bit: BitKind,
    display: Display,
    nic: NetworkInterfaceCard,
    hd: HardDisk,
    keyBoards: KeyBoard[]
  ) {
    this.bitKind = bit;
    this.screen = display;
    this.nic = nic;
    this.hardDisk = hd;
    this.keyboard = keyBoards;
  }

  switchOn() {
    this.powerState = true;
    console.log("Laptop is now ON");
  }

  update(component: UpdatableComponent, newVersion: number) {
    let previousVersion = 0;
    switch (component) {
      case "screen":
        previousVersion = this.screen.version;
        this.screen.version = newVersion;
        break;
      case "nic":
        previousVersion = this.nic.version;
        this.nic.version = newVersion;
        break;
      case "hardDisk":
        previousVersion = this.hardDisk.version;
        this.hardDisk.version = newVersion;
        break;
      case "keyboard":
        previousVersion = this.keyboard[0].version;
        this.keyboard[0].version = newVersion;
        break;
      default:
        console.log("Invalid component to update");
        return;
    }
    this.updatedComponents[component] = { previousVersion, newVersion };
  }

  displayUpdatedComponents() {
    console.log("Component Updates:");
    Object.keys(this.updatedComponents).forEach((component) => {
      const { previousVersion, newVersion } = this.updatedComponents[component];
      console.log(
        `${component}: Previous Version - ${previousVersion}, New Version - ${newVersion}`
      );
    });
    console.log("\nAll Components:");
    console.log("Screen:", this.screen);
    console.log("NIC:", this.nic);
    console.log("Hard Disk:", this.hardDisk);
    console.log("Keyboard:", this.keyboard);
  }

  shutDown() {
    this.powerState = false;
    console.log("Laptop is now OFF");
  }
}

// Define a union type for components that can be updated
type UpdatableComponent = "screen" | "nic" | "hardDisk" | "keyboard";

// Create components
const display = new Display();
display.size = 15.6;
display.type = "lcd";

const nic = new NetworkInterfaceCard("WiFi");

const hd = new HardDisk();
hd.type = "ssd";
hd.size = 512;

const keyboard1 = new KeyBoard("in-built");

// Create a laptop instance
const myLaptop = new Laptop(
  "x64", // bit
  display,
  nic,
  hd,
  [keyboard1] // keyBoards
);

// Using laptop methods
myLaptop.switchOn();
myLaptop.update("screen", 2);
myLaptop.update("nic", 2);
myLaptop.update("hardDisk", 2);
myLaptop.update("keyboard", 2);
myLaptop.displayUpdatedComponents();
myLaptop.shutDown();


