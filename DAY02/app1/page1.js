function myfunction(){
    console.log('inside myfunction')
}

//myfunction()

function myfunction1(p1){
    const num = p1
    console.log('num = ',num)
    console.log('type of num = ', typeof p1)
}

//myfunction1(10)

function myfunction2(p1,p2){
    const num = p1;
    const num2 = p2

    console.log('p1 = ',num)
    console.log('p2 = ',num2)
    const add = num + num2
    console.log('add = ',add)
}

//myfunction2(10,'20')

function myfunction4(p1,p2){

    console.log('p1 = ',p1)
    console.log('type of p1 = ',typeof p1)
    console.log('p2 = ',p2)
    console.log('type of p2 = ',typeof p2)

}

//myfunction4(10,{name:'shubham',addrs:'ad'})

myfunction4('shubham',true)





