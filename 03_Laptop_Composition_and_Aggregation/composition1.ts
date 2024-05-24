import {Keyboard,Display,NetworkInterfaceCard,HardDisk,OperatingSystem} from "./composition.ts";
import { Laptop } from "./LaptopClass.ts";

const keyboard1 = new Keyboard("in-built", 'Qwerty')
const hardDisk1 = new HardDisk('ssd', 500)
const hardDisk2 = new HardDisk("hdd", 256)
const nic1 = new NetworkInterfaceCard('intel');
const os1 = new OperatingSystem('Windows', 10) 
const display1 = new Display(16,'amoled') 

const myPc = new Laptop('x64',display1,nic1,hardDisk1,os1)
myPc.addKeyboard = (keyboard1)
myPc.updateOs(10.5, "Windows")
console.log(myPc)
myPc.updateDisplay =new Display(17,'amoled');
myPc.updateHardDisk = new HardDisk('hdd',1024);
myPc.updateNic = new NetworkInterfaceCard('Realtek ethernet');
myPc.updateKeyboard = new Keyboard('external','Qwertz');
console.log(myPc);

myPc.update("hardDisk",hardDisk2);
myPc.updateOs(5, "Linux");
myPc.update("display", new Display(14,"amoled"));
myPc.update("nic", hardDisk1); 
myPc.showAllUpdateLogs();

