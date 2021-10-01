import Image from 'next/image'
import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 2rem 0;
  text-align: center;
`

const Dot = ({ className }) => {
  return (
    <span className={className}>
      <Image
        src="/images/dot.svg"
        alt="dot"
        width={10}
        height={10} />
    </span>
  )
}

const StyledDot = styled(Dot)`
  padding: 0 0.7rem;
`

const Title = styled.h2`
  font-weight: 100;
  text-transform: uppercase;
  color: #00B4B1;
  font-size: 3rem;
  margin-block-start: 0.5rem;
`

const Section = (props) => {
  return (
    <Wrapper>
      <div>
        <StyledDot />
        <StyledDot />
        <StyledDot />
      </div>
      <Title>{props.title}</Title>
      {props.children}
    </Wrapper>
  )
}

export default Section