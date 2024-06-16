abstract class Contact {
    protected name: string;
    protected phoneNumber: string;
    protected address: string;
  
    constructor(name: string, phoneNumber: string, address: string) {
      this.name = name;
      this.phoneNumber = phoneNumber;
      this.address = address;
    }
  
    abstract showContact(): void;
  }
  
  class Person extends Contact {
    private email: string;
  
    constructor(name: string, phoneNumber: string, address: string, email: string) {
      super(name, phoneNumber, address);
      this.email = email;
    }
  
    showContact(): void {
      console.log(`Name: ${this.name}`);
      console.log(`Phone Number: ${this.phoneNumber}`);
      console.log(`Address: ${this.address}`);
      console.log(`Email: ${this.email}`);
    }
  }
  
  class Business extends Contact {
    private companyName: string;
  
    constructor(name: string, phoneNumber: string, address: string, companyName: string) {
      super(name, phoneNumber, address);
      this.companyName = companyName;
    }
  
    showContact(): void {
      console.log(`Name: ${this.name}`);
      console.log(`Phone Number: ${this.phoneNumber}`);
      console.log(`Address: ${this.address}`);
      console.log(`Company Name: ${this.companyName}`);
    }
  }
  
  class AddressBook {
    private contacts: Contact[] = [];
  
    addContact(contact: Contact): void {
      this.contacts.push(contact);
    }
  
    showContacts(): void {
      this.contacts.forEach((contact) => {
        contact.showContact();
        console.log("");
      });
    }
  }
  
  let addressBook = new AddressBook();
  
  let person = new Person("Fari Nwa", "123-456-7890", "37 Main St Yaba", "farinwa@gmail.com");
  let business = new Business("Kralice Jay Services Ltd.", "987-654-3210", "42/48 Balogun Lagos Island", "KJSL Ltd.");
  
  addressBook.addContact(person);
  addressBook.addContact(business);
  
  addressBook.showContacts();
