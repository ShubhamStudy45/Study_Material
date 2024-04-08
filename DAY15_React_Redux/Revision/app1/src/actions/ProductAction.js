export const addToCart = (product = {}) => {
  return {
    type: "addtocart",
    payload: product,
  }
}

export const removeFromCart = (product = {}) => {
  return {
    type: "removefromcart",
    payload: product,
  }
}
