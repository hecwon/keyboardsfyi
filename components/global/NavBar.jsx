import Link from 'next/link';
import styles from '../layout.module.css';

const NavBar = () => {
  return (
    <nav className={styles.NavBar}>
      <Link href="/main" className={styles.NavLink}>Home</Link>
      <Link href="/search" className={styles.NavLink}>Search</Link>
      <Link href="/feed" className={styles.NavLink}>Feed</Link>
      <Link href="/profile" className={styles.NavLink}>Profile</Link>
      <Link href="/" className={styles.NavLink}>Demo_Landing</Link>
    </nav>
  )
}

export default NavBar;