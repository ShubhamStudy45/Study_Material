//Rest operator

function function1(){

    const person = {
        name : 'person1',
        age : 23,
    }
    const p1 = {
        name : person.name,
        age : person.age,
        addrs : 'Addrs1',
        phone : '+91883773'
    }

    console.log('person : ',person)
    console.log('person1 : ',p1)

    
}

// function1()

function function2(){
    const person = {
        name : 'person1',
        age : 23,
    }

    const person1 = {
        ...person,
        addrs : 'addrs1',
        phone : '+9173738',
        email : 'abc@gmail.com'
    }
    console.log('Person : ',person)
    console.log('Person1 : ',person1)
}

// function2()

function function3(){

     //destructuring :
     const { model, company, price } = {
        model : 'nokia',
        company :'INDIA',
        price : 23
    }

    console.log(`Model : ${model}`)
    console.log(`company : ${company}`)
    console.log(`Price : ${price}`)
}

function3()