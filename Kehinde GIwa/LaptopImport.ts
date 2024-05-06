// import * as imported from "./index.ts";
import { display,nic,hardDrive,KeyBoardIn,KeyBoardOut,windows,Laptop } from "./Laptop.ts";

const kennyLap = new Laptop(
    "x64",
    display,
    nic,
    hardDrive,
    [KeyBoardIn, KeyBoardOut],
    windows
  );
  
  console.log(kennyLap);
  kennyLap.switchOn()
  kennyLap.update()
  console.log(kennyLap)
  kennyLap.shutDown()

  