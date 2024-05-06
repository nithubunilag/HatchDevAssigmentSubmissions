type KeyboardType = 'in-built' | 'external';
type KeyboardLayout = 'qwerty' | 'dvorak' | 'colemark';
type DisplayType = 'AMOLED' | 'LCD' | 'O-LED';
type HardDiskType = 'SSD' | 'HDD';
type CPUBrand = 'Intel' | 'M1' | 'M2';
type Architecture = 'x86' | 'x64' | 'x32';
type WindowsEdition = 'Windows 10 Pro' | 'Windows XP Pro' | 'Windows 11';
type UpdateStatus = 'Updated' | 'Not Updated' | 'Unknown';

class WindowsInfo {
    edition: WindowsEdition;
    updateStatus: UpdateStatus;
    version: number;

    constructor(edition: WindowsEdition, updateStatus: UpdateStatus, version: number) {
        this.edition = edition;
        this.updateStatus = updateStatus;
        this.version = version;
    }

    updateVersion() {
        this.version++;
    }
}

class Keyboard {
    constructor(public kind: KeyboardType, public layout: KeyboardLayout) {}
}

class Display {
    constructor(public size: number, public type: DisplayType) {}
}

class HardDisk {
    constructor(public type: HardDiskType, public size: number) {}
}

class CPU {
    constructor(public brand: CPUBrand, public cores: number) {}
}

class Laptop {
    isPoweredOn: boolean = true;
    constructor(
        public keyboard: Keyboard,
        public display: Display,
        public hardDisk: HardDisk,
        public cpu: CPU,
        public architecture: Architecture,
        public winInfo: WindowsInfo
    ) {}

    powerOn() {
        this.isPoweredOn = true;
    }

    powerOff() {
        this.isPoweredOn = false;
    }
}

const myBoard = new Keyboard('external', 'qwerty');
const winDisplay = new Display(2000, 'LCD');
const hardDisk = new HardDisk('SSD', 456);
const intelChip = new CPU('Intel', 4);
const architecture: Architecture = 'x64';
const winStatus = new WindowsInfo('Windows 10 Pro', 'Updated', 10);

const Elitebook = new Laptop(myBoard, winDisplay, hardDisk, intelChip, architecture, winStatus);

// Updating OS version
winStatus.updateVersion();

console.log(Elitebook);
