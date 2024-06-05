import { Laptop, OS, BitKind, Keyboard, KeyboardKind, KeyboardLayout, NetworkInterfaceCard, Display, HardDisk } from "./faisal-code-composition.ts";
const myLaptopDisplay = new Display();
const newKeyboard = new Keyboard();
newKeyboard.kind = "external";
newKeyboard.layout = "Qwerty";

myLaptopDisplay.displaySize = 15;
myLaptopDisplay.displayType = "amoled";

const myLaptop = new Laptop(newKeyboard, {type: "x64"}, myLaptopDisplay, {name: "Realtek"}, {type: "windows"}, {type: "ssd"})

const newLaptopDisplay = new Display();
newLaptopDisplay.displaySize = 17;
newLaptopDisplay.displayType = "lcd";

const newNic = new NetworkInterfaceCard();
newNic.name = "Intel"

console.log(myLaptop);

myLaptop.update("nic", newNic);
myLaptop.update("screen", newLaptopDisplay);

console.log('Show Update Log: ', myLaptop.allUpdateLogs)
myLaptop.showAllUpdateLogs()
console.log('Updated Laptop', myLaptop);