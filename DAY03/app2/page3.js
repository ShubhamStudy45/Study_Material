//4th type : Destructuring of an object

//insert into person (name, age, addrs, phone) values (...)

function function1(){

    const person = {
        name : 'person1',
        age : 12,
        addrs : 'addrs1',
        phone : '+91339393'
    }

    const query = `insert into person 
            (name, age, addrs, phone) 
        values
            ('${person.name}',${person.age},'${person.addrs}','${person.phone}')`
    
    console.log(query)
}
// function1()

//Object Destructuring

function function2(){

    const person = {
        name : 'person1',
        age : 12,
        addrs : 'addrs1',
        phone : '+91339393'
    }

    const {name, age, addrs, phone } = person

    console.log(`Name : ${name}`)
    console.log(`Age : ${age}`)
    console.log(`Addrs : ${addrs}`)
    console.log(`Phone : ${phone}`)

}
// function2()

function function3(){

    const person = {
        name : 'person1',
        age : 12,
        addrs : 'addrs1',
        phone : '+91339393'
    }

    //Object destructuring
    const {name, addrs, age, phone } = person

    const query = `insert into person
            ( name, age, addrs, phone )
        values
            ('${name}',${age},'${addrs}','${phone}')`
    
    console.log(query)
}
function3()