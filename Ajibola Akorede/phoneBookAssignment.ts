//  Class representing a Contact
class Contact {
    private name: string;
    private phoneNumber: string;
    private address: string;
  
    constructor(name: string, phoneNumber: string, address: string) {
      this.name = name;
      this.phoneNumber = phoneNumber;
      this.address = address;
    }
  
    // Getter methods for Contact Class
    getName(): string {
      return this.name;
    }
  
    getPhoneNumber(): string {
      return this.phoneNumber;
    }
  
    getAddress(): string {
      return this.address;
    }
  }
  
  // I had to create a BusinessContact that will inherit properties from the Class Contact 
  class BusinessContact extends Contact {
    private companyName: string;
  
    constructor(name: string, phoneNumber: string, address: string, companyName: string) {
   super(name, phoneNumber, address);
      this.companyName = companyName;
    }
  
    // Getter method specific to business contacts
    getCompanyName(): string {
      return this.companyName;
    }
  }
  

  
  
  const personalContact = new Contact("Akorede", "+2348026587178", "King Jaja Hall");
  const businessContact = new BusinessContact("Prof Ridwan", "+2347012246345", "VC's Lodge", "University Of Lagos");
  
  console.log("Personal Contact:");
  console.log("Name:", personalContact.getName());
  console.log("Phone Number:", personalContact.getPhoneNumber());
  console.log("Address:", personalContact.getAddress());
  
  console.log("\nBusiness Contact:");
  console.log("Name:", businessContact.getName());
  console.log("Phone Number:", businessContact.getPhoneNumber());
  console.log("Address:", businessContact.getAddress());
  console.log("Company Name:", businessContact.getCompanyName());


  //Look up Abstract, Interface, Definition 
