'use client'

import Link from 'next/link';
import { Rubik, Press_Start_2P } from 'next/font/google';
import Layout from '../../components/layout.jsx';
import styles from './page.module.css'

const rubik = Rubik({
  subsets: ['latin'],
})


const Home = () => {
  return (
    <Layout>
      <main className={styles.main}>
          <div>
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