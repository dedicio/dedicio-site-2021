import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 3rem 0;
  text-align: center;
`

const Dot = ({ className }) => {
  return (
    <span className={className}>
      <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg">
        <circle cx="5" cy="5" r="5" transform="rotate(90 5 5)" className="dot"/>
      </svg>
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