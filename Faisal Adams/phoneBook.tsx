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
    addressBook.addContact(new Contact('Alice', '123-456-7890', '123 Main St'));
    addressBook.addContact(new Contact('Bob', '123-456-7890', '124 Left St'));
    addressBook.addContact(new Contact('Charlie', '123-456-789', '125 Right St'));
    console.log(addressBook);