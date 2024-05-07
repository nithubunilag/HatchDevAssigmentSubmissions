class Laptop {
  Keyboard: KeyBoard[];
  nic: NetWorkInterfaceCard;
  display: Display;
  hd: HardDisk;
  powerState: boolean = false;
  bit: Bitkind;
  version: string;
  versionNum: number;
  Os: Oskind;
  constructor(
    bit: Bitkind,
    display: Display,
    hd: HardDisk,
    nic: NetWorkInterfaceCard,
    Keyboard: KeyBoard[],
    Os: Oskind,
    version: string,
    versionNum: number
  ) {
    this.bit = bit;
    this.Keyboard = Keyboard;
    this.nic = nic;
    this.display = display;
    this.powerState = false;
    this.hd = hd;
    this.Os = Os;
    this.version = version;
    this.versionNum = versionNum;
  }

  shutDown() {
    this.powerState = false;
  }

  update(version: string, versionNum: number, nic: string) {
    this.version = version;
    this.versionNum = versionNum;
    this.nic.name = nic;
  }

  switchOn() {
    this.powerState = true;
  }
}

type Oskind = "Linux" | "windows" | "Mac";
type Bitkind = "x64" | "x86" | "x32";

class Display {
  size: number;
  type: DisplaySize;

  set displaySize(val: number) {
    this.size = val;
  }

  setDisplaytype(type: DisplaySize) {
    this.type = type;
  }
}

type DisplaySize = "amoled" | "LCD" | "OLED";

class HardDisk {
  type: "SSD" | "HDD";
  size: number;
}

class NetWorkInterfaceCard {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class KeyBoard {
  kind: KeyBoardKind;
  layout: KeyBoardLayout;
}

type KeyBoardKind = "in-Built" | "external";
type KeyBoardLayout = "Qwerty" | "Qwertz" | "Azerty";

const display = new Display();
display.displaySize = 16;
display.setDisplaytype("amoled");

const nic = new NetWorkInterfaceCard("ISA");

const hd = new HardDisk();
hd.size = 200;
hd.type = "SSD";

const KeyBoardtype = new KeyBoard();
KeyBoardtype.kind = "in-Built";
KeyBoardtype.layout = "Qwerty";

const nitlap = new Laptop(
  "x86",
  display,
  hd,
  nic,
  [KeyBoardtype],
  "Linux",
  "22H2",
  11
);

nitlap.update("12H3", 12, "USB");
console.log(nitlap);
