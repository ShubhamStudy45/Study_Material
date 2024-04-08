import Header from "../components/Header"
import { useSelector, useDispatch } from "react-redux"
import { addToCart, removeFromCart } from "../actions/ProductAction"
const products = [
  { id: 1, title: "title 1", description: "description 1", price: 100 },
  { id: 2, title: "title 2", description: "description 2", price: 200 },
  { id: 3, title: "title 3", description: "description 3", price: 300 },
  { id: 4, title: "title 4", description: "description 4", price: 400 },
  { id: 5, title: "title 5", description: "description 5", price: 500 },
  { id: 6, title: "title 6", description: "description 6", price: 600 },
]
const ProductScren = () => {
  const ProductItems = useSelector((state) => state.productsList)
  console.log("products : ", ProductItems)
  const dispatch = useDispatch()
  const onAddtoCart = (ProductItem) => {
    dispatch(addToCart(ProductItem))
    // console.log(ProductItem)
  }
  const onRemoveFromCart = (ProductItem) => {
    // console.log("Product removed from cart", ProductItem)
    dispatch(removeFromCart(ProductItem))
  }

  return (
    <div>
      <Header title="Product" />
      <div>
        {products.length > 0 && (
          <div className="row">
            {products.map((product) => {
              return (
                <div className="col-md-4 products">
                  <div className="title">
                    <strong>Title : </strong>
                    {product.title}
                  </div>
                  <div className="description">
                    <strong>Description : </strong>
                    {product.description}
                  </div>
                  <div className="price">
                    <strong>Price : </strong>
                    {product.price}
                  </div>
                  <div className="productbtn">
                    <button
                      onClick={() => {
                        onRemoveFromCart(product)
                      }}
                      className="removebtn btn btn-danger"
                    >
                      Remove Cart
                    </button>
                    <button
                      onClick={() => {
                        onAddtoCart(product)
                      }}
                      className="addbtn btn btn-success"
                    >
                      Add Cart
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
export default ProductScren
