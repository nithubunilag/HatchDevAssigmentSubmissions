import { Display, Keyboard, Laptop } from "../composition.ts";
const myLaptopDisplay = new Display();
const newKeyboard = new Keyboard();
newKeyboard.kind = "in-built";
newKeyboard.layout = "Qwerty";

myLaptopDisplay.displaySize = 15;
myLaptopDisplay.displayType = "amoled";

const myLaptop = new Laptop(
  newKeyboard,
  { type: "x64" },
  myLaptopDisplay,
  { name: "Lenovo ThinkPad" },
  { type: "windows" },
  { type: "ssd" }
);

const newLaptopDisplay = new Display();
newLaptopDisplay.displaySize = 17;
newLaptopDisplay.displayType = "lcd";

console.log(myLaptop);
myLaptop.update("display", newLaptopDisplay);
myLaptop.update("nic", "Intel");
