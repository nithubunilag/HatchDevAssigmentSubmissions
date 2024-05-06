class Contact {
  private name: string;
  private phoneNumber: string;
  private address: string;

  constructor(name: string, phoneNumber: string, address: string) {
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.address = address;
  }

  display(): void {
    console.log('Name:', this.name);
    console.log('Phone Number:', this.phoneNumber);
    console.log('Address:', this.address);
  }
}

class Phonebook extends Contact {
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

  display(): void {
    super.display();
    console.log('Company:', this.company);
  }
}

// Creating instances of Contact and phonebook
const contact1 = new Contact('Kalu Kalu', '08064772024', '123 Main St, City');
const phonebook1 = new Phonebook(
  'Jane Smith',
  '0912345678',
  '456 Oak St, Town',
  'Ajax'
);

// Displaying contacts
console.log('Contact:');
contact1.display();

console.log('\nPhonebook:');
phonebook1.display();
