
import  {Laptop, Keyboard, HardDisk, BitKind, NetworkInterfaceCard, Display, OS, } from "./Laptop.ts"

// initial values
const key = new Keyboard
key.kind = "in-built"
key.layout = "QWERTY"

const opSys = new OS
opSys.osType = "Windows"

const card = new NetworkInterfaceCard
card.name = "Ntwork"

const scrin = new Display
scrin.displayKind = "lcd"
scrin.size = 13

const drive = new HardDisk
drive.spaceSize = "512GB"
drive.model = "ssd"

const byte = new BitKind
byte.type = "x64"
const HP = new Laptop(opSys, key, card, scrin, drive, byte)


// updated values
HP.powerState = true
const newKey = new Keyboard
newKey.layout = "AZERTY"
newKey.kind = "external"

const newScreen = new Display
newScreen.displayKind = "amoled"
newScreen.displaySize = 15

const newDrive = new HardDisk
newDrive.model = "hdd"
newDrive.spaceSize = "1TB"

HP.update("Keyboard", newKey)
HP.update("HardDisk", newDrive)
HP.update("Display", newScreen)
console.log(HP)

