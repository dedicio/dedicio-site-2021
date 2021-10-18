import styled from 'styled-components'

const FooterWrapper = styled.footer`
  padding: 1rem 0;
`

const Footer = () => {
  return (
    <FooterWrapper>
      <span>Desenvolvido por <strong>Dedicio Coelho</strong> | </span>
      <a href="https://github.com/dedicio/dedicio-site-2021">
        Repositório do projeto deste site no Github
      </a>
    </FooterWrapper>
  )
}

export default Footer