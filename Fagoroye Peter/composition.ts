// COMPOSITION

class Laptop{
    keyboard: Keyboard[] = []
    nic: NetworkInterfaceCard
    screen: Display
    hardDisk: HardDisk
    powerState: boolean = false;
    bitKind: BitKind
    os: OperatingSystem

    constructor(
        bit: BitKind,
        display: Display,
        nic: NetworkInterfaceCard,
        hd: HardDisk,
        os: OperatingSystem,
        keyboards: Keyboard[]
    ) {
        this.powerState = false;
        this.bitKind = bit;
        this.screen = display;
        this.nic = nic;
        this.hardDisk = hd;
        this.os = os;
        this.keyboard = keyboards;
    }

    switchOn(){
        this.powerState = true;
        return "Turning on the Laptop...."
    }

    switchOff(){
        this.powerState = false;
        return "Turning off the Laptop...."
    }

    update(){
        this.switchOn()
        return `This laptop is updating from ${ops.kind}10 to 11`
    }
}

// Types
type Oskind = "Linux" | "Mac" | "Windows"
type BitKind = "x64" | "x32" | "x68"

type KeyboardKind = "in-built"  | "external"
type KeyboardLayout = "QUERTY"  | "QUERTZ" |  "AZERTY"

type DisplayType = "amoled" | "lcd" |"oled"

// The Operating System
class OperatingSystem{
    kind: Oskind
    version : string

    set operatingSystem(type: Oskind){
        this.kind = type;
    }

    set systemVersion(val: string){
        this.version = val;
    }
}

// The Storage Space
class HardDisk{
    type: "ssd" | "hdd"
    value: number
}


//The Screen Size and Feature
class Display{
    size: number
    type: DisplayType

    set diaplaySize(val: number){
        this.size = val;
    }

    set diaplayType(type: DisplayType){
        this.type = type;
    }
}

// The Network Interface
class NetworkInterfaceCard{
   constructor(public readonly name:string){

   }
}


// The Keyboard
class Keyboard{
    kind: KeyboardKind
    layout: KeyboardLayout

    set myKeyboard(kind: KeyboardKind){
        this.kind = kind
    }

    set myLayout(design: KeyboardLayout){
        this.layout = design;
    }

}



const display = new Display() // Instantiating the Display class
display.diaplaySize = 16
display.diaplayType = "amoled"

const nic = new NetworkInterfaceCard("Js") // Instantiating The Network Interface Card

const ops = new OperatingSystem()  // Insantiating the Operating System Class
ops.operatingSystem = "Windows"
ops.systemVersion = "22H2"

const hd = new HardDisk()  // Instantiating the HardDisk Class
hd.type = "ssd"
hd.value = 256

const keyboards = new Keyboard()  // Instantiating the Keyboard Class
keyboards.myKeyboard = "in-built" 
keyboards.myLayout = "QUERTY"


const nitLap = new Laptop("x64", display, nic, hd, ops, [keyboards] )

console.log(nitLap.switchOn());
console.log(nitLap);
console.log(nitLap.switchOff())
console.log(nitLap.update())









