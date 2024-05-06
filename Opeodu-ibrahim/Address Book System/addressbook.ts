class Contact {
  private name: string;
  private phoneNumber: string;
  private address: string;

  constructor(name: string, phoneNumber: string, address: string) {
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.address = address;
  }

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

class BusinessContact extends Contact {
  private company: string;

  constructor(
    name: string,
    phoneNumber: string,
    address: string,
    company: string
  ) {
    super(name, phoneNumber, address);
    this.company = company;
  }

  getCompany(): string {
    return this.company;
  }
}

// Usage example
const contact1 = new Contact("Opei sd", "0901234567", "888 Akoka st");
console.log("Name: ", contact1.getName()); // Output: Opei sd
console.log("Phone Number: ", contact1.getPhoneNumber()); // Output: 0901234567
console.log("Address: ", contact1.getAddress()); // Output: 888 Akoka St

console.log("=====================================");

const contact2 = new BusinessContact(
  "Cole Palmer",
  "9876543210",
  "456 Hogwarts St",
  "CNN Company"
);
console.log("Name: ", contact2.getName()); // Output: Cole Palmer
console.log("Phone Number: ", contact2.getPhoneNumber()); // Output: 9876543210
console.log("Address: ", contact2.getAddress()); // Output: 456 Hogwarts St
console.log(contact2.getCompany()); // Output: CNN Company
