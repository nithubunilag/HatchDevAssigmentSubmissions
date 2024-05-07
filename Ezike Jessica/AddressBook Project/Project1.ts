/////Project 1

class Contact {
    private name: string
    private PhoneNumber: string
    private address: string

    constructor(name: string, PhoneNumber: string, address: string) {
        this.name = name;
        this.PhoneNumber = PhoneNumber;
        this.address = address;
    }

    getName() {
        return this.name;
    }
    getPhoneNumber() {
        return this.PhoneNumber;
    }
    getAddress() {
        return this.address;
    }
}

class Person extends Contact {
    gender: string

    constructor(name: string, PhoneNuumber: string, address: string, gender: string) {
        super(name, PhoneNuumber, address)
        this.gender = gender
    }

        getGender() {
            return this.gender
        }

}


class AddressBook {
   private ListOfContact: Contact[]

    constructor() {
    this.ListOfContact = []
}

    addContact(Info: Contact) {
        this.ListOfContact.push(Info)
    }

    DisplayAllContacts() {
        this.ListOfContact.forEach(Info => {
            if (Info instanceof Person) {
                console.log(`Name: ${Info.getName()}, Phone Number: ${Info.getPhoneNumber()}, Address: ${Info.getAddress()}, Gender: ${Info.gender}`);
            }
            else{
                console.log(`Name: ${Info.getName()}, Phone Number: ${Info.getPhoneNumber()}, Address: ${Info.getAddress()}`);
            }
        });
    }

}

let TheAddressBook = new AddressBook()

let cont1 = new Person("John", "123456789", "Nithub", "Male");
let cont2 = new Person("Joy", "987654321", "Newhall", "Female");
let cont3 = new Contact("Timi", "123459876", "OffCampus");

TheAddressBook.addContact(cont1)
TheAddressBook.addContact(cont2)
TheAddressBook.addContact(cont3)

TheAddressBook.DisplayAllContacts()



