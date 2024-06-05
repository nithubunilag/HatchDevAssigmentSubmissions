// Name: Obinka Ugonwa Divine-Favour
// email: divneobk@gmail.com

class Laptop{
    keyboard: Keyboard[] = []
    os: OS
    nic: NetworkInterfaceCard
    display: Display
    powerState: boolean = false
    hardDisk: HardDisk
    bit: BitKind


    constructor(os: OS, kb: Keyboard, nic: NetworkInterfaceCard, display: Display, harddisk: HardDisk, bit: BitKind ){
        this.os = os
        this.keyboard.push(kb)
        this.nic = nic
        this.display = display
        this.hardDisk = harddisk
        this.bit = bit
    }

    switchon(){
        this.powerState = true
    }

    switchoff(){
        this.powerState = false
    }


    // update method
    update<T>(thingToUpdate: updateable, newValue: updateValue<T> ){  // things to update can only be of the type updateable, newvalue T are the properties of the classes T inherits from
        let error: string = "";
        thingToUpdate.toLowerCase();
        switch(thingToUpdate){
            case "Keyboard": // the cases checks for the things of update of type updateable
                if (!(newValue instanceof Keyboard)) {
                    error = "Invalid input: The new value must be an instance of Keyboard"
                    return
                }
                this.keyboard.push(newValue)
                break
            case "NetworkInterfaceCard":
                if ((typeof newValue !== "string")) {
                    error = "Invalid input: The new value must be a string"
                    return
                }
                this.nic.name = newValue
                break
            case "Display":
                if(!(newValue instanceof Display)) {
                    error = "Invalid input: The new value must be an instance of Display"
                    return
                }
                this.display = newValue
                break
            case "HardDisk":
                if(!(newValue instanceof HardDisk)) {
                    error = "Invalid input: The new value must be an instance of HardDisk"
                    return
                }
                this.hardDisk = newValue
                break
            case "OS":
                if (!(newValue instanceof OS)) {
                    error = "Invalid input: The new value must be an instance of OS"
                    return
                }
                this.os = newValue
                break
            default:
                console.log("Invalid input")
        }
    
        console.log(error)

    }
}


// defining keyboard class
class Keyboard{
    kind: keyboardType
    layout : keyboardLayout

    updateKeyboard(newValue: Keyboard ){  // we'll be passing an instance of the class into the method... as it'd have similar properties and methods but only overwrites the properties 
        this.kind = newValue.kind
        this.layout = newValue.layout
    }
}


// defining os class
class OS{
    osType: operatingSystem
}


// defining nic class
class NetworkInterfaceCard{
    name: string
}

// defining display class
class Display{
    size: number 
    displayKind: displayType

    set displaySize(val: number){
        this.size = val
    }
    set displayType(type: displayType){
        this.displayKind = type
    }
}


// defining harddisk class
class HardDisk{
    spaceSize: space
    model: hardDiskType
}

// bit type
class BitKind{
    type: "x32" | "x64" | "x86"
}

// types
type keyboardType = "in-built" | "external" | "on-screen"
type keyboardLayout = "QWERTY" | "AZERTY" | "QWERTZ"

type operatingSystem = "Windows" | "Linux" | "Mac" 
type displayType = "amoled" | "oled" | "lcd"

type space = "256GB" | "400GB" | "512GB" | "1TB"
type hardDiskType = "ssd" | "hdd"

type updateable = "HardDisk" | "Keyboard" | "OS" | "Display" | "NetworkInterfaceCard"
type updateValue<T> = T extends "Keyboard" ? Keyboard :
                      T extends "NetworkInterfaceCard" ? string : 
                      T extends "Display" ? Display : 
                      T extends "HardDisk" ? HardDisk : 
                      T extends "OS" ? OS: T

export {Laptop, Keyboard, HardDisk, BitKind, NetworkInterfaceCard, Display, OS, }
    
    