interface Contact {
    name: string;
    phoneNumber: string;
}

class GenericContact implements Contact {
    constructor(public name: string, public phoneNumber: string) {
        this.validateName(name);
    }

    private validateName(name: string): void {
        const notEmptyString = name.trim();
        if (!notEmptyString) {
            throw new Error('Name cannot be empty.');
        }
    }
}

class BusinessContact extends GenericContact {
    constructor(name: string, phoneNumber: string, public companyName: string) {
        super(name, phoneNumber);
    }
}

class FamilyContact extends GenericContact {
    constructor(name: string, phoneNumber: string, public relation: string) {
        super(name, phoneNumber);
    }
}

class AddressBook {
    contacts: Contact[] = [];

    addContact(contact: Contact): void {
        this.contacts.push(contact);
    }

    displayContacts(): void {
        console.log('Contacts:');
        this.contacts.forEach(contact => {
            console.log(`${contact.name} - ${contact.phoneNumber}`);
            if (contact instanceof BusinessContact) {
                console.log(`  Company: ${contact.companyName}`);
            } else if (contact instanceof FamilyContact) {
                console.log(`  Relation: ${contact.relation}`);
            }
        });
    }
}

const addressBook = new AddressBook();

try {
    const businessContact = new BusinessContact('Tom Cruise', '123-456-7890', 'Hollywood');
    addressBook.addContact(businessContact);

    const familyContact = new FamilyContact('Momsy', '987-654-3210', 'Mother');
    addressBook.addContact(familyContact);
} catch (error) {
    console.error(error.message);
}

addressBook.displayContacts();
