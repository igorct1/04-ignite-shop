import Image from 'next/image'
import * as styles from './styles.css'
import { useContext } from 'react'
import { CartContext, Product } from '@/contexts/CartContext'

interface CartItemProps {
  product: {
    id: string
    name: string
    price: string
    imageUrl: string
    defaultPriceId: string
  }
}

export function CartItem({ product }: CartItemProps) {
  const { removeProductFromCart } = useContext(CartContext)

  function handleRemoveProductFromCart(product: Product) {
    removeProductFromCart(product)
  }

  return (
    <div className={styles.cartItemContainer}>
      <div className={styles.cartItemImage}>
        <Image
          src={product.imageUrl}
          width={100}
          height={90}
          alt=""
          className={styles.image}
        />
      </div>
      <div className={styles.cartItemInfo}>
        <h3 className={styles.cartItemTitle}>{product.name}</h3>
        <strong className={styles.cartItemPrice}>{product.price}</strong>
        <button
          className={styles.cartItemButton}
          onClick={() => handleRemoveProductFromCart(product)}
        >
          Remover
        </button>
      </div>
    </div>
  )
}
