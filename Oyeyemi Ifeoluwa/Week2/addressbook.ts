class Person {
    name: string
    phonenumber: string
    address: string
    email: string
    constructor( name: string, phonenumber: string, address: string, email:string) {
        this.name = name
        this.phonenumber = phonenumber
        this.address = address
        this.email = email
    }
}
class Contacts extends Person {
    constructor(name: string, phoneNumber: string, address: string, email: string) {
    super(name, phoneNumber, address, email); 
   }    
   
   displayContacts(){
    console.log("Name:", this.name);
    console.log("Phone Number:", this.phonenumber);
    console.log("Address:", this.address);
    console.log("Email:", this.email);
   }
}

const fiope = new Contacts("Fiope", "08067543455", "Emerald Hostel", "fiope@gmail.com");
const ope = new Contacts("ope", "08064543455", "Emerald Hostel", "ope@gmail.com");

console.log("Fiope's Contact Details:");
fiope.displayContacts();

console.log("Ope's Contact Details:");
ope.displayContacts();









// class newName extends Person{
//     name: string
// }
// class newNumber extends Person{
//     phonenumber: string
// }
// class newAddress extends Person{
//     address: string
// }
// class newEmail extends Person{
//     email: string
// }
