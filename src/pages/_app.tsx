import type { AppProps } from 'next/app'
import * as styles from '../styles/pages/app.css'

import '../styles/global.css'
import { CartProvider } from '@/contexts/CartContext'
import { Header } from '@/components/Header'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <div className={styles.container}>
        <Header />
        <Component {...pageProps} />
      </div>
    </CartProvider>
  )
}
