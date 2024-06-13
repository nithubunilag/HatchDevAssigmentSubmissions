// CREATING THE PHONEBOOK CLASS AS THE PARENT CLASS
class PhoneBook {
    protected name: string;    //Using Encapsulation
    protected phoneNumber: number;
    protected address: string;
     
    constructor(name: string, phoneNumber: number, address: string) {
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.address = address;
    }

    getName(): string {
        return this.name;
    }

    getPhoneNumber(): number {
        return this.phoneNumber;
    }

    getAddress(): string {
        return this.address;
    }

    // Creating a function that prints out the parameters for easy identification
    displayContact(){
        console.log(`Name: ${this.name}`);
        console.log(`Phone Number: ${this.phoneNumber}`);
        console.log(`Address: ${this.address}`);
    }
}

// Creating a class Contact
class Contact extends PhoneBook {
    constructor(name: string, phoneNumber: number, address: string) {
        super(name, phoneNumber, address);
    }

}



class AddressBook {
    private contacts: Contact[] = [];
    
    // Add contact to address book
    addContact(contact: Contact): void {
        this.contacts.push(contact);
    }

    // Display all contacts in address book
    displayContacts(){
        this.contacts.forEach((contact) => {
            console.log("Contact:")
            contact.displayContact();
            console.log("                   ")
        });
    }
}

const addressBook = new AddressBook();

const Peter = new Contact("Peter", +2349023189276, "3, Odeloa street");
const John = new Contact("John", +2349023423456, "Lagos State");
const Jesus = new Contact("Jesus", +2342981028339, "Heaven");

addressBook.addContact(Peter);
addressBook.addContact(John);
addressBook.addContact(Jesus);

console.log('Address Book:');
addressBook.displayContacts();










