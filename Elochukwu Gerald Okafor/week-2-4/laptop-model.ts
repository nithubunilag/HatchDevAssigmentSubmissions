// Hardware component types
type keyboardType = 'in-built' | 'external';
type keyboardLayout = 'qwerty' | 'dvorak' | 'colemark';
type DisplayType = 'AMOLED' | 'LCD' | 'O-LED';
type HardDiskType = 'SSD' | 'HDD';
type CPUBrand = 'Intel' | 'M1' | 'M2';
type Architecture = 'x86' | 'x64';
type OS = 'Windows' | 'Mac' | 'Linux';

// Keyboard class
class Keyboard {
    kind: keyboardType;
    layout: keyboardLayout;

    constructor(kind: keyboardType, layout: keyboardLayout) {
        this.kind = kind;
        this.layout = layout;
    }
}

// NIC Class
class NetworkInterfaceCard {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

// Display class
class Display {
    size: number;
    type: DisplayType;

    constructor(size: number, type: DisplayType) {
        this.size = size;
        this.type = type;
    }
}

// Hard Disk class
class HardDisk {
    type: HardDiskType;
    size: number;

    constructor(type: HardDiskType, size: number) {
        this.type = type;
        this.size = size;
    }
}

// CPU Class
class CPU {
    brand: CPUBrand;
    cores: number;

    constructor(brand: CPUBrand, cores: number) {
        this.brand = brand;
        this.cores = cores;
    }
}

// Laptop class (composition)
class Laptop {
    name: string;
    keyboard: Keyboard;
    nic: NetworkInterfaceCard;
    display: Display;
    hardDisk: HardDisk;
    cpu: CPU;

    architecture: Architecture;
    powerState: boolean = false;
    version: number;
    os: OS;

    constructor(
        name: string,
        keyboard: Keyboard,
        nic: NetworkInterfaceCard,
        display: Display,
        hardDisk: HardDisk,
        cpu: CPU,
        architecture: Architecture,
        os: OS,
        version: number
    ) {
        this.name = name;
        this.keyboard = keyboard;
        this.nic = nic;
        this.display = display;
        this.hardDisk = hardDisk;
        this.cpu = cpu;
        this.architecture = architecture;
        this.os = os;
        this.version = version;
    }

    // Powers on system
    powerOn() {
        console.log('Powering on...');
        this.powerState = true;
    }

    // Powers off the system
    powerOff() {
        console.log('Powering off...');
        this.powerState = false;
    }

    // Updates the OS version
    update() {
        this.version += 1;
        console.log('Updated OS version.');
    }

    // Displays system specs
    specs() {
        console.log('\nSYSTEM SPECS');
        console.log('-'.repeat(12));
        console.log(
            `1. OS: ${this.os}\n2. OS Version: ${this.version}\n3. Keyboard (Kind): ${this.keyboard.kind}\n4. Keyboard (layout): ${this.keyboard.layout}\n5. Hard Disk: ${this.hardDisk.type} - ${this.hardDisk.size}GB\n6. CPU Architecture: ${this.architecture}-based processor`
        );
        console.log('\nPower State:', this.powerState ? 'ON' : 'OFF');
    }
}

// Laptop model hardware components
const hpBoard = new Keyboard('in-built', 'qwerty');
const hpDisplay = new Display(2000, 'LCD');
const hpNIC = new NetworkInterfaceCard('HPNIC');
const hardDisk = new HardDisk('SSD', 256);
const intelChip = new CPU('Intel', 4);
const architecture = 'x64';
const os = 'Windows';

// HP EliteBook (dummy model)
const hpEliteBook = new Laptop(
    'HP EliteBook',
    hpBoard,
    hpNIC,
    hpDisplay,
    hardDisk,
    intelChip,
    architecture,
    os,
    2021
);

console.log('Hard Drive:', hpEliteBook.hardDisk.type);
console.log('OS Version:', hpEliteBook.version);

hpEliteBook.powerOn();
hpEliteBook.update();

hpEliteBook.specs();
