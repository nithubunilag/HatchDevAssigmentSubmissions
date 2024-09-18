abstract class Contact {
    private name: string
    private phoneNumber: string
    private address: string

    constructor(name: string, phoneNumber: string, address: string) {
        this.name = name
        this.phoneNumber = phoneNumber
        this.address = address
    }
    getContacts(){
        console.log(`Name:${this.name} phoneNumber:${this.phoneNumber} address:${this.address}`)
    }
}

class Lawrence extends Contact {

    constructor(name: string, phoneNumber: string, address: string) {
        super(name, phoneNumber, address)
    }

}

class Eniola extends Contact {

    constructor(name: string, phoneNumber: string, address: string) {
        super(name, phoneNumber, address)
    }

}

const lawrence = new Lawrence('Lawrence', '08117678133', 'yaba, lagos')
const eniola = new Lawrence('Eniola', '08023266896', 'ikorodu, lagos')

lawrence.getContacts()
eniola.getContacts()
