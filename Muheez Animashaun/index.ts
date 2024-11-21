class Contact{
    name: string
    phoneNumber: string
    address: string
    constructor(name: string, phoneNumber: string, address: string){
        this.name = name
        this.phoneNumber = phoneNumber
        this.address = address
    }
}


class addressBook extends Contact{
}

let new_addressBook = new addressBook("muheez", "08082823686", "biobakuHall")
console.log(new_addressBook);




