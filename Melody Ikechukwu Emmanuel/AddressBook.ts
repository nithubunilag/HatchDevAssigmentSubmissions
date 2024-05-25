// Define a base class for contacts
class Contact {
  protected name: string;
  protected phoneNumber: string;
  protected address: string;
  
  constructor(name: string, phoneNumber: string, address: string) {
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.address = address;
  }
  
  // Getters and setters for encapsulation
  public getName(): string {
    return this.name;
  }
  
  public setName(name: string): void {
    this.name = name;
  }
  
  public getPhoneNumber(): string {
    return this.phoneNumber;
  }
  
  public setPhoneNumber(phoneNumber: string): void {
    this.phoneNumber = phoneNumber;
  }
  
  public getAddress(): string {
    return this.address;
  }
  
  public setAddress(address: string): void {
    this.address = address;
  }
  
  // Display contact information
  public displayInfo(): void {
    console.log(`Name: ${this.name}`);
    console.log(`Phone Number: ${this.phoneNumber}`);
    console.log(`Address: ${this.address}`);
  }
}
// Define a subclass for business contacts
class BusinessContact extends Contact {
    private company: string;
  
    constructor(name: string, phoneNumber: string, address: string, company: string) {
      super(name, phoneNumber, address);
      this.company = company;
    }
  
    // Getter and setter for company
    public getCompany(): string {
      return this.company;
    }
  
    public setCompany(company: string): void {
      this.company = company;
    }
  
    // Override displayInfo method to include company information
    public displayInfo(): void {
      super.displayInfo();
      console.log(`Company: ${this.company}`);
    }
}
  
// Example usage
const personalContact = new Contact("Queen Asherby", "813 984 0745", "16 University St");
const businessContact = new BusinessContact("Peters Gerald", "816 097 2764", "10, Alvan Close", "XYZ Corp");
  
// Display contact information
console.log("Personal Contact:");
personalContact.displayInfo();
console.log("\nBusiness Contact:");
businessContact.displayInfo();

