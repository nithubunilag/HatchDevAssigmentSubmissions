// Project 1: Address Book System

/* Implement an address book system using OOP principles
 * Each contact should be represented as an object with attributes like name, phone number, and address.
 * Demonstrate inheritance and encapsulation in your implementation.
 */


function main() {
    const addressBook = new AddressBook();
    
    addressBook.addContact(new Contact(
        "Mr. Fash",
        "+234 8031234567",
        "123, 4th Street, Greensboro, North Carolina"
    ))
    addressBook.addContact(new FamilyContact(
        "Hope",
        "08123565199",
        "Anwai Road, Asaba, Delta",
        "Mum"
    ));
    addressBook.addContact(new FriendContact(
        "Ayinde Oladeinde",
        "07012345678",
        "Surulere, Lagos",
        "Index"
    ))

    addressBook.display();
}


class AddressBook {
    private _contacts: Contact[];

    constructor() {
        this._contacts = [];
    }

    addContact(contact: Contact) {
        this._contacts.push(contact);
    }

    display() {
        this._contacts.forEach(contact => {
            contact.display();
            console.log('');
        })
    }
}


class Contact {
    private _name: string;
    private _phoneNumber: string;
    private _address: string;

    constructor(name: string, phoneNumber: string, address: string) {
        this._name = name;
        this._phoneNumber = phoneNumber;
        this._address = address;
    }

    display() {
        console.log(`${this._name} (${this._phoneNumber})`);
        console.log(this._address);
    }

    get name(): string {
        return this._name;
    }

    get phoneNumber(): string {
        return this._phoneNumber;
    }

    get address(): string {
        return this._address;
    }

    set name(name: string) {
        this._name = name;
    }

    set phoneNumber(phoneNumber: string) {
        this._phoneNumber = phoneNumber;
    }

    set address(address: string) {
        this._address = address;
    }
}


class FriendContact extends Contact {
    private _nickname: string;

    constructor(name: string, phoneNumber: string, address: string, nickname: string) {
        super(name, phoneNumber, address);
        this._nickname = nickname;
    }

    display() {
        console.log(`${this._nickname} (${this.phoneNumber})`);
        console.log(this.address);
        console.log(`[Real name: ${this.name}]`);
    }

    get nickname(): string {
        return this._nickname;
    }

    set nickname(nickname: string) {
        this._nickname = nickname;
    }
}

class FamilyContact extends Contact {
    private _relationship: string;

    constructor(name: string, phoneNumber: string, address: string, relationship: string) {
        super(name, phoneNumber, address);
        this._relationship = relationship.toLowerCase();
    }

    display() {
        console.log(`My ${this._relationship} (${this.phoneNumber})`);
        console.log(this.address);
        console.log(`[Real name: ${this.name}]`);
    }

    get relationship(): string {
        return this._relationship;
    }

    set relationship(relationship: string) {
        this._relationship = relationship;
    }
}

main();