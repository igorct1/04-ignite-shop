import { ReactNode, createContext, useState } from 'react'

export interface Product {
  id: string
  imageUrl: string
  name: string
  price: string
  defaultPriceId: string
}

interface CartContextProps {
  cart: Product[]
  cartTotalPriceNumber: number
  addProductToCart: (product: Product) => void
  removeProductFromCart: (product: Product) => void
  productAlreadyExists: (product: Product) => boolean
}

export const CartContext = createContext({} as CartContextProps)

interface CartProviderProps {
  children: ReactNode
}

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Product[]>([])

  const cartTotalPriceNumber = cart
    .map((item) => {
      return Number(item.price.replace('R$', '').replace(',', '.').trim())
    })
    .reduce((acc, total) => {
      return (acc += total)
    }, 0)

  function addProductToCart(product: Product) {
    const productAlreadyExists = cart.findIndex(
      (cartItem) => cartItem === product,
    )

    if (productAlreadyExists === -1) {
      setCart((prev) => [...prev, product])
    }
  }

  function removeProductFromCart(product: Product) {
    const listWithoutRemovedItem = cart.filter(
      (cartItem) => cartItem.id !== product.id,
    )

    setCart(listWithoutRemovedItem)
  }

  function productAlreadyExists(product: Product) {
    const productAlreadyExistsInCart = cart.some(
      (cartItem) => cartItem.id === product.id,
    )

    return productAlreadyExistsInCart
  }
  return (
    <CartContext.Provider
      value={{
        cart,
        cartTotalPriceNumber,
        addProductToCart,
        removeProductFromCart,
        productAlreadyExists,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
