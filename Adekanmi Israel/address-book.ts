// Project 1: Address Book System - Implement an address book system using **OOP** principles.
// Each contact should be represented as an object with attributes like name, phone number, and address.
// Demonstrate inheritance and encapsulation in your implementation.

// Define the Contact class with attributes name, phoneNumber, and address
class Contact {
  private name: string;
  private phoneNumber: string;
  private address: string;

  // Constructor for Contact class
  constructor(name: string, phoneNumber: string, address: string) {
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.address = address;
  }

  getName(): string {
    return this.name;
  }

  // Encapsulation: getter and setter methods for phoneNumber
  getPhoneNumber(): string {
    return this.phoneNumber;
  }

  // Encapsulation: getter and setter methods for address
  getAddress(): string {
    return this.address;
  }

}

// Define a class ContactBook that inherits from Contact
class ContactBook extends Contact {
  private email: string;

  // Constructor for ContactBook class
  constructor(
    name: string,
    phoneNumber: string,
    address: string,
    email: string
  ) {
    super(name, phoneNumber, address);
    this.email = email;
  }

  getEmail(): string {
    return this.email;
  }
}

const personalContact = new Contact(
  "Adekanmi Israel",
  "08029737682",
  "Unilag-Jaja Hall"
);

const businessContact = new ContactBook(
  "Jane Samuel",
  "07043567823",
  "Nithub lab Classroom",
  "abcdgoddsa@gmail.com"
);

console.log("Personal Contact:");
console.log("Name:", personalContact.getName());
console.log("Phone Number:", personalContact.getPhoneNumber());
console.log("Address:", personalContact.getAddress());

console.log("\nBusiness Contact:");
console.log("Name:", businessContact.getName());
console.log("Phone Number:", businessContact.getPhoneNumber());
console.log("Address:", businessContact.getAddress());
console.log("Email:", businessContact.getEmail());
