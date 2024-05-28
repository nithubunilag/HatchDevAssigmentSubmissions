class Laptop {
    keyboard: KeyBoard[] = []
    nic: NetworkInterfaceCard
    screen: Display
    hardDisk: HardDisk
    powerState: boolean = false;
    bitKind: BitKind
    os: OperatingSystem | null = null;
    battery: Battery | null = null;
    memory: Memory | null = null;

    constructor(
        bit: BitKind, 
        display: Display, 
        nic: NetworkInterfaceCard,
        hd: HardDisk,
        keyBoards: KeyBoard[],
        battery: Battery,
        memory: Memory,

    ) {
       this.powerState = false; // the laptop is swtiched off.  
       this.battery = battery;
       this.memory = memory;
    }

    switchOn() {
        this.powerState = true;
    }

    update(os: OperatingSystem) { // Modified update method
        this.os = os;
    }

    shutDown() {
        this.powerState = false
    }

}
class Memory {
    size: number; // Size of the memory in GB

    constructor(size: number) {
        this.size = size;
    }
}
class Battery {
    capacity: number; // Capacity in mAh

    constructor(capacity: number) {
        this.capacity = capacity;
    }
}


type OsKind = "Linux" | "Mac" | "Windows"
type BitKind = "x64" | "x32" | "x86";

class OperatingSystem {
    kind: OsKind
    version: number
}

class HardDisk {
    type: "ssd" | "hdd"
    size: number
}

class Display {
    size: number
    type: DisplayType

    set displaySize(val: number) {
        this.size = val;
    }

    setDisplayType(type: DisplayType) {
        this.type = type;
    }
}

type DisplayType = "amoled" | "lcd" | "oled";

class NetworkInterfaceCard {
    constructor(public readonly name: string) {}
}

class KeyBoard {
    kind: KeyBoardKind
    
    layout: KeyBoardLayout

    constructor(kind: KeyBoardKind) {
        this.kind = kind;
    }
}

type KeyBoardKind = "in-built" | "external"
type KeyBoardLayout = "Qwerty" | "Qwrertz" | "Azerty"







const display = new Display()

display.displaySize = 16
display.setDisplayType("amoled");

const nic = new NetworkInterfaceCard("nitlap")
const kb = [new KeyBoard('external')]
const hd = new HardDisk()
const bt = new Battery(90)
const mem = new Memory(9)
const os = new OperatingSystem()
os.kind = "Linux"
os.version = 90

const  nitLap = new Laptop("x64", display,nic,hd,kb,bt,mem)
nitLap.update(os)
console.log(nitLap)