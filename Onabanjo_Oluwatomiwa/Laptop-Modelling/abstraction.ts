class Laptop {
  keyboard: KeyBoard[] = [];
  nic: NetworkInterfaceCard;
  screen: Display;
  os: OperatingSystem;
  hardDisk: HardDisk;
  powerState: boolean = false;
  bitKind: BitKind;
  version: string;

  constructor(
    os: OperatingSystem,
    bit: BitKind,
    display: Display,
    nic: NetworkInterfaceCard,
    hd: HardDisk,
    keyBoards: KeyBoard[]
  ) {
    this.powerState = false; // the laptop is swtiched off.
  }

  switchOn() {
    this.powerState = true;
  }

  update(version: number) {
    this.version = String(version);
  }

  shutDown() {
    this.powerState = false;
  }
}

type OsKind = "Linux" | "Mac" | "Windows";
type BitKind = "x64" | "x32" | "x86";

class OperatingSystem {
  kind: OsKind;
  version: number;

  constructor(kind: OsKind, version: number) {
    this.kind = "Windows";
    this.version = 11;
  }
}

class HardDisk {
  type: "ssd" | "hdd";
  size: number;

  constructor(type: "ssd" | "hdd", size: number) {
    this.type = "ssd";
    this.size = 512;
  }
}

class Display {
  size: number;
  type: DisplayType;

  constructor(size: number, type: DisplayType) {
    this.size = 13.3;
    this.type = "amoled";
  }

  set displaySize(val: number) {
    this.size = val;
  }

  setDisplayType(type: DisplayType) {
    this.type = type;
  }
}

type DisplayType = "amoled" | "lcd" | "oled";

class NetworkInterfaceCard {
  constructor(public readonly name: string) {}
}

type KeyBoardKind = "in-built" | "external";
type KeyBoardLayout = "Qwerty" | "Qwertz" | "Azerty";

class KeyBoard {
  kind: KeyBoardKind;

  layout: KeyBoardLayout;

  constructor(kind: KeyBoardKind, layout) {
    this.kind = kind;
    this.layout = "Qwertz";
  }
}