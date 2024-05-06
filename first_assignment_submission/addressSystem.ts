
class Contact {
 
  name: string;
  number: string;

  constructor(name: string, number: string) {
    this.name = name;
    this.number = number;
  }
}


class Address extends Contact {
   address: string;

  constructor(name: string, number: string, address: string) {
    super(name, number);
    this.address = address;
  }
}


class AddressBooks {
 
  private addresses: Address[];
  constructor() {
    this.addresses = [];
  }

  addAddress(address: Address): void {
    this.addresses.push(address);
    console.log("Address added successfully.");
  }

  deleteAddressByName(name: string): void {
    this.addresses = this.addresses.filter((address) => address.name !== name);
    console.log(`Address with name '${name}' deleted successfully.`);
  }

  
  searchAddressByName(name: string): Address | undefined {
    return this.addresses.find((address) => address.name === name);
  }


  getAddressCount(): number {
    return this.addresses.length;
  }
}


// HOW TO USE

const addressBook = new AddressBooks();

const vic = new Address("Vicky", "09093209", "VI");
addressBook.addAddress(vic);

const james = new Address("Jamie", "900989344", "Ikeja");
addressBook.addAddress(james);

const obeed = new Address("Obed", "893973478", "Unilag");
addressBook.addAddress(obeed);


const searchedAddress = addressBook.searchAddressByName("Vicky");
console.log(searchedAddress ? `Found address: ${searchedAddress.name}, ${searchedAddress.number}, ${searchedAddress.address}` : "Address not found");


addressBook.deleteAddressByName("Jamie");

console.log(`Number of addresses: ${addressBook.getAddressCount()}`);