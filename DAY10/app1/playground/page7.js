console.log("inside in page7")
const products = [
  { id: 1, description: "description 1", price: 100 },
  { id: 2, title: "product 2", description: "description 2" },
  { id: 3, title: "product 3", description: "description 3", price: 300 },
  { id: 4, description: "description 4", price: 400 },
  { id: 5, title: "product 5", price: 500 },
  { id: 6, title: "product 6", description: "description 6", price: 600 },
  { id: 7, title: "product 7", price: 400 },
]

const template = (
  <div>
    <h2>Page7</h2>
    {products.map((product) => {
      return (
        <div>
          <div>
            <strong>Id : </strong>
            {product.id}
          </div>
          {product.title ? (
            <div>
              <strong>Title : </strong>
              {product.title}{" "}
            </div>
          ) : (
            <div>
              <strong> {"--NA--"} </strong>
            </div>
          )}
          {product.description && (
            <div>
              <strong>Description : </strong>
              {product.description}
            </div>
          )}
          {product.price && (
            <div>
              <strong>Price : </strong>
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
