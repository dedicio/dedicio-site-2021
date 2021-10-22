import Image from 'next/image'
import styled from 'styled-components'
import { loader } from '../services/loader.js'
import LanguageNav from './languageNav.jsx'
import ThemeSwitch from './themeSwitch.jsx'

const HeaderWrapper = styled.div`
  padding: 2rem 0 1rem;
  display: block;
`

const Header = (props) => {
  const { onSwitchChanged, theme, lang } = props
  const logoName = theme === 'light' ? 'logo-dedicio-h-b.svg' : 'logo-dedicio-h-w.svg'
  const logoPath = `/images/${logoName}`
  
  return (
    <HeaderWrapper>
      <Image
        loader={loader}
        src={logoPath}
        alt="Dedicio Coelho Logo"
        title="Dedicio Coelho - Front-end Developer"
        width={351}
        height={73} />
      <LanguageNav
        theme={theme}
        lang={lang} />
      <ThemeSwitch
        theme={theme}
        onSwitchChanged={onSwitchChanged} />
    </HeaderWrapper>
  )
}

export default Header