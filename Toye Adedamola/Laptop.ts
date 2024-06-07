import { Laptop, KeyBoard, KeyBoardKind, KeyBoardLayout,BitKind, Display, DisplayType, NetworkInterfaceCard, HardDisk, HardDiskType, OperatingSystem} from "./ModelLaptopWithComposition.ts";

const display = new Display();
display.displaySize = 16; 
display.setDisplayType("amoled");

const nic = new NetworkInterfaceCard("nitlap");

const hardDisk = new HardDisk("ssd", 512);
 
const keyboard1 = new KeyBoard("in-built", "Qwerty");

const keyboard2 = new KeyBoard("external", "Qwertz");

const operatingSystem = new OperatingSystem("Windows", 10);


const myLaptop = new Laptop("x64", display, nic, hardDisk, [keyboard1, keyboard2], operatingSystem);
myLaptop.displayLaptopSpecifications();



//Update Laptop
const newDisplay = new Display();
newDisplay.displaySize = 18;
newDisplay.setDisplayType("lcd");
const keyboard3 = new KeyBoard("on-screen", "Qwerty");
const newOs = new OperatingSystem("Linux",8 );

myLaptop.update("display", newDisplay);
myLaptop.update("keyboard", keyboard3);
myLaptop.update("os", newOs);
myLaptop.displayUpdateLogs();

myLaptop.displayLaptopSpecifications();

