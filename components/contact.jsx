import Image from 'next/image'
import styled from 'styled-components'
import Section from './section.jsx'
import LinkedIn from '../public/images/linkedin.svg'

const Icon = ({ url, image, alt, className }) => {
  return (
    <a
      href={url}
      className={className}
      title={alt}>
      <Image
        src={`/images/${image}`}
        alt={alt}
        width={48}
        height={48} />
    </a>
  )
}

const StyledIcon = styled(Icon)`
  margin: 0 0.5rem;
`

const Contact = (props) => {
  const title = props.lang === 'en' ? 'Contact' : 'Contato'

  return (
    <Section title={title}>
      <StyledIcon
        url="https://linkedin.com"
        image="linkedin.svg"
        alt="Perfil no LinkedIn de Dedicio Coelho" />
      <StyledIcon
        url="https://github.com"
        image="github.svg"
        alt="Perfil no Github de Dedicio Coelho" />
    </Section>
  )
}

export default Contact