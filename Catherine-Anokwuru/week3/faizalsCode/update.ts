type KeyboardKind = "in-built" | "external";
type KeyboardLayout = "Qwerty" | "Azerty" | "Qwertz";
type DisplayType = "amoled" | "lcd" | "oled";

class Laptop {
  keyboard: Keyboard[] = [];
  nic: NetworkInterfaceCard;
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
    nic: NetworkInterfaceCard,
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
    console.log(
      "All updates made:\n " + this.allUpdateLogs.join("\n")
    );
  }

  update(thingToUpdate: string, newValue: any) {
    let error: string = "";
    thingToUpdate = thingToUpdate.toLowerCase();

    const validateInstance = (
      value: any,
      expectedType: any
    ): boolean => value instanceof expectedType;
    const logUpdate = (
      property: string,
      value: any,
      message: string
    ) => {
      this[property] = value;
      this.allUpdateLogs.push(message);
    };

    switch (thingToUpdate) {
      case "keyboard":
        if (!validateInstance(newValue, Keyboard)) {
          error =
            "Invalid input: The new value must be an instance of Keyboard";
        } else {
          logUpdate(
            "keyboard",
            newValue,
            `Keyboard updated: ${newValue.kind} keyboard with ${newValue.layout} layout`
          );
        }
        break;
      case "nic":
        if (typeof newValue !== "string") {
          error = "Invalid input: The new value must be a string";
        } else {
          this.nic.name = newValue;
          this.allUpdateLogs.push(`NIC updated: ${newValue}`);
        }
        break;
      case "display":
        if (!validateInstance(newValue, Display)) {
          error =
            "Invalid input: The new value must be an instance of Display";
        } else {
          logUpdate(
            "screen",
            newValue,
            `Display updated: ${newValue.size} inches ${newValue.type} display`
          );
        }
        break;
      case "harddisk":
        if (!validateInstance(newValue, HardDisk)) {
          error =
            "Invalid input: The new value must be an instance of HardDisk";
        } else {
          logUpdate(
            "hardDisk",
            newValue,
            `HardDisk updated: ${newValue.type}`
          );
        }
        break;
      case "os":
        if (!validateInstance(newValue, OS)) {
          error =
            "Invalid input: The new value must be an instance of OS";
        } else {
          logUpdate("os", newValue, `OS updated: ${newValue.type}`);
        }
        break;
      default:
        error = "Invalid input";
    }

    console.log(error);
    this.showAllUpdateLogs();
  }
}

class OS {
  type: "mac" | "windows" | "linux";
}
class BitKind {
  type: "x32" | "x64" | "x86";
}
class Keyboard {
  kind: KeyboardKind;
  layout: KeyboardLayout;
  // keys: string[]
}

class NetworkInterfaceCard {
  name: string;
}

class Display {
  size: number = 13;
  type: DisplayType;

  set displaySize(val: number) {
    this.size = val;
  }
  set displayType(type: DisplayType) {
    this.type = type;
  }
}

class HardDisk {
  type: "ssd" | "hdd";
}

export {
  Laptop,
  OS,
  BitKind,
  Keyboard,
  KeyboardKind,
  KeyboardLayout,
  NetworkInterfaceCard,
  Display,
  DisplayType,
  HardDisk,
};
