// types
type KeyboardKind = "in-built" | "external";
type KeyboardLayout = "Qwerty" | " Qwrertz" | "Azerty";
type DisplayType = "amoled" | "lcd" | "oled";
type osKind = "linux" | "mac" | "windows";
type BitKind = "x64" | "x32" | "x86";
// type updateTo = OS;

export class Laptop {
  Keyboard: KeyBoard[] = [];
  nic: NetworkInterfaceCard;
  screen: Display;
  hardDisk: HardDisk;
  powerState: boolean = false;
  os: OperatingSystem;
  bit: BitKind;

  constructor(
    bit: BitKind,
    display: Display,
    nic: NetworkInterfaceCard,
    hd: HardDisk,
    keyBoards: KeyBoard[],
    os: OperatingSystem
  ) {
    this.Keyboard = keyBoards;
    this.screen = display;
    this.nic = nic;
    this.hardDisk = hd;
    this.os = os;
    this.bit = bit;
  }

  switchOn() {
    this.powerState = true;
  }

  update() {
    this.os.version = this.os.version + 0.01;
  }
  shutDown() {
    this.powerState = false;
  }
}

class OperatingSystem {
  kind: osKind;
  version: number;

}
class Display {
  size: number;
  type: DisplayType;

  set displaySize(val: number) {
    this.size = val;
  }

  setDisplayType(type: DisplayType) {
    this.type = type;
  }
}

class HardDisk {
  type: "ssd" | "hdd";
}

class NetworkInterfaceCard {
  constructor(public readonly name: string) {}
}

class KeyBoard {
  kind: KeyboardKind;
  layout: KeyboardLayout;
  constructor(kind: KeyboardKind, layout: KeyboardLayout) {
    this.kind = kind;
    this.layout = layout;
  }
}

// Display
const display = new Display();
display.displaySize = 16;
display.setDisplayType("amoled");

// hardDisk
const hardDrive = new HardDisk();
hardDrive.type = "hdd";

// Network Interface card
const nic = new NetworkInterfaceCard("kennyLap");

// Keyboards
const KeyBoardIn = new KeyBoard("in-built", "Qwerty");
const KeyBoardOut = new KeyBoard("external", "Qwerty");

// Operating system
const windows = new OperatingSystem();
windows.kind = "windows";

windows.version = 10;

export { display, hardDrive, nic, KeyBoardIn, KeyBoardOut, windows };
