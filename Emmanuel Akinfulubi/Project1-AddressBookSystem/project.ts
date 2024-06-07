class Contact {
  private name: string;
  private phoneNumber: string;
  private address: string;

  constructor(name: string, phoneNumber: string, address: string) {
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.address = address;
  }

  public getDetails(): string {
    return `Name: ${this.name}, Phone: ${this.phoneNumber}, Address: ${this.address}`;
  }
}

class SpecialContact extends Contact {
  private relationship: string;

  constructor(
    name: string,
    phoneNumber: string,
    address: string,
    relationship: string
  ) {
    super(name, phoneNumber, address);
    this.relationship = relationship;
  }

  public getDetails(): string {
    return `${super.getDetails()}, Relationship: ${this.relationship}`;
  }
}

class AddressBook {
  private contacts: Contact[] = [];

  public addContact(contact: Contact): void {
    this.contacts.push(contact);
  }

  public listContacts(): void {
    this.contacts.forEach((contact) => {
      console.log(contact.getDetails());
    });
  }
}

const addressBook = new AddressBook();
const contact1 = new Contact("Alice", "123-456-7890", "123 Main St");
const contact2 = new SpecialContact(
  "Bob",
  "098-765-4321",
  "456 Elm St",
  "Friend"
);

addressBook.addContact(contact1);
addressBook.addContact(contact2);

addressBook.listContacts();
