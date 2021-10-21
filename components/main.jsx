import styled from 'styled-components'
import About from './about.jsx'
import Articles from './articles.jsx'
import Contact from './contact.jsx'
import Intro from './intro.jsx'
import Skills from './skills.jsx'

const Wrapper = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 940px;
  
  @media (min-width: 768px) {
    padding: 5rem 0;
  }
`

const Main = (props) => {
  const { lang } = props

  return (
    <Wrapper>
      <Intro lang={lang} />
      <Skills lang={lang} />
      <Articles lang={lang} />
      <About lang={lang} />
      <Contact lang={lang} />
    </Wrapper>
  )
}

export default Main