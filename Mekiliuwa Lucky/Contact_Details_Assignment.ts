class Contact {
    private name: string;
    private phoneNumber:string ;
    private address: string;

    constructor(name: string, phoneNumber: string, address: string){
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.address = address;
    }

    getDetails(){
        return `name: ${this.name}, phoneNumber: ${this.phoneNumber}, address: ${this.address}`
    }

}


 class Kenzie extends Contact { 
    constructor(name: string, phoneNumber: string, address: string){
        super(name, phoneNumber, address);
    }
    }


class Rezia extends Contact {
    constructor(name:string, phoneNumber: string, address:string){
        super(name, phoneNumber, address);
    }
}

const kenzieContact = new Kenzie('Richardson', '1331', 'OAU');
const reziaContact = new Rezia('Donald', '2008', 'Uniben');

console.log(kenzieContact.getDetails());
console.log(reziaContact.getDetails());