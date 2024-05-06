type BitKind = 'x64' | 'x32' | 'x86'
type OSName = 'Linux' | 'Mac' | 'Windows'
type FileSystem_ = 'NTFS' | 'FAT32' | 'ext4' | 'HFS+' | 'exFAT'
type Manufacturer = 'Seagate' | 'Toshiba' | 'Samsung' | 'HP' | 'Dell'

class Laptop {
  keyboards: KeyBoard[] = []
  nic: NetworkInterfaceCard
  display: Display
  hardDisk: HardDisk
  powerState: boolean = false
  bit: BitKind
  OS: OperatingSystem

  constructor(
    bit: BitKind,
    display: Display,
    nic: NetworkInterfaceCard,
    hardDisk: HardDisk,
    keyBoards: KeyBoard[],
    OS: OperatingSystem
  ) {
    this.powerState = false // the laptop is switched off.
    this.bit = bit
    this.display = display
    this.nic = nic
    this.keyboards = keyBoards
    this.hardDisk = hardDisk
    this.OS = OS
  }

  switchOn() {
    this.powerState = true
  }

  shutDown() {
    this.powerState = false
  }
}

class OperatingSystem {
  name: OSName
  _version: number

  constructor(name: OSName, version: number) {
    this.name = name
    this._version = version
  }

  boot() {
    console.log(`${this.name} ${this._version} is booting...`)
  }

  update() {
    this._version++ // increase the laptop's version

    this.boot() // reboot the laptop
  }

  runApplication(application: string) {
    console.log(`Running ${application} on ${this.name} ${this._version}`)
  }

  get version() {
    const rand = () => `${Math.floor(Math.random() * 10)}`
    return this._version + rand() + rand()
  }
}

const myOS = new OperatingSystem('Windows', 11)
myOS.boot()
myOS.runApplication('Calculator')

class HardDisk {
  capacity: number
  freeSpace: number
  filesystem: FileSystem_
  manufacturer: Manufacturer

  constructor(
    capacity: number,
    freeSpace: number,
    filesystem: FileSystem_,
    manufacturer: Manufacturer
  ) {
    this.capacity = capacity
    this.freeSpace = freeSpace
    this.filesystem = filesystem
    this.manufacturer = manufacturer
  }

  read() {
    console.log(`Reading data from ${this.filesystem} fileSystem`)
  }

  write(data: string) {
    console.log(`Writing data: "${data}" to fileSystem`)
  }

  checkHealth() {
    console.log('Checking hard disk health...')

    const isHealthy = Math.floor(Math.random() * 2)
    return isHealthy
      ? 'Hard disk is healthy and working at full capacity'
      : 'Hard disk damaged, try formatting or visit the manufacturer'
  }

  format() {
    console.log('Formatting hard disk...')
  }
}

class Display {
  size: number
  type: DisplayType

  set displaySize(val: number) {
    this.size = val
  }

  setDisplayType(type: DisplayType) {
    this.type = type
  }
}

type DisplayType = 'amoled' | 'lcd' | 'oled'

class NetworkInterfaceCard {
  name: string
  constructor(name: string) {
    this.name = name
  }
}

class KeyBoard {
  kind: KeyBoardKind

  layout: KeyBoardLayout

  constructor(kind: KeyBoardKind, layout: KeyBoardLayout) {
    this.kind = kind
    this.layout = layout
  }
}

type KeyBoardKind = 'in-built' | 'external'
type KeyBoardLayout = 'Qwerty' | 'Qwrertz' | 'Azerty'

const display = new Display()

display.displaySize = 16
display.setDisplayType('amoled')

const nic = new NetworkInterfaceCard('nitlap')
const myHardDisk = new HardDisk(100000, 80000, 'NTFS', 'Seagate')
const keyBoard = new KeyBoard('in-built', 'Qwerty')

const nitLap = new Laptop('x64', display, nic, myHardDisk, [keyBoard], myOS)

nitLap.OS.update()
nitLap.OS.runApplication('Video Player')
nitLap.hardDisk.format()
nitLap.display.setDisplayType('lcd')
