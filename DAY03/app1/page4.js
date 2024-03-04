function function1(){

    const persons = [
        {name : 'person1', age : '21', addrs : 'addrs1', phone  : '+913773'},
        {name : 'person2', age : '18', addrs : 'addrs2', phone  : '+913773'},
        {name : 'person3', age : '20', addrs : 'addrs4', phone  : '+913773'},
        {name : 'person4', age : '19', addrs : 'addrs5', phone  : '+913773'},
        {name : 'person5', age : '15', addrs : 'addrs6', phone  : '+913773'},
        {name : 'person6', age : '07', addrs : 'addrs7', phone  : '+913773'},
        {name : 'person7', age : '33', addrs : 'addrs8', phone  : '+913773'},
    ]

    //WRP to get the data from persons who can vote

    const person1 = persons.filter(person => person.age >=18 )

    const per2 = person1.map(per =>{
        return({
            name : per.name,
            age : per['age'],
            addrs : per['addrs'],
            phone : per.phone
        })
    })
    console.log('per2',per2)
    console.log('---------')
    for(per of person1){
        console.log(`Name : ${per.name}`)
        console.log(`age : ${per.age}`)
        console.log(`addrs : ${per.addrs}`)
        console.log(`Phone : ${per.phone}`)
        console.log('--------------------')
    }
}

// function1()

function function2(){

    const cars = [
        {model : 'i20', company : 'company1', price : 6.7},
        {model : 'i21', company : 'company2', price : 7.4},
        {model : 'i22', company : 'company3', price : 20},
        {model : 'i23', company : 'company4', price : 27},
        {model : 'i24', company : 'company5', price : 80},
        {model : 'i24', company : 'company6', price : 5},
        {model : 'i25', company : 'company7', price : 10},
    ]

    //arrays of cars having cars model and price
    //find out offordable cars (price <= 10)
    //find out non-offordable car's (price > 10)
}