class Laptop {
    powerState:boolean;
    constructor(
        public bit: BitKind, 
        public display: Display, 
        public nic : NetworkInterfaceCard,
        public hd : HardDisk,
        public keyBoards: KeyBoard[],
        public operatingSystem : OperatingSystem
        
    
    ) {
       this.powerState = false; // the laptop is swtiched off.  
    }

    switchOn() {
        this.powerState = true;
    }


    shutDown() {
        this.powerState = false
    }
    
    
    update(thingToUpdate: string, newValue: any){
        let error: string = "";
        thingToUpdate.toLowerCase();
        switch(thingToUpdate){
             
            case "nic":
                if ((typeof newValue !== "string")) {
                    error = "Invalid input: The new value must be a string"
                    return
                }
                this.nic.name = newValue
                this.allUpdateLogs.push(`NIC updated: ${newValue}`)
                break
            
             
            case "os":
                if (!(newValue instanceof OS)) {
                    error = "Invalid input: The new value must be an instance of OS"
                    return
                }
                this.os = newValue
                this.allUpdateLogs.push(`OS updated: ${newValue.type}`)
                break
            default:
                console.log("Invalid input")
        }

    displayLaptopSpecifications(){
        console.log(`Bit size : ${this.bit} \nDisplay Type : ${this.display.type} \nDisplay Size : ${this.display.size} \nNetwork Interface Card : ${this.nic.name} \nHard Disk Type : ${this.hd.type} \nHard Disk Size : ${this.hd.size} \nOperating System : ${this.operatingSystem.kind} \nOperating System Version : ${this.operatingSystem.version}\n `);
        this.keyBoards.forEach((keyboard, index) => {
            console.log(`Keyboard ${index + 1}: \n\t Type : ${keyboard.kind} \n\t Layout : ${keyboard.layout}`);
        })


}
}


class OperatingSystem{
        kind : OsKind;
        version : number;
    
        set osKind(type : OsKind){
            this.kind = type;
        }
    
        set osVersion(versionNo : number){
            this.version = versionNo;
        }
    }

class HardDisk {
    type: HardDiskType;
    size: number;

    set  hardDiskType(type: HardDiskType) {
        this.type = type;
    }

    set hardDiskSize (val: number) {
        this.size = val;
    }
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

 

class NetworkInterfaceCard {
    constructor(public readonly name: string) {}
}
 

class KeyBoard {
     
    kind: KeyBoardKind;  
    layout : KeyBoardLayout;     

    
set keyboardType(kind : KeyBoardKind){
    this.kind = kind;
}

set keyboardLayout(layout : KeyBoardLayout){
    this.layout = layout
}
  }

  //custom types
type KeyBoardKind = "in-built" | "external";
 
type KeyBoardLayout = "Qwerty" | "Qwertz" | "Azerty";
 
type OsKind = "Linux" | "Mac" | "Windows";

type BitKind = "x64" | "x32" | "x86";

type DisplayType = "amoled" | "lcd" | "oled";

type HardDiskType = "ssd"  | "hdd"

