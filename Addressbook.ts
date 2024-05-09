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

    toString(): string {
        return `Name: ${this.name}, Phone Number: ${this.phoneNumber}, Address: ${this.address}`;
    }
}

class BusinessContact extends Contact {
    private businessName: string;
    private businessPhoneNumber: string;

    constructor(name: string, phoneNumber: string, address: string, businessName: string, businessPhoneNumber: string) {
        super(name, phoneNumber, address);
        this.businessName = businessName;
        this.businessPhoneNumber = businessPhoneNumber;
    }

    getBusinessName(): string {
        return this.businessName;
    }

    getBusinessPhoneNumber(): string {
        return this.businessPhoneNumber;
    }

    toString(): string {
        return super.toString() + `, Business Name: ${this.businessName}, Business Phone: ${this.businessPhoneNumber}`;
    }
}

// Example usage:

// Creating a personal contact
const personalContact = new Contact("John Doe", "123-456-7890", "123 Main St, City");

// Creating a business contact
const businessContact = new BusinessContact("Jane Smith", "987-654-3210", "456 Business Ave, Town", "Smith Co.", "555-123-4567");

// Printing the contacts
console.log("Personal Contact:");
console.log(personalContact.toString());

console.log("\nBusiness Contact:");
console.log(businessContact.toString());
