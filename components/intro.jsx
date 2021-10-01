import styled from 'styled-components'

const IntroWrapper = styled.section`
  display: flex;
  flex-direction: row;
`

const IntroLeft = styled.div`
  flex-grow: 1;
`

const Intro = (props) => {
  return (
    <IntroWrapper>
      <IntroLeft>
        <h1>FRONT-END</h1>
        <h2>Developer</h2>
      </IntroLeft>
      <IntroLeft>
        teste
      </IntroLeft>
    </IntroWrapper>
  )
}

export default Intro