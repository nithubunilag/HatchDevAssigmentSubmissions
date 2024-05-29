/* Implementing an Address Book system using OOP principles
Each contact should be represented as an object with attributes
like name, phone number, and address.
Demonstrate inheritance and encapsulation.
*/
class AddressBook {
    protected name: string[] = [];
    protected phoneNumber: string;
    protected address: string;

    constructor(name: string[], phoneNumber: string, address: string) {
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.address = address;
    }
}
// The child class inherits from the parent class
class PersonalContactInfo extends AddressBook{
    private email: string;
    private gender: string;

    constructor(name: string[], phoneNumber: string, address: string, email: string, gender: string) {
        super(name, phoneNumber, address);
        this.email = email;
        this.gender = gender;
}
}
class PhoneBook {
    private contacts: AddressBook[] = [];
    addContact(contact: AddressBook):string{
        this.contacts.push(contact);
        return "Contact Added";
    }
    // displayAllContact(){

    // }
}
const contactName = ['Ololade','Akinloye'];
const contactPhoneNumber = '07088137547';
const contactAddress = '11, Yakubu Road';
const contactEmail = 'ololade220@gmail.com';
const contactGender = 'Female';
const contactInfo = new PersonalContactInfo(contactName, contactPhoneNumber, contactAddress, contactEmail, contactGender);
const newContactInfo = new PersonalContactInfo(['George','Lola'],'08148109861', 'commercial way', 'mean@gmail.com', 'Male')

const phoneBook = new PhoneBook();
phoneBook.addContact(contactInfo);
phoneBook.addContact(newContactInfo);
console.log(phoneBook);