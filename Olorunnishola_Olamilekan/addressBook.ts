class Contact {
  name: string
  phoneNumber: string
  address: string
  #countryCode: string

  constructor(name: string, phoneNumber: string, address: string) {
    this.name = name
    this.phoneNumber = phoneNumber
    this.address = address
    this.#countryCode = phoneNumber.slice(0, 3)
  }

  call() {
    console.log(`Calling ${this.phoneNumber}`)
  }

  get country() {
    return this.#countryCode
  }
}

class SOSContact extends Contact {
  constructor(name: string, phoneNumber: string, address: string) {
    super(name, phoneNumber, address)
  }

  activateSOS() {
    console.log('Calling SOS contacts')
  }
}
