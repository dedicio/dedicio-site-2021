import styled from 'styled-components'
import Section from './section.jsx'

const SIZES = {
  xl: '24px',
  lg: '18px',
  md: '14px',
}

const MARGINS = {
  xl: '12px',
  lg: '10px',
  md: '12px',
}

const getSize = (size) => {
  return SIZES[size] || SIZES.md
}

const getMarginTop = (size) => {
  return MARGINS[size] || MARGINS.md
}

const Paragraph = styled.p`
  font-size: ${$props => getSize($props.size)};
  margin-top: ${$props => getMarginTop($props.size)};
  margin-bottom: ${$props => getMarginTop($props.size)};
`

const Skills = () => {
  return (
    <Section title="Skills & Tools">
      <Paragraph size="xl">
        JavaScript - Typescript - Node.js - HTML - CSS - Vue.js - Jest
      </Paragraph>
      <Paragraph size="lg">
        React.js - AngularJS - Git - Sass - PostgreSQL - Bootstrap - jQuery - PHP - WordPress
      </Paragraph>
      <Paragraph>
        AWS - Bulma - Docker - MySQL
      </Paragraph>
    </Section>
  )
}

export default Skills