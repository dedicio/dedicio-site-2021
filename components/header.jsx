import Image from 'next/image'
import styled from 'styled-components'
import Link from 'next/link'

const HeaderWrapper = styled.div`
  padding: 1rem;
  display: block;
`

const LanguageNav = styled.nav`
  position: absolute;
  right: 1rem;
  top: 1rem;
`

const Header = () => {
  return (
    <HeaderWrapper>
      <Image
        src="/images/logo-dedicio-h.svg"
        alt="Dedicio Coelho Logo"
        title="Dedicio Coelho - Front-end Developer"
        width={351}
        height={73} />
      <LanguageNav>
        <Link href='/'>PT</Link> | <Link href='/en'>EN</Link>
      </LanguageNav>
    </HeaderWrapper>
  )
}

export default Header