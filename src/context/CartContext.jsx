import React from 'react'

const CartContext = React.createContext()
const {Provider} = CartContext


const CartProvider = ({children}) => {

  const [cart, setCart] = React.useState([])
  console.log(cart)

  const addToCart = (item, count) => {
    if(isInCart(item.id)) {
      const newCart = cart.map(cartItem => {
        if(cartItem.id === item.id) {
          cartItem.quantity++
        }
        return cartItem
      })
      setCart(newCart)
    }
    else {
      setCart([...cart, {...item, quantity: + count}])
    }
  }

  const removeFromCart = (id) => {
    const newCart = cart.filter((carItem) => carItem.id !== id);
    setCart(newCart)
  }

  const deleteAll = () => {
    setCart([])
  }

  const isInCart = (id) => {
    return cart.find(item => item.id === id)
  }

  return (
    <Provider value={{
      addToCart,
      removeFromCart,
      deleteAll,
      isInCart,
      cart,
    }}>{children}</Provider>
  )
}

export {CartContext, CartProvider}