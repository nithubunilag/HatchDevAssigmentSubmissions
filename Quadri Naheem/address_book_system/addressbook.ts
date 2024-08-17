
/**
 * the addressbook uses composition and aggregation to get the classes
 * that extends AbstractContact, indirectly implementing Contact interface
 */

import {FamilyContact, BusinessContact, AbstractContact} from "./contact.ts"

class AddressBook {
    private contacts: AbstractContact[];

    constructor() {
        this.contacts = [];
    }

    addContact(contact: AbstractContact) {
        this.contacts.push(contact);
        this.contacts.sort((a,b) => a.name.localeCompare(b.name));
    }

    searchContactByName(name: string): AbstractContact | undefined {
        let result = undefined;
        this.contacts.forEach((contact)=>{
            if(contact.name.toLowerCase() == name.toLowerCase())
                result = contact
            return
        });

        return result
    }

    deleteContact(name: string) {
        let index = this.contacts.findIndex((contact, index) => contact.name.toLowerCase() === name.toLowerCase());
        if(index != -1){
            this.contacts.splice(index,1)
            console.log("Record deleted")
        }else{
            console.log("Record not found")
        }
        
    }

    updateContact(name: string, phone?: string, address?: string) {
        let index = this.contacts.findIndex((contact, index) => contact.name.toLowerCase() === name.toLowerCase());
        if(index != -1){
            if(phone){
                this.contacts[index].phone = phone;
            }
            if(address){
                this.contacts[index].address = address;
            }
            console.log("Contact updated")  
        }else{
            console.log("Contact not found")
        }
    }

    printContacts() {
        this.contacts.forEach((contact)=>{
            contact.printContacts();
        });
    }
}


const addressBook = new AddressBook();

addressBook.addContact(new FamilyContact("Quadri Naheem", "08134103142", "18, Ikorodu", new Date(), "Brother"));
addressBook.addContact(new BusinessContact("Tunde Alani", "08132143891", "Ikeja", "Auto Mechanic", "Manager"));
addressBook.addContact(new BusinessContact("Adegunki Mariam", "00704352487", "Ikosi Ketu", "MeHealth Centre", "Manager"));

addressBook.printContacts();
console.log("Found", addressBook.searchContactByName("Adegunki Mariam"))
addressBook.deleteContact("Tunde Alani")
addressBook.printContacts();
addressBook.updateContact("quadri naheem", "07045673214")
addressBook.printContacts();