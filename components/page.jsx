import { useDarkMode } from 'next-dark-mode'
import Head from 'next/head'
import styled from 'styled-components'
import Header from './header.jsx'
import Footer from './footer.jsx'
import Main from './main.jsx'

const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

const Page = (props) => {
  const { lang } = props
  const { darkModeActive, switchToDarkMode, switchToLightMode } = useDarkMode()

  const toggleTheme = () => {
    if (theme === 'light') switchToDarkMode()
    if (theme === 'dark') switchToLightMode()
  }

  const theme = darkModeActive ? 'dark' : 'light'

  return (
    <Container className={theme}>
      <Head>
        <title>Dedicio Coelho - Desenvolvedor Front-End</title>
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

export default Page
