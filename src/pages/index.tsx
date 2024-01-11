import Head from "next/head";
import { About } from "../components/About";
import { Hero } from "../components/Hero";
import { Services } from "../components/Service";
import { Skills } from "../components/Skills";
import styles from './home.module.scss'
import { Work } from "../components/Work";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Porfólio</title>
      </Head>
      <main className={styles.container}>        
        <Hero />
        <About />
        <Skills />
        <Services />
        <Work />
        <Contact />
        <Footer />
      </main>

    </>
  )
}

