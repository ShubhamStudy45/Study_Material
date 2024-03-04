//Revision.
//Map function
function function1(){
    const numbers = [1,2,3,4,5,6,7,8,9]

    const squares = numbers.map( n=> n ** 2)

    console.log('Arrays of square : ', squares)
}
// function1()


//Filter function
function function2(){
    const numbers = [1,2,3,4,5,6,7,8,9]
    
    const evenNos = numbers.filter( n => n%2 == 0)
    console.log("Array of even no : ", evenNos)
}

// function2()

//For..each loop

function function3(){
    const numbers = [1,2,3,4,5,6,7,8,9]
    
    numbers.forEach(n=>{
        console.log(n)
    })
}
function3()