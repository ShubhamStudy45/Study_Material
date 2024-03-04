//3rd type of Object Creation

// - Object Using Constructor function

function Person(name, age, addrs){
    this.name = name,
    this.age = age,
    this.addrs = addrs
}

// const p1 = new Person('person1', 20, 'addrs1')
// console.log(p1)
// console.log('type of P1 : ', typeof p1)
// const p2 = new Person('person2', 10, 'addrs2')
// console.log(p2)

//Constructor function for mobile with model, company and price

function Mobile(model, company, price ){
    this.model = model,
    this.company = company,
    this.price = price
}

const m1 = new Mobile('model1', 'Compamy1', 34.4)
console.log(m1)
const m2 = new Mobile('model2', 'Compamy2', 22)
console.log(m2)









