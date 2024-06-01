/**
 * FULL NAME: Abdulkareem Mustapha Akanmu
 * EMAIL: aphatheology@gmail.com
 * GITHUB USERNAME: Aphatheology
 */

/* Implement an address book system using OOP principles
 * Each contact should be represented as an object with attributes like name, phone number, and address.
 * Demonstrate inheritance and encapsulation in your implementation.
 */

class Contact {
  private name: string;
  private phoneNumber: string;
  private address: string;

  constructor(name: string, phoneNumber: string, address: string) {
      this.name = name;
      this.phoneNumber = phoneNumber;
      this.address = address;
  }

  public getName(): string {
      return this.name;
  }

  public setName(name: string): void {
      this.name = name;
  }

  public getPhoneNumber(): string {
      return this.phoneNumber;
  }

  public setPhoneNumber(phoneNumber: string): void {
      this.phoneNumber = phoneNumber;
  }

  public getAddress(): string {
      return this.address;
  }

  public setAddress(address: string): void {
      this.address = address;
  }

  public display(): void {
      console.log(`Name: ${this.name}, Phone Number: ${this.phoneNumber}, Address: ${this.address}`);
  }
}

class PersonalContact extends Contact {
  private birthday: Date;

  constructor(name: string, phoneNumber: string, address: string, birthday: Date) {
      super(name, phoneNumber, address);
      this.birthday = birthday;
  }

  public getBirthday(): Date {
      return this.birthday;
  }

  public setBirthday(birthday: Date): void {
      this.birthday = birthday;
  }

  public display(): void {
      super.display();
      console.log(`Birthday: ${this.birthday.toDateString()}`);
  }
}

class BusinessContact extends Contact {
  private company: string;

  constructor(name: string, phoneNumber: string, address: string, company: string) {
      super(name, phoneNumber, address);
      this.company = company;
  }

  public getCompany(): string {
      return this.company;
  }

  public setCompany(company: string): void {
      this.company = company;
  }

  public display(): void {
      super.display();
      console.log(`Company: ${this.company}`);
  }
}

class AddressBook {
  private contacts: Contact[];

  constructor() {
      this.contacts = [];
  }

  public addContact(contact: Contact): void {
      this.contacts.push(contact);
  }

  public displayContacts(): void {
      this.contacts.forEach(contact => contact.display());
  }
}

// Example
const tailorContact = new PersonalContact("Ajanlekoko Tailor", "+2348023456789", "12 Sapele Street", new Date(1990, 1, 1));
const plumberContact = new PersonalContact("Ajanlekoko Plumber", "+2348012983476", "23 Ewure Street", new Date(2000, 1, 1));
const businessContact = new BusinessContact("Anon Business", "+2348098765432", "32 Ikoko Street", "Tech Corp");

const addressBook = new AddressBook();
addressBook.addContact(tailorContact);
addressBook.addContact(plumberContact);
addressBook.addContact(businessContact);

addressBook.displayContacts();
