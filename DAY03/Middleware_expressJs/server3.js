//HTTP Method and its request 
/*

//load the http module
const http = require('http')
//create a server instance 
function responseFunc(request){

        console.log('request is received with ')
        console.log(`Method = ${request.method}`)
        console.log(`Method = ${request.url}`)
        console.log('------------------------------------')
}
const server = http.createServer((request, response)=>{

    if(request.method == 'GET'){
        console.log('Select * from ....')
        

    }else if(request.method == 'POST'){
        console.log('insert into ...')
        responseFunc(request)
    }else if(request.method == 'PUT'){
        console.log('update ...')
        responseFunc(request)
    }else if(request.method == 'DELETE'){
        console.log('Delete from ..')
        responseFunc(request)
    }
    //send response to the client
    response.end()
})

server.listen(3000,'0.0.0.0',()=>{
    console.log('server started on port no 3000')
})

*/


const http = require('http')
function responseFunc(request){
    console.log('request received with ')
    console.log(`Method : ${request.method}`)
    console.log(`URL : ${request.url}`)
}
const server = http.createServer((request,response)=>{
    
    if(request.url == '/product'){

        if(request.method == 'GET')
        {
            responseFunc(request)
            console.log('select * from product ...')
            console.log('------------------------------')

        }else if(request.method == 'POST'){
            responseFunc(request)
            console.log('insert into product..')
            console.log('------------------------------')
        }else if(request.method == 'PUT'){
            responseFunc(request)
            console.log('update product...')
            console.log('------------------------------')

        }else if (request.method == 'DELETE'){
            responseFunc(request)
            console.log('delete from product ...')
            console.log('------------------------------')
        }

    }else if(request.url == '/user'){
        if(request.method == 'GET')
        {
            responseFunc(request)
            console.log('select * from user ...')
            console.log('------------------------------')

        }else if(request.method == 'POST'){
            responseFunc(request)
            console.log('insert into user..')
            console.log('------------------------------')
        }else if(request.method == 'PUT'){
            responseFunc(request)
            console.log('update user...')
            console.log('------------------------------')

        }else if (request.method == 'DELETE'){
            responseFunc(request)
            console.log('delete from user...')
            console.log('------------------------------')
        }

    }
    
    response.end()
})

server.listen(3000,'0.0.0.0',()=>{
    console.log('server started on port 3000')
})

