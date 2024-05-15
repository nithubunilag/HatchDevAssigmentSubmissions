import { Laptop, Display, HardDisk, Keyboard, OperatingSystem, NetworkInterfaceCard } from './Laptop.ts';

const display = new Display()
display.displaySize = 16
display.displayType = 'LCD'

const nic = new NetworkInterfaceCard('PCI-X')
const hardDisk = new HardDisk('SSD', 256)
const os = new OperatingSystem('Windows', 10)

const inbuiltKeyboard = new Keyboard('in-built', 'QWERTY')
const externalKeyboard = new Keyboard('external', 'QWERTY')

const nitLap = new Laptop("x64", display, nic, hardDisk, os, [inbuiltKeyboard, externalKeyboard])
console.log(nitLap)

nitLap.update(11)