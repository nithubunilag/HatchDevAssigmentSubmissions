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

    toString(): string {
        return `Name: ${this.name}, Phone: ${this.phoneNumber}, Address: ${this.address}`;
    }
}

class BusinessContact extends Contact {
    private organization: string;

    constructor(name: string, phoneNumber: string, address: string, organization: string) {
        super(name, phoneNumber, address);
        this.organization = organization;
    }

    getOrganization(): string {
        return this.organization;
    }

    setOrganization(organization: string): void {
        this.organization = organization;
    }

    toString(): string {
        return super.toString() + `, Organization: ${this.organization}`;
    }
}
