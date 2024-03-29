//Class component

//Basic class
class Person {
  constructor(name, address, email) {
    console.log("inside in constructor")
    this.name = name
    this.address = address
    this.email = email
  }
  printInfo() {
    console.log(`Name : ${this.name}`)
    console.log(`Address : ${this.address}`)
    console.log(`Email : ${this.email}`)
  }
}

const p = new Person("person1", "amravati", "abc@g.com")
p.printInfo()
