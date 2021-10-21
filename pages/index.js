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

export default function Home() {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  return (
    <Container className={theme}>
      <Head>
        <title>Dedicio Coelho - Desenvolvedor Front-End</title>
        <meta name="description" content="Dedicio Coelho - Front-end Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header
        theme={theme}
        onSwitchChanged={toggleTheme} />
      <Main />
      <Footer />
    </Container>
  )
}
