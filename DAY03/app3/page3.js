//Synchronous and Asynchronous function with try..catch block

const fs = require('fs')
//We have given wrong path here for to chech the diff in synch & asynch function
const path = './test1.txt' 

function synchronousFunc(){

    const data = fs.readFileSync(path)
    console.log(`Data = ${data}`)
}

// synchronousFunc()

//Using try catch block

function synchronousFunc1(){
    
    try{
        const data = fs.readFileSync(path)
        console.log(`Data : ${data}`)
    }catch(ex){
        console.log(`Exception : ${ex}`)
    }finally{
        console.log('finally block called..')
    }
}

// synchronousFunc1()

//Asynchronous function

function Asynchronous(){

    fs.readFile(path, (error,data)=>{

        console.log(`data : ${data}`)
        console.log(`exception : ${error}`)
    })
}


Asynchronous()

//3:47:32





