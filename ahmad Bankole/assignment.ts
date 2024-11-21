class Contact {
    phone_number: string
    name:string
    address:string
    constructor (name:string,phone_number:string,address:string){
        this.name = name
        this.phone_number = phone_number
        this.address = address
    }
    
}
class Addressbook extends Contact{

}
let new_homebook1 = new Addressbook("banks","07026101438","unilag")
let new_homebook2 = new Addressbook("ola","07026101438","unilag")
let new_homebook3 = new Addressbook("dapo","07026101438","unilag")

let result = [new_homebook1, new_homebook2, new_homebook3]
let s = result.map((res) => {
    console.log(res)
})
console.log(s);