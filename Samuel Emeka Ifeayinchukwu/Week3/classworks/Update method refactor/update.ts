import { HardDisk, NetworkInterfaceCard, OperatingSystem, Display, KeyBoard, BitKind } from "../Laptop Simulator/laptop_composition"

type updateType = "keyboard" | "nic" | "display" | "os" | "hardDisk"
type UpdateValue<T extends updateType> =
  T extends "keyboard" ? KeyBoard[] :
  T extends "nic" ? NetworkInterfaceCard :
  T extends "display" ? Display :
  T extends "os" ? OperatingSystem :
  T extends "hardDisk" ? HardDisk :
  never;


class Laptop{
    keyboard: KeyBoard[] = []
    nic: NetworkInterfaceCard
    screen: Display 
    hardDisk: HardDisk
    powerState: boolean = false
    bitKind: BitKind
    os: OperatingSystem
    allUpdateLogs: string[] = [];

    constructor(keyboard: KeyBoard, bit: BitKind, display: Display, nic: NetworkInterfaceCard, os: OperatingSystem, harddisk: HardDisk){
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



    update(thingToUpdate: updateType, newValue: UpdateValue<updateType>){
        let error: string = "";
        thingToUpdate.toLowerCase();
        switch(thingToUpdate){
            case "keyboard":
                if (!(newValue instanceof KeyBoard)) {
                    error = "Invalid input: The new value must be an instance of Keyboard"
                    return
                }
                this.keyboard.push(newValue)
                this.allUpdateLogs.push(`Keyboard updated: ${newValue.kind} keyboard with ${newValue.layout} layout`)
                break
            case "nic":
                if ((typeof newValue !== "string")) {
                    error = "Invalid input: The new value must be a string"
                    return
                }
                this.nic.name = newValue
                this.allUpdateLogs.push(`NIC updated: ${newValue}`)
                break
            case "display":
                if(!(newValue instanceof Display)) {
                    error = "Invalid input: The new value must be an instance of Display"
                    return
                }
                this.screen = newValue
                this.allUpdateLogs.push(`Display updated: ${newValue.size} inches ${newValue.type} display`)
                break
            case "hardDisk":
                if(!(newValue instanceof HardDisk)) {
                    error = "Invalid input: The new value must be an instance of HardDisk"
                    return
                }
                this.hardDisk = newValue
                this.allUpdateLogs.push(`HardDisk updated: ${newValue.type}`)
                break
            case "os":
                if (!(newValue instanceof OperatingSystem)) {
                    error = "Invalid input: The new value must be an instance of OS"
                    return
                }
                this.os = newValue
                this.allUpdateLogs.push(`OS updated: ${newValue.kind}`)
                break
            default:
                console.log("Invalid input")
        }

        console.log(error)
        this.showAllUpdateLogs()
    }
}