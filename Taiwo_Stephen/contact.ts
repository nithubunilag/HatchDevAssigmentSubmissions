abstract class Contact {
  name: string;
  protected phoneNumber: string;

  constructor(name: string, phoneNumber: string) {
      this.name = name;
      this.phoneNumber = phoneNumber;
  }

  abstract displayInfo(): void;

  updateName(newName: string): void {
      this.name = newName;
  }

  updatePhoneNumber(newPhoneNumber: string): void {
      this.phoneNumber = newPhoneNumber;
  }

  toString(): string {
      return `Name: ${this.name}, Phone: ${this.phoneNumber}`;
  }
}

class PersonalContact extends Contact {
  private address: string;

  constructor(name: string, phoneNumber: string, address: string) {
      super(name, phoneNumber);
      this.address = address;
  }

  displayInfo(): void {
      console.log(this.toString() + `, Address: ${this.address}`);
  }

  updateAddress(newAddress: string): void {
      this.address = newAddress;
  }
}

class BusinessContact extends Contact {
  private company: string;

  constructor(name: string, phoneNumber: string, company: string) {
      super(name, phoneNumber);
      this.company = company;
  }

  displayInfo(): void {
      console.log(this.toString() + `, Company: ${this.company}`);
  }

  updateCompany(newCompany: string): void {
      this.company = newCompany;
  }
}

class ContactManager {
  private contacts: Contact[] = [];

  addContact(contact: Contact): void {
      this.contacts.push(contact);
  }

  findContactByName(name: string): Contact | undefined {
      return this.contacts.find(contact => contact.name === name);
  }

  displayContacts(): void {
      this.contacts.forEach(contact => contact.displayInfo());
  }
}

const contactManager = new ContactManager();
const personalContact = new PersonalContact("Taiwo Stephen", "8145555117", "King Jaja Hall");
const businessContact = new BusinessContact("Gbadamosi Akinpelu", "8109876543", "Goldman Sachs");

contactManager.addContact(personalContact);
contactManager.addContact(businessContact);

console.log("Initial Contacts:");
contactManager.displayContacts();

personalContact.updateName("Akinsanmi Eniola");
personalContact.updatePhoneNumber("8123456789");
personalContact.updateAddress("Moremi hall");

businessContact.updateName("Erinfolami Jackson");
businessContact.updatePhoneNumber("8134567890");
businessContact.updateCompany("Bloomberg");

console.log("\nUpdated Contacts:");
contactManager.displayContacts();

console.log("\nSearching for Akinsanmi Eniola:");
const foundContact = contactManager.findContactByName("Akinsanmi Eniola");
if (foundContact) {
  foundContact.displayInfo();
} else {
  console.log("No contact found with that name.");
}
