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
    protected name: string;
    protected email: string;
    protected phone: number;
    constructor(name: string, email: string, phone: number) {
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    
}
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


let person1 = new person("Juice Wrld", "JuiceWrld@nithub.com", +4490000000, "999 Heaven Close");
let person2 = new person("Kdot", "Kdot@nithub.com", +448000000000, "2 off Damn Avenue");
let person3 = new person("Slimshady", "Slimshady@nithub.com", +44572293113, "1 on GOAT island");

let addressBook1 = new addressBook();
addressBook1.addContact(person1);
addressBook1.addContact(person2);
addressBook1.addContact(person3);
console.log(person1.personDetails());
addressBook1.deleteContact(person2);
addressBook1.displayContact();