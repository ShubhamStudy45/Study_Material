//WRP to get the even number of square in collection

function function1(){
    const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18 ]
    
    // Step 1: Get the even numbers of square
    const evenNum = numbers.filter( n => n % 2 == 0 )
    //Step 2: Calculate the even number of square in step 1
    const squareOfEventNumbers = evenNum.map(n => n ** 2)
    //Step 3: Print the Even number of Square
    console.log("Even number of Square : ",squareOfEventNumbers)

}
// function1()

//Advance Method

function function2(){
    const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18 ]

    const evenNoOfSquare = 
            numbers
            .filter(n => n % 2 == 0)
            .map(n => n ** 2)

    console.log(evenNoOfSquare)

}

function2()






