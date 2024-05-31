class Contact {
  protected name: string;
  protected phoneNumber: number;

  constructor(name: string, phoneNumber: number) {
    this.name = name;
    this.phoneNumber = phoneNumber;
  }
  getNumber() {
    return this.phoneNumber;
  }
}

class AddressBook extends Contact {
  protected address: string;

  constructor(name: string, phoneNumber: number, address: string) {
    super(name, phoneNumber);
    this.address = address;
  }
}

const kenny = new Contact("kenny", 12345678900);
console.log(kenny.getNumber());
