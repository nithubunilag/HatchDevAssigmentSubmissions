class Laptop {
  screen: Display;
  keyboard: Keyboard;
  constructor(screen: Display, keyboard: Keyboard) {
    this.screen = screen;
    this.keyboard = keyboard;
  }
  updateScreen(screen: Display){
    this.screen = screen
  }
}


class Display {
  name: DisplayScreen;
  isTouchScreen: boolean;


  constructor(name: DisplayScreen, isTouchScreen: boolean) {
    this.name = name;
    this.isTouchScreen = isTouchScreen;
  }
}

class Keyboard{
    kind:  HpKeyboard;
    constructor(kind : HpKeyboard){
        this.kind = kind;
    }
} 
let display = new Display("amoled", false);

type DisplayScreen = "amoled" | "oled" | "led";

type HpKeyboard = "internal" | "in-built";

let keyboard = new Keyboard("in-built");

let hp = new Laptop(display, keyboard);

console.log(hp);

hp.updateScreen(new Display("led", true))

console.log(hp)

