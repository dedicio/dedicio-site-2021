import styled from 'styled-components'
import Image from 'next/image'
import DedicioCoelho from '../public/images/dedicio-coelho.png'
import loader from '../services/loader.js'

const IntroWrapper = styled.section`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

const IntroLeft = styled.div`
  text-align: center;

  @media (min-width: 768px) {
    padding-left: 4rem;
    text-align: right;
    width: 50%;
    order: 1;
  }
`

const IntroRight = styled.div`
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
    width: 50%;
    order: 2;
  }
`

const Title = styled.h1`
  margin-bottom: 2rem;
  @media (min-width: 768px) {
    margin-top: 5rem;
  }
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

const Hello = styled.strong`
  display: block;
  font-weight: bold;
  font-size: 2rem;
`

const Intro = (props) => {
  return (
    <IntroWrapper>
      <IntroRight>
        <Image
          loader={loader}
          src={DedicioCoelho}
          alt="Dedicio Coelho"
          width={413}
          priority={true} />
      </IntroRight>
      <IntroLeft>
        <Title>
          <TitleStrong>Front-end</TitleStrong>
          <TitleLight>Developer</TitleLight>
        </Title>
        {props.lang === 'en' 
          ? <p>
              <Hello>Hello!</Hello>
              I am <strong>Dedício Coelho</strong> and I&apos;ve been working with web for over 10 years, specializing in <strong>JavaScript</strong> and <strong>Node.js</strong> development.
            </p>
          : <p>
              <Hello>Olá!</Hello>
              Eu sou <strong>Dedício Coelho</strong> e trabalho há mais de 10 anos com web, especializado em desenvolvimento com <strong>JavaScript</strong> e <strong>Node.js</strong>.
            </p>

        }
      </IntroLeft>

    </IntroWrapper>
  )
}

export default Intro