console.log('welcome to the ecommers application')

// const template = <p2>This is test data</p2>
const template = /*#__PURE__*/_jsx("p2", {
    children: "This is test data"
  });


const root = document.getElementById("app")

ReactDOM.render(template, root)