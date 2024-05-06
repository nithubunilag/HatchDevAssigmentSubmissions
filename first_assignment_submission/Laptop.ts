type keyboardKind = "in-built" | "external";
type keyboardlayout = "Qwerty" | "Qwertz" | "Azerty";
type displayType = "amoled" | "lcd" | "oled";
type bitType = "x64" | "x32" | "x86";

class laptop {
  keyboard: keyboard[] = [];
  nic: networtInterfaceCard;
  screen: display;
  hardDisk: hardDisk;
  powerState: boolean = false;
  operatingSystem: operatingSystem;
  bitKind: "x64" | "x32" | "x86";

  //   specify only this needed properties here as an instance method
  constructor(
    keyboard: keyboard[],
    screen: display,
    hardDisk: hardDisk,
    bitKind: bitType,
    networkInterface: { name: string }
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
    console.log(`Hey, Your machine has been turned on!!!`);
  }

  updateOs(version: number) {
    this.operatingSystem.version = version;
    console.log(
      `Hey, Your OS has been updated to ${this.operatingSystem.kind} version ${this.operatingSystem.version}`
    );
    this.switchOn();
  }
}

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

class networtInterfaceCard {
  name: string;
}

class keyboard {
  kind: keyboardKind;
  layout: keyboardlayout;
  color: string;

  constructor(kind: keyboardKind, layout: keyboardlayout) {
    this.kind = kind;
    this.layout = layout;
  }

  set keyboardKind(val: keyboardKind) {
    this.kind = val;
  }
}

// Start of composition

const mykeyboards: keyboard[] = [];

const mydisplay = new display();
mydisplay.displaySize = 16;
mydisplay.displayType = "lcd";

const myKeyboard = new keyboard("in-built", "Qwerty");
myKeyboard.keyboardKind = "external";

const myHardDisk = new hardDisk();
myHardDisk.size = 256;
myHardDisk.type = "ssd";

mykeyboards.push(myKeyboard);

const myNetworkInterface = new networtInterfaceCard();
myNetworkInterface.name = "interface";

// End of composition




// Aggregation

const myOperatingSystem = new operatingSystem();
myOperatingSystem.kind = "windows";
myOperatingSystem.version = 10;

// Laptop class
const jybium_PC = new laptop(
  mykeyboards,
  mydisplay,
  myHardDisk,
  "x64",
  myNetworkInterface
);
jybium_PC.setOperatingSystem = myOperatingSystem;

console.log(jybium_PC);
console.log(jybium_PC.update(11));

// export
