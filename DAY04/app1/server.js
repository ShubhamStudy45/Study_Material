//revision of DAY03

const http = require('http')
function responsFunc(request){

    console.log(`Method = ${request.method}`)
    console.log(`Method = ${request.url}`)
}
const server = http.createServer((request,respons)=>{
    // console.log(`Method = ${request.method}`)
    // console.log(`Method = ${request.url}`)
    // console.log('-------------------')

    if(request.url == '/product'){
        if(request.method == 'GET'){
            responsFunc(request)
            console.log('select * from product ....')
            console.log('-------------------')

        }else if(request.method == 'POST'){
            responsFunc(request)
            console.log('insert into product ..')
            console.log('-------------------')

        }else if(request.method == 'PUT'){
            responsFunc(request)
            console.log('update product ...')
            console.log('-------------------')

        }else if(request.method == 'DELETE'){
            responsFunc(request)
            console.log('Delete from product ...')
            console.log('-------------------')

        }
    }else if(request.url == '/user'){
        if(request.method == 'GET'){
            responsFunc(request)
            console.log('select * from  user....')
            console.log('-------------------')

        }else if(request.method == 'POST'){
            responsFunc(request)
            console.log('insert into user ..')
            console.log('-------------------')

        }else if(request.method == 'PUT'){
            responsFunc(request)
            console.log('update  user...')
            console.log('-------------------')

        }else if(request.method == 'DELETE'){
            responsFunc(request)
            console.log('Delete from  user...')
            console.log('-------------------')

        }
    }
    respons.end('response from server')
})
server.listen(3000,'0.0.0.0',()=>{
    console.log('server started on port 3000')
})