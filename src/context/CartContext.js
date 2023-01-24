import React from 'react'

const CartContext = React.createContext({
  cartList: [],
  addCartItem: () => {},
  deleteCartItem: () => {},
  totalAmount: 0,
  addQuantity: () => {},
  deleteQuantity: () => {},
})

export default CartContext
