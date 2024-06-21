// Address Book System Project
class AddressBookSystem {
    private contacts: Contact[];

    constructor(contacts: Contact[]) {
        this.contacts = contacts;
    }

    logContacts(): void {
        this.contacts.forEach(contact => {
            console.log(contact.FormattedInfo());
        });
    }
}

class Contact {
    constructor(private name: string, private phoneNumber: string, private address: string) {}

    getName(): string { return this.name; }
    getPhoneNumber(): string { return this.phoneNumber; }
    getAddress(): string { return this.address; }

    FormattedInfo(): string {
        return `Name: ${this.getName()}, Phone Number: ${this.getPhoneNumber()}, Address: ${this.getAddress()}`;
    }
}

class BusinessContact extends Contact {
    private firm: string;

    constructor(name: string, phoneNumber: string, address: string, firm: string) {
        super(name, phoneNumber, address);
        this.firm = firm;
    }

    getFirm(): string { return this.firm; }

    getFormattedInfo(): string {
        return `${super.FormattedInfo()}, Firm: ${this.getFirm()} (Business Contact)`;
    }
}

const ContactA = new Contact("cool_guy", "09055667896", "12 ajiola str.");
const ContactB = new BusinessContact("Boss david", "07066566786", "3 commercial road", "GoldmanSacs NG");
const ContactC = new Contact("spice", "09057487594", "kid estate");
const ContactD = new BusinessContact("HR lou", "+157683786", "oaklands resort", "Mainshow limited");
const ContactE = new Contact("john_doe", "08012345678", "15 Sunshine Street");
const ContactF = new BusinessContact("Jane Smith", "09098765432", "22 Business Avenue", "Tech Enterprises");
const ContactG = new Contact("Alice", "+16467584930", "23 Riverside Drive");
const ContactH = new BusinessContact("Bob Johnson", "08056789012", "10 Market Square", "Global Solutions");

const addressBook = new AddressBookSystem([ContactA, ContactB, ContactC, ContactD, ContactE, ContactF, ContactG, ContactH]);
addressBook.logContacts();
