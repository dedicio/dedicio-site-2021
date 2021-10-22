import Head from 'next/head'
import { useState } from 'react'
import styled from 'styled-components'
import Header from '../components/header.jsx'
import Footer from '../components/footer.jsx'
import Main from '../components/main.jsx'

const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

const lang = 'en'

export default function Home() {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  return (
    <Container className={theme}>
      <Head>
        <title>Dedicio Coelho - Front End Developer</title>
        <meta name="description" content="Dedicio Coelho - Front-end Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header
        lang={lang}
        theme={theme}
        onSwitchChanged={toggleTheme} />
      <Main lang={lang} />
      <Footer lang={lang} />
    </Container>
  )
}
