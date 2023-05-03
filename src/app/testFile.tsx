'use client'

import Link from 'next/link';
import Image from 'next/image'
import Layout from '../../components/global/layout';
import { Rubik } from 'next/font/google'
import styles from './page.module.css'

const inter = Rubik({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
        <div>
          <Link
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '} Hector &
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              width={100}
              height={24}
              priority
            />
          </Link>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <div className={styles.thirteen}>
          <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
        </div>
      </div>

      <div className={styles.grid}>
        <Link
          href="/landing"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Landing <span>-&gt;</span>
          </h2>
          <p className={inter.className}>Keyboards.FYI Landing</p>
        </Link>
        <Link
          href="/main"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Main <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Keyboards.FYI Main Page
          </p>
        </Link>
      </div>
    </main>
    </Layout>
  )
}
