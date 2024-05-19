import { generateRandomCharacters } from './string.ts'

type BitKind = 'x64' | 'x86'
export class Laptop {
    keyboard: Keyboard[] = []
    nic: NetworkInterfaceCard
    screen: Display
    hardDisk: HardDisk
    powerState: boolean = false
    bitKind: BitKind
    os: OperatingSystem

    constructor(
        bit: BitKind,
        display: Display,
        nic: NetworkInterfaceCard,
        hardDisk: HardDisk,
        os: OperatingSystem,
        keyboard: Keyboard[]
    ) {
        this.bitKind = bit
        this.screen = display
        this.nic = nic
        this.hardDisk = hardDisk
        this.os = os
        this.keyboard = keyboard
    }

    update(version: number) {
        console.log("Updating OS...")
        this.os.update(version)
            .then(newVersion => {
                console.log(`${this.os.kind} OS updated to version ${newVersion}`)
            });
    }

    switchOn() {
        this.powerState = true
    }

    shutDown() {
        this.powerState = false
    }
}

type OSKind = 'Linux' | 'Mac' | 'Windows'
export class OperatingSystem {
    readonly kind: OSKind
    version: number

    constructor(kind: OSKind, version: number) {
        this.kind = kind
        this.version = version
    }

    update(version: number): Promise<number> {
        return new Promise(resolve => {
            setTimeout(() => {
                this.version = version
                resolve(version)
            }, 5000)
        })
    }
}

type HardDiskType = 'SSD' | 'HDD'
export class HardDisk {
    type: HardDiskType
    size: number

    constructor(type: HardDiskType, size: number) {
        this.type = type
        this.size = size
    }
}

type DisplayType = 'AMOLED' | 'LCD' | 'OLED'
export class Display {
    private size?: number
    private type?: DisplayType

    set displaySize(size: number) {
        this.size = size
    }

    set displayType(type: DisplayType) {
        this.type = type
    }
}

type NICType = 'PCI' | 'PCI-X' | 'PCIe' | 'USB'
export class NetworkInterfaceCard {
    type: NICType
    readonly id: string

    constructor(type: NICType) {
        this.type = type
        this.id = generateRandomCharacters(10)
    }
}

type KeyboardType = 'in-built' | 'external'
type KeyboardLayout = 'QWERTY' | 'QWERTZ' | 'AZERTY'
export class Keyboard {
    private type: KeyboardType
    private layout: KeyboardLayout

    constructor(type: KeyboardType, layout: KeyboardLayout) {
        this.type = type
        this.layout = layout
    }

    set keyboardKind(kind: KeyboardType) {
        this.type = kind
    }

    set keyboardLayout(layout: KeyboardLayout) {
        this.layout = layout
    }
}
