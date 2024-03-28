console.log('welcome to ecommerce application')

const template = (
    <div>
        <h1>Person</h1>
        <h3>Name : shubham</h3>
        <h3>lastname : sable</h3>
        <h3>email : sable@gmail.com</h3>
        <h3>address : amravati</h3>
    </div>
)

const root = document.getElementById("app")

ReactDOM.render(template, root)