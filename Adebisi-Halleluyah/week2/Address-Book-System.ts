// Interface for basic contact information
interface Contact {
    getName(): string;
    getPhone(): string;
  }
  
  // Base Contact Class
  class Contact implements Contact {
    private name: string;
    private phone: string;
  
    constructor(name: string, phone: string) {
      this.name = name;
      this.phone = phone;
    }
  
    getName(): string {
      return this.name;
    }
  
    getPhone(): string {
      return this.phone;
    }
  }
  
  // Address Class inheriting from Contact and adding address details (Encapsulation)
  class AddressBookEntry extends Contact {
    private address: string;
  
    constructor(name: string, phone: string, address: string) {
      super(name, phone); // Call base class constructor
      this.address = address;
    }
  
    getAddress(): string {
      return this.address;
    }
  }
  
  // AddressBook Class for managing contacts
  class AddressBook {
    private contacts: AddressBookEntry[] = [];
  
    addContact(contact: AddressBookEntry): void {
      this.contacts.push(contact);
    }
  
    getContact(name: string): AddressBookEntry | undefined {
      return this.contacts.find((contact) => contact.getName() === name);
    }
  
    getAllContacts(): AddressBookEntry[] {
      return this.contacts;
    }
  }
  
  // Usage Example
  const addressBook = new AddressBook();
  const johnDoe = new AddressBookEntry("John Doe", "123-456-7890", "10 Main St");
  addressBook.addContact(johnDoe);
  
  const janeDoe = new AddressBookEntry("Jane Doe", "987-654-3210", "20 Elm St");
  addressBook.addContact(janeDoe);
  
  console.log(addressBook.getContact("John Doe")?.getAddress()); // Output: 10 Main St (null check for potential undefined)
  
  const allContacts = addressBook.getAllContacts();
  for (const contact of allContacts) {
    console.log(`${contact.getName()}: ${contact.getPhone()}`);
  }
  