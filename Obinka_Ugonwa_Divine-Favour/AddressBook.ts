
// address book 
// note to self: always specify the return type for a method so as to get expected result returned 


class PhoneBook {
    private contacts: Contact[]

    constructor() {
        this.contacts = []; // constructor for the contacts propert
    }
    
    addContacts(contact: Contact){
        this.contacts.push(contact)     // push accepts contact parameter of type Contact and adds it to the array of Contacts creating a list of contacts in the phonebook
    }
// try to implement delete contact
    deletecontact(contact: Contact): Contact[]{
        this.contacts = this.contacts.filter(item => item !== contact)
        return this.contacts
    }

    displayContacts(): Contact[]{
        return this.contacts        // return the array of contacts
    }
}



class Contact {
    private name: string;
    private phoneNumber: number;
    private address:  string;  // ?for address can i use a tuple to allow number and string type or is there a way to concatenate the number and string 
    
    constructor(name: string, phoneNumber: number, address: string){
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.address = address;
    }

    getName(): string{
        return this.name        // returns name of the object 
    }
    getPhoneNumber(): number{
        return this.phoneNumber     // returns the phone number of the object
    }
    getAddress(): string {
        return this.address         // returns the address of the object
    }

    public details(): void{
        console.log(`New user, ${this.name} resides in ${this.address} and can be reached at this number ${this.phoneNumber}.`)
    }       // displays the details of the contact in a sentence

}


let divine = new Contact("Obinka Ugonwa Divine", 8074413435, "Unilag");     // creating the objects which iare instances of the class Contact
let fred = new Contact("Fred Charles", 8134642874, "Nithub")
let bolu = new Contact("Ola Bolu", 7078745489, "Makama")


// divine.details();

// adding the new contacts to the phonebook
let phonebook = new PhoneBook();
phonebook.addContacts(divine)
phonebook.addContacts(fred)
phonebook.addContacts(bolu)

// console.log(phonebook.displayContacts())

phonebook.deletecontact(fred)
console.log(phonebook.displayContacts())

// testing the details method
console.log(fred.details())



