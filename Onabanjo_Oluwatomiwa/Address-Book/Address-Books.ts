// Interface for basic contact information
interface Contact {
  name: string;
  phoneNumber: string;
  address: string;
}

// Base class for all contacts
class Contact implements Contact {
  private _name: string;
  private _phoneNumber: string;
  private _address: string;

  constructor(name: string, phoneNumber: string, address: string) {
    this._name = name;
    this._phoneNumber = phoneNumber;
    this._address = address;
  }

  // Getter methods for accessing private information (encapsulation)
  public getName(): string {
    return this._name;
  }

  public getPhoneNumber(): string {
    return this._phoneNumber;
  }

  public getAddress(): string {
    return this._address;
  }

  //It calls the getter methods (getName(), etc.) to retrieve the private information and display it.
  public displayInfo(): void {
    console.log(`Name: ${this.getName()}`);
    console.log(`Phone Number: ${this.getPhoneNumber()}`);
    console.log(`Address: ${this.getAddress()}`);
  }
}

//A class named Friend is declared that inherits from the Contact base class.
class Friend extends Contact {
  private relationship: string; //An additional private member variable named relationship (string) is defined to store the friend's relationship with the contact.

  //A constructor is defined for the Friend class that takes four arguments: name, phoneNumber, address, and relationship.
  constructor(
    name: string,
    phoneNumber: string,
    address: string,
    relationship: string
  ) {
    super(name, phoneNumber, address);
    this.relationship = relationship;
  }

  //The displayInfo() method from the Contact class is overridden in the Friend class using the override keyword.
  public override displayInfo(): void {
    super.displayInfo(); //This method calls the parent class's displayInfo() method using super.displayInfo() to display the inherited contact information.
    console.log(`Relationship: ${this.relationship}`);
  }
}

const contact1: Contact = new Contact(
  "David Liam",
  "0813-204-5978",
  "10 Agege St"
);
const friend1: Friend = new Friend(
  "Alexa Adams",
  "0901-342-6678",
  "32 Peace str",
  "Bestie"
);

contact1.displayInfo();
console.log("---");
friend1.displayInfo(); //This demonstrates polymorphism, where the overridden displayInfo() method in Friend is used when displaying information for a friend