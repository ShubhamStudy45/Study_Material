function function1(){
    const numbers = [1,2,3,4,5,6,7,8,9,10]
    const squares = []
    console.log("Number of Arrays : ", numbers)
    for(number of numbers){
        squares.push(number **2) 
    }

    console.log("Square of numbers : ", squares)
}

// function1()

//map function
function function2(){

    const numbers = [1,2,3,4,5,6,7,8,9,10]

    function square(n){
        return n ** 2
    }

    const squares = numbers.map(square)
    console.log('Numbers of array: ',numbers)
    console.log('Square of array: ',squares)
}

// function2()


//Arrow function in map

function function3(){
    
    const numbers = [1,2,3,4,5,6,7,8,9,10]

    const cube = numbers.map((n)=>{
        return(n **3 )
    })
    console.log(cube)
}


// function3()


//WRP to convert tempature fahrenheit to celsius
//Celsius (°C) = (Fahrenheit - 32) / 1.8

function function4(){
    //Temp in F
    const tempature = [ 91,92,93,94,95,96,99,98 ]


    //Temp in C
    const celsius = tempature.map((f)=>{
        return((f-32)/1.8)
    })
    console.log('Temp in C: ',celsius)
}

function4()




