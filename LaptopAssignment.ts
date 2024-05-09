class Laptop{
    keyboard: KeyBoard[] = [];
    nic: NetworkInterfaceCard;
    screen: Display;
    hardDisk: HardDisk;
    powerState:boolean = false;
    bit:bitKind;
    os: OperatingSystem;

    constructor(
        bit: bitKind,
        screen: Display,
        os: OperatingSystem,
        hardDisk: HardDisk,
        nic: NetworkInterfaceCard,
        keyboard:KeyBoard[],
    ){
        this.keyboard= keyboard;
        this.nic = nic;
        this.screen = screen;
        this.hardDisk = hardDisk;
        this.bit = bit;
        this.os = os;
    }
     // Method to switch on the laptop
    switchOn(){
        this.powerState = true
    }
    // Method to shutdown the laptop
    shutdown(){
        this.powerState = false
    }
   // Method to Update
    update(propToUpdate: keyof Laptop, newValue: any): void {
        if (propToUpdate === 'keyboard') {
            this.keyboard = newValue as KeyBoard[];
        } else if (propToUpdate === 'nic') {
            this.nic = newValue as NetworkInterfaceCard;
        } else if (propToUpdate === 'screen') {
            this.screen = newValue as Display;
        } else if (propToUpdate === 'hardDisk') {
            this.hardDisk = newValue as HardDisk;
        } else if (propToUpdate === 'powerState') {
            this.powerState = newValue as boolean;
        } else if (propToUpdate === 'bit') {
            this.bit = newValue as bitKind;
        } else if (propToUpdate === 'os') {
            this.os = newValue as OperatingSystem;
        } else {
            console.log('Invalid property to update');
        }
    }
}    


// Types
type bitKind = "x64"| "x32" | "x86";
type OSType = "Linux" | "Mac" | "Windows";
type HardDiskType = "ssd"| "hdd";
type DisplayType = "amoled" | "lcd"| "oled";
type KeyboardKind = "in-built"| "external";
type KeyboardLayout = "Qwerty" | "Azerty";

// Component Classes

class KeyBoard{

    constructor(public readonly kind: KeyboardKind, public readonly layout: KeyboardLayout){
        this.kind = kind
        this.layout = layout
    }

}

class Display{
    
    constructor( public size: number, public DisplayType:string){
        this.size = size;
        this.DisplayType = DisplayType;
    }
}

class NetworkInterfaceCard{

    constructor(public name:string){
        this.name = name;
    }
}

class OperatingSystem{

    constructor( public OSType:string, public version:number){
        this.OSType = OSType;
        this.version = version;
    }
}

class HardDisk{

    constructor( public size: number, public HardDiskType:string){
        this.size = size;
        this.HardDiskType = HardDiskType;
    }
}

// Create a instance of the Laptop class
const keyboards = [
    new KeyBoard("in-built", "Qwerty"),
    new KeyBoard("external", "Azerty")
]
const nic = new NetworkInterfaceCard("ethernet");
const display = new Display(15.6,"lcd");
const hd = new HardDisk(512,"ssd");
const os = new OperatingSystem("Windows", 10);

// Create an instance of the Laptop class
const laptop = new Laptop("x64", display,os, hd,nic,keyboards)

// Call the update function to update a property

laptop.update("powerState", true);

// Alternatively, you can update other properties in the same way:

// laptop.update("nic", new NetworkInterfaceCard("wifi"));
// laptop.update("screen", new Display(14, "amoled"));
// laptop.update("bit", "x32");

// After updating properties, you can access or perform other operations on the laptop instance

console.log(laptop)




