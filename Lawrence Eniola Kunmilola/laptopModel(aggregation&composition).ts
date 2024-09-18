class Laptop {
    keyboard: KeyBoard[] = [];
    nic: NetworkInterfaceCard;
    screen: Display;
    hardDisk: HardDisk;
    powerState: boolean = false;
    bitKind: BitKind;
    os: OS;

    constructor(
        bitKind: BitKind,
        display: Display,
        os: OsKind,
        hardDisk: HardDisk,
        nic: NetworkInterfaceCard,
        keyboard: KeyBoard
    ) {
        this.bitKind = bitKind;
        this.screen = display;
        this.os = new OS(os, 10); // Assuming a default version of 10 for the OS
        this.hardDisk = hardDisk;
        this.nic = nic;
        this.keyboard.push(keyboard);
    }

    shutDown() {
        this.powerState = false;
    }

    turnOn() {
        this.powerState = true;
    }

    updateOS(os: OsKind, version: number) {
        this.os = new OS(os, version);
    }

    updateKeyboard(keyboard: KeyBoard) {
        this.keyboard = [keyboard];
    }

    updateHardDisk(hardDisk: HardDisk) {
        this.hardDisk = hardDisk;
    }

    updateScreen(display: Display) {
        this.screen = display;
    }

    updateNIC(nic: NetworkInterfaceCard) {
        this.nic = nic;
    }
    logCurrentState() {
            const log = `Current Laptop State:
    Bit Kind: ${this.bitKind}
    Screen: ${JSON.stringify(this.screen)}
    OS: ${JSON.stringify(this.os)}
    Hard Disk: ${JSON.stringify(this.hardDisk)}
    NIC: ${JSON.stringify(this.nic)}
    Keyboard: ${JSON.stringify(this.keyboard)}
    Power State: ${this.powerState ? "ON" : "OFF"}`;
            console.log(log);
        }
}

type BitKind = 'x32' | 'x64' | 'x86';
type OsKind = 'linux' | 'Mac' | 'Windows';

class OS {
    osKind: OsKind;
    version: number;

    constructor(osKind: OsKind, version: number) {
        this.osKind = osKind;
        this.version = version;
    }
}

class HardDisk {
    size: string;
    type: 'ssd' | 'hdd';

    constructor(size: string, type: 'ssd' | 'hdd') {
        this.size = size;
        this.type = type;
    }
}

class Display {
    size: number[];

    constructor(size: number[]) {
        this.size = size;
    }
}

class NetworkInterfaceCard {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class KeyBoard {
    kind: KeyBoardKind;
    layout: KeyBoardLayout;

    constructor(kind: KeyBoardKind, layout: KeyBoardLayout) {
        this.kind = kind;
        this.layout = layout;
    }
}

type KeyBoardKind = 'in-built' | 'external';
type KeyBoardLayout = 'Qwerty' | 'Qwertz' | 'Azerty';

const myPc = new Laptop(
    'x64', // BitKind
    new Display([1920, 1080]), // Display size
    'Windows', // OsKind
    new HardDisk('1TB', 'ssd'), // HardDisk size and type
    new NetworkInterfaceCard('Ethernet'), // NIC name
    new KeyBoard('in-built', 'Qwerty') // Keyboard kind and layout
);

// Example usage of update methods
myPc.updateOS('Windows', 11); // Update OS to Windows 11
myPc.updateKeyboard(new KeyBoard('external', 'Qwerty')); // Update keyboard to an external Qwerty keyboard
myPc.updateHardDisk(new HardDisk('2TB', 'ssd')); // Update hard disk to 2TB SSD
myPc.updateScreen(new Display([2560, 1440])); // Update screen size
myPc.updateNIC(new NetworkInterfaceCard('WiFi')); // Update NIC to WiFi\
myPc.logCurrentState();

