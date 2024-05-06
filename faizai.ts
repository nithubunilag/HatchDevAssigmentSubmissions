
class Laptop{
    keyboard: Keyboard[] = []
    nic: NetworkInterfaceCard
    screen: Display 
    hardDisk: HardDisk
    powerState: boolean = false
    bitKind: BitKind
    os: OS
    allUpdateLogs: string[] = [];

    constructor(keyboard: Keyboard, bit: BitKind, display: Display, nic: NetworkInterfaceCard, os: OS, harddisk: HardDisk){
        this.keyboard.push(keyboard)
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
        console.log("All updates made: " + this.allUpdateLogs.join("\n"))
    }

    
    update(thingToUpdate: string, newValue: any) {
        const validProperties = {
            keyboard: { type: Keyboard, logMessage: (value: Keyboard) => `Keyboard updated: ${value.kind} keyboard with ${value.layout} layout` },
            nic: { type: String, logMessage: (value: string) => `NIC updated: ${value}` },
            display: { type: Display, logMessage: (value: Display) => `Display updated: ${value.size} inches ${value.type} display` },
            harddisk: { type: HardDisk, logMessage: (value: HardDisk) => `HardDisk updated: ${value.type}` },
            os: { type: OS, logMessage: (value: OS) => `OS updated: ${value.type}` }
        };

        const propertyInfo = validProperties[thingToUpdate.toLowerCase()];
        if (!propertyInfo) {
            throw new Error("Invalid property to update");
        }

        if (propertyInfo.type === String && typeof newValue !== 'string') {
            throw new Error(`Invalid input: The new value for ${thingToUpdate} must be a string`);
        }

        if (!(newValue instanceof propertyInfo.type) && typeof newValue !== 'string') {
            throw new Error(`Invalid input: The new value must be an instance of ${propertyInfo.type.name}`);
        }

        this[thingToUpdate.toLowerCase()] = newValue;
        this.allUpdateLogs.push(propertyInfo.logMessage(newValue));
        this.showAllUpdateLogs();
    }
}

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

myLaptopDisplay.displaySize = 15;
myLaptopDisplay.displayType = "amoled";

const myLaptop = new Laptop(newKeyboard, {type: "x64"}, myLaptopDisplay, {name: "Realtek"}, {type: "windows"}, {type: "ssd"})

const newLaptopDisplay = new Display();
newLaptopDisplay.displaySize = 17;
newLaptopDisplay.displayType = "lcd";

console.log(myLaptop);
myLaptop.update("display", newLaptopDisplay);
myLaptop.update("keyboard", newKeyboard);

try {
    myLaptop.update("nic", "Intel");
} catch (error) {
    console.error(`Error: ${error.message}`);
}