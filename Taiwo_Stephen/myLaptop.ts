import {Laptop, OperatingSystem, BitKind, HardDisk, Display, NetworkInterfaceCard, KeyBoard} from './laptop.ts'
const myDisplay = new Display();
const myKeyboard = new KeyBoard();
const myNic = new NetworkInterfaceCard("Ethernet");
const myHardDisk = new HardDisk();
const myBitKind = new BitKind();

myKeyboard.kind = 'in-built';
myKeyboard.layout = 'Qwerty';
myDisplay.type = 'lcd';
myDisplay.displaySize = 16;
myHardDisk.type = 'ssd';
myHardDisk.size = 256;
myBitKind.type = 'x64';


const myLaptop = new Laptop(myKeyboard, myNic,myDisplay, myHardDisk, myBitKind);
console.log(`Your laptop specification are given below: 
Keyboard  = ${myLaptop.keyboard[0].kind} and ${myLaptop.keyboard[0].layout}
NIC = ${myLaptop.nic.name}
Display = ${myLaptop.screen.type} and ${myLaptop.screen.size} inches
Hard disk =  ${myLaptop.hardDisk.type} and ${myLaptop.hardDisk.size} gb
Bit kind = ${myLaptop.bitKind.type}
`);
