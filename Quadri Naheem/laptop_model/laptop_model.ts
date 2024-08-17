class Laptop {
    powerState: Boolean = false;
    constructor(
        public bitKind: BitKind, public screen: Display, public nic: NetworkInterfaceCard, public hardDisk: HardDisk, public keyboard: KeyBoard[], public operatingSystem: OperatingSystem
    ) {
        this.powerState = false;
    }

    togglePower() {
        this.powerState = !this.powerState;
    }

    updateKeyboard(keyBoards: KeyBoard) {
        this.keyboard.push(keyBoards);
    }

    updateNic(nic: NetworkInterfaceCard) {
        this.nic = nic;
    }

    updateScreen(display: Display) {
        this.screen = display;
    }

    updateOS(os: OperatingSystem) {
        this.operatingSystem = os;
    }

    updateHardDisk(hardDisk: HardDisk) {
        this.hardDisk = hardDisk;
    }

    update(updateable: Map<UpdateableKey, UpdateableValue>) {
        updateable.forEach((val, key) => {
            switch (key) {
                case "OS": this.updateOS(val as OperatingSystem)
                    break;
                case "Keyboard": this.updateKeyboard(val as KeyBoard)
                    break;
                case "Harddisk": this.updateHardDisk(val as HardDisk)
                    break;
                case "Screen": this.updateScreen(val as Display)
                    break;
                case "Nic": this.updateNic(val as NetworkInterfaceCard)
                    break;
                default: console.log("Invalid key");
                    break;
            }
        });
    }
}


class KeyBoard {

    constructor(public kind: KeyBoardKind, public layout: KeyBoardLayout) {

    }
}

class NetworkInterfaceCard {

    constructor(public readonly name: string) {

    }
}

class Display {

    constructor(private size: number, private type: DisplayType) {

    }
    set displaySize(val: number) {
        this.size = val;
    }

    setDisplayType(val: DisplayType) {
        this.type = val;
    }
}

class HardDisk {

    constructor(public type: "ssd" | "hdd", public size: number) {

    }

}

class OperatingSystem {

    constructor(public name: OsKind) {

    }
}

type KeyBoardKind = "in-built" | "external";
type KeyBoardLayout = "Qwerty" | "Qwerzt" | "Azerty";
type OsKind = "Linux" | "Mac" | "Windows";
type BitKind = "x64" | "x32" | "x86";
type DisplayType = "amoled" | "lcd" | "oled";
type UpdateableKey = "OS" | "Keyboard" | "Harddisk" | "Screen" | "Nic";
type UpdateableValue = OperatingSystem | KeyBoard | HardDisk | Display | NetworkInterfaceCard;


const keyboard = new KeyBoard("in-built", "Qwerty");
const display = new Display(768, "lcd");
const nic = new NetworkInterfaceCard("nitlap");
const hardDisk = new HardDisk("ssd", 520);
const os = new OperatingSystem("Windows");
const keyboardArray = [keyboard]


const nitLap = new Laptop("x64", display, nic, hardDisk, keyboardArray, os);
console.log(nitLap);

// Create a map of laptop part to be updated
const updateable = new Map<UpdateableKey, UpdateableValue>();
updateable.set("OS", new OperatingSystem("Mac"));
updateable.set("Keyboard", new KeyBoard("external", "Azerty"));
nitLap.update(updateable);
console.log(nitLap);