//collection

//arrays

function function1(){

    const numbers = [10,20,30,40,50]
    console.log(numbers)
    // for (let index = 0; index < numbers.length; index++) {
    //     const element = numbers[index];
    //     console.log(element)
        
    // }
    numbers.forEach(element => {
        console.log(element)
    });
}
//function1()

function function2(){

    //arrays of number
    const numbers = [10,20,30,40,50]

    //traditional for loop

    for(let i = 0; i < numbers.length; i++)
    {
        console.log('array at index = ',numbers[i])
    }
}

// function2()

function function3(){
    const numbers = [10,20,30,40,50,60]

    //for..of loop

    for(const number of numbers){
        console.log('index at =',number)
    }
}
//function3()

function function4(){
    const countries = ['india','japan','au','uk','us','sr']
    
    for(const country of countries){
        console.log(country)
    }
}

function4()




























