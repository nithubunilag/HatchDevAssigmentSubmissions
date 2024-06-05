class Keyboard{
  constructor(public readonly kind:KeyboardKind, public readonly layout:KeyboardLayout ){}}

class NetworkInterfaceCard{
  constructor(public readonly name:string){}
}


class OperatingSystem{
  kind: OsKind;
  version:number;
  
  constructor(kind:OsKind, version:number){
    this.kind = kind
    this.version = version
  }
}


class Display{
  size: number;
  type: DisplayType
  constructor(size:number, type: DisplayType){
    this.size = size;
    this.type = type

  }
  
  set displaySize(val:number){
    this.size = val
  }
  set displayType(type:DisplayType){
    this.type = type
  }
}

class HardDisk{
  type: "ssd"| "hdd"
  size: number;
  constructor(type:"ssd"| "hdd",size:number){
    this.type = type;
    this.size = size
  }
}
type KeyboardKind = "in-built"| "external";
type KeyboardLayout = "Qwerty"| "Qwertz"| "Azerty";
type OsKind = "Linux"|"Mac"|"Windows"
type DisplayType ="amoled"| "oled"|"lcd";
type BitKind = "x32"|"x64"|"x86";

export {Keyboard,KeyboardKind,KeyboardLayout,Display, DisplayType,NetworkInterfaceCard,BitKind,HardDisk,OperatingSystem,OsKind}
