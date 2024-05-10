class laptop {
    keyboard: keyboard[] = [];
    nic: networkInterfaceCard; // Fixed typo
    screen: display;
    hardDisk: hardDisk;
    powerState: boolean = false;
    operatingSystem: operatingSystem;
    bitKind: "x64" | "x32" | "x86";
  
    constructor(
      keyboard: keyboard[],
      screen: display,
      hardDisk: hardDisk,
      bitKind: "x64" | "x32" | "x86",
    ) {
      this.keyboard = keyboard;
      this.screen = screen;
      this.hardDisk = hardDisk;
      this.bitKind = bitKind;
    }
  
    set setOperatingSystem(val: operatingSystem) {
      this.operatingSystem = val;
    }
  
    shutDown() {
      this.powerState = false;
    }
  
    switchOn() {
      this.powerState = true;
    }
  
    update(version: number) {
        this.switchOn();
        this.operatingSystem.version = version;
        console.log(`Hey, Your OS has been updated to ${this.operatingSystem.kind} version ${this.operatingSystem.version}`);
    }
}
  
type keyboardKind = "in-built" | "external";
type keyboardlayout = "Qwerty" | "Qwertz" | "Azerty";
type displayType = "amoled" | "lcd" | "oled";
type bitType = "x64" | "x32" | "x86";
  
class operatingSystem {
    kind: "linux" | "windows" | "macOs";
    version: number;
}
  
class hardDisk {
    type: "ssd" | "hdd";
    size: number;
}
  
class display {
    size: number;
    type: displayType;
  
    set displaySize(val: number) {
      this.size = val;
    }
  
    set displayType(type: displayType) {
      this.type = type;
    }
}
  
class networkInterfaceCard { 
    name: string;
}
  
class keyboard {
    kind: keyboardKind;
    layout: keyboardlayout;

    constructor(kind: keyboardKind, layout: keyboardlayout) {
      this.kind = kind;
      this.layout = layout;
    }
}
  
// Start of composition
  
const mykeyboards: keyboard[] = []
  
const mydisplay = new display();
mydisplay.displaySize = 16;
mydisplay.displayType = "lcd";
  
const myKeyboard = new keyboard("in-built", "Qwerty");
  
const myHardDisk = new hardDisk();
myHardDisk.size = 256;
myHardDisk.type = "ssd";
  
mykeyboards.push(myKeyboard);
  
// Composition ends
  
// Aggregation
  
const myOperatingSystem = new operatingSystem();
myOperatingSystem.kind = "windows";
myOperatingSystem.version = 10;
  
// Laptop class
const Donald_PC = new laptop(mykeyboards, mydisplay, myHardDisk, "x64");
Donald_PC.setOperatingSystem = myOperatingSystem;
  
console.log(Donald_PC);