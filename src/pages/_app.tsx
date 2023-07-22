import type { AppProps } from 'next/app'
import '../styles/global.css'
import { container, header } from '../styles/pages/app.css'
import logo from '../assets/logo.svg'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={container}>
      <header className={header}>
        <img src={logo.src} alt="" />
      </header>
      <Component {...pageProps} />
    </div>
  )
}
