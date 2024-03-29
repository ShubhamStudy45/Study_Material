//Inheritance
class Person {
  constructor(name, age, address) {
    console.log("inside in Person constructor")
    this.name = name
    this.age = age
    this.address = address
  }
  printInfo() {
    console.log(`Name : ${this.name}`)
    console.log(`Age : ${this.age}`)
    console.log(`Address : ${this.address}`)
  }
}

class Student extends Person {
  constructor(rollno, name, age, address) {
    super(name, age, address)
    this.rollno = rollno
  }
  printInfo() {
    super.printInfo()
    console.log(`Roll No : ${this.rollno}`)
  }
}

// const s1 = new Person("Person1", 23, "amravati")

// s1.printInfo()

const student1 = new Student(23, "person1", 45, "Amravati")
student1.printInfo()
