// Define Keyboard related types and class
type KeyboardKind = "in-built" | "external";
type KeyboardLayout = "Qwerty" | "Azerty" | "Qwertz";

class Keyboard {
    kind: KeyboardKind;
    layout: KeyboardLayout;

    constructor(kind: KeyboardKind, layout: KeyboardLayout) {
        this.kind = kind;
        this.layout = layout;
    }
}

// Define OS class
type OSType = "mac" | "windows" | "linux";

class OS {
    type: OSType;

    constructor(type: OSType) {
        this.type = type;
    }
}

// Define BitKind class
type BitType = "x32" | "x64" | "x86";

class BitKind {
    type: BitType;

    constructor(type: BitType) {
        this.type = type;
    }
}

// Define NetworkInterfaceCard class
class NetworkInterfaceCard {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

// Define Display related types and class
type DisplayType = "amoled" | "lcd" | "oled";

class Display {
    size: number;
    type: DisplayType;

    constructor(size: number, type: DisplayType) {
        this.size = size;
        this.type = type;
    }
}

// Define HardDisk class
type HardDiskType = "ssd" | "hdd";

class HardDisk {
    type: HardDiskType;

    constructor(type: HardDiskType) {
        this.type = type;
    }
}

// Define Laptop class
class Laptop {
    keyboard: Keyboard[] = [];
    nic: NetworkInterfaceCard;
    screen: Display;
    hardDisk: HardDisk;
    powerState: boolean = false;
    bitKind: BitKind;
    os: OS;
    allUpdateLogs: string[] = [];

    constructor(keyboard: Keyboard, bit: BitKind, display: Display, nic: NetworkInterfaceCard, os: OS, harddisk: HardDisk) {
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

    updateLaptop(keyboard: Keyboard, bit: BitKind, display: Display, nic: NetworkInterfaceCard, os: OS, harddisk: HardDisk) {
        if (keyboard instanceof Keyboard) {
            this.keyboard.push(keyboard);
            this.allUpdateLogs.push(`Keyboard updated: ${keyboard.kind} keyboard with ${keyboard.layout} layout`);
        }

        if (bit instanceof BitKind) {
            this.bitKind = bit;
            this.allUpdateLogs.push(`Bit architecture updated: ${bit.type}`);
        }

        if (display instanceof Display) {
            this.screen = display;
            this.allUpdateLogs.push(`Display updated: ${display.size} inches ${display.type} display`);
        }

        if (nic instanceof NetworkInterfaceCard) {
            this.nic = nic;
            this.allUpdateLogs.push(`NIC updated: ${nic.name}`);
        }

        if (os instanceof OS) {
            this.os = os;
            this.allUpdateLogs.push(`OS updated: ${os.type}`);
        }

        if (harddisk instanceof HardDisk) {
            this.hardDisk = harddisk;
            this.allUpdateLogs.push(`HardDisk updated: ${harddisk.type}`);
        }

        this.showAllUpdateLogs();
    }
}

// Example usage:

// Create initial instances for the laptop
const initialKeyboard = new Keyboard("in-built", "Qwerty");
const initialBitKind = new BitKind("x64");
const initialDisplay = new Display(13, "amoled");
const initialNIC = new NetworkInterfaceCard("Initial NIC");
const initialOS = new OS("windows");
const initialHardDisk = new HardDisk("hdd");

// Create the laptop
const laptop = new Laptop(initialKeyboard, initialBitKind, initialDisplay, initialNIC, initialOS, initialHardDisk);

// Create new instances of components for update
const newKeyboard = new Keyboard("external", "Qwerty");
const newBitKind = new BitKind("x64");
const newDisplay = new Display(15, "lcd");
const newNIC = new NetworkInterfaceCard("New NIC");
const newOS = new OS("linux");
const newHardDisk = new HardDisk("ssd");

// Update the laptop
laptop.updateLaptop(newKeyboard, newBitKind, newDisplay, newNIC, newOS, newHardDisk);
