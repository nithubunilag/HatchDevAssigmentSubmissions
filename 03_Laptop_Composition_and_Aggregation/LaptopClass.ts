import {Keyboard,Display,NetworkInterfaceCard,BitKind,HardDisk,OperatingSystem,OsKind} from "./composition.ts";

class Laptop{
  keyboard: Keyboard[]=[];
  display: Display;
  nic: NetworkInterfaceCard;
  hardDisk:HardDisk;
  powerState: boolean =false;
  bitKind : BitKind;
  operatingSystem: OperatingSystem;
  allUpdateLogs : string[]=[];

  constructor(bitkind:BitKind, display:Display, nic:NetworkInterfaceCard,hardDisk:HardDisk,operatingSystem: OperatingSystem ){
    this.bitKind = bitkind;
    this.display = display;
    this.hardDisk = hardDisk;
    this.nic = nic;
    this.operatingSystem = operatingSystem;
  }
  set addKeyboard(keyboard:Keyboard){
    this.keyboard.push(keyboard)
  }
  switchOn(){
    this.powerState = true;
  }
  shutDown(){
    this.powerState = false;
  }
  updateOs (version:number, os:OsKind){
    this.operatingSystem.version = version;
    this.operatingSystem.kind = os;
    let updateLog = `UPDATE: New Operating System ${os} ${version} installed`
    this.allUpdateLogs.push(updateLog) 
  }
  set updateKeyboard(newKeyboard:Keyboard){
    this.keyboard.pop()
    this.keyboard.push(newKeyboard)
    let updateLog = `UPDATE: New Keyboard ${newKeyboard} installed`
    this.allUpdateLogs.push(updateLog)
  }
  set updateNic(newNic:NetworkInterfaceCard){
    this.nic = newNic
    let updateLog = `UPDATE: New NIC ${newNic.name} installed`
    this.allUpdateLogs.push(updateLog)
  }
  set updateHardDisk(newHardDisk:HardDisk){
    this.hardDisk = newHardDisk
    let updateLog = `UPDATE: New  Hardisk ${newHardDisk.type} ${newHardDisk.size} installed`
    this.allUpdateLogs.push(updateLog)
  }
  set updateDisplay(newDisplay:Display){
    this.display = newDisplay
    let updateLog = `UPDATE: New  Display ${newDisplay.type} ${newDisplay.size}" installed`
    this.allUpdateLogs.push(updateLog)
  }
  recentUpdatelogs(numberOflogs:number){
    for (let i = (this.allUpdateLogs.length-1); i> (this.allUpdateLogs.length-1-numberOflogs);i--){
      console.log(this.allUpdateLogs[i])
    }  
  }
  showAllUpdateLogs(){
    console.log(`All updates made to this ${this.operatingSystem.kind}
     ${this.operatingSystem.version}: \n
     ${this.allUpdateLogs.join('\n')}
     `)
  }

  update<val extends availableUpdates>(thingToUpdate:availableUpdates, newValue:newValues<val>){
    switch(thingToUpdate){
      case "keyboard":
        if(!(newValue instanceof Keyboard )){
          return 
        }
        this.addKeyboard = newValue
      case "nic":
        if(!(newValue instanceof NetworkInterfaceCard )){
          return
        }
        this.updateNic = newValue;
      case "hardDisk":
        if(!(newValue instanceof HardDisk )){
          return
        }
        this.updateHardDisk = newValue
  
      case "display":
        if(!(newValue instanceof Display )){
          return ;
        }
        this.updateDisplay = newValue
    }
  }
}
type availableUpdates = "keyboard"|"nic"|"hardDisk"|"display";
type newValues<val extends availableUpdates>= 
val extends "keyboard" ? Keyboard: 
val extends "nic"? NetworkInterfaceCard: 
val extends "hardDisk" ? HardDisk: Display ;

export{Laptop}
