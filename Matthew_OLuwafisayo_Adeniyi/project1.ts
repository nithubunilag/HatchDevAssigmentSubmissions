
class Contact {
    //This is called PROPERTY DECLARATION (is done inside a class but outside of a constructor is a way to declare class properties and their types)and it is not necessary 
    //But it is a common practice in TypeScript to explicitly declare class properties to improve code readability and maintainability.
    private name: string;
    private phoneNumber: string;
    private address: string;
    
        constructor(name: string, phoneNumber: string, address: string) {
            this.name = name;
            this.phoneNumber = phoneNumber;
            this.address = address;
        }
    
        getName(): string {
            return this.name;
        }
    
        setName(name: string): void {
            this.name = name;
        }
    
        getPhoneNumber(): string {
            return this.phoneNumber;
        }
    
        setPhoneNumber(phoneNumber: string): void {
            this.phoneNumber = phoneNumber;
        }
    
        getAddress(): string {
            return this.address;
        }
    
        setAddress(address: string): void {
            this.address = address;
        }
    
        displayContact(): void {
            console.log(`Name: ${this.name}\nPhone Number: ${this.phoneNumber}\nAddress: ${this.address}`);
        }
    }
    
    class PhoneBook {
        private contacts: Contact[];
    
        constructor() {
            this.contacts = [];
        }
    
        addContact(contact: Contact): void {
            this.contacts.push(contact);
        }
    
        removeContact(name: string): void {
            this.contacts = this.contacts.filter(contact => contact.getName() !== name);
        }
    
        getAllContacts(): Contact[] {
            return this.contacts;
        }
    }
    
    
    const personalContact = new Contact("John Doe", "1234567890", "123 Main St, City");
    personalContact.displayContact();
    
    let phoneBook = new PhoneBook();
    phoneBook.addContact(new Contact("John Doe", "123-456-7890", "123 Main St, Anytown, USA"));
    phoneBook.addContact(new Contact("Jane Smith", "456-789-0123", "456 Elm St, Anytown, USA"));
    phoneBook.removeContact("John Doe");
    console.log(phoneBook.getAllContacts());
    