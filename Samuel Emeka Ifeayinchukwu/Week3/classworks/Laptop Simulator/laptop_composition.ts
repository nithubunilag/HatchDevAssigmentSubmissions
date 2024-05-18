export class Laptop {
    keyboard: KeyBoard[] = [];
    networkInterfaceCard: NetworkInterfaceCard;
    screen: Display;
    hardDisk: HardDisk;
    powerState: boolean = false;
    bitKind: BitKind;
    os: OperatingSystem;
  
    constructor(
      bit: BitKind,
      display: Display,
      networkInterfaceCard: NetworkInterfaceCard,
      hd: HardDisk,
      keyboards: KeyBoard[]
    ) {
      this.powerState = false; // the laptop is switched off.
      this.keyboard = keyboards;
      this.networkInterfaceCard = networkInterfaceCard;
      this.screen = display;
      this.hardDisk = hd;
      this.os = new OperatingSystem("Windows", 11); // Set default OS to Windows 11
    }
  
    switchOn() {
      this.powerState = true;
      console.log("Laptop is powered on.");
    }
  
    update(version: number) {
      this.switchOn();
      this.os.version = version;
      console.log(`Operating System updated to version ${version}`);
    }
  
    shutDown() {
      if (this.powerState) {
        this.powerState = false;
        console.log("Laptop is powered off.");
      } else {
        console.log("Laptop is already off.");
      }
    }
  }
  
  type OsKind = "Linux" | "Mac" | "Windows";
  export type BitKind = "x64" | "x32" | "x86";
  
  export class OperatingSystem {
    kind: OsKind;
    version: number;
  
    constructor(kind: OsKind, version: number) {
      this.kind = kind;
      this.version = version;
    }
  }
  
  export class HardDisk {
    type: "ssd" | "hdd";
    size: number;
  
    constructor(type: "ssd" | "hdd", size: number) {
      this.type = type;
      this.size = size;
    }
  }
  
 export class Display {
    size: number;
    type: DisplayType;
  
    set displaySize(val: number) {
      this.size = val;
    }
  
    setDisplayType(type: DisplayType) {
      this.type = type;
    }
  }
  
  type DisplayType = "amoled" | "lcd" | "oled";
  
 export class NetworkInterfaceCard {
    constructor(public name: string) {}
  }
  
 export class KeyBoard {
    kind: KeyBoardKind;
    layout: KeyBoardLayout;
  
    constructor(kind: KeyBoardKind, layout: KeyBoardLayout) {
      this.kind = kind;
      this.layout = layout;
    }
  }
  
  type KeyBoardKind = "in-built" | "external";
  type KeyBoardLayout = "Qwerty" | "Qwrertz" | "Azerty";
  