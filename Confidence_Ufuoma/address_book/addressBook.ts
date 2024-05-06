 
 
class Contact {
    constructor(private name: string, private phoneNumber: number, private address: string) {
    }

    getName(): string {
        return this.name;
    }

     getPhoneNumber(): number {
        return this.phoneNumber;
    }

     getAddress(): string {
        return this.address;
    }  
}

class BusinessCard extends Contact{
    companyName: string

    constructor(name: string, phoneNumber: number, address: string) {
        super(name, phoneNumber, address);
        this.companyName ="";
    }

}
 
class AddressBook {
    constructor(private contactList: Contact[]) {}
       
    addContact(contact: Contact){
     this.contactList.push(contact);
    }

     
    displayContacts()  {
        this.contactList.forEach(contact => {
            console.log("Name:", contact.getName());
            console.log("Phone Number:", contact.getPhoneNumber());
            console.log("Address:", contact.getAddress());
        });
    }
}

 

 
const contactA = new Contact("Confidence Ufuoma", 7063099500, "Unilag");
const contactB = new Contact("Evidence Egwuono", 8106833649, "Unilag");
const company = new BusinessCard("Teefah's wears", 1345678910, "4, unilag road")

const myAddressBook = new AddressBook([contactA, contactB, company]);

 
 

 
myAddressBook.displayContacts();

