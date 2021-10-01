import Head from 'next/head'
import About from '../components/about.jsx'
import Contact from '../components/contact.jsx'
import Header from '../components/header.jsx'
import Intro from '../components/intro.jsx'
import Skills from '../components/skills.jsx'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dedicio Coelho</title>
        <meta name="description" content="Dedicio Coelho - Front-end Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <Intro />
        <Skills />
        <About />
        <Contact />
      </main>

      <footer>
        Copyright
      </footer>
    </div>
  )
}
