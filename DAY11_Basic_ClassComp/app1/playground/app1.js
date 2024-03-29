//FirstClass Component Program

/*

const template = (
  <div>
    <h3>Class Component</h3>
  </div>
)

*/
//Step 1 : Create a class and extend it to React.Component

class FirstComponent extends React.Component {
  //Step 2 : Override the render() method inside in class component

  render() {
    //Step 3: it will return the template

    return (
      <div>
        <h3>Class Component</h3>
      </div>
    )
  }
}

//Step 4 : use it as an element tag in ReactDOM.render()
ReactDOM.render(<FirstComponent />, document.getElementById("app"))
