import {
    Display,
    HardDisk,
    KeyBoard,
    Laptop,
    NetworkInterfaceCard,
    OperatingSystem,
  } from "./laptopAggregation";
  
  const show = console.log;
  
  const display = new Display(13, "amoled");
  
  display.displaySize = 16;
  display.setDisplayType("amoled");
  
  const nic = new NetworkInterfaceCard("nitlap");
  
  const hardDrive = new HardDisk("ssd", 512);
  
  const inBuiltKeyboard = new KeyBoard("in-built", "Qwerty");
  
  const macOs = new OperatingSystem("Mac", 2017);
  
  const nitLap = new Laptop(
    "macbook-pro-2017",
    "x64",
    display,
    nic,
    hardDrive,
    [inBuiltKeyboard],
    macOs
  );
  
  // show(nitLap.properties);

