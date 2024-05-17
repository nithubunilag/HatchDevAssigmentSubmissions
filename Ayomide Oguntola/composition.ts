class Laptop {
    keyboard: KeyBoard[] = []
    nic: NetworkInterfaceCard
    screen: Display
    hardDisk: HardDisk
    powerState: boolean = false;
    bitKind: BitKind
    osKind: Oskind

    constructor(
        bitKind: BitKind,
        display: Display,
        nic: NetworkInterfaceCard,
        hd: HardDisk,
        keyboards: KeyBoard
    ) {
        this.keyboard = []
        this.nic = new NetworkInterfaceCard('ethernet')
        this.screen = new Display()
        this.hardDisk = new HardDisk()
    }

    switchOn() {
        this.powerState = true;
    }

    shutDown() {
        this.powerState = false;
    }

    update() {
        this.update()
        this.switchOn()
        
    }
}

class Oskind {
    kind: 'Linux' | "Windows" | "Mac"
}

class HardDisk {
    size: number
    type: 'hdd' | 'ssd'
    
}

class Display {
    size: number
    type: 'amoled' | 'oled' | 'lcd'
    resolution: string

    set displaySize(val: number) {
        this.size = val;
    }

    setDisplayType(type: DisplayType) { this.type = type }

}

type DisplayType = 'amoled' | 'oled' | 'lcd'

class NetworkInterfaceCard {
  //  name: string

    constructor(public readonly name: string) {
        // this.name = 'eth0'
    }
}

class KeyBoard {
    kind: KeyBoardKind
    layout: KeyboardLayout
}

type KeyBoardKind = 'in-built' | 'external'
type KeyboardLayout = 'qwerty' | 'azerty' | 'qwertz'

type BitKind = 'x32' | 'x64'