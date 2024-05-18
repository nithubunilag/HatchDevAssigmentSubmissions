class Contact {
    private name: string;
    private phoneNo: string;
    private address: string;

    constructor(name: string, phoneNo: string, address: string) {
        this.name = name;
        this.phoneNo = phoneNo;
        this.address = address;
    }

    public getName(): string {
        return this.name;
    }

    public getPhoneNo(): string { 
        return this.phoneNo;
    }

    public getAddress(): string {
        return this.address;
    }

    public updatePhoneNo(newPhoneNo: string){
        this.phoneNo = newPhoneNo;
    }

    public updateAddress(newAddress: string){
        this.address = newAddress;
    }
}

// EMERGENCY CONTACT 
class EmergencyContact extends Contact {
    private relationship: string;

    constructor(name: string, phoneNo: string, address: string, relationship: string) {
        super(name, phoneNo, address);
        this.relationship = relationship;
    }

    getRelationship(): string {
        return this.relationship;
    }
}


class SchoolContact extends Contact {
    private department: string;

    constructor(name: string, phoneNo: string, address: string, department: string) {
        super(name, phoneNo, address);
        this.department = department;
    }

    getDepartment(): string {
        return this.department;
    }
}


// ADDRESS BOOK CLASS
class AddressBook {
    private contactList: Contact[] ; 

    constructor() {
        this.contactList = [];
    }

    addContact(contact: Contact) {
        this.contactList.push(contact)
    }

    displayContactList() {
        this.contactList.forEach((contact) => {
            if(contact instanceof EmergencyContact){
                console.log(`Name: ${contact.getName()}, Phone Number: ${contact.getPhoneNo()}, Address: ${contact.getAddress()}, Relationship: ${contact.getRelationship()}`);
            }
            else if(contact instanceof SchoolContact){
                console.log(`Name: ${contact.getName()}, Phone Number: ${contact.getPhoneNo()}, Address: ${contact.getAddress()}, Department: ${contact.getDepartment()}`);
            }
           else{
                console.log(`Name: ${contact.getName()}, Phone Number: ${contact.getPhoneNo()}, Address: ${contact.getAddress()}`);
            }
            
        })
    }


    searchContactList(search: string){
        search = search.toLowerCase();
        const searchResults =  this.contactList.filter((contact) =>{
            const name = contact.getName().toLowerCase();
            const phoneNo = contact.getPhoneNo().toLowerCase();
            //return name.startsWith(search) || phoneNo.startsWith(search);
            return name === search || phoneNo === search;
            }
        );

        if (searchResults.length === 0 ){
            console.log(`The contact "${search}" does not exist`);
        }

        return searchResults;
    }


    deleteContact(search:string): void{  
        search = search.toLowerCase();
        const index = this.contactList.findIndex((contact) => {
            const name = contact.getName().toLowerCase();
            const phoneNo = contact.getPhoneNo().toLowerCase();
            return name === search || phoneNo === search;
        });
       

        if(index !== -1){
            this.contactList.splice(index, 1);
            console.log("Contact deleted successfully");
        }
        else{
            console.log("Contact not found");
        }
    }

}


let contact1 = new Contact("Damola", "07012356756", "Gbagada")
let contact2 = new SchoolContact("Maryam", "09054289453", "Moremi", "Marine Science")
let contact3 = new EmergencyContact("Kehinde", "08045623456", "Mushin", "sister");
let contact4 = new SchoolContact("Aliyyah", "08056743218", "Akoka", "Computer Science");

let myContacts = new AddressBook();
myContacts.addContact(contact1);
myContacts.addContact(contact2);
myContacts.addContact(contact3);
myContacts.addContact(contact4);
contact1.updateAddress("London");

myContacts.displayContactList();
console.log(myContacts.searchContactList("Maryam"));

myContacts.deleteContact("Kehinde"); 
myContacts.displayContactList();

console.log(myContacts.searchContactList("Kehinde"));


