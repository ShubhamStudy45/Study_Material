function function1(){

    const persons = [
        {name : 'person1', age : '23', addrs : 'addrs1', phone  : '+913773'},
        {name : 'person2', age : '24', addrs : 'addrs2', phone  : '+913773'},
        {name : 'person3', age : '25', addrs : 'addrs4', phone  : '+913773'},
        {name : 'person4', age : '26', addrs : 'addrs5', phone  : '+913773'},
        {name : 'person5', age : '27', addrs : 'addrs6', phone  : '+913773'},
        {name : 'person6', age : '28', addrs : 'addrs7', phone  : '+913773'},
        {name : 'person7', age : '29', addrs : 'addrs8', phone  : '+913773'},
    ]

    //select name, age, addrs from persons
    const persons1 = []

    // console.log(persons)
    // console.log('type of persons : ',typeof persons)
    for( person of persons){
        persons1.push({
            name : person.name,
            age : person['age'],
            addrs : person.addrs,
        })
    }

    console.log('Person1 : ',persons1)

}

// function1()

function function2(){

    const persons = [
        {name : 'person1', age : '23', addrs : 'addrs1', phone  : '+913773'},
        {name : 'person2', age : '24', addrs : 'addrs2', phone  : '+913773'},
        {name : 'person3', age : '25', addrs : 'addrs4', phone  : '+913773'},
        {name : 'person4', age : '26', addrs : 'addrs5', phone  : '+913773'},
        {name : 'person5', age : '27', addrs : 'addrs6', phone  : '+913773'},
        {name : 'person6', age : '28', addrs : 'addrs7', phone  : '+913773'},
        {name : 'person7', age : '29', addrs : 'addrs8', phone  : '+913773'},
    ]
    const person1 = []

    persons.map( (person)=>{
        person1.push({
            name : person.name,
            age : person['age'],
            phone : person['phone']
        })
    })

    console.log('Person1 : ', person1)
    console.log('----------------------')

    const person2 = persons.map(person =>{
        return{
            name : person.name,
            age : person['age'],
            phone : person['phone']
        }
    })
    console.log('person2 : ',person2)

    for(person of persons){
        console.log(`Name : ${person.name}`)
        console.log(`age : ${person['age']}`)
        console.log(`phone : ${person['phone']}`)
        console.log('------------------------')
    }
  
}
// function2()

function function3(){

    const persons = [
        {name : 'person1', age : '23', addrs : 'addrs1', phone  : '+913773'},
        {name : 'person2', age : '24', addrs : 'addrs2', phone  : '+913773'},
        {name : 'person3', age : '25', addrs : 'addrs4', phone  : '+913773'},
        {name : 'person4', age : '26', addrs : 'addrs5', phone  : '+913773'},
        {name : 'person5', age : '27', addrs : 'addrs6', phone  : '+913773'},
        {name : 'person6', age : '28', addrs : 'addrs7', phone  : '+913773'},
        {name : 'person7', age : '29', addrs : 'addrs8', phone  : '+913773'},
    ]
    //get only person1 object data
    const person = persons[0]
    console.log(`Name : ${person.name}`)
    console.log(`age : ${person.age}`)
    console.log(`addrs : ${person.addrs}`)
    console.log(`phone : ${person.phone}`)
 
}
function3()
