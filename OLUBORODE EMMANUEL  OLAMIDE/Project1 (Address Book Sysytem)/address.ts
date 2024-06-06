class Contact {
    private name: string;
    private phoneNumber: string;
    private address: string;

    constructor(name: string, phoneNumber: string, address: string) {
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.address = address;
    }

    public getName(): string {
        return this.name;
    }

    public getPhoneNumber(): string {
        return this.phoneNumber;
    }

    public getAddress(): string {
        return this.address;
    }
}

class Person extends Contact {
    private birthday: Date;

    constructor(name: string, phoneNumber: string, address: string, birthday: Date) {
        super(name, phoneNumber, address);
        this.birthday = birthday;
    }

    public getBirthday(): Date {
        return this.birthday;
    }
}

// Example usage
const James = new Person("Lamide", "081-437-85226", "456 Main St", new Date("2024-04-26"));
console.log(`Name: ${James.getName()}, Phone: ${James.getPhoneNumber()}, Address: ${James.getAddress()}, Birthday: ${James.getBirthday().toLocaleDateString()}`);
