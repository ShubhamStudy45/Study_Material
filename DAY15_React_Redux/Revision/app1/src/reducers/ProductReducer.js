const ProductReducer = (state = [], action) => {
  switch (action.type) {
    case "addtocart":
      return [...state, action.payload]
    case "removefromcart":
      return [state.filter((product) => product.id !== action.payload.id)]
    default:
      return state
  }
}

export default ProductReducer
