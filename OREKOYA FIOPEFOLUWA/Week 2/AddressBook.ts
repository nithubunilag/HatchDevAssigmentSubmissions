
                                         // ASSIGNMENT
                                     // **Project 1: Address Book System.**

                                  // - Implement an address book system using **OOP** principles. Each contact should be represented as an object with attributes like name, phone number, and address. Demonstrate inheritance and encapsulation in your implementation.

class Person {
    name: string;
    phoneNumber: string;
    address: string;
    constructor(name: string, phoneNumber: string, address: string) {
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.address = address;
    }
}
    
    class AddressBook {
        private contacts: Contact[] = [];

        addContact(contact: Contact) {
            this.contacts.push(contact);
        }

        findContactByName(name: string) {
            return this.contacts.find(contact => contact.name === name);
        }

        findContactsByPhoneNumber(phoneNumber: string) {
            return this.contacts.filter(contact => contact.phoneNumber === phoneNumber);
        }

        getContacts() {
            return this.contacts;
        }
    }

    class Contact extends Person {
        constructor(name: string, phoneNumber: string, address: string) {
            super(name, phoneNumber, address);
        }
    }
    const addressBook = new AddressBook();
    addressBook.addContact(new Contact('Kola', '080-654-8756', '4 Yemi Fabs'));
    addressBook.addContact(new Contact('Fiope', '812-254-2344', '9 Ajayi St'));
    addressBook.addContact(new Contact('Alec', '786-546-7654', '3 Emerald'));
    // addressBook.addContact(new Contact('', '', ''))
    console.log(addressBook);
