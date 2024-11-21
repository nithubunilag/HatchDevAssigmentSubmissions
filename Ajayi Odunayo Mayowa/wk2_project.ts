// Making An Adress book system 
class addressBook {
    private contacts: contacts[] = [];
    constructor() {
        this.contacts = [];
    }
    addContact(contact: contacts) {
        this.contacts.push(contact);
    }
    displayContact() {
        for (let contact of this.contacts) {
            console.log(contact);
        }
    }
    deleteContact(contact: contacts) {
        let index = this.contacts.indexOf(contact);
        this.contacts.splice(index, 1);
    }

}

class contacts {
    // using encapsulation
    protected name: string;
    protected email: string;
    protected phone: number;
    constructor(name: string, email: string, phone: number) {
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    
}
// demonstrating inheritance
class person extends contacts {
    private address: string;
    constructor(name: string, email: string, phone: number, address: string) {
        super(name, email, phone);
        this.address = address;
    }
    personDetails() {
        console.log("Name: " + this.name);
        console.log("Email: " + this.email);
        console.log("Phone: " + this.phone);
        console.log("Address: " + this.address);
    }
}

let person1 = new person("John", "dd", 1234567890, "1234 Main St");
let person2 = new person("Jane", "ee", 1234567890, "1234 Main St");
let person3 = new person("Jim", "ff", 1234567890, "1234 Main St");


let addressBook1 = new addressBook();
addressBook1.addContact(person1);
addressBook1.addContact(person2);
addressBook1.addContact(person3);
console.log(person1.personDetails());
addressBook1.deleteContact(person2);
addressBook1.displayContact();

//new things I learned - splice(); takes 2 paraameters; first paramater stands for the index you want to remove starting from the index itself, then the 2nd parametr is how many items you want to remove starting from that inde