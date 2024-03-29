// const products = [
//   { id: 1, title: "product 1", description: "description 1", price: 100 },
//   { id: 2, title: "product 2", description: "description 2", price: 200 },
//   { id: 3, title: "product 3", description: "description 3", price: 300 },
//   { id: 4, title: "product 4", description: "description 4", price: 400 },
// ]

const products = [
  { id: 1, description: "description 1", price: 100 },
  { id: 2, title: "product 2", description: "description 2" },
  { id: 3, title: "product 3", description: "description 3", price: 300 },
  { id: 4, title: "product 4", price: 400 },
]
/*
const template = (
  <div>
    <h2>Page6</h2>
    <div>
      {products.map((product) => {
        return (
          <div>
            <div>
              <strong>id : </strong>
              {product.id}
            </div>
            <div>
              <strong>title : </strong>
              {product["title"]}
            </div>
            <div>
              <strong>description : </strong>
              {product["description"]}
            </div>
            <div>
              <strong>price : </strong>
              {product.price}
            </div>
            <hr />
          </div>
        )
      })}
    </div>
  </div>
)
*/
const template = (
  <div>
    <h2>Page6</h2>
    {products.map((product) => {
      return (
        <div>
          {/* Conditional Compilation using AND(&&) Operator*/}
          {product.id && (
            <div>
              <strong>id : </strong>
              {product.id}
            </div>
          )}
          {product.title && (
            <div>
              <strong>title : </strong>
              {product["title"]}
            </div>
          )}
          {product.description && (
            <div>
              <strong>description : </strong>
              {product["description"]}
            </div>
          )}
          {product.price && (
            <div>
              <strong>price : </strong>
              {product.price}
            </div>
          )}
          <hr />
        </div>
      )
    })}
  </div>
)
const root = document.getElementById("app")
ReactDOM.render(template, root)
//50:10
