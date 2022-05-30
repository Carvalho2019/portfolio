import Head from "next/head";
import { About } from "../components/About";
import { Hero } from "../components/Hero";
import styles from './home.module.scss'


export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Porfólio</title>
      </Head>
      <main className={styles.container}>
        <Hero />
        <About />
      </main>

    </>
  )
}

923911997
