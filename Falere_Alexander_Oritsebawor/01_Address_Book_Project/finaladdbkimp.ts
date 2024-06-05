//Creating Contact Class Below
class Contact {
    protected name: string;
    protected phoneNumber: string;
    protected address: string;

    constructor(name: string, phoneNumber: string, address: string) {
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.address = address;
    }

    // Method to display contact information
    displayInfo(): void {
        console.log(`Name: ${this.name}, Phone: ${this.phoneNumber}, Address: ${this.address}`);
    }
}
class Person extends Contact {
    private company: string;

    constructor(name: string, phoneNumber: string, address: string,) {
        super(name, phoneNumber, address);
    }

    // Method to display business contact information
    displayInfo(): void {
        super.displayInfo();
    }
}
// AddressBook class to manage contacts
class AddressBook {
    private contacts: Contact[];

    constructor() {
        this.contacts = [];
    }

    // Method to add a contact to the address book
    addContact(contact: Contact): void {
        this.contacts.push(contact);
    }

    // Method to display all contacts in the address book
    displayContacts(): void {
        this.contacts.forEach(contact => {
            contact.displayInfo();
        });
    }
}

// Example usage
const addressBook = new AddressBook();

// Creating contacts
const Alexander = new Person("Falere Alexander","08028043786", "49, Adebola Street, Off Adeniran Ogunsanya")
const Miracle = new Person("Miracle", "000000000", "Unilag")
const Odun = new Person("Odun","123456789","Nithub")

// Adding contacts to the address book

addressBook.addContact(Alexander);
addressBook.addContact(Miracle);
addressBook.addContact(Odun);

// Displaying all contacts
addressBook.displayContacts();