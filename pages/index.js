import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>amiYami</title>
        <meta name="description" content="Order Azerbaijani Local Sweets" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Hello
    </div>
  )
}
