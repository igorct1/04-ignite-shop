import { useContext } from 'react'
import { CartContext } from '@/contexts/CartContext'
import { Handbag, X } from 'phosphor-react'
import { CartItem } from '../CartItem'
import axios from 'axios'

import * as styles from './styles.css'
import * as Dialog from '@radix-ui/react-dialog'

export function Cart() {
  const { cart, cartTotalPriceNumber } = useContext(CartContext)
  const isCartEmpty = !cart.length

  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(cartTotalPriceNumber)

  async function handleBuyProduct() {
    try {
      const response = await axios.post('/api/checkout', {
        products: cart,
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (err) {}
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className={styles.headerButton}>
          <Handbag size={24} />
          {cart.length >= 1 && (
            <span className={styles.spanCart}>{cart.length}</span>
          )}
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content className={styles.content}>
          <section className={styles.cartContainer}>
            <Dialog.Close className={styles.modalClose}>
              <X size={24} />
            </Dialog.Close>

            <h2 className={styles.cartTitle}>Sacola de compras</h2>
            <div className={styles.cartItemsContainer}>
              {cart.length ? (
                cart.map((product) => {
                  return <CartItem key={product.id} product={product} />
                })
              ) : (
                <p className={styles.emptyCart}>Não há itens no carrinho.</p>
              )}
            </div>

            <section className={styles.cartDetails}>
              <div className={styles.cartDetailsInfo}>
                <p className={styles.cartDetailsParagraph}>Quantidade</p>
                <span className={styles.cartDetailsSpan}>
                  {cart.length} itens
                </span>
              </div>
              <div className={styles.cartDetailsPrice}>
                <strong className={styles.totalPriceText}>Valor total</strong>
                <strong className={styles.totalPriceValue}>
                  {formattedPrice}
                </strong>
              </div>
              <button
                className={styles.cartDetailsButton}
                onClick={handleBuyProduct}
                disabled={isCartEmpty}
              >
                Finalizar compra
              </button>
            </section>
          </section>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
