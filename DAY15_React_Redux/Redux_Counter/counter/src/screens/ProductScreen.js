import Header from "../component/Header"
import { AddToCart, RemoveFromCart } from "../action/ProductAction"
import { useSelector, useDispatch } from "react-redux"
const ProductScreen = () => {
  const products = [
    { title: "title1", description: "description 1", price: 100 },
    { title: "title2", description: "description 2", price: 200 },
    { title: "title3", description: "description 3", price: 300 },
    { title: "title4", description: "description 4", price: 400 },
    { title: "title5", description: "description 5", price: 500 },
  ]

  const dispatch = useDispatch()
  const CartItem = useSelector((state) => state.CartItem)

  const onAddToCart = (product = {}) => {
    dispatch(AddToCart(product))
  }
  const onRemoveFromCart = (product = {}) => {
    dispatch(RemoveFromCart(product))
  }

  return (
    <div>
      <Header title="Product" />
      <div>
        {products.length > 0 && (
          <div className="row">
            {products.map((product) => {
              return (
                <div className="product col-md-3">
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
                  <button
                    onClick={() => {
                      onAddToCart(product)
                    }}
                    className="cartbutton btn btn-success"
                  >
                    Add cart
                  </button>
                  <button
                    onClick={() => {
                      onRemoveFromCart(product)
                    }}
                    className="cartbutton btn btn-danger"
                  >
                    Remove Item
                  </button>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductScreen
