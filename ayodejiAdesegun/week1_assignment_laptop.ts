class Laptop {
    keyboard: KeyBoard;
    nic: NetworkInterfaceCard;
    screen: Display;
    hardDisk: HardDisk;
    powerState: boolean = false;
    bitKind: BitKind;
    operatingSystem: OperatingSystem;

    constructor(
        bitKind: BitKind,
        screen: Display,
        nic: NetworkInterfaceCard,
        hardDisk: HardDisk,
        keyBoard: KeyBoard,
        operatingSystem: OperatingSystem,
    ) {
        this.bitKind = bitKind;
        this.screen = screen;
        this.hardDisk = hardDisk;
        this.nic = nic;
        this.keyboard = keyboard;
        this.operatingSystem = operatingSystem;
        this.powerState = false; // The laptop is swtiched off.  
    }

    switchOn() {
        this.powerState = true;
    }

    update(version: number) {
        if (this.powerState) {
            console.log()
        }

    }

    shutDown() {
        this.powerState = false
    }

}

type OsKind = "Linux" | "Mac" | "Windows"
type BitKind = "x64" | "x32" | "x86";

class OperatingSystem {
    kind: OsKind;
    version: number;
    constructor(kind: OsKind, version: number) {
        this.kind = kind;
        this.version = version;

    }
}

class HardDisk {
    type: "ssd" | "hdd"
    size: number
    constructor(type: "ssd" | "hdd", size: number) {
        this.type = type;
        this.size = size;
    }
}


class Display {
    size: number
    type: DisplayType
    constructor(size: number, type: DisplayType) {
        this.size = size;
        this.type = type;
    }

    set displaySize(val: number) {
        this.size = val;
    }
}

type DisplayType = "amoled" | "lcd" | "oled";

class NetworkInterfaceCard {
    constructor(public readonly name: string) { }
}

class KeyBoard {
    kind: KeyBoardKind
    layout: KeyBoardLayout

    constructor(kind: KeyBoardKind, layout: KeyBoardLayout) {
        this.kind = kind;
        this.layout = layout;
    }
}

type KeyBoardKind = "in-built" | "external" | "on-screen";
type KeyBoardLayout = "Qwerty" | "Qwertz" | "Azerty";

const display = new Display(16, "oled")
const os = new OperatingSystem("Windows", 11);
const hd = new HardDisk("ssd", 512);
const nic = new NetworkInterfaceCard("nitlap");
const keyboard = new KeyBoard("in-built", "Qwerty");

const nitLap = new Laptop("x64", display, nic, hd, keyboard, os);
console.log(`Laptop properties: ${nitLap.screen}, ${nitLap.nic}, ${nitLap.hardDisk} `)