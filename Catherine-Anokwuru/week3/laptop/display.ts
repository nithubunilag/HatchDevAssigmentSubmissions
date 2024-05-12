import { Display, NetworkInterfaceCard, OperatingSystem, KeyBoard, HardDisk, Laptop } from "./composition.ts";

const display = new Display();

display.displaySize = 16;
display.setDisplayType("amoled");

const nic = new NetworkInterfaceCard("nitlap");

const os = new OperatingSystem();
os.kind = "Windows";
os.version = 10;

const keyboard = new KeyBoard("Qwerty");

const hd = new HardDisk();
hd.type = "ssd";
hd.size = 512;

const laptop = new Laptop("x32", display, nic, hd, [keyboard], os);

laptop.update(10, "amoled", "Azerty", "x64", "ssd");
