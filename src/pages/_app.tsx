import type { AppProps } from 'next/app'
import * as styles from '../styles/pages/app.css'
import logo from '../assets/logo.svg'
import Image from 'next/image'

import '../styles/global.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Image src={logo} alt="logo" />
      </header>
      <Component {...pageProps} />
    </div>
  )
}
