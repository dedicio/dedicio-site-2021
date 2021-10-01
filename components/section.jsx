import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 2rem 0;
  text-align: center;
`

const Title = styled.h2`
  font-weight: 100;
  text-transform: uppercase;
  color: #00B4B1;
  font-size: 3rem;
`

const Section = (props) => {
  return (
    <Wrapper>
      <Title>{props.title}</Title>
      {props.children}
    </Wrapper>
  )
}

export default Section