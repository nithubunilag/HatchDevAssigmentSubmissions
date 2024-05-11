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

    setName(name: string): void {
        this.name = name;
    }

    setPhoneNumber(phoneNumber: string): void {
        this.phoneNumber = phoneNumber;
    }

    setAddress(address: string): void {
        this.address = address;
    }
}

class AddressBook {
    private contacts: Contact[];

    constructor() {
        this.contacts = [];
    }

    addContact(contact: Contact): void {
        this.contacts.push(contact);
    }

    searchContactByName(name: string): Contact | undefined {
        return this.contacts.find(contact => contact.getName() === name);
    }

    editContact(name: string, newPhoneNumber: string, newAddress: string): void {
        const contact = this.searchContactByName(name);
        if (contact) {
            contact.setPhoneNumber(newPhoneNumber);
            contact.setAddress(newAddress);
        } else {
            console.log("Contact not found.");
        }
    }

    deleteContact(name: string): void {
        const index = this.contacts.findIndex(contact => contact.getName() === name);
        if (index !== -1) {
            this.contacts.splice(index, 1);
            console.log("Contact deleted successfully.");
        } else {
            console.log("Contact not found.");
        }
    }

    getAllContacts(): Contact[] {
        return this.contacts;
    }
}

// Example usage:
const addressBook = new AddressBook();

const contact1 = new Contact("Abdullah", "123-456-7890", "123 Ogunkoya st");
const contact2 = new Contact("Abdullah", "987-654-3210", "456 Ogunkoya st");

addressBook.addContact(contact1);
addressBook.addContact(contact2);

console.log(addressBook.getAllContacts());

const foundContact = addressBook.searchContactByName("Abdullah");
if (foundContact) {
    console.log(foundContact.getName()); // Output: Abdullah
}

addressBook.editContact("John Doe", "555-555-5555", "New Address");
console.log(addressBook.getAllContacts());

addressBook.deleteContact("Jane Doe");
console.log(addressBook.getAllContacts());