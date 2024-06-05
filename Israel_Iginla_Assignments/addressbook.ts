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

 

 
const contactA = new Contact("David Edwards", +44-2360-733, "United_Kingdom");
const contactB = new Contact("Chukwudi Emeka", +234-81077009, "Nigeria");
const company = new BusinessCard("Dabira Joy", 1345678910, "4, "Cameroon")

const myAddressBook = new AddressBook([contactA, contactB, company]);

 
 

 
myAddressBook.displayContacts();