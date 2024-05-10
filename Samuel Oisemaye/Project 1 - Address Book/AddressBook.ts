// PhoneBook class
class AddressBook {

    contacts: Contact[]

    constructor() {
        this.contacts = []
    }

    // Add new Contact
    addContact(contact: Contact) {
        this.contacts.push(contact);
    }

    // Show all Contact
    showAllContacts() {
        this.contacts.forEach(contact => {
            contact.showContactInfo();
            console.log( );
        })
    }

    
}

// Contact class
class Contact {

    constructor(private Name: string, private phoneNumber: string, private Address: string) {
    }

    getName(){
        return this.Name;
    }
    getPhoneNumber(){
        return this.phoneNumber;
    }
    getAddress(){
        return this.Address;
    }

    showContactInfo() {
        console.log("Name:", this.getName());
        console.log("Phone Number:", this.getPhoneNumber());
        console.log("Address:", this.getAddress());
    }
}

// Inheritance
class businessContact extends Contact {

    constructor(Name:string, PhoneNumber:string, Address:string, private businessEmail: string) {
        super(Name, PhoneNumber, Address)
    }

    getbusinessEmail(){
        return this.businessEmail;
    }

    showContactInfo() {
        console.log("Name:", this.getName());
        console.log("Phone Number:", this.getPhoneNumber());
        console.log("Address:", this.getAddress());
        console.log("Business Email:", this.getbusinessEmail());
    }
}

const addressBook = new AddressBook();

const person1 = new Contact("Samuel", "090366", "23 Yaba Lagos");
const person2 = new Contact("Victory", "090522", "456 Abeokuta Expressway Lagos");
const business1 = new businessContact("RCoder", "01-234-567", "23, Akoka road, Yaba, Lagos", "rcoder@gmail.com")

addressBook.addContact(person1);
addressBook.addContact(person2);
addressBook.addContact(business1);

addressBook.showAllContacts();