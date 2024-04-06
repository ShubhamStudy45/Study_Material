// export const getProduct = () => {
//   return {
//     type: "getProduct",
//   }
// }

// export const addProduct = () => {
//   return {
//     type: "addProduct",
//   }
// }

export const AddToCart = (product = {}) => {
  console.log("product:  ", product)
  return {
    type: "addToCart",
    payload: product,
  }
}

export const RemoveFromCart = (product = {}) => {
  return {
    type: "removeFromCart",
    payload: product,
  }
}
