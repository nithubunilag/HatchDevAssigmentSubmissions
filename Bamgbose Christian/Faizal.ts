
class Laptop {
keyboard: Keyboard[] = [];
nic: NetworkInterfaceCard;
screen: Display;
hardDisk: HardDisk;
powerState: boolean = false;
bitKind: BitKind;
os: OS;
allUpdateLogs: string[] = [];
constructor(keyboard: Keyboard, bit: BitKind, display: Display, nic: NetworkInterfaceCard, os: OS, harddisk: HardDisk) {
    this.keyboard.push(keyboard);
    this.bitKind = bit;
    this.screen = display;
    this.nic = nic;
    this.os = os;
    this.hardDisk = harddisk;
}

switchOn() {
    this.powerState = true;
}

switchOff() {
    this.powerState = false;
}

showAllUpdateLogs() {
    console.log("All updates made:");
    this.allUpdateLogs.forEach(log => console.log(log));
}

updateKeyboard(newValue: Keyboard) {
    this.keyboard.push(newValue);
    this.allUpdateLogs.push(`Keyboard updated: ${newValue.kind} keyboard with ${newValue.layout} layout`);
}

updateNIC(newValue: string) {
    this.nic.name = newValue;
    this.allUpdateLogs.push(`NIC updated: ${newValue}`);
}

updateDisplay(newValue: Display) {
    this.screen = newValue;
    this.allUpdateLogs.push(`Display updated: ${newValue.size} inches ${newValue.type} display`);
}

updateHardDisk(newValue: HardDisk) {
    this.hardDisk = newValue;
    this.allUpdateLogs.push(`HardDisk updated: ${newValue.type}`);
}

updateOS(newValue: OS) {
    this.os = newValue;
    this.allUpdateLogs.push(`OS updated: ${newValue.type}`);
}

update(thingToUpdate: string, newValue: any) {
    switch (thingToUpdate.toLowerCase()) {
        case "keyboard":
            if (!(newValue instanceof Keyboard)) {
                console.error("Invalid input: The new value must be an instance of Keyboard");
                return;
            }
            this.updateKeyboard(newValue);
            break;
        case "nic":
            if (typeof newValue !== "string") {
                console.error("Invalid input: The new value must be a string");
                return;
            }
            this.updateNIC(newValue);
            break;
        case "display":
            if (!(newValue instanceof Display)) {
                console.error("Invalid input: The new value must be an instance of Display");
                return;
            }
            this.updateDisplay(newValue);
            break;
        case "harddisk":
            if (!(newValue instanceof HardDisk)) {
                console.error("Invalid input: The new value must be an instance of HardDisk");
                return;
            }
            this.updateHardDisk(newValue);
            break;
        case "os":
            if (!(newValue instanceof OS)) {
                console.error("Invalid input: The new value must be an instance of OS");
                return;
            }
            this.updateOS(newValue);
            break;
        default:
            console.error("Invalid input");
    }
    this.showAllUpdateLogs();
}
}
