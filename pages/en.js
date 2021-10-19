import Head from 'next/head'
import styled from 'styled-components'
import About from '../components/about.jsx'
import Articles from '../components/articles.jsx'
import Contact from '../components/contact.jsx'
import Footer from '../components/footer.jsx'
import Header from '../components/header.jsx'
import Intro from '../components/intro.jsx'
import Skills from '../components/skills.jsx'

const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 940px;
  
  @media (min-width: 768px) {
    padding: 5rem 0;
  }
`

const lang = 'en'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Dedicio Coelho - Front End Developer</title>
        <meta name="description" content="Dedicio Coelho - Front-end Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Main>
        <Intro lang={lang} />
        <Skills lang={lang} />
        <Articles lang={lang} />
        <About lang={lang} />
        <Contact lang={lang} />
      </Main>

      <Footer lang={lang} />
    </Container>
  )
}
