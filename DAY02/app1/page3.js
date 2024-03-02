function function1(){

    const numbers = [10,20,30,40,50]

    console.log('before')
    console.log(numbers)

    numbers.push(60)
    console.log('after')
    console.log(numbers)
    numbers.push(70)
    console.log(numbers)

    //POP() --> to delete the last index value

    numbers.pop()
    console.log('After deleted')
    console.log(numbers)
    numbers.pop()
    console.log(numbers)

}
//function1()

function function2(){

    const numbers = [10,20,30,40,50]

    console.log(numbers)

    numbers.splice(3,1)
    console.log(numbers)
}

// function2()

function function3(){

    const numbers = [10,20,30,40,50,60]

    console.log(numbers)

    for(let i = 0; i <= numbers.length; i++)
    {
        const number = numbers[i]

        if(number == 40)
        {
            numbers.splice(i,1)
        } 
    }
    console.log(numbers)
}
// function3()

function function4(){
    console.log('inside function4')
}

const myFunction = function4

console.log(myFunction)
console.log('type of function = ',typeof myFunction)
