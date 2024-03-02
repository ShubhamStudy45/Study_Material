function function1(){
    console.log('inside function1')
}

function execute(param){
    console.log('inside execute')
    console.log('param = ',param)
    console.log('type of param = ',typeof param)

    param()
}

// execute(10)

const myfunction = function1
execute(myfunction)

