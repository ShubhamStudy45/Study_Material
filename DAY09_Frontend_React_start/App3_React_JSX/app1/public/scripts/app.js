console.log('inside in app.js')
const template = 'this is the template data'
// const template = <h2>this is the template data</h2> --> this will be work using babel 
const root = document.getElementById('app')
ReactDOM.render(template, root)