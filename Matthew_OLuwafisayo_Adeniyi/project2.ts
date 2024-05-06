//we want to model what a laptop is

type keyboardKind = "in-built" | "external";
type keyboardlayout = "Qwerty" | "Qwertz" | "Azerty";
type displayType = "amoled" | "lcd" | "oled";
type bitType = "x64" | "x32" | "x86";

class laptop {
  //All these are classes apart from bitKind
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
    this.operatingSystem.version = version
    this.switchOn
    console.log(`Hey, Your OS has been updated to ${this.operatingSystem.kind} version ${this.operatingSystem.version}`)
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
}


// Start of composition

const mykeyboards: keyboard[] = []

const mydisplay = new display()
mydisplay.displaySize = 16
mydisplay.displayType = "lcd"

const myKeyboard = new keyboard()
myKeyboard.kind = "in-built"
myKeyboard.layout = "Qwerty"

const myHardDisk = new hardDisk()
myHardDisk.size = 256
myHardDisk.type = "ssd"

mykeyboards.push(myKeyboard)

const myNic = new networtInterfaceCard();
myNic.name = "Ethernet";

// End of composition



// Aggregation

const myOperatingSystem = new operatingSystem()
myOperatingSystem.kind = "windows"
myOperatingSystem.version = 10

// Laptop class
const matt_pc = new laptop (mykeyboards, mydisplay, myHardDisk, "x64")
matt_pc.setOperatingSystem = myOperatingSystem


console.log(matt_pc)