// create a class to represent each contact with their information 

class Contact {
    private name: string
    private phoneNumber: string
    private city: string

    constructor (name: string, phoneNumber: string, city: string) {
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.city = city; 
    }

    // we will use getters to access the conatct information (this also explains encapsulation)
    getName () : string {
        return this.name;
    }

    getPhoneNumber () : string {
        return this.phoneNumber;
    }

    getCity () : string {
        return this.city;
    }
      
}

class BusinessContact extends Contact {
    private company: string
  
    constructor(name: string, phoneNumber: string, city: string, company: string) {
      super(name, phoneNumber, city); // Call parent constructor
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
  
    // Add a new contact to the address book
    addContact(contact: Contact): void {
      this.contacts.push(contact);
    }
  
    // Search for a contact by name
    findContactByName(name: string): Contact | undefined {
      return this.contacts.find(contact => contact.getName() === name);
    }
  }

  
  // Create a new address book
const addressBook = new AddressBook();

// Create a contact
const prosper = new Contact("prosper", "123-456-7890", "Lagos");

// Add the contact to the address book
addressBook.addContact(prosper);

// Create a business contact
const glory= new BusinessContact("glory", "987-654-3210", "Lagos", "Gavis");

// Add the business contact
addressBook.addContact(glory);

// Search for a contact
const foundContact = addressBook.findContactByName("glory");

if (foundContact) {
  console.log(`Name: ${foundContact.getName()}`);
  console.log(`Phone Number: ${foundContact.getPhoneNumber()}`);
  console.log(`Address: ${foundContact.getCity()}`);
} else {
  console.log("Contact not found");
}
