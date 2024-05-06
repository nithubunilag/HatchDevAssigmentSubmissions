type BitKind = "x64" | "x32" | "x86";

class Display {
    size: number;
    type: DisplayType;

    constructor() {
        this.size = 0;
        this.type = "lcd";
    }
}

type DisplayType = "amoled" | "lcd" | "oled";

class NetworkInterfaceCard {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class HardDisk {
    type: "ssd" | "hdd";
    size: number;

    constructor() {
        this.type = "ssd";
        this.size = 0;
    }
}

class KeyBoard {
    kind: KeyBoardKind;
    layout: KeyBoardLayout;

    constructor(kind: KeyBoardKind) {
        this.kind = kind;
        this.layout = "Qwerty";
    }
}

type KeyBoardKind = "in-built" | "external";
type KeyBoardLayout = "Qwerty" | "Qwrertz" | "Azerty";

class Laptop {
    keyboard: KeyBoard[] = [];
    nic: NetworkInterfaceCard;
    screen: Display;
    hardDisk: HardDisk;
    powerState: boolean = false;
    bitKind: BitKind;
    updatedComponents: { [component: string]: { previousVersion: string, newVersion: string } } = {};

    constructor(
        bit: BitKind, 
        display: Display, 
        nic: NetworkInterfaceCard,
        hd: HardDisk,
        keyBoards: KeyBoard[]
    ) {
       this.bitKind = bit;
       this.screen = display;
       this.nic = nic;
       this.hardDisk = hd;
       this.keyboard = keyBoards;
    }

    switchOn() {
        this.powerState = true;
        console.log("Laptop is now ON");
    }

    update(component: UpdatableComponent, newVersion: string) {
        let previousVersion = "";
        switch(component) {
            case "screen":
                previousVersion = this.screen.type;
                this.screen.type = newVersion as DisplayType; // Casting to DisplayType
                break;
            case "nic":
                previousVersion = this.nic.name;
                this.nic.name = newVersion;
                break;
            case "hardDisk":
                previousVersion = this.hardDisk.size.toString();
                this.hardDisk.size = parseInt(newVersion);
                break;
            case "keyboard":
                previousVersion = this.keyboard[0].layout; // Capture previous keyboard layout
                this.keyboard[0].layout = newVersion as KeyBoardLayout; // Casting to KeyBoardLayout
                break;
            default:
                console.log("Invalid component to update");
                return;
        }
        this.updatedComponents[component] = { previousVersion, newVersion };
    }

    displayComponents() {
        console.log("Initial Components:");
        console.log("Screen:", this.screen);
        console.log("NIC:", this.nic);
        console.log("Hard Disk:", this.hardDisk);
        console.log("Keyboard:", this.keyboard);
    }

    displayUpdatedComponents() {
        console.log("\nUpdated Components:");
        Object.keys(this.updatedComponents).forEach(component => {
            const { previousVersion, newVersion } = this.updatedComponents[component];
            console.log(`${component}: Previous Version - ${previousVersion}, New Version - ${newVersion}`);
        });
        console.log("\nAll Components:");
        console.log("Screen:", this.screen);
        console.log("NIC:", this.nic);
        console.log("Hard Disk:", this.hardDisk);
        console.log("Keyboard:", this.keyboard);
    }

    shutDown() {
        this.powerState = false;
        console.log("Laptop is now OFF");
    }
}

// Define a union type for components that can be updated
type UpdatableComponent = "screen" | "nic" | "hardDisk" | "keyboard";

// Create components
const display = new Display();
display.size = 15.6;
display.type = "lcd";

const nic = new NetworkInterfaceCard("Intel Gigabit CT");

const hd = new HardDisk();
hd.type = "ssd";
hd.size = 512;

// Update the initial keyboard layout to "AZERTY"
const keyboard1 = new KeyBoard("in-built");
keyboard1.layout = "Azerty";

// Create a laptop instance
const myLaptop = new Laptop(
    "x64", // bit
    display,
    nic,
    hd,
    [keyboard1] // keyBoards
);

// Display initial components
myLaptop.displayComponents();

// Using laptop methods
myLaptop.switchOn();
myLaptop.update("screen", "amoled");
myLaptop.update("nic", "Mellanox ConnectX-3 Pro");
myLaptop.update("hardDisk", "1024");
myLaptop.update("keyboard", "Qwerty"); // Update keyboard layout from AZERTY to QWERTY

// Display updated components
myLaptop.displayUpdatedComponents();
myLaptop.shutDown();
