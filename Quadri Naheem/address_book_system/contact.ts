/**
 * this is the base file for AddressBook System
 * It contains the Contact interface, AbsractContact and the contact classes
 * that extend the abstract class
 */


/**
 * the interface that will be extends by contact classes
 * contains the common methods
 */
export interface Contact {
    printContacts(): void
}

/**
 * contains the implementation of common methods
 */
export abstract class AbstractContact implements Contact{
    private _id: number;

    constructor( private _name: string, private _phone: string, private _address: string){
        this._id = Date.now();
    }

    get name(): string{
        return this._name;
    }
    
    set name(val:string){
        this._name = val;
    }

    get phone(): string{
        return this._phone;
    }
    
    set phone(val:string){
        this._phone = val;
    }

    get address(): string{
        return this._address;
    }
    
    set address(val:string){
        this._address = val;
    }

    abstract printContacts(): void;
}

//A contact class for family members
export class FamilyContact extends AbstractContact {

    private _birthday: Date;
    private _relationship: string;
    constructor(name: string, phone: string, address: string, birthday: Date, relationship: string) {
        super(name, phone, address)
        this._birthday = birthday;
        this._relationship = relationship
    }

    get relationship(): string{
        return this._relationship;
    }
    
    set relationship(val:string){
        this._relationship = val;
    }

    get birthday(): Date{
        return this._birthday;
    }
    
    set birthday(val:Date){
        this._birthday = val;
    }

    printContacts(): void {
        console.log("Business Contact Details:",
        `Name: ${this.name}`,
        `Phone: ${this.phone}`,
        `Address: ${this.address}`,
        `Company Name: ${this.birthday}`,
        `Job Title: ${this.relationship}`,
        `\n`
        )
    }

}

//A contact class for businesses
export class BusinessContact extends AbstractContact {
    private _companyName: string;
    private _jobTitle: string;
    constructor(name: string, phone: string, address: string, companyName: string, jobTitle: string) {
        super(name, phone, address)
        this._companyName = companyName;
        this._jobTitle = jobTitle
    }

    get companyName(): string{
        return this._companyName;
    }
    
    set companyName(val:string){
        this._companyName = val;
    }

    get jobTitle(): string{
        return this._jobTitle;
    }
    
    set jobTitle(val:string){
        this._jobTitle = val;
    }

    printContacts() {
        console.log("Business Contact Details:",
        `Name: ${this.name}`,
        `Phone: ${this.phone}`,
        `Address: ${this.address}`,
        `Company Name: ${this.companyName}`,
        `Job Title: ${this.jobTitle}`,
        `\n`
        )
    }

}
