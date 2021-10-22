import Link from 'next/link'
import styled from 'styled-components'
import { isLightTheme } from '../services/utils.js'

const darkGray = '#645e52'
const lightGray = '#E0E1E1'

const Nav = styled.nav`
  position: absolute;
  right: 1rem;
  top: 1rem;
  line-height: 1;
`

const LangLink = ({ className, url, children }) => {
  return (
    <Link
      href={url}
      passHref>
      <span className={className}>
      {children}
      </span>
    </Link>
  )
}

const StyledLink = styled(LangLink)`
  border: 1px solid ${props => isLightTheme(props.theme) ? darkGray : lightGray};
  background: ${props => props.isActive
    ? props => isLightTheme(props.theme)
      ? darkGray
      : lightGray
    : 'transparent'
  } ;
  color: ${props => isLightTheme(props.theme)
    ? props => props.isActive 
      ? lightGray
      : darkGray
    : props => props.isActive
      ? darkGray
      : lightGray
  };
  border-radius: 50px;
  display: inline-block;
  font-size: 0.75rem;
  width: 22px;
  height: 22px;
  line-height: 20px;
  text-align: center;
  margin-left: 0.5rem;
  cursor: pointer;
`

const LanguageNav = (props) => {
  const { theme, lang } = props
  const isActive = label => (!lang && label === 'pt') || label === lang

  return (
    <Nav>
      <StyledLink
        url='/'
        theme={theme}
        isActive={isActive('pt')}>
        PT
      </StyledLink>
      <StyledLink
        url='/en'
        theme={theme}
        isActive={isActive('en')}>
        EN
      </StyledLink>
    </Nav>
  )
}

export default LanguageNav