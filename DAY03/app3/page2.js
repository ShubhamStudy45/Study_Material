//Synchronous and Asynchronous function

//Synchronous function

const fs = require('fs')
const path = './test.txt'
// console.log(path)
// console.log(fs)
function SynchronousFunc(){
    
    console.log('Started reading files..')

    const data = fs.readFileSync(path)
    console.log('Finished reading.')
    console.log(`Data : ${data}`)

    console.log('started evaluating expression..')

    const ans = 34354544545 * 234252546 * 4534543443 / 4354354543 / 24555
    console.log(`Answer : ${ans}`)
}

// SynchronousFunc()

//Asynchronous function

function Asynchronousfunc(){

    console.log('Started reading files.....')

    const data = fs.readFile(path,(error,data)=>{
        console.log('Finished reading..')
        console.log(`Data : ${data}`)
    })
    console.log('Evaluating expression ....')
    const ans = 34354544545 * 234252546 * 4534543443 / 4354354543 / 24555
    console.log('Finished evaluation....')

    console.log(`Answer : ${ans}`)
}

Asynchronousfunc()


















