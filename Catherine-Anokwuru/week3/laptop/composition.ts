class Laptop {
  keyboard: KeyBoard[] = [];
  nic: NetworkInterfaceCard;
  screen: Display;
  hardDisk: HardDisk;
  powerState: boolean = false;
  bitKind: BitKind;
  os: OperatingSystem;

  constructor(
    bit: BitKind,
    display: Display,
    nic: NetworkInterfaceCard,
    hd: HardDisk,
    keyBoards: KeyBoard[],
    os: OperatingSystem
  ) {
    this.bitKind = bit;
    this.screen = display;
    this.nic = nic;
    this.hardDisk = hd;
    this.keyboard = keyBoards;
    this.os = os;
    this.powerState = false;
  }

  switchOn() {
    this.powerState = true;
    console.log("Power on");
  }
  shutDown() {
    this.powerState = false;
    console.log("Power off");
  }
  update(
    osVersion: number,
    displayType: DisplayType,
    keyboardLayout: KeyBoardLayout,
    bitKind: BitKind,
    hardDiskType: HardDiskType
  ) {
    this.switchOn();
    console.log("Do not shut down system during update");

    const updatedItems: { [key: string]: any }[] = [];
    const errors: string[] = [];

    if (osVersion !== this.os.version) {
      if (osVersion <= 0) {
        errors.push("Invalid OS version");
      } else {
        this.os.version = osVersion;
        updatedItems.push({ OS: osVersion });
      }
    }

    if (displayType !== this.screen.type) {
      if (["amoled", "lcd", "oled"].includes(displayType)) {
        this.screen.setDisplayType(displayType);
        updatedItems.push({ Display: this.screen.type });
      } else {
        errors.push("Invalid display type");
      }
    }

    if (keyboardLayout !== this.keyboard[0].layout) {
      if (["Qwerty", "Qwrertz", "Azerty"].includes(keyboardLayout)) {
        this.keyboard.forEach((keyboard) => {
          keyboard.layout = keyboardLayout;
        });
        updatedItems.push({ Keyboard: keyboardLayout });
      } else {
        errors.push("Invalid keyboard layout.");
      }
    }

    if (bitKind !== this.bitKind) {
      if (["x64", "x32", "x86"].includes(bitKind)) {
        this.bitKind = bitKind;
        updatedItems.push({ Bit: bitKind });
      } else {
        errors.push("Invalid bit kind.");
      }
    }

    if (hardDiskType !== this.hardDisk.type) {
      if (["ssd", "hdd"].includes(hardDiskType)) {
        this.hardDisk.type = hardDiskType;
        updatedItems.push({ "Hard Disk": hardDiskType });
      } else {
        errors.push("Invalid hard disk type.");
      }
    }

    if (updatedItems.length === 0 && errors.length === 0) {
      console.log("System is up to date.");
      return;
    }

    if (updatedItems.length > 0) {
      console.log("Updated items:");
      updatedItems.forEach((item) => {
        const propName = Object.keys(item)[0];
        const propValue = item[propName];
        console.log(`${propName}: ${propValue}`);
      });
      console.log("Update complete");
    }

    if (errors.length > 0) {
      console.log("Errors:");
      errors.forEach((error) => console.error(error));
    }

    // this.shutDown();
  }
}

type OsKind = "Linux" | "Mac" | "Windows";
type BitKind = "x64" | "x32" | "x86";
type DisplayType = "amoled" | "lcd" | "oled";
type KeyBoardKind = "in-built" | "external";
type KeyBoardLayout = "Qwerty" | "Qwrertz" | "Azerty";
type HardDiskType = "ssd" | "hdd";
class OperatingSystem {
  kind: OsKind;
  version: number;
}

class HardDisk {
  type: HardDiskType;
  size: number;
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

class NetworkInterfaceCard {
  constructor(public readonly name: string) {}
}

class KeyBoard {
  kind: KeyBoardKind;
  layout: KeyBoardLayout;

  constructor(layout: KeyBoardLayout) {
    this.layout = layout;
  }
}

export {
  Laptop,
  OperatingSystem,
  BitKind,
  KeyBoard,
  NetworkInterfaceCard,
  Display,
  DisplayType,
  HardDisk,
};
