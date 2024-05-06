interface Contact {
  phoneNumber: string;
  address: string;
}

class Contact {
  private name: string; // Encapsulate name with private modifier
  phoneNumber: string;
  address: string;

  constructor(name: string, phoneNumber: string, address: string) {
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.address = address;
  }

  getName(): string {
    return this.name;
  }

  toString(): string {
    return `Name: ${this.getName()}\nPhone Number: ${this.phoneNumber}\nAddress: ${this.address}`;
  }
}

class Friend extends Contact {
  birthday: Date;

  constructor(name: string, phoneNumber: string, address: string, birthday: Date) {
    super(name, phoneNumber, address); // Call parent constructor
    this.birthday = birthday;
  }

  toString(): string {
    return `${super.toString()}\nBirthday: ${this.birthday.toLocaleDateString()}`;
  }
}

class AddressBook {
  private contacts: Contact[]; // Use private modifier for encapsulation

  constructor() {
    this.contacts = [];
  }

  addContact(contact: Contact): void {
    this.contacts.push(contact);
  }

  listContacts(): void {
    for (const contact of this.contacts) {
      console.log(contact.toString());
    }
  }
}

// Example usage
const addressBook = new AddressBook();

// Create a contact
const contact1: Contact = new Contact("Jethro Adebisi", "08186281244", "Jaja");
addressBook.addContact(contact1);

// Create a friend with birthday (demonstrates inheritance)
const friend1 = new Friend(
  "Ajanlekoko small",
  "7060008754",
  "ipaja",
  new Date("2001-01-23")
);
addressBook.addContact(friend1);

// List all contacts
addressBook.listContacts();
console.log (contact1)
