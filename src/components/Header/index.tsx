import Image from 'next/image'
import * as styles from '../Header/styles.css'

import logo from '../../assets/logo.svg'
import { Cart } from '../Cart'
import { usePathname } from 'next/navigation'
export function Header() {
  const pathname = usePathname()

  return (
    <header
      className={`${
        pathname === '/success' ? styles.centeredHeader : styles.header
      }`}
    >
      <a href="/">
        <Image src={logo} alt="logo" />
      </a>

      {pathname !== '/success' && <Cart />}
    </header>
  )
}
