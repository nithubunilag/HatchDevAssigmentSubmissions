/**
 * FULL NAME: Abdulkareem Mustapha Akanmu
 * EMAIL: aphatheology@gmail.com
 * GITHUB USERNAME: Aphatheology
 */

// ### Week 3: OOP continued, SOLID Design
// Laptop modelling project using the principles of composition and aggregation.

type KeyboardType = 'in-built' | 'external';
type KeyboardLayout = 'qwerty' | 'dvorak' | 'colemark';
type DisplayType = 'AMOLED' | 'LCD' | 'OLED';
type HardDiskType = 'SSD' | 'HDD';
type CPUBrand = 'Intel' | 'M1' | 'M2';
type Architecture = 'x86' | 'x64';
type OS = 'Windows' | 'Mac' | 'Linux';

class Keyboard {
  kind: KeyboardType;
  layout: KeyboardLayout;

  constructor(kind: KeyboardType, layout: KeyboardLayout) {
    this.kind = kind;
    this.layout = layout;
  }
}

class NetworkInterfaceCard {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Display {
  size: number;
  type: DisplayType;

  constructor(size: number, type: DisplayType) {
    this.size = size;
    this.type = type;
  }
}

class HardDisk {
  type: HardDiskType;
  size: number;

  constructor(type: HardDiskType, size: number) {
    this.type = type;
    this.size = size;
  }

  setType(type: HardDiskType) {
    this.type = type;
  }

  setSize(size: number) {
    this.size = size;
  }
}

class CPU {
  brand: CPUBrand;
  cores: number;

  constructor(brand: CPUBrand, cores: number) {
    this.brand = brand;
    this.cores = cores;
  }
}

class RAM {
  size: number;

  constructor(size: number) {
    this.size = size;
  }

  increaseSize(additionalSize: number) {
    this.size += additionalSize;
  }
}

class OperatingSystem {
  kind: OS;
  version: number;

  constructor(kind: OS, version: number) {
    this.kind = kind;
    this.version = version;
  }

  updateVersion(newVersion: number) {
    this.version = newVersion;
  }
}

class Laptop {
  name: string;
  keyboard: Keyboard;
  nic: NetworkInterfaceCard;
  display: Display;
  hardDisk: HardDisk;
  cpu: CPU;
  architecture: Architecture;
  powerState: boolean = false;
  os: OperatingSystem;
  ram: RAM;

  constructor(
    name: string,
    keyboard: Keyboard,
    nic: NetworkInterfaceCard,
    display: Display,
    hardDisk: HardDisk,
    cpu: CPU,
    architecture: Architecture,
    os: OperatingSystem,
    ram: RAM
  ) {
    this.name = name;
    this.keyboard = keyboard;
    this.nic = nic;
    this.display = display;
    this.hardDisk = hardDisk;
    this.cpu = cpu;
    this.architecture = architecture;
    this.os = os;
    this.ram = ram;
  }

  powerOn() {
    console.log('Powering on...');
    this.powerState = true;
  }

  powerOff() {
    console.log('Powering off...');
    this.powerState = false;
  }

  updateOSVersion(newVersion: number) {
    this.os.updateVersion(newVersion);
    console.log('Updated OS version.');
  }

  updateHardDisk(type: HardDiskType, size: number) {
    this.hardDisk.setType(type);
    this.hardDisk.setSize(size);
    console.log('Updated Hard Disk.');
  }

  increaseRAM(additionalSize: number) {
    this.ram.increaseSize(additionalSize);
    console.log('Increased RAM size.');
  }


  specs() {
    console.log('SYSTEM SPECS');
    console.log(
      `1. OS: ${this.os.kind}\n2. OS Version: ${this.os.version}\n3. Keyboard (Kind): ${this.keyboard.kind}\n4. Keyboard (Layout): ${this.keyboard.layout}\n5. Hard Disk: ${this.hardDisk.type} - ${this.hardDisk.size}GB\n6. CPU Architecture: ${this.architecture}-based processor`
    );
    console.log('\nPower State:', this.powerState ? 'ON' : 'OFF');
  }
}

class Owner {
  name: string;
  contact: string;
  laptops: Laptop[];

  constructor(name: string, contact: string) {
    this.name = name;
    this.contact = contact;
    this.laptops = [];
  }

  addLaptop(laptop: Laptop) {
    this.laptops.push(laptop);
  }

  getLaptops() {
    this.laptops.forEach((laptop, index) => {
      console.log(`\nLaptop ${index + 1}:`);
      laptop.specs();
    });
  }
}

const hpBoard = new Keyboard('in-built', 'qwerty');
const hpDisplay = new Display(15.6, 'LCD');
const hpNIC = new NetworkInterfaceCard('HPNIC');
const hardDisk = new HardDisk('SSD', 256);
const intelChip = new CPU('Intel', 4);
const architecture = 'x64';
const os = new OperatingSystem('Windows', 10);
const ram = new RAM(8);

const hpEliteBook = new Laptop(
  'HP EliteBook',
  hpBoard,
  hpNIC,
  hpDisplay,
  hardDisk,
  intelChip,
  architecture,
  os,
  ram
);

const owner = new Owner('Mustapha', 'mustapha@anon.com');
owner.addLaptop(hpEliteBook);

hpEliteBook.powerOn();
hpEliteBook.updateOSVersion(11);
hpEliteBook.increaseRAM(8);
hpEliteBook.updateHardDisk('HDD', 512);
owner.getLaptops();
