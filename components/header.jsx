import Image from 'next/image'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
  padding: 1rem;
  display: block;
`

const Header = () => {
  return (
    <HeaderWrapper>
      <Image
        src="/logo-dedicio-h.svg"
        alt="Dedicio Coelho Logo"
        title="Dedicio Coelho - Front-end Developer"
        width={351}
        height={73} />
    </HeaderWrapper>
  )
}

export default Header