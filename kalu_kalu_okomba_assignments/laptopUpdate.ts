// declaring Laptop composed of the props and methods of other classes
class Laptop {
  constructor(
    public screen: Display,
    public hardDisk: HardDisk,
    public keyboard: KeyBoard[],
    public systemOS: OperatingSystem,
    public nic: NetworkInterfaceCard,
    public bitKind: BitKind,
    public powerState: boolean,
    public updatedVersion: number
  ) {}

  // Setters for OS type, NIC, and version
  setOsType(os: OperatingSystem) {
    this.systemOS = os;
  }

  setNic(nic: NetworkInterfaceCard) {
    this.nic = nic;
  }

  setVersion(version: number) {
    this.updatedVersion = version;
  }

  // the laptop's unique features
  switchOnAndOffLaptop() {
    return this.powerState;
  }

  // Update method with parameters
  update(
    newOs: OperatingSystem,
    newNic: NetworkInterfaceCard,
    newVersion: number
  ) {
    this.setOsType(newOs);
    this.setNic(newNic);
    this.setVersion(newVersion);
    // If necessary, add other updates as needed here... 
  }
}
type BitKind = 'x64' | 'x32' | 'x86';

// declaring Display class
class Display {
  size: number;
  type: DisplayType;

  constructor(size: number, type: DisplayType) {
    this.size = size;
    this.type = type;
  }
}
type DisplayType = 'amoled' | 'lcd' | 'oled';

// declaring HardDisk class
class HardDisk {
  size: number;
  type: 'ssd' | 'hdd';

  constructor(size: number, type: 'ssd' | 'hdd') {
    this.size = size;
    this.type = type;
  }
}

// declaring KeyBoard class
class KeyBoard {
  kind: KeyBoardKind;
  layout: KeyBoardLayout;

  constructor(kind: KeyBoardKind, layout: KeyBoardLayout) {
    this.kind = kind;
    this.layout = layout;
  }
}
type KeyBoardKind = 'in-built' | 'external';
type KeyBoardLayout = 'Qwerty' | 'Qwrertz' | 'Azerty';

// declaring OperatingSystem class
class OperatingSystem {
  version: number;
  kind: OsKind;

  constructor(version: number, kind: OsKind) {
    this.kind = kind;
    this.version = version;
  }
}
type OsKind = 'Linux' | 'Mac' | 'Windows10' | 'Windows10-Pro';

// declaring the NetworkInterfaceCard class
class NetworkInterfaceCard {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

// Ths is just a reference for explaining the setters (not needed...)
// display.displaySize = 16
// display.setDisplayType("amoled");

const display = new Display(16, 'amoled');
const hardDisk = new HardDisk(111, 'ssd');
let osType = new OperatingSystem(1.2, 'Windows10');
let nic = new NetworkInterfaceCard('Ethernet NIC');
let updatedOsType = new OperatingSystem(3.6, 'Windows10-Pro');
let updatedNic = new NetworkInterfaceCard('Wireless NIC (Wi-Fi NIC)');
const keyboard1 = new KeyBoard('external', 'Qwrertz');
const keyboard2 = new KeyBoard('in-built', 'Azerty');
const keyboardArray = [keyboard1, keyboard2];

const nitLap = new Laptop(
  display,
  hardDisk,
  keyboardArray,
  osType,
  nic,
  'x64',
  true,
  osType.version
);

// ====================== Update osType ===========================
// nitLap.update(updatedOsType, updatedNic, updatedOsType.version);
// ================================================================

// Display result
if (nitLap.updatedVersion === osType.version) {
  console.log(
    nitLap,
    `\n LaptopOn? >>> ${nitLap.switchOnAndOffLaptop()}`,
    `\n systemOS Updated? >>> No! Version ${osType.version} in operation...`
  );
} else {
  console.log(
    nitLap,
    `\n LaptopOn? >>> ${nitLap.switchOnAndOffLaptop()}`,
    `\n systemOS Updated? >>> Yes! Version ${updatedOsType.version} in operation...`
  );
}
