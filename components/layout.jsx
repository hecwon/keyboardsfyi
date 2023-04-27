import NavBar from './global/NavBar.jsx';
import Logo from '../components/global/logo.jsx';
import styles from './layout.module.css';

const Layout = ( {children} ) => {
  return (
    <div className={styles.layoutContainer}>
      <NavBar />
      <Logo />
        <main>
          {children}
        </main>
    </div>
  )
}

export default Layout;