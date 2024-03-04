//WRP to find the even numbers in array

function function1(){
    const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18 ]
    
    const evenNumbers =[]

    for( number of numbers){
        if( (number % 2) == 0){
            evenNumbers.push(number)
        }
    }
    console.log(evenNumbers)
}
// function1()

//With the arrow & filter function

function function2(){
    const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18 ]
    
    const evenNumbers = numbers.filter( n => n % 2 == 0 )

    console.log(evenNumbers)
}

// function2()

//WRP for odd numbers in collections
function function3(){
        const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18 ]
        
        const oddNumbers = numbers.filter(n => n % 2 != 0 )
        console.log(oddNumbers)
}

function3()










