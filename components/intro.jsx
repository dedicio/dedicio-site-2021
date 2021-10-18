import styled from 'styled-components'
import Image from 'next/image'
import DedicioCoelho from "../public/images/dedicio-coelho.png";

const IntroWrapper = styled.section`
  display: flex;
  flex-direction: row;
`

const IntroLeft = styled.div`
  width: 50%;
  text-align: right;
  padding-left: 4rem;
`

const IntroRight = styled.div`
  width: 50%;
`

const Title = styled.h1`
  margin-top: 5rem;
`

const TitleStrong = styled.span`
  display: block;
  font-weight: 900;
  font-size: 48px;
  text-transform: uppercase;
`

const TitleLight = styled.span`
  display: block;
  font-weight: 100;
  color: #FF6232;
  font-size: 36px;
  text-transform: uppercase;
  margin-top: -1rem;
`

const Intro = (props) => {
  return (
    <IntroWrapper>
      <IntroLeft>
        <Title>
          <TitleStrong>Front-end</TitleStrong>
          <TitleLight>Developer</TitleLight>
        </Title>
        <p>
        <strong>Olá!</strong> <br />
        Eu sou <strong>Dedício Coelho</strong> e trabalho há mais de 10 anos com web, especializado em desenvolvimento com <strong>JavaScript</strong> e <strong>Node.js</strong>.
        </p>
      </IntroLeft>
      <IntroRight>
        <Image
          src={DedicioCoelho}
          alt="Dedicio Coelho"
          width={413}
          priority={true} />
      </IntroRight>
    </IntroWrapper>
  )
}

export default Intro