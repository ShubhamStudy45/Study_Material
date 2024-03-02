function substraction(p1,p2){
    console.log('sub = ',p1 - p2)
}

function addition(p1,p2){
    console.log('add = ',p1+p2)
}

function multiplication(p1,p2){
    console.log('multi = ', p1 * p2)
}
function division(p1,p2){
    console.log('Division = ', p1/ p2)
}

function execute(func){
    func(10,20)
    func(20,30)
    func(30,40)
    func(40,50)
    console.log('-------------------')
}

// execute(addition)
// execute(substraction)
// execute(multiplication)
// execute(division)


function execute2(){

    const functions = [ addition, multiplication, substraction, division ]

    for(func of functions){
        func(10,20)
        func(20,30)
        func(30,40)
        func(40,50)
        console.log('-------------------')
    }
}

// execute2()



// 








