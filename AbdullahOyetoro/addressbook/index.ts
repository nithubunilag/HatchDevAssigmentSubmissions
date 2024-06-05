class Contact{
  protected name :string;
  protected phoneNumber :string;
  protected address: string;
  protected email: string= "";

  constructor (name:string, phoneNumber:string, email:string, address:string){
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.address = address; 
  }
  set editName(newName:string){
    this.name = newName
  }
  set editEmail(newEmail:string){
    this.email = newEmail
  }
  set editphoneNumber(newPhonenumber:string){
    this.phoneNumber = newPhonenumber
  }
  get displayName():string{
    return this.name
  }
  get displayEmail():string{
    return this.email
  }
  get displayPhoneNumber():string{
    return this.phoneNumber
  } 
}

class PhoneBook {
  private contacts:Contact[]= [];
  
  addContact(contact:Contact){
    this.contacts.push(contact)
  }
  public createContact(){
    //this creates a contact and also adds it to the pj=honebook automatically
    console.log("Here we manually create contacts from the users input")
    const contactName= prompt("Enter the Contact's name: ")!;
    const contactPhoneNumber = prompt("Phone number: ")!;
    const contactAddress = prompt("Address: ")!;
    const contactEmail = prompt("Email address:")!;
    const newContact = new Contact(contactName,contactPhoneNumber,contactEmail,contactAddress)
    
    this.addContact(newContact)
    console.log(`New contact ${contactName} : ${contactPhoneNumber} created`)
  } 
  get displayContactList(){
    return this.contacts
  }
  public removeContacts(contact:Contact){
    const index = this.contacts.indexOf(contact)
    if (index != -1){
      console.log(`Deleting the ${this.contacts.splice(index,1)}`)
      //the splice()method takes the index of the element in an array to be deleted
      //and the number of elements to be deleted starting the index one
    }
  }
}

const phonelist = new PhoneBook()
const contact1 = phonelist.createContact()
const contact2 = phonelist.createContact()
console.log(phonelist.displayContactList)
const myContact = new Contact('Abdullah',"09066636353","oyehabdullhigh@gmail.com","air")
phonelist.addContact(myContact) 


