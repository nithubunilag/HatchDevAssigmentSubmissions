class Contact {
    name: string;
    phoneNumber: string;
    address: string;

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
}

class PersonalContact extends Contact {
    private email: string;

    constructor(name: string, phoneNumber: string, address: string, email: string) {
        super(name, phoneNumber, address);
        this.email = email;
    }

    getEmail(): string {
        return this.email;
    }

}

let contact1 = new Contact("yusuf", "999999999", "london");
let personalContact1 = new PersonalContact("brain", "000000000334", "shibuya", "olalade@example.com");

console.log(contact1);
console.log(personalContact1);