function addition( a, b ){

    console.log(`Addition : ${ a + b }`)
}

function substraction( a, b ){

    console.log(`substraction : ${ a - b }`)
}
function multiply( a, b ){

    console.log(`multiply : ${a * b}`)
}
function division( a, b ){

    console.log(`division : ${a / b}`)
    
}

//We want to export this function in another module(page1.js). for that we need to use module and export concept

// addition(10,30)
// substraction(40,10)
// multiply(20,30)
// division(40,5)

// console.log(module)

//We have to export the function that we need to use in another module or file (page1.js)

module.exports = {
    add : addition,
    sub : substraction,
    multi : multiply,
    div : division,
}

