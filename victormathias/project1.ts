// Define an Address class with encapsulated attributes
class Address {
    private street: string;
    private city: string;
    private state: string;
    private zip: string;
  
    constructor(street: string, city: string, state: string, zip: string) {
      this.street = street;
      this.city = city;
      this.state = state;
      this.zip = zip;
    }
  
    getFullAddress(): string {
      return `${this.street}, ${this.city}, ${this.state}, ${this.zip}`;
    }
  }
  
  // Define a Contact class with name, phone number, and address attributes
  class Contact {
    private name: string;
    private phoneNumber: string;
    private address: Address;
  
    constructor(name: string, phoneNumber: string, address: Address) {
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
  
    getAddress(): Address {
      return this.address;
    }
  
    setPhoneNumber(newPhoneNumber: string): void {
      this.phoneNumber = newPhoneNumber;
    }
  }
  
  // Define an AddressBook class with methods to add, remove, and find contacts
  class AddressBook {
    private contacts: Contact[] = [];
  
    addContact(contact: Contact): void {
      this.contacts.push(contact);
    }
  
    removeContact(name: string): boolean {
      const index = this.contacts.findIndex((c) => c.getName() === name);
      if (index !== -1) {
        this.contacts.splice(index, 1);
        return true;
      }
      return false;
    }
  
    findContact(name: string): Contact | null {
      return this.contacts.find((c) => c.getName() === name) || null;
    }
  
    listContacts(): Contact[] {
      return this.contacts;
    }
  }
  
  // Create Address instances
  const address1 = new Address("123 Main St", "Springfield", "IL", "62701");
  const address2 = new Address("456 Elm St", "Shelbyville", "IL", "62702");
  
  // Create Contact instances
  const contact1 = new Contact("John Doe", "555-1234", address1);
  const contact2 = new Contact("Jane Smith", "555-5678", address2);
  
  // Create an AddressBook instance
  const addressBook = new AddressBook();
  
  // Add contacts to the address book
  addressBook.addContact(contact1);
  addressBook.addContact(contact2);
  
  // List all contacts in the address book
  const contacts = addressBook.listContacts();
  contacts.forEach((contact) => {
    console.log(
      `Name: ${contact.getName()}, Phone: ${contact.getPhoneNumber()}, Address: ${contact.getAddress().getFullAddress()}`
    );
  });
  
  // Find a contact by name
  const foundContact = addressBook.findContact("John Doe");
  if (foundContact) {
    console.log(`Found contact: ${foundContact.getName()}`);
  } else {
    console.log("Contact not found.");
  }
  
  // Remove a contact
  const removed = addressBook.removeContact("John Doe");
  console.log(`Contact removed: ${removed}`);
  