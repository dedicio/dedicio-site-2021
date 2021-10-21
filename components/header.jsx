import Image from 'next/image'
import styled from 'styled-components'
import Link from 'next/link'
import loader from '../services/loader.js'
import ThemeSwitch from './themeSwitch.jsx'

const HeaderWrapper = styled.div`
  padding: 1rem;
  display: block;
`

const LanguageNav = styled.nav`
  position: absolute;
  right: 1rem;
  top: 1rem;
  color: #999;
`

const Header = (props) => {
  const { onSwitchChanged, theme } = props
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
      <LanguageNav>
        <Link href='/'>PT</Link> &bull; <Link href='/en'>EN</Link>
      </LanguageNav>
      <ThemeSwitch
        theme={theme}
        onSwitchChanged={onSwitchChanged} />
    </HeaderWrapper>
  )
}

export default Header