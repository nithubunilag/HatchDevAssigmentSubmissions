class Contact {
    name: string;
    address: string;
    phone: number;
    protected blocked: boolean;

    constructor(name: string, address: string, phone: number) {
        this.name = name;
        this.address = address;
        this.phone = phone;
    }
    call(contact: Contact): void {
        if(contact.blocked == true ){
            console.log('You cannot call this contact');
        } else {
            console.log(`Calling ${contact.name}...`);
            setTimeout(()=> {
                console.log('Call ended');
            
            }, 3000)
        }
        
    }

}

class BlockedContact extends Contact {
    constructor(name: string, address: string, phone: number) {
        super(name, address, phone);
        this.blocked = true
    }
    
}

class AddressBook {
    contacts: Array<Contact>
    constructor() {
        this.contacts = [];
    }

    addContact(contact: Contact): void {
        this.contacts.push(contact);
    }
    removeContact(name: string): void {
        this.contacts = this.contacts.filter(contact => contact.name !== name);
    }
}


const contact1 = new Contact('John', '123 Main St', 1234567890);
const contact2 = new Contact('Jane', '456 Main St', 1234567890);
const contact3 = new Contact('Jim', '789 Main St', 1234567890);
const blockedContact = new BlockedContact('Blocked', '123 Main St', 1234567890);

const addressBook = new AddressBook();
addressBook.addContact(contact1);
addressBook.addContact(contact2);
addressBook.addContact(contact3);
addressBook.addContact(blockedContact);

// contact1.call(contact2);
contact2.call(blockedContact); 