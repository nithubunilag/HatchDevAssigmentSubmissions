// NAME :>      EZIKE JESSICA
//EMAIL :>      jessicaezike.je@gmail.com

import { Laptop, OperatingSystem, BitKind, Keyboard, KeyboardKind, KeyboardLayout, NetworkInterfaceCard, Display, HardDisk } from "./Composition.ts";

// keyboard instances for the Array of Keyboards
const FirstKeyboard = new Keyboard("in-built", "Qwerty")
const SecondKeyboard = new Keyboard("in-built", "Qwertz")
const ThirdKeyboard = new Keyboard("in-built", "Azerty")
const FourthKeyboard = new Keyboard("external", "Qwerty")
const FifthKeyboard = new Keyboard("external", "Qwertz")
const SixthKeyboard = new Keyboard("external", "Azerty")

//instances of other properties
const nic = new NetworkInterfaceCard()
const display = new Display()
const hd = new HardDisk()
const os = new OperatingSystem();

//assigning values
nic.name = "Bluetooth"
display.size = 16
display.type = "amoled"
hd.size = "2TB"
hd.type = "ssd"
os.kind = "Windows"
os.Version = "22H2"



//intance of the Laptop class 
const  nitLap = new Laptop([FourthKeyboard, SecondKeyboard], nic, display, hd, "x64", os)


nitLap.switchOn()
console.log(nitLap)
console.log("Updating...............................")
console.log("Laptop Updated")
nitLap.update("nic", "intel")
nitLap.update("display", {size: 14, type: "lcd"})
nitLap.update("keyboards", [FirstKeyboard, SixthKeyboard])

////checking to see if assigning another type to os that is not in os will work
//nitLap.update("os", {type: "ssd", Version: "22hz"})
 console.log(nitLap)
nitLap.shutDown()