class Contact {
    private name: string;
    private phoneNumber:string ;
    private address: string;

    constructor(name: string, phoneNumber: string, address: string){
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.address = address;
    }

    // getName(): string {
    //     return this.name
    // }

    // getphoneNumber(): string {
    //     return this.phoneNumber
    // }

    // getAddress(): string {
    //     return this.address
    // }

    getDetails(){
        return `name: ${this.name}, phoneNumber: ${this.phoneNumber}, address: ${this.address}`
    }

}

class Ife extends Contact {
    constructor(name: string, phoneNumber: string, address: string){
        super(name, phoneNumber, address);
    }
}

class Feranmi extends Contact {
    constructor(name:string, phoneNumber: string, address:string){
        super(name, phoneNumber, address);
    }
}

const Ifes = new Contact('Ife', '123466', 'Unilag');
const Feranmis = new Contact('Feranmi', '123455', 'Unilag');

console.log(Ifes.getDetails());
console.log(Feranmis.getDetails());
