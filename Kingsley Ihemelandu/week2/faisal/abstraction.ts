type UpdatableComponent<T = "keyboard" | "nic" | "screen" | "hardDisk" | "os"> =
  T extends "keyboard"
    ? Keyboard[]
    : T extends "nic"
    ? NIC
    : T extends "screen"
    ? Display
    : T extends "hardDisk"
    ? HardDisk
    : T extends "os"
    ? OS
    : never;

import {
  DisplayType,
  HardDiskType,
  IDisplay,
  IHardDisk,
  IKeyboard,
  INIC,
  IOS,
  KeyboardKind,
  KeyboardLayout,
  OSType,
  UpdateType,
  UpdateValue,
} from "./types";

class OS implements IOS {
  osType: OSType;

  constructor(type: OSType) {
    this.osType = type;
  }
}

class BitKind {
  type: "x32" | "x64" | "x86";
  constructor() {
    this.type = "x64";
  }
}

class Keyboard implements IKeyboard {
  kind: KeyboardKind;
  layout: KeyboardLayout;

  constructor(kind?: KeyboardKind, layout?: KeyboardLayout) {
    this.kind = kind ? kind : "in-built";
    this.layout = layout ? layout : "Qwerty";
  }
  // keys: string[]
}

class NIC implements INIC {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Display implements IDisplay {
  size: number = 13;
  type: DisplayType;

  set displaySize(val: number) {
    this.size = val;
  }
  set displayType(type: DisplayType) {
    this.type = type;
  }

  constructor() {
    this.type = "lcd";
  }
}

class HardDisk implements IHardDisk {
  hardDiskType: HardDiskType;
  constructor(type: HardDiskType) {
    this.hardDiskType = type;
  }
}

class Laptop {
  keyboard: Keyboard[] = [];
  nic: NIC;
  screen: Display;
  hardDisk: HardDisk;
  powerState: boolean = false;
  bitKind: BitKind;
  os: OS;
  allUpdateLogs: string[] = [];

  constructor(
    keyboard: Keyboard,
    bit: BitKind,
    display: Display,
    nic: NIC,
    os: OS,
    harddisk: HardDisk
  ) {
    this.keyboard.push(keyboard);
    this.bitKind = bit;
    this.screen = display;
    this.nic = nic;
    this.os = os;
    this.hardDisk = harddisk;
  }

  switchOn() {
    this.powerState = true;
  }

  switchOff() {
    this.powerState = false;
  }
  showAllUpdateLogs() {
    console.log("All updates made: " + this.allUpdateLogs.join("\n"));
  }

  update(
    thingToUpdate: UpdateType,
    updateValue: UpdatableComponent<UpdateType>
  ): void {
    // this[thingToUpdate] = updateValue;

    // For some reason, the above line is not working
    
    console.log(thingToUpdate, this[thingToUpdate])
    this.allUpdateLogs.push(
      this.getUpdateLogMessage(thingToUpdate, updateValue)
    );
    this.showAllUpdateLogs();
  }

  private getExpectedType(thingToUpdate: UpdateType): any {
    switch (thingToUpdate) {
      case "keyboard":
        return Keyboard;
      case "nic":
        return NIC;
      case "screen":
        return Display;
      case "hardDisk":
        return HardDisk;
      case "os":
        return OS;
      default:
        return null;
    }
  }

  private getUpdateLogMessage(thingToUpdate: UpdateType, newValue: any) {
    switch (thingToUpdate) {
      case "keyboard":
        return `Keyboard updated: ${newValue.kind} keyboard with ${newValue.layout} layout`;
      case "nic":
        return `NIC updated: ${newValue}`;
      case "screen":
        return `Display updated: ${newValue.size} inches ${newValue.type} display`;
      case "hardDisk":
        return `HardDisk updated: ${newValue.type}`;
      case "os":
        return `OS updated: ${newValue.type}`;
      default:
        return "Update log message not found";
    }
  }
}

export {
  Laptop,
  OS,
  BitKind,
  Keyboard,
  KeyboardKind,
  KeyboardLayout,
  NIC,
  Display,
  DisplayType,
  HardDisk,
};

const myKeyboard = new Keyboard();
const bit = new BitKind();
const display = new Display();
const nic = new NIC("nic");
const os = new OS("linux");
const harddisk = new HardDisk("ssd");
const laptop = new Laptop(myKeyboard, bit, display, nic, os, harddisk);

laptop.update("os", new OS("mac"));
