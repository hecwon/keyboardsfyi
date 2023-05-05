import Link from 'next/link';
import { Rubik } from 'next/font/google';
import Layout from '../../components/global/layout';
import styles from './page.module.css'
import './globals.css';

const rubik = Rubik({
  subsets: ['latin'],
})


const Home = () => {
  return (
    <Layout>
      <main className={styles.main}>
          <div>
            <p>THIS IS A WIP</p>
            <p> Hello, Welcome to KEYBOARDS.FYI</p>
            <p>Home of the first User-Generated Keyboard Enthusiast Database!</p>
            <Link href="/main" className={styles.card}>
              <h2 className={rubik.className}>
                Find It <span>-&gt;</span>
              </h2>
            </Link>
          </div>
      </main>
    </Layout>
  )
}

export default Home;