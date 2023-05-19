import NavBar from './NavBar.jsx';
import Logo from './logo.jsx';
import styles from './layout.module.css';

const Layout = ( {children} ) => {
  return (
    <div className={styles.layoutContainer}>
      <NavBar />
      <Logo />
      <main className={styles.center}>
        {children}
      </main>
    </div>
  )
}

export default Layout;