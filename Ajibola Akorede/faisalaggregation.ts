// laptop.ts
class Laptop {
    keyboards: Keyboard[] = [];
    nic: NetworkInterfaceCard;
    screen: Display;
    hardDisk: HardDisk;
    powerState: boolean = false;
    bitKind: BitKind;
    os: OS;
    allUpdateLogs: string[] = [];
  
    constructor(
      keyboard: Keyboard,
      bitKind: BitKind,
      display: Display,
      nic: NetworkInterfaceCard,
      os: OS,
      hardDisk: HardDisk
    ) {
      if (!keyboard ||!bitKind ||!display ||!nic ||!os ||!hardDisk) {
        throw new Error("All parameters are required");
      }
      this.keyboards.push(keyboard);
      this.bitKind = bitKind;
      this.screen = display;
      this.nic = nic;
      this.os = os;
      this.hardDisk = hardDisk;
    }
  
    switchOn() {
      this.powerState = true;
    }
  
    switchOff() {
      this.powerState = false;
    }
  
    showAllUpdateLogs() {
        for (const eachLog in this.allUpdateLogs){
      console.log("All updates made: " + this.allUpdateLogs[eachLog] +"\n" );
    }
    }
  
    update<T extends Keyboard | NetworkInterfaceCard | OS | HardDisk | Display>(
        thingToUpdate: keyof Laptop,
        newValue: T
      ) {
        const updateMap: Partial<Record<keyof Laptop, (newValue: T) => void>> = {
          keyboards: (newValue: T) => {
            this.keyboards.push(newValue as Keyboard);
            this.allUpdateLogs.push(`Keyboard updated: ${(newValue as Keyboard).kind} keyboard with ${(newValue as Keyboard).layout} layout`);
          },
          nic: (newValue: T) => {
            this.nic.name = (newValue as NetworkInterfaceCard).name;
            this.allUpdateLogs.push(`NIC updated: ${(newValue as NetworkInterfaceCard).name}`);
          },
          screen: (newValue: T) => {
            this.screen = newValue as Display;
            this.allUpdateLogs.push(`Display updated: ${(newValue as Display).size} inches ${(newValue as Display).type} display`);
          },
          hardDisk: (newValue: T) => {
            this.hardDisk = newValue as HardDisk;
            this.allUpdateLogs.push(`HardDisk updated: ${(newValue as HardDisk).type}`);
          },
          os: (newValue: T) => {
            this.os = newValue as OS;
            this.allUpdateLogs.push(`OS updated: ${(newValue as OS).type}`);
          },
        };
      
        const updateAction = updateMap[thingToUpdate];
        if (updateAction) {
          updateAction(newValue);
        } else {
          throw new Error(`Invalid input: ${thingToUpdate}`);
        }
      }
  }
  
  // os.ts
  class OS {
    type: "mac" | "windows" | "linux";
  }
  
  // bit-kind.ts
  class BitKind {
    type: "x32" | "x64" | "x86";
  }
  
  // keyboard.ts
  class Keyboard {
    kind: KeyboardKind;
    layout: KeyboardLayout;
    // keys: string[];
  }
  
  type KeyboardKind = "in-built" | "external";
  type KeyboardLayout = "Qwerty" | "Azerty" | "Qwertz";
  
  // network-interface-card.ts
  class NetworkInterfaceCard {
    name: string;
  }
  
  // display.ts
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

  // hard-disk.ts
  class HardDisk {
    type: "ssd" | "hdd";
  }
  
  export { Laptop, OS, BitKind, Keyboard, KeyboardKind, KeyboardLayout, NetworkInterfaceCard, Display, DisplayType, HardDisk };