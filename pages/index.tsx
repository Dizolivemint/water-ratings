import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/header'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Water Ratings</title>
        <meta name="description" content="Find and rate the water near you." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Water Ratings
        </h1>
        <h2 className={styles.description}>
          Conaseurs of water, unite!
        </h2>
      </main>

      <footer className={styles.footer}>
        About
      </footer>
    </div>
  )
}
