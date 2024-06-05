class Laptop {
    name: string;
    keyboard: KeyBoard;
    nic: NetworkInterfaceCard;
    screen: Display;
    hardDisk: HardDisk;
    powerState: boolean = false;
    bitKind: Bitkind;
    operatingSystem: OperatingSystem;

    constructor(
        name: string,
        bit: Bitkind,
        display: Display,
        nic: NetworkInterfaceCard,
        hd: HardDisk,
        keyBoards: KeyBoard,
        os: OperatingSystem
    ) {
        this.name = name
        this.bitKind = bit;
        this.screen = display;
        this.nic = nic;
        this.hardDisk = hd;
        this.keyboard = keyBoards;
        this.operatingSystem = os;
        this.powerState = false;
    }

    switchOn() {
        this.powerState = true;
    }

    update(version: number) {
        this.operatingSystem.version = version;
        console.log(`Operating System updated to version ${version}`);
    }

    shutDown() {
        this.powerState = false;
    }
}

type OsKind = "Linux" | "Mac" | "Windows";
type Bitkind = "x64" | "x32" | "x86";

class OperatingSystem {
    kind: OsKind;
    version: number;

    constructor(kind: OsKind, version: number) {
        this.kind = kind;
        this.version = version;
    }
}

class HardDisk {
    type: HardDiskType;
    size: number;

    set HardDiskSize(val: number) {
        this.size = val;
    }

    set HardDiskType(type: HardDiskType) {
        this.type = type;
    }
}
type HardDiskType = "ssd" | "hdd";

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

type DisplayType = "amoled" | "lcd" | "oled";

class NetworkInterfaceCard {
    constructor(public readonly name: string) {}
}

class KeyBoard {
    kind: KeyBoardKind;
    layout: KeyBoardLayout;

    set KeyBoardKind(type: KeyBoardKind) {
        this.kind = type;
    }

    set KeyBoardLayout(type: KeyBoardLayout) {
        this.layout = type;
    }
}

type KeyBoardKind = "in-built" | "external";
type KeyBoardLayout = "Qwerty" | "Azerty";


const os = new OperatingSystem("Windows", 10);


const display = new Display();
display.displaySize = 16;
display.setDisplayType("amoled");

const nic = new NetworkInterfaceCard("Wi-fi");

const hd = new HardDisk();
hd.HardDiskType = "ssd";
hd.HardDiskSize = 256;

const keyBoards = new KeyBoard();
keyBoards.KeyBoardKind = "in-built";
keyBoards.KeyBoardLayout = "Qwerty";


const myLaptop = new Laptop("Lennovo Ideapad", "x64", display, nic, hd, keyBoards, os);


myLaptop.update(11); 

console.log(myLaptop);
