
// class Token {
//     Kind: 'Numeric_literal' | 'Close_parenthesis' | 'Open_parenthesis'
//     static Kind: string;
// }

// if (Token.Kind === 'Numeric_literal') {
//     // do something
// } else if (Token.Kind === 'Close_parenthesis') {
//     // do something
// }

// crl b  collapse side bar, crl `  collapse terminal side, ctrl + - reduce and increase font size

const display = new Display()
display.setDisplayType('amoled')

const nic = new NetworkInterfaceCard('ethernet')

const hardDisk = new HardDisk()
hardDisk.type = 'ssd'

const keyboard = new KeyBoard()
keyboard.layout = 'qwerty'


const nitLap = new Laptop("x64", display, nic, hardDisk, keyboard)

console.log(nitLap)