import Link from 'next/link';
import Layout from '../../components/global/layout';
import styles from './page.module.css'
import './globals.css';

const Home = () => {
  return (
    <Layout>
      <main className={styles.main}>
          <div>
            <p>THIS IS A WIP</p>
            <p> Hello, Welcome to KEYBOARDS.FYI</p>
            <p>Home of the first User-Generated Keyboard Enthusiast Database!</p>
            <Link href="/main" className={styles.card}>
              <h2>
                Find It <span>-&gt;</span>
              </h2>
            </Link>
          </div>
      </main>
    </Layout>
  )
}

export default Home;