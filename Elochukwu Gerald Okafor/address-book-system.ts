class Contact {
    // Demonstrating encapsulation
    private name: string;
    private phone: number;
    private address: string;

    // Initialize the class with custom attribute values
    constructor(name: string, phone: number, address: string) {
        this.name = name;
        this.phone = phone;
        this.address = address;
    }

    // Getter for name attribute
    get getName(): string {
        return this.name;
    }

    // Setter for name attribute
    set setName(newName: string) {
        this.name = newName;
    }

    // Getter for phone number
    get getPhone(): number {
        return this.phone;
    }

    // Setter for phone number
    set setPhone(newPhone: number) {
        this.phone = newPhone;
    }

    // Getter for address
    get getAddress(): string {
        return this.address;
    }

    // Setter for address
    setAddress(newAddress: string): void {
        this.address = newAddress;
    }

    // Displays general contact information
    information(): void {
        console.log(
            `Name: ${this.name}\nPhone: ${this.phone}\nAddress: ${this.address}`
        );
    }
}

// Inheritance
class BusinessContact extends Contact {
    organization: string;
    office: number;

    constructor(
        name: string,
        phone: number,
        address: string,
        organization: string,
        office: number
    ) {
        super(name, phone, address);
        this.organization = organization;
        this.office = office;
    }

    get getOrganization(): string {
        return this.organization;
    }
}

class PhoneBook {
    private contacts: Contact[];

    // Initialize the phone book with a custom contact list
    constructor(contacts: Contact[]) {
        this.contacts = contacts;
    }

    // Get a contact by name
    getByName(name: string): Contact | null {
        for (const contact of this.contacts) {
            if (contact.getName == name) {
                return contact;
            }
        }
        return null;
    }

    // Get a contact by phone number
    getByPhone(phone: number): Contact | null {
        for (const contact of this.contacts) {
            if (contact.getPhone == phone) {
                return contact;
            }
        }
        return null;
    }

    // Get a contact by address
    getByAddress(address: string): Contact | null {
        for (const contact of this.contacts) {
            if (contact.getAddress == address) {
                return contact;
            }
        }
        return null;
    }

    // Add a contact
    addContact(newContact: Contact): void {
        this.contacts.push(newContact);
        console.log('\nAdded new contact:\n');
        newContact.information();
    }
}

// Testing
const myContacts = [
    new Contact('Lila Jones', 5551234567, '123 Elm Street, USA'),
    new Contact('Ethan Kim', 5559876543, '456 Oak Avenue, Springfield, USA'),
    new Contact('Max Chen', 5558887777, '789 Maple Drive, Lakeside, USA'),
    new BusinessContact(
        'Ava Garcia',
        55523232341,
        '555 Cedar Lane, Riverside, USA',
        'Meta',
        20
    ),
];

const myPhoneBook = new PhoneBook(myContacts);
const kimsContact = myPhoneBook.getByName('Ethan Kim');

// Could be null (best practices)
kimsContact?.information();

// Add a contact
const myContact = new Contact('Me', 23412238910, 'Home');
myPhoneBook.addContact(myContact);
