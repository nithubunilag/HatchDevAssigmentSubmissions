import { Laptop, Display, HardDisk, KeyBoard, NetworkInterfaceCard } from "./laptop_composition";

// Create components
const keyboard = new KeyBoard("in-built", "Qwerty");
const screen = new Display();
screen.displaySize = 15.6;
screen.setDisplayType("amoled");
const networkCard = new NetworkInterfaceCard("Wi-Fi Adapter");
const hardDisk = new HardDisk("ssd", 512);

// Create laptop instance
const myLaptop = new Laptop(
  "x64",
  screen,
  networkCard,
  hardDisk,
  [keyboard]
);

// Simulate usage
myLaptop.switchOn();
console.log("Current OS version:", myLaptop.os.version);
myLaptop.update(12); // Update OS to version 12
myLaptop.shutDown();
