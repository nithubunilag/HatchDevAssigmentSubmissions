//defining the Laptop class
class Laptop {
  keyboard: Keyboard[] = [];
  nic: NetworkInterfaceCard;
  screen: Display;
  hardDisk: HardDisk;
  bitKind: BitKind;
  powerState: boolean = false;
  version: number;
  os: OperatingSystem;
  updateLog: string[] = [];

  constructor(
    keyboards: Keyboard[],
    nic: NetworkInterfaceCard,
    display: Display,
    hd: HardDisk,
    bitKind: BitKind,
    os: OperatingSystem
  ) {
    this.keyboard = keyboards;
    this.nic = nic;
    this.screen = display;
    this.hardDisk = hd;
    this.bitKind = bitKind;
    this.powerState = false; //the laptop is switched off
    this.version = 10;
    this.os = os;
  }

  shutDown() {
    this.powerState = false;
    console.log("The Laptop is off");
  }

  switchOn() {
    this.powerState = true;
    console.log("The Laptop is on");
  }

  // updateKeyboard(newKeyboard) {
  //     this.keyboard = newKeyboard
  //     this.updateLog.push(`Keyboard updated to: ${newKeyboard.kind} with a ${newKeyboard.layout} layout`)
  // }
  updateKeyboard(newKeyboard) {
    this.keyboard = newKeyboard;
    const keyboardDescriptions = newKeyboard.map(
      (keyboard) => `${keyboard.kind} with a ${keyboard.layout} layout`
    );
    this.updateLog.push(
      `Keyboards updated to: ${keyboardDescriptions.join(", ")}`
    );
  }

  updateNic(newNic) {
    this.nic.name = newNic;
    this.updateLog.push(`NIC updated to: ${newNic}`);
  }
  updateDisplay(newDisplay) {
    this.screen = newDisplay;
    this.updateLog.push(
      `Display updated to: ${newDisplay.size}" of ${newDisplay.type}`
    );
  }
  updateHardDisk(newHardDisk) {
    this.hardDisk = newHardDisk;
    this.updateLog.push(
      `HardDisk updated to: ${newHardDisk.size} of ${newHardDisk.type}`
    );
  }
  updateBitkind(newBitKind) {
    this.bitKind = newBitKind;
    this.updateLog.push(`Bit updated to: ${newBitKind}"`);
  }
  updateOs(newOs) {
    this.screen = newOs;
    this.updateLog.push(
      `Display updated to: ${newOs.kind}" of Version;${newOs.Version}`
    );
  }

  // update(version: number) {
  //     this.version = version
  //     console.log(`Your laptop has been updated to version ${this.version}`)
  // }

  //using the ternary operator in the generic fuction
  update<T extends whatToUpdate>(
    X: T,
    newValue: T extends "keyboards"
      ? Keyboard[]
      : T extends "nic"
      ? string
      : T extends "display"
      ? Display
      : T extends "hardDisk"
      ? HardDisk
      : T extends "bitkind"
      ? BitKind
      : OperatingSystem
  ): void {
    // update<T extends Keyboard | NetworkInterfaceCard | Display | HardDisk | BitKind | OperatingSystem>(X: whatToUpdate , newValue: T) {
    switch (X) {
      case "keyboards":
        this.updateKeyboard(newValue); //keyboard update
        break;
      case "nic":
        this.updateNic(newValue); //NIC update
        break;
      case "display":
        this.updateDisplay(newValue); //display update
        break;
      case "hardDisk":
        this.updateHardDisk(newValue); //hardDisk update
        break;
      case "bitkind":
        this.updateBitkind(newValue); //bitKind update
        break;
      case "os":
        this.updateOs(newValue); //OS update
        break;
      default:
        throw new Error("Invalid update type");
    }
  }
}

class Keyboard {
  kind: KeyboardKind;
  layout: KeyboardLayout;

  constructor(kind: KeyboardKind, layout: KeyboardLayout) {
    this.kind = kind;
    this.layout = layout;
  }
}

//  class NetworkInterfaceCard {
//     constructor(public readonly name: string) {

//     }
// }
class NetworkInterfaceCard {
  name: string;
}

class Display {
  size: number;
  type: DisplayType;

  // set displaySize(val: number) {
  //     this.size = val
  // }

  // setDisplayType(type: DisplayType) {
  //     this.type = type;
  // }
}

class HardDisk {
  type: "ssd" | "hdd";
  size: string;
}

class OperatingSystem {
  kind: OsKind;
  Version: string;
}

//////defining the types
type KeyboardKind = "in-built" | "external";
type KeyboardLayout = "Qwerty" | "Qwertz" | "Azerty";
type BitKind = "x64" | "x32" | "x84";
type DisplayType = "amoled" | "lcd" | "oled";
type OsKind = "Linux" | "Mac" | "Windows";
type whatToUpdate =
  | "keyboards"
  | "nic"
  | "display"
  | "hardDisk"
  | "bitkind"
  | "os";

export {
  Laptop,
  OperatingSystem,
  BitKind,
  Keyboard,
  KeyboardKind,
  KeyboardLayout,
  NetworkInterfaceCard,
  Display,
  DisplayType,
  HardDisk,
};
