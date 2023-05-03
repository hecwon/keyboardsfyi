import { Press_Start_2P } from 'next/font/google';
import Link from 'next/link';
import styles from './layout.module.css';

const ps2Font = Press_Start_2P({
  subsets: ['latin'],
  weight: ['400'],
})

const Logo = () => (
  <div className={styles.logoContainer}>
    <h1 className={ps2Font.className}>
      <Link href="/main">
        KEYBOARDS.FYI
      </Link>
    </h1>
  </div>
)

export default Logo;