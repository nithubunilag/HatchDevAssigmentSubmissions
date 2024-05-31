class Contact {
  private name: string;
  private phoneNumber: string;
  private address: string;

  constructor(name: string, phoneNumber: string, address: string) {
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.address = address;
  }

  getName() {
    return this.name;
  }
  getNumber() {
    return this.phoneNumber;
  }
  getAddress() {
    return this.address;
  }
}

class PersonalContact extends Contact {
  isFavorite: boolean;
  constructor(
    name: string,
    phoneNumber: string,
    address: string,
    isFavorite: boolean
  ) {
    super(name, phoneNumber, address);
    this.isFavorite = isFavorite;
  }
}

class WorkContact extends Contact {
  email: string;
  company: string;

  constructor(
    name: string,
    phoneNumber: string,
    address: string,
    email: string,
    company: string
  ) {
    super(name, phoneNumber, address);
    this.email = email;
    this.company = company;
  }

  getEmail() {
    return this.email;
  }
  getCompany() {
    return this.company;
  }
}

class AddressBook {
  private personalContacts: PersonalContact[];
  private workContacts: WorkContact[];

  constructor() {
    this.personalContacts = [];
    this.workContacts = [];
  }

  addPersonalContact(contact: PersonalContact): void {
    this.personalContacts.push(contact);
  }
  addWorkContact(contact: WorkContact): void {
    this.workContacts.push(contact);
  }

  // display all contacts
  displayContacts(): void {
    console.log("All Contacts:");
    const allContacts = [
      ...this.personalContacts,
      ...this.workContacts,
    ];

    allContacts.forEach((contact) => {
      if (contact instanceof PersonalContact) {
        console.log(
          `Name: ${contact.getName()}, Address: ${contact.getAddress()}, Number: ${contact.getNumber()}, Favorite: ${
            contact.isFavorite
          }`
        );
      } else if (contact instanceof WorkContact) {
        console.log(
          `Name: ${contact.getName()}, Address: ${contact.getAddress()}, Number: ${contact.getNumber()}, Email: ${contact.getEmail()}, Company: ${contact.getCompany()}`
        );
      }
    });
  }
}

const addressBook = new AddressBook();

const personalContact1 = new PersonalContact(
  "Kate Cat",
  "0801234",
  "No 1. street lane",
  true
);
const workContact1 = new WorkContact(
  "Cat Ihuoma",
  "235500",
  "No 1. road street",
  "cat@cat.com",
  "Moniepoint"
);
const personalContact2 = new PersonalContact(
  "Rose Tam",
  "235500",
  "No 1. road street",
  false
);

addressBook.addPersonalContact(personalContact1);
addressBook.addPersonalContact(personalContact2);
addressBook.addWorkContact(workContact1);
addressBook.displayContacts();
