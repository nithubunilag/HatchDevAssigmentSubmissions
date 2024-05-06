export class Laptop {
    keyboard: Keyboard[];
    nic: NetworkInterfaceCard;
    screen: Display;
    hardDisk: HardDisk;
    powerState: boolean = false;
    bitKind: BitKind;

    constructor(
        bit: BitKind,
        keyboard: Keyboard[],
        nic: NetworkInterfaceCard,
        screen: Display,
        hardDisk: HardDisk
    ) {
        this.bitKind = bit;
        this.keyboard = keyboard;
        this.nic = nic;
        this.screen = screen;
        this.hardDisk = hardDisk;
    }

    switchOn() {
        this.powerState = true;
    }

    update() {
        // Implementation for update() method
        console.log("Updating laptop software...");
    }
    
           


    shutdown() {
        this.powerState = false;
    }
}

export class Keyboard {
    kind: KeyboardKind;
    layout: string; // Assuming layout is a string

    constructor(kind: KeyboardKind, layout: string) {
        this.kind = kind;
        this.layout = layout;
    }
}

export type KeyboardKind = "in_built";

export class NetworkInterfaceCard {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

export class Display {
    size: number;
    type: DisplayType;

    constructor(size: number, type: DisplayType) {
        this.size = size;
        this.type = type;
    }
}

export type DisplayType = "amoled" | "Icd" | "Oled";

export class HardDisk {
    type: "ssd";
    size: number;

    constructor(type: "ssd", size: number) {
        this.type = type;
        this.size = size;
    }
}

export type BitKind = string;
