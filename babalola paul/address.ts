// Base class for a contact
class Contact {
    private _name: string;        // Private field for contact's name
    private _phoneNumber: string; // Private field for contact's phone number
    private _address: string;     // Private field for contact's address

    // Constructor to initialize contact's name, phone number, and address
    constructor(name: string, phoneNumber: string, address: string) {
        this._name = name;
        this._phoneNumber = phoneNumber;
        this._address = address;
    }

    // Getter for contact's name
    get name(): string {
        return this._name;
    }

    // Setter for contact's name
    set name(newName: string) {
        this._name = newName;
    }

    // Getter for contact's phone number
    get phoneNumber(): string {
        return this._phoneNumber;
    }

    // Setter for contact's phone number
    set phoneNumber(newPhoneNumber: string) {
        this._phoneNumber = newPhoneNumber;
    }

    // Getter for contact's address
    get address(): string {
        return this._address;
    }

    // Setter for contact's address
    set address(newAddress: string) {
        this._address = newAddress;
    }
}

// Derived class for personal contacts
class PersonalContact extends Contact {
    private _email: string; // Private field for personal contact's email

    // Constructor to initialize personal contact's name, phone number, address, and email
    constructor(name: string, phoneNumber: string, address: string, email: string) {
        super(name, phoneNumber, address); // Call the base class constructor
        this._email = email; // Initialize personal contact's email
    }

    // Getter for personal contact's email
    get email(): string {
        return this._email;
    }

    // Setter for personal contact's email
    set email(newEmail: string) {
        this._email = newEmail;
    }
}

// Derived class for business contacts
class BusinessContact extends Contact {
    private _company: string; // Private field for business contact's company

    // Constructor to initialize business contact's name, phone number, address, and company
    constructor(name: string, phoneNumber: string, address: string, company: string) {
        super(name, phoneNumber, address); // Call the base class constructor
        this._company = company; // Initialize business contact's company
    }

    // Getter for business contact's company
    get company(): string {
        return this._company;
    }

    // Setter for business contact's company
    set company(newCompany: string) {
        this._company = newCompany;
    }
}

// Testing the address book system
const paul = new PersonalContact("Paul", "123-456-7890", "123 Main St", "paul@gmail.com");
const olamide = new PersonalContact("Olamide", "987-654-3210", "456 Business Ave", "olamide@yahoomail.com");
const victor = new PersonalContact("Victor", "111-222-3333", "789 Business Blvd", "victor@gmail.com");
const precious = new PersonalContact("Precious", "444-555-6666", "321 Park Street", "precious@hotmail.com");

console.log("Paul:", paul);
console.log("Olamide:", olamide);
console.log("Victor:", victor);
console.log("Precious:", precious);

// Updating the contact information 
// Update contact information for Paul
paul.phoneNumber = "999-888-7777";
paul.address = "456 New Street";
paul.email = "paul.new@gamil.com.com";

// Update contact information for Olamide
olamide.phoneNumber = "333-222-1111";
olamide.address = "777 Oak Avenue";
olamide.email = "olamide.updated@yahoomail.com";

// Update contact information for Victor
victor.phoneNumber = "000-111-2222";
victor.address = "999 Elm Street";
victor.email = "victor.changed@gmail.com";

// Update contact information for Precious
precious.phoneNumber = "777-888-9999";
precious.address = "123 Maple Drive";
precious.email = "precious.revised@hotmail.com";

// Display updated contact information
console.log("Updated Paul:", paul);
console.log("Updated Olamide:", olamide);
console.log("Updated Victor:", victor);
console.log("Updated Precious:", precious);

