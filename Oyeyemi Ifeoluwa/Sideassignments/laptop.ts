class Laptop {
    keyboard: KeyBoard[] = []
    nic: NetworkInterfaceCard 
    screen: Display
    hardDisk: HardDisk
    powerState: boolean = false
    bitKind : BitKind
    operatingSystem : OperatingSystem


    constructor(
        keyboard:KeyBoard,
        nic:NetworkInterfaceCard,
        screen:Display,
        hardDisk:HardDisk,
        bitKind:BitKind,
        operatingSystem : OperatingSystem) {

        this.keyboard.push(keyBoard);
        this.nic = nic;
        this.screen = screen;
        this.hardDisk = hardDisk;
        this.bitKind = bitKind;
        this.operatingSystem = operatingSystem;
    }

    private updateKeyboard (val) {
        this.keyboard.push(val);  
        return 'Keyboard updated successfully'
    }
    private updateNic(val){
        this.nic = val;
        return `NetworkInterfaceCard updated successfully`;
    }
    private updateDisplay(val){
        this.screen = val;
        return `Display updated successfully`;
    }
    private updateHardDisk(val){
        this.hardDisk = val;
        return `HardDisk updated successfully`;
    }
    private updateOS(val){
        this.operatingSystem = val;
        return `OperatingSystem updated successfully`;
    }
                                                                                                            //"keyBoard"| "networkInterface" | "display"| "hardDisk" |"operatingSystem"
    update<T extends updatedable >(thingsToUpdate: T, val: T extends "keyBoard" ? KeyBoard :
                                                                                                                                T extends "networkInterface" ? NetworkInterfaceCard:
                                                                                                                                T extends "display" ? Display :
                                                                                                                                T extends "hardDisk" ? HardDisk :
                                                                                                                                OperatingSystem
    ){
        switch (thingsToUpdate) {
            case "keyBoard":
                this.updateKeyboard(val);
                break;
            case "networkInterface":
                this.updateNic(val);
                break;
            case "display":
                this.updateDisplay(val)
                break;
            case "hardDisk":
                this.updateHardDisk(val);
                break;
            case "operatingSystem":
                this.updateOS(val);
                break;
            default:
                console.log(`Invalid component: ${thingsToUpdate}`);
        }
        
    }
    shutDown(){
        this.powerState = false
    }
    switchOn(){
        this.powerState = true
    }
}
class OperatingSystem {
    kind: osKind
    version: string;

    set operatingSystemVersion(val:string){
        this.version = val
    }
    setOperatingSystem(kind:osKind){
        this.kind = kind
    }
}
class BitKind{
    type: bitKind

    set bitKindSize(type:bitKind){
        this.type = type
    }
}
class HardDisk{
    type: hardDisk
    size: number

    set hardDiskSize(val:number){
        this.size = val

    }
    setHardDiskType(type:hardDisk){
        this.type = type
    }
}
class Display{
    size: number
    type: displaySize

    set displayType(val:number){
        this.size = val
    }
    setDisplaySize(type:displaySize){
        this.type = type
    }
}
class NetworkInterfaceCard {
    name: string

    set nicName(val:string){
        this.name = val                                                                                                                                                                                                                                                                                                                                                                                    
    }
}
class KeyBoard {
    kind: KeyBoardKind
    layout: keyBoardLayout

    setKeyBoardKind(kind:KeyBoardKind){
        this.kind = kind
    }
    setKeyBoardLayout(layout:keyBoardLayout){
        this.layout = layout
    }
}
type KeyBoardKind = "in-built" | "external"
type keyBoardLayout = "Qwerty" | "Qwertz" |"Azerty"
type bitKind = "X32" | "X64" | "X86"
type displaySize = "lcd" | "oled" | "amoled"
type hardDisk = "ssd" | "hdd"
type osKind = "Windows" | "Mac" | "Linux";
type updatedable = "keyBoard"| "networkInterface" | "display"| "hardDisk" |"operatingSystem"



const networkInterface = new NetworkInterfaceCard()
networkInterface.nicName = "Ifeoluwa"

const hardDisk = new HardDisk()
hardDisk.setHardDiskType ("ssd")
hardDisk.hardDiskSize = 8


const display = new Display()
display.displayType = 16
display.setDisplaySize("oled")

const operatingSystem = new OperatingSystem()
operatingSystem.operatingSystemVersion = "23H2"
operatingSystem.setOperatingSystem("Windows")

const bitKind = new BitKind()
bitKind.bitKindSize = "X64"

const keyBoard = new KeyBoard()
keyBoard.setKeyBoardKind("in-built")
keyBoard.setKeyBoardLayout("Qwerty")


const nitLap = new Laptop(keyBoard, networkInterface, display, hardDisk, bitKind, operatingSystem)
const newUpdatedKeyboard = new KeyBoard();
keyBoard.setKeyBoardKind("external")
keyBoard.setKeyBoardLayout("Azerty")
const newUpdatedNic = new NetworkInterfaceCard();
newUpdatedNic.nicName = "Updated Nic";
console.log(nitLap)
nitLap.update("keyBoard", newUpdatedKeyboard)
nitLap.update("networkInterface", newUpdatedNic)
console.log(nitLap)