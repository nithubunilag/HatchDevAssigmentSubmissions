export class Laptop {
    keyboard: KeyBoard[] = [];
    nic: NetworkInterfaceCard;
    screen: Display;
    hardDisk: HardDisk;
    os: OperatingSystem;
    powerState: boolean = false;
    batteryCharge: number = 100;
    bitKind: BitKind;
    name: string;
  
    constructor(
      name: string,
      bit: BitKind,
      display: Display,
      nic: NetworkInterfaceCard,
      hd: HardDisk,
      keyBoards: KeyBoard[],
      os: OperatingSystem
    ) {
      this.powerState = false; // the laptop is swtiched off.
      this.nic = nic;
      this.name = name;
      this.hardDisk = hd;
      this.screen = display;
      this.keyboard = keyBoards;
      this.bitKind = bit;
      this.os = os;
    }
  
    get properties() {
      if (!this.powerState) return;
      return {
        name: this.name,
        networkInferfaceCard: this.nic,
        bitKind: this.bitKind,
        hardDrive: {
          size: this.hardDisk.size,
          type: this.hardDisk.type,
        },
        systemType: this.os.kind,
        batteryCharge: this.batteryCharge,
      };
    }
    switchOn() {
      this.powerState = true;
    }
  
    update(version: number): boolean | string {
      if (version <= this.os.version) {
         throw new Error("The version has to be higher than the previous");
      }
      if(isNan(version) || version <=0) {
            throw new Error("Invalid update version number");
      }
      this.switchOn();
      this.os.update(version);

      console.log(`Operating system updated successfully to version ${version}`);
      return true;
    
    }
  
    shutDown() {
      this.powerState = false;
    }
  }
  
  type OsKind = "Linux" | "Mac" | "Windows";
  type BitKind = "x64" | "x32" | "x86";
  
  export class OperatingSystem {
    kind: OsKind;
    version: number;
  
    update(version: number) {
      this.version = version;
    }
  
    constructor(kind: OsKind, version: number) {
      this.kind = kind;
      this.version = version;
    }
  }
  
  type HardDiskType = "ssd" | "hdd";
  
  export class HardDisk {
    type: HardDiskType;
    size: number;
  
    constructor(type?: HardDiskType, size?: number) {
      this.type = type ? type : "hdd";
      this.size = size ? size : 256;
    }
  }
  
  export class Display {
    size: number;
    type: DisplayType;
  
    constructor(size?: number, type?: DisplayType) {
      this.size = size ? size : 13;
      this.type = type ? type : "lcd";
    }
  
    set displaySize(val: number) {
      this.size = val;
    }
  
    setDisplayType(type: DisplayType) {
      this.type = type;
    }
  }
  
  type DisplayType = "amoled" | "lcd" | "oled";
  
  export class NetworkInterfaceCard {
    constructor(public readonly name: string) {}
  }
  
  type KeyBoardKind = "in-built" | "external";
  type KeyBoardLayout = "Qwerty" | "Qwertz" | "Azerty";
  
  export class KeyBoard {
    kind: KeyBoardKind;
  
    layout: KeyBoardLayout;
  
    constructor(kind: KeyBoardKind, layout?: KeyBoardLayout) {
      this.kind = kind;
      this.layout = "Qwerty";
    }
  }
