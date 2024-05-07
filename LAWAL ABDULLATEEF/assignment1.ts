class Contact {
  private name: string;
  private phoneNumber: string;
  private address: string;

  constructor(name: string, phoneNumber: string, address: string) {
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.address = address;
  }

  getName(): string {
    return this.name;
  }

  getPhoneNumber(): string {
    return this.phoneNumber;
  }

  getAddress(): string {
    return this.address;
  }
}

class BusinessContact extends Contact {
  private company: string;

  constructor(
    name: string,
    phoneNumber: string,
    address: string,
    company: string
  ) {
    super(name, phoneNumber, address);
    this.company = company;
  }

  getCompany(): string {
    return this.company;
  }
}

class AddressBook {
  private contacts: Contact[];

  constructor() {
    this.contacts = [];
  }

  addContact(contact: Contact) {
    this.contacts.push(contact);
  }

  getAllContacts(): Contact[] {
    return this.contacts;
  }
}

const addressBook = new AddressBook();

const personalContact = new Contact("John", "09123435654", "1, unilag road");
const businessContact = new BusinessContact(
  "Judah",
  "09123434554",
  "6, commercial road",
  "eleniyan ltd"
);





addressBook.addContact(personalContact);
addressBook.addContact(businessContact);

const allContacts = addressBook.getAllContacts();
console.log(allContacts);
