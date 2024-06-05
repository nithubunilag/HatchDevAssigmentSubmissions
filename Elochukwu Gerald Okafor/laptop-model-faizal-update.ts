/** NOTE: I had to change a few things to suit my implementation better */

// An 'updatable' interface means that the component is updatable
interface Updatable<T> {
    update(newComponent: T): string;
}

// Keyboard related types
type KeyboardKind = 'in-built' | 'external';
type KeyboardLayout = 'Qwerty' | 'Azerty' | 'Qwertz';

// Keyboard class
class Keyboard implements Updatable<Keyboard> {
    kind: KeyboardKind;
    layout: KeyboardLayout;

    update(newKeyboard: Keyboard) {
        this.kind = newKeyboard.kind;
        this.layout = newKeyboard.layout;

        return `Updated keyboard to kind: ${this.kind}, layout: ${this.layout}`;
    }
}

// OS Class
class OS implements Updatable<OS> {
    type: 'mac' | 'windows' | 'linux';

    update(newOS: OS) {
        this.type = newOS.type;
        return `Updated OS to ${this.type}`;
    }
}

// Bit-kind class
class BitKind implements Updatable<BitKind> {
    type: 'x32' | 'x64' | 'x86';

    update(newBitKind: BitKind) {
        this.type = newBitKind.type;
        return `Updated Bit-kind to ${this.type}`;
    }
}

// Network Interface class
class NetworkInterfaceCard implements Updatable<NetworkInterfaceCard> {
    name: string;

    update(newNetworkInterfaceCard: NetworkInterfaceCard) {
        this.name = newNetworkInterfaceCard.name;
        return `Updated NIC to ${this.name}`;
    }
}

// Display related types
type DisplayType = 'amoled' | 'lcd' | 'oled';

// Display class
class Display implements Updatable<Display> {
    private size: number = 13;
    private type: DisplayType;

    set displaySize(val: number) {
        this.size = val;
    }

    set displayType(type: DisplayType) {
        this.type = type;
    }

    update(newDisplay: Display) {
        this.size = newDisplay.size;
        this.type = newDisplay.type;

        return `Updated display to size: ${this.size}, type: ${this.type}`;
    }
}

// Hard disk class
class HardDisk implements Updatable<HardDisk> {
    type: 'ssd' | 'hdd';

    update(newComponent: HardDisk) {
        this.type = newComponent.type;
        return `Updated hard disk to ${this.type}`;
    }
}

// Laptop class
class Laptop {
    keyboard: Keyboard[] = [];
    nic: NetworkInterfaceCard;
    screen: Display;
    hardDisk: HardDisk;
    powerState: boolean = false;
    bitKind: BitKind;
    os: OS;

    allUpdateLogs: string[] = [];

    constructor(
        keyboard: Keyboard,
        bit: BitKind,
        display: Display,
        nic: NetworkInterfaceCard,
        os: OS,
        harddisk: HardDisk
    ) {
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
        console.log('All updates made:\n' + this.allUpdateLogs.join('- \n') + '\n');
    }

    update<T>(component: Updatable<T>, newComponent: T) {
        const updateLog = component.update(newComponent);
        this.allUpdateLogs.push(updateLog);
        this.showAllUpdateLogs();
    }
}

const myKeyboard = new Keyboard();
const myBitKind = new BitKind();
const myDisplay = new Display();
const myNIC = new NetworkInterfaceCard();
const myOS = new OS();
const myHardDisk = new HardDisk();

// Would've preferred constructors
myKeyboard.kind = 'external';
myKeyboard.layout = 'Qwerty';
myBitKind.type = 'x64';
myDisplay.displaySize = 8000;
myDisplay.displayType = 'lcd';
myNIC.name = 'broadcom';
myOS.type = 'linux';
myHardDisk.type = 'hdd';

const myLaptop = new Laptop(
    myKeyboard,
    myBitKind,
    myDisplay,
    myNIC,
    myOS,
    myHardDisk
);

// Testing
const newHardDisk = new HardDisk();
newHardDisk.type = 'ssd';

myLaptop.update(myLaptop.hardDisk, newHardDisk);
console.log('Hard Disk:', myLaptop.hardDisk);

export {
    Laptop,
    OS,
    BitKind,
    Keyboard,
    KeyboardKind,
    KeyboardLayout,
    NetworkInterfaceCard,
    Display,
    DisplayType,
    HardDisk,
};
