class Contact {
  protected _name: string;
  protected _phoneNo: string;
  protected _address: string;
  protected _isBlocked: boolean = false;

  constructor(name: string, phoneNo: string, address: string) {
    this._name = name;
    this._phoneNo = phoneNo;
    this._address = address;
  }
  get name() {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  get phoneNo() {
    return this._phoneNo;
  }

  set phoneNo(phoneNumber: string) {
    this._phoneNo = phoneNumber;
  }

  get address() {
    return this._address;
  }
  get isBlocked() {
    return this._isBlocked;
  }

  block() {
    this._isBlocked = true;
  }

  unblock() {
    this._isBlocked = false;
  }

  makeCall(): void {
    console.log("Making call");
  }
}

class BlockedContact extends Contact {
  constructor(name: string, phoneNo: string, address: string) {
    super(name, phoneNo, address);
    this._isBlocked = true;
  }

  // Polymorphism
  makeCall(): void {
    console.log("Cannot make call");
  }
}

function isBlockedContact(contact: unknown): contact is BlockedContact {
  return contact instanceof BlockedContact;
}
type IRelationship =
  | "father"
  | "mother"
  | "sister"
  | "brother"
  | "uncle"
  | "aunt";

class FamilyContact extends Contact {
  _relationship: IRelationship;

  constructor(
    name: string,
    phoneNo: string,
    address: string,
    relationship: IRelationship
  ) {
    super(name, phoneNo, address);
    this._relationship = relationship;
  }
}

class AddressBook {
  private contacts: Contact[] | FamilyContact[];
  private blockedContacts: BlockedContact[] | Contact[];

  constructor() {
    this.contacts = [];
    this.blockedContacts = [];
  }

  addContact(contact: Contact) {
    if (contact.isBlocked) return console.log("Cannot add a blocked user");
    this.contacts = [...this.contacts, contact];
  }

  addBlockedContact(contact: Contact | BlockedContact) {
    if (!contact.isBlocked) return console.log("This contact is not blocked!");
    if (isBlockedContact(contact))
      console.log("Na werey, na why you block am!");
    this.blockedContacts = [...this.blockedContacts, contact];
  }

  getContacts() {
    return this.contacts;
  }

  getBlockedContacts() {
    return this.blockedContacts;
  }
}

const addressBook = new AddressBook();
const kingsley = new Contact("Kingsley", "09035810428", "32A seriki abass");
kingsley.name = "Kingsley Ihemelandu";
addressBook.addContact(kingsley);
const fool = new BlockedContact("Fool", "09035810428", "32A seriki abass");
addressBook.addBlockedContact(fool);
const idiot = new Contact("Idiot", "09035810428", "32A seriki abass");
idiot.block();
addressBook.addBlockedContact(idiot);

console.log(addressBook);
