//COMPOSITION

class Laptop{
    keyBoard : KeyBoard[] = []
    nic : NetworkInterfaceCard
    screen: Display
    hardDisk: HardDisk
    powerState: boolean = false;
    operatingSystem : OperatingSystem
    bitKind: BitKind

    constructor(
        bitKind: BitKind,
        screen: Display,
        nic : NetworkInterfaceCard,
        hardDisk: HardDisk,
        operatingSystem : OperatingSystem,
        keyBoards: KeyBoard[]
    ) {
        this.bitKind = bitKind,
        this.screen = screen,
        this.nic = nic,
        this.hardDisk = hardDisk,
        this.operatingSystem = operatingSystem
        this.keyBoard = keyBoards
        this.powerState = false; //the laptop is off

    }

    
   update<T extends OperatingSystem | Display |NetworkInterfaceCard|  HardDisk | KeyBoard>(thingsToUpdate: updateable, val: T ){
    let error: string = ""

    // keyBoardUpdate() {

    // }
   }
   
    switchOn() {
        this.powerState = true
    }
    shutDown() {
        this.powerState = false
    }
}
type updateable = "operatingSystem" | "display" |  "networkInterfaceCard" | "hardDisk" | "keyBoard"
type bitKind = "x64" | "x32" | "x86" 
class BitKind{
        type: bitKind

        
    set bitKindType(val: bitKind) {
        this.type = val;
    }
}

type KeyBoardKind = "in-built" | "external"
type KeyBoardLayout = "Qwerty" | "Qwertz" | "Azerty"

class KeyBoard{
    kind: KeyBoardKind
    layout: KeyBoardLayout

    setkeyBoardKind(type:KeyBoardKind) {
        this.kind = type;
    }
    setkeyBoardLayout(type:KeyBoardLayout) {
        this.layout = type;
    }
}


class NetworkInterfaceCard{
    name: string

    set nicName(val:string){
        this.name = val
    }
        
}

type DisplayType =  "amoled" | "lcd" | "oled"
class Display{
    size: number
    type: DisplayType

    set displaySize(val:number) {
        this.size = val;
    }
   setDisplayType(type:DisplayType){
    this.type = type;
   }
   

}


type HardDisks = "ssd" | "hdd"
class HardDisk{
    type: HardDisks
    size: number

    setHardDiskType(type: HardDisks){
        this.type = type
    }

    set hardDiskSize(val:number) {
        this.size = val;
    }
}


type OSKind = "Linux" | "Windows"
class OperatingSystem{
    kind: OSKind

    setOperatingSystemType(type: OSKind){
        this.kind = type
    }
}


const display = new Display()
display.displaySize = 16
display.setDisplayType("amoled");


const keyBoard = new KeyBoard()
keyBoard.setkeyBoardKind("in-built")
keyBoard.setkeyBoardLayout("Qwerty")

const bitKind = new BitKind()
bitKind.bitKindType = "x64"


const hardDisk = new HardDisk()
hardDisk.setHardDiskType("ssd")
hardDisk.hardDiskSize = 8

const networkInterfaceCard = new NetworkInterfaceCard()
networkInterfaceCard.nicName = "Fiopefoluwa"

const operatingSystem = new OperatingSystem()
operatingSystem.setOperatingSystemType("Windows")

const nitLap = new Laptop(bitKind, display, networkInterfaceCard, hardDisk, operatingSystem, [keyBoard]);
console.log(nitLap)