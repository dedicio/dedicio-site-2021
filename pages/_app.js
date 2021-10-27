import withDarkMode, { MODE } from 'next-dark-mode'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default withDarkMode(MyApp, { defaultMode: MODE.LIGHT })
