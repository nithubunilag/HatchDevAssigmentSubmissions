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
    console.log("All updates made: " + this.allUpdateLogs.join("\n"));
  }

  update(thingToUpdate: string, newValue: any) {
    const updateError = (component: string) =>
      console.error(
        `Invalid input: The new value must be an instance of ${component}`
      );
    const logUpdate = (component: string, detail: string) => {
      this.allUpdateLogs.push(`${component} updated: ${detail}`);
      this.showAllUpdateLogs();
    };

    thingToUpdate = thingToUpdate.toLowerCase();
    if (thingToUpdate === "keyboard" && newValue instanceof Keyboard) {
      this.keyboard.push(newValue);
      logUpdate(
        "Keyboard",
        `${newValue.kind} keyboard with ${newValue.layout} layout`
      );
    } else if (thingToUpdate === "nic" && typeof newValue === "string") {
      this.nic.name = newValue;
      logUpdate("NIC", newValue);
    } else if (thingToUpdate === "display" && newValue instanceof Display) {
      this.screen = newValue;
      logUpdate("Display", `${newValue.size} inches ${newValue.type} display`);
    } else if (thingToUpdate === "harddisk" && newValue instanceof HardDisk) {
      this.hardDisk = newValue;
      logUpdate("HardDisk", newValue.type);
    } else if (thingToUpdate === "os" && newValue instanceof OS) {
      this.os = newValue;
      logUpdate("OS", newValue.type);
    } else {
      updateError(thingToUpdate);
    }
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

type KeyboardKind = "in-built" | "external";
type KeyboardLayout = "Qwerty" | "Azerty" | "Qwertz";

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
type DisplayType = "amoled" | "lcd" | "oled";

class HardDisk {
  type: "ssd" | "hdd";
}

export {
  BitKind,
  Display,
  DisplayType,
  HardDisk,
  Keyboard,
  KeyboardKind,
  KeyboardLayout,
  Laptop,
  NetworkInterfaceCard,
  OS,
};
