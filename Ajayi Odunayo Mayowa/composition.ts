// type OsKind = "Linux" | "Mac" | "Windows";
// type bitKind = "x64" | "x32" | "x86";
// type DisplayType = "LCD" | "LED" | "OLED";
// type KeyboardKind = "in-built" | "external";
// type KeyboardLayout = "Qwerty" | "Qwerertz" | "Azerty";
// type HardDiskType = "ssd" | "hdd";

// // Define the Display class
// class Display {
//     type: DisplayType;
//     size: number;

//     constructor(type: DisplayType, size: number) {
//         this.type = type;
//         this.size = size;
//     }
// }

// // Define the NetworkInterfaceCard class
// class NetworkInterfaceCard {
//     name: string;

//     constructor(name: string) {
//         this.name = name;
//     }
// }

// // Define the HardDisk class
// class HardDisk {
//     type: HardDiskType;

//     constructor(type: HardDiskType) {
//         this.type = type;
//     }
// }

// // Define the OperatingSystem class
// class OperatingSystem {
//     version: string;
//     kind: OsKind;

//     constructor(kind: OsKind, version: string) {
//         this.kind = kind;
//         this.version = version;
//     }
// }

// // Define the KeyBoard class
// class KeyBoard {
//     kind: KeyboardKind;
//     layout: KeyboardLayout;

//     constructor(kind: KeyboardKind, layout: KeyboardLayout) {
//         this.kind = kind;
//         this.layout = layout;
//     }
// }

// // Define the Laptop class
// class Laptop {
//     name: string;
//     keyboard: KeyBoard;
//     nic: NetworkInterfaceCard;
//     display: Display;
//     hardDisk: HardDisk;
//     powerState: boolean = false;
//     bitKind: bitKind;
//     os: OperatingSystem;

//     constructor(
//         name: string,
//         bit: bitKind,
//         display: Display,
//         nic: NetworkInterfaceCard,
//         hardDisk: HardDisk,
//         os: OperatingSystem,
//         keyboard: KeyBoard,
//         powerState: boolean
//     ) {
//         this.name = name;
//         this.bitKind = bit;
//         this.display = display;
//         this.nic = nic;
//         this.hardDisk = hardDisk;
//         this.os = os;
//         this.powerState = powerState;
//         this.keyboard = keyboard;
//     }

//     switchOn() {
//         this.powerState = true;
//     }

//     shutDown() {
//         this.powerState = false;
//     }

//     systemUpdate() {
//         // this.switchOn()
//         for (let i = 0; i <= 100; i += 20) {
//             console.log(`Updating... ${i}%`);
//         }
//         console.log(`Updated!`);
//     }
// }

// // Create instances of the classes
// const display = new Display("LED",15);
// const nic = new NetworkInterfaceCard("Ethernet");
// const hardDisk = new HardDisk("ssd");
// const os = new OperatingSystem("Windows", "10");
// const keyboard = new KeyBoard("in-built", "Qwerty");

// const myLaptop = new Laptop("ThinkPad X1 Carbon", "x64", display, nic, hardDisk, os, keyboard, false);
// console.log(myLaptop);
// console.log(myLaptop.systemUpdate());
