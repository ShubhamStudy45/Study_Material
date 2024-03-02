//function 

//empty function or function with empty body
function emptyFunction(){}

//parameterless function

function function1()
{
    console.log('inside function1')
}
//function call
function1()

//parameterized function

function function2(p1){
    console.log('inside function2')
    const num = p1
    console.log('pi = ',num)    
    console.log('type of pi = ',typeof num)
}

function2(20)

function function3(num, fname){
    console.log('inside function3')
    const fnum = num
    console.log('num = ',fnum , 'type of num = ',typeof fnum)
    const pname = fname
    console.log(pname)
    console.log('pname = ',pname)
    console.log('type of pname = ',typeof pname)
}

function3(34.44,'shubham')





