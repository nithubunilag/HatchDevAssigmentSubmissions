// **Project 1: Address Book System.**

// - Implement an address book system using **OOP** principles. 
// Each contact should be represented as an object with attributes like name, phone number, 
// and address. Demonstrate inheritance and encapsulation in your implementation


class Contact {
    name: string
    phoneNum: number
    address: string
    
    constructor(name: string, phoneNum: number, address: string){
        this.name = name;
        this.phoneNum = phoneNum;
        this.address = address;
    }
}

// const contact1 = new Contact('Ayson Samide', 23475757757, '40 Allen Ave');
// const contact2 = new Contact('John Benson', 23478399992, '85 Sule Road Ave');

// console.log(contact1)

const contacts: any[] = [new Contact('Ayson Samide', 23475757757, '40 Allen Ave'), 
                        new Contact('John Benson', 23478399992, '85 Sule Road Ave'),
                        new Contact("Raling Rail", 2349033443344, '4 road track, houston')]
console.log(contacts)

// class AddressBook {
//     contact: Contact

//     constructor(contact: Contact){
//         this.contact = this.contact;
//     }
// }
