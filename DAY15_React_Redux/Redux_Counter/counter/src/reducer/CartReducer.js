const CartReducer = (state = [], action) => {
  console.log(state)
  switch (action.type) {
    case "addToCart":
      return [...state, action.payload]
    case "removeFromCart":
      return [state.filter((product) => product.id != action.payload.id)]

    default:
      return state
  }
}

export default CartReducer
