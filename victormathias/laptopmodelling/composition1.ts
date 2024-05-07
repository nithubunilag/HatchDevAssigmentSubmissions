import {
  Laptop,
  OperatingSystem,
  BitKind,
  Keyboard,
  KeyboardKind,
  KeyboardLayout,
  NetworkInterfaceCard,
  Display,
  HardDisk,
} from "./composition2";

// Define keyboard options
const FirstKeyboard = new Keyboard("in-built", "Qwerty");
const SecondKeyboard = new Keyboard("in-built", "Qwertz");
const ThirdKeyboard = new Keyboard("in-built", "Azerty");
const FourthKeyboard = new Keyboard("external", "Qwerty");
const FifthKeyboard = new Keyboard("external", "Qwertz");
const SixthKeyboard = new Keyboard("external", "Azerty");

// Create other laptop components
const nic = new NetworkInterfaceCard(); // Network card for communication
const display = new Display(); // Laptop's screen
const hd = new HardDisk(); // Hard disk for storage
const os = new OperatingSystem(); // Operating system managing the laptop

// Assign initial properties to components
nic.name = "Bluetooth"; // NIC uses Bluetooth for connectivity
display.size = 16; // Screen size in inches
display.type = "amoled"; // Screen type
hd.size = "2TB"; // Storage size
hd.type = "ssd"; // Type of storage (SSD for faster speed)
os.kind = "Windows"; // Operating system type
os.Version = "22H2"; // OS version

// Create a new laptop with specified components
const nitLap = new Laptop(
  [FourthKeyboard, SecondKeyboard], // Keyboards for the laptop
  nic, // Network card
  display, // Screen/display
  hd, // Hard disk
  "x64", // Architecture type
  os // Operating system
);

// Turn on the laptop
nitLap.switchOn(); // Power on the laptop
console.log(nitLap); // Display laptop details

console.log("Updating...............................");

// Update laptop components
nitLap.update("nic", "intel"); // Change network card to "intel"
nitLap.update("display", { size: 14, type: "lcd" }); // Update display size and type
nitLap.update("keyboards", [FirstKeyboard, SixthKeyboard]); // Update keyboards

// Print laptop details after updates
console.log("Laptop Updated");
console.log(nitLap);

// Turn off the laptop
nitLap.shutDown(); // Power off the laptop
