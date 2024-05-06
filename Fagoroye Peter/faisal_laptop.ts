class Laptop{
    keyboard: Keyboard[] = []
    nic: NetworkInterfaceCard
    screen: Display 
    hardDisk: HardDisk
    powerState: boolean = false
    bitKind: BitKind
    os: OS
    allUpdateLogs: string[] = [];

    constructor(keyboard: Keyboard[], bit: BitKind, display: Display, nic: NetworkInterfaceCard, os: OS, harddisk: HardDisk,){
        this.keyboard= keyboard
        this.bitKind = bit
        this.screen = display
        this.nic = nic
        this.os = os
        this.hardDisk = harddisk
    }

    switchOn() {
        this.powerState = true
    }

    switchOff(){
        this.powerState = false
    }
    showAllUpdateLogs(){
        if (this.allUpdateLogs.length > 0) {
            console.log("All updates made: " + this.allUpdateLogs.join("\n"))
        } else {
            console.log("No updates made yet.")
        }
    }


    Update<T extends updateable>(thingsToUpdate: T, val: T extends "Keyboard" ? Keyboard : T extends "HardDisk" ? HardDisk : T extends "OperatingSystem" ? OS : T extends "Display" ? Display : T extends "Nic" ? NetworkInterfaceCard : any) {
        let error: string = "--------------------";
        switch(thingsToUpdate){
            case "Keyboard":
                if (!(val instanceof Keyboard)) {
                    error = "Invalid input: The new value must be an instance of Keyboard"
                    return
                }
                this.keyboard.push(val)
                this.allUpdateLogs.push(`Keyboard updated: ${val.kind} keyboard with ${val.layout} layout`)
                break
            case "Nic":
                if ((typeof val !== "string")) {
                    error = "Invalid input: The new value must be a string"
                    return
                }
                this.nic.name = val
                this.allUpdateLogs.push(`NIC updated: ${val}`)
                break
            case "Display":
                if(!(val instanceof Display)) {
                    error = "Invalid input: The new value must be an instance of Display"
                    return
                }
                this.screen = val
                this.allUpdateLogs.push(`Display updated: ${val.size} inches ${val.type} display`)
                break
            case "HardDisk":
                if(!(val instanceof HardDisk)) {
                    error = "Invalid input: The new value must be an instance of HardDisk"
                    return
                }
                this.hardDisk = val
                this.allUpdateLogs.push(`HardDisk updated: ${val.type}`)
                break
            case "OperatingSystem":
                if (!(val instanceof OS)) {
                    error = "Invalid input: The new value must be an instance of OS"
                    return
                }
                this.os = val
                this.allUpdateLogs.push(`OS updated: ${val.type}`)
                break
            default:
                console.log("Invalid input")
        }
    }
    
}

type updateable = "Keyboard" | "HardDisk" | "OperatingSystem" | "Display" | "Nic"

class OS{
    type: "mac" | "windows" | "linux"
}
class BitKind{
    type: "x32" | "x64" | "x86"
}
class Keyboard{
    kind: KeyboardKind
    layout: KeyboardLayout
    // keys: string[] 
}

type KeyboardKind = "in-built" | "external"
type KeyboardLayout = "Qwerty" | "Azerty" | "Qwertz"

class NetworkInterfaceCard{
    name: string
}

class Display{
    size: number = 13
    type: DisplayType

    set displaySize(val: number){
        this.size = val
    }
    set displayType(type: DisplayType){
        this.type = type
    }
}
type DisplayType = "amoled" | "lcd" | "oled"

class HardDisk{
    type: "ssd" | "hdd"
}

const myLaptopDisplay = new Display();
const newKeyboard = new Keyboard();
newKeyboard.kind = "external";
newKeyboard.layout = "Qwerty";

const newOs = new OS();
newOs.type = "linux";

const newBit = new BitKind();
newBit.type = "x64"

const newNic = new NetworkInterfaceCard();
newNic.name = "bodey";


myLaptopDisplay.displaySize = 15;
myLaptopDisplay.displayType = "amoled";

const myLaptop = new Laptop([newKeyboard], newBit, myLaptopDisplay, newNic , newOs, {type: "ssd"},)

const newLaptopDisplay = new Display();
newLaptopDisplay.displaySize = 17;
newLaptopDisplay.displayType = "lcd";
myLaptop.allUpdateLogs;

console.log(myLaptop);
myLaptop.Update("Display", newLaptopDisplay)
myLaptop.showAllUpdateLogs()
