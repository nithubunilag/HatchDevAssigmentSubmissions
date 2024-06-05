export type OSType = "mac" | "windows" | "linux";
export type DisplayType = "amoled" | "lcd" | "oled";
export type HardDiskType = "ssd" | "hdd";
export type KeyboardKind = "in-built" | "external";
export type KeyboardLayout = "Qwerty" | "Azerty" | "Qwertz";

export interface UpdatableComponent {
  update?(newValue: any): void;
}

export interface IOS extends UpdatableComponent {
  osType: OSType;
}

export interface IKeyboard extends UpdatableComponent {
  kind: KeyboardKind;
  layout: KeyboardLayout;
}

export interface INIC extends UpdatableComponent {
  name: string;
}

export interface IDisplay extends UpdatableComponent {
  size: number;
  displayType: DisplayType;
}

export interface IHardDisk extends UpdatableComponent {
  hardDiskType: HardDiskType;
}

export type UpdateType = "keyboard" | "nic" | "screen" | "hardDisk" | "os";
export type UpdateValue = IKeyboard | INIC | IDisplay | IHardDisk | IOS;