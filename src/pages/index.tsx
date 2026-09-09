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
        <title>Clésio Carvalho | Full-stack Developer</title>
        <meta
          name="description"
          content="Portfolio de Clésio Carvalho, full-stack developer especializado em aplicações web e produtos digitais."
        />
        <meta property="og:title" content="Clésio Carvalho | Full-stack Developer" />
        <meta
          property="og:description"
          content="Conheça os projetos e serviços de Clésio Carvalho."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/android-chrome-512x512.png" />
        <meta name="twitter:card" content="summary" />
        <link rel="canonical" href="https://clesio-carvalho.vercel.app/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfilePage",
              mainEntity: {
                "@type": "Person",
                name: "Clésio Carvalho",
                jobTitle: "Full-stack Developer",
                url: "https://clesio-carvalho.vercel.app/",
                sameAs: [
                  "https://github.com/Carvalho2019",
                  "https://www.linkedin.com/in/clesio-carvalho/",
                ],
              },
            }),
          }}
        />
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
