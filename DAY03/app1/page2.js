//Object 

//Object creation in JS
// there are 3 ways to create Object in JS.

/**
 * - Object literal (JSON)
 * - Using Object root function
 * - Using Contructor function
 */

// * - Object literal (JSON)

function function1(){
    //initialization of object literals  :
    const p1 = {
        name : "person1",
        addrs : "Addrs1",
        phone : "+91994884"
    }
    console.log("type of p1 : ", typeof p1)
    console.log("Person p1 : ", p1)
    
}

// function1()

function function2(){
   //Arrays of Person in Object
   const Persons = [
    {name : "person1", addrs : "addrs1", phone : "Addrs1"},
    {name : "person2", addrs : "addrs2", phone : "Addrs2"},
    {name : "person3", addrs : "addrs3", phone : "Addrs3"},
    {name : "person4", addrs : "addrs4", phone : "Addrs4"},
    {name : "person5", addrs : "addrs5", phone : "Addrs5"},
    {name : "person6", addrs : "addrs6", phone : "Addrs6"},
   ]

   for(person of Persons){
    console.log(person)
   }

}
// function2()

function function3(){

    const num = 100
    //interpolation
    console.log(`num = ${num}`)

    const person = {
        name : "person1",
        addrs : "addrs1",
        phone : "+9184847"
    }
    
    console.log(`Name : ${person.name}`)
    console.log(`Addrss : ${person.addrs}`)
    console.log(`Phone : ${person.phone}`)
   
}

// function3()

function function4(){
    //Arrays of Person in Object
    const Persons = [
     {name : "person1", addrs : "addrs1", phone : "Addrs1"},
     {name : "person2", addrs : "addrs2", phone : "Addrs2"},
     {name : "person3", addrs : "addrs3", phone : "Addrs3"},
     {name : "person4", addrs : "addrs4", phone : "Addrs4"},
     {name : "person5", addrs : "addrs5", phone : "Addrs5"},
     {name : "person6", addrs : "addrs6", phone : "Addrs6"},
    ]

    for(person of Persons){
        console.log(`Name : ${person.name}`)
        console.log(`Addrs : ${person.addrs}`)
        console.log(`Phone : ${person.phone}`)
        console.log('-------------')
    }

}
function4()
