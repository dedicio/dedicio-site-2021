import styled from 'styled-components'

const FooterWrapper = styled.footer`
  padding: 1rem 0;
  text-align: center;
`

const Footer = (props) => {
  const isEnglish = props.lang === 'en'
  const byText = isEnglish ? 'Developed by' : 'Desenvolvido por'
  const repoText = isEnglish
    ? 'Repository of this website\'s project on Github'
    : 'Repositório do projeto deste site no Github'
 
  return (
    <FooterWrapper>
      <span>{byText} <strong>Dedicio Coelho</strong> | </span>
      <a href="https://github.com/dedicio/dedicio-site-2021">
        {repoText}
      </a>
    </FooterWrapper>
  )
}

export default Footer