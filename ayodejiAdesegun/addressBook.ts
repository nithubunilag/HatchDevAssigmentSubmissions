class Contact {
    private name : string;
    private phoneNumber: number;
    private address: string;
  
    constructor(name:string, phoneNumber:number, address: string){
      this.name = name;
      this.phoneNumber = phoneNumber;
      this.address = address;
    }
  
    getName():string{
      return this.name;
    }
    getAddress():string{
      return this.address;
    }
    getPhoneNumber():number{
      return this.phoneNumber;
    }
  }
  
  class CompanyContact extends Contact{
    private companyEmail: string;
  
    constructor(name: string, phoneNumber: number, address: string, companyEmail: string){
      super(name, phoneNumber, address);
      this.companyEmail = companyEmail;
    }
    getCompanyEmail():string {
      return this.companyEmail;
    }
  }
  
  const personalcontact = new Contact("Ayodeji",9076836965,"14 Drive, Lagos");
  const companycontact = new CompanyContact("INITS", 8072345678, "Onike", "inits@inits.com");
  
  console.log("Personal Contact:");
  console.log("Name:", personalcontact.getName());
  console.log("Phone Number:", personalcontact.getPhoneNumber());
  console.log("Address:", personalcontact.getAddress());
  
  console.log("Company's Contact:");
  console.log("Name:", companycontact.getName());
  console.log("Phone Number:", companycontact.getPhoneNumber());
  console.log("Address:", companycontact.getAddress());
  console.log("Email:", companycontact.getCompanyEmail());