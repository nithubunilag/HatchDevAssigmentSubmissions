class Laptop{
  keyboard: KeyBoard[] = [];
  nic: NetworkInterfaceCard;
  screen: Display;
  hardDisk: HardDisk;
  powerState: boolean = false;
  bitKind: BitKind

  constructor(
    keyboard: KeyBoard,
    nic: NetworkInterfaceCard,
    screen: Display,
    hardDisk: HardDisk,
    bitKind: BitKind
  ){
    this.keyboard.push(keyboard);
    this.nic = nic;
    this.screen = screen;
    this.hardDisk = hardDisk;
    this.bitKind = bitKind;

  }

  switchOn(){
    this.powerState = true;
  }

  shutDown(){
    this.powerState = false;
  }
}

class OperatingSystem{
  kind: OStype;
  version: number;
}
type OStype = "windows" | "mac" | "linux";

class BitKind{
  type: "x32" | "x64" | "x86";
}


class HardDisk{
  size: number;
  type: "ssd" | "hdd";
}

class Display{
  size: number;
  type: "amoled" | "oled" | "lcd";

  set displaySize (val: number){
    this.size = val;
  }
}

class NetworkInterfaceCard{
   constructor(public  readonly name: string){
     this.name = name;
   }
}

class KeyBoard{
  kind: KeyBoardKind;
  layout: KeyBoardLayout;
  
}
type KeyBoardKind = 'in-built' | 'external';
type KeyBoardLayout = 'Qwerty' | 'Qwertz' | 'Azerty';

export {Laptop, OperatingSystem, BitKind, HardDisk, Display, NetworkInterfaceCard, KeyBoard};