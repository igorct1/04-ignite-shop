import Link from 'next/link'
import * as styles from '../../styles/pages/success.css'
export default function Success() {
  return (
    <main className={styles.successContainer}>
      <h1 className={styles.title}>Compra efetuada!</h1>

      <div className={styles.imageContainer}></div>

      <p className={styles.paragraph}>
        Uhuuul!<strong> Igor Tozetti</strong>, sua camiseta
        <strong> Beyond the Limits</strong> já está a caminho da sua casa
      </p>

      <Link href="/" className={styles.back}>
        Voltar ao catálogo
      </Link>
    </main>
  )
}
