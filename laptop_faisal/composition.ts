import { Laptop, OS, BitKind, Keyboard, KeyboardKind, KeyboardLayout, NetworkInterfaceCard, Display, HardDisk } from "./composition-divine.ts";
const myLaptopDisplay = new Display();
const newKeyboard = new Keyboard();
const nic = new NetworkInterfaceCard();
const os = new OS();
os.type = "windows";
const hardDisk = new HardDisk();
newKeyboard.kind = "external";
newKeyboard.layout = "Qwerty";

myLaptopDisplay.displaySize = 15;
myLaptopDisplay.displayType = "amoled";

const myLaptop = new Laptop(newKeyboard, {type: "x64"}, myLaptopDisplay, nic, os, hardDisk)
const newUpdatedKeyBoard = new Keyboard();
const newUpdatedNIC = new NetworkInterfaceCard();
newUpdatedNIC.setName("updated nice")
newUpdatedKeyBoard.kind = "in-built";
newUpdatedKeyBoard.layout = "Azerty"
myLaptop.update("keyboard", newUpdatedKeyBoard)



