import styled from 'styled-components'
import Section from './section.jsx'

const Icon = (props) => {
  const { url, alt, className, children } = props
  return (
    <a
      href={url}
      className={className}
      title={alt}>
      {children}
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
        url="https://www.linkedin.com/in/dedicio/"
        image="linkedin.svg"
        alt="Perfil no LinkedIn de Dedicio Coelho">
        <svg
          className="social-icon"
          width="48"
          height="48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24 0C10.744 0 0 11.016 0 24.608c0 10.87 6.875 20.095 16.413 23.351 1.2.222 1.634-.535 1.634-1.187 0-.584-.02-2.134-.027-4.184-6.677 1.485-8.087-3.3-8.087-3.3-1.088-2.843-2.664-3.6-2.664-3.6-2.177-1.528.166-1.493.166-1.493 2.411.173 3.675 2.536 3.675 2.536 2.141 3.76 5.62 2.675 6.983 2.045.219-1.59.844-2.676 1.528-3.29-5.328-.62-10.93-2.732-10.93-12.164 0-2.682.936-4.882 2.464-6.6-.243-.624-1.073-3.128.239-6.513 0 0 2.014-.664 6.598 2.52 1.92-.546 3.967-.82 6.006-.83 2.043.01 4.093.284 6.006.83 4.586-3.186 6.598-2.52 6.598-2.52 1.311 3.385.488 5.89.238 6.513 1.54 1.718 2.464 3.916 2.464 6.6 0 9.457-5.607 11.534-10.954 12.143.855.76 1.625 2.26 1.625 4.555 0 3.291-.03 5.946-.03 6.752 0 .66.43 1.424 1.654 1.182C41.133 44.693 48 35.475 48 24.608 48 11.016 37.256 0 24 0Z"/>
        </svg>
      </StyledIcon>
      <StyledIcon
        url="https://github.com/dedicio"
        image="github.svg"
        alt="Perfil no Github de Dedicio Coelho">
        <svg
          className="social-icon"
          width="48"
          height="48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24Zm8.333-9H39V26.917c0-4.12-3.34-7.522-7.458-7.522-1.948 0-4.772 1.153-5.875 2.938V19H19v20h6.667V27.75c0-1.764 1.158-3.24 2.922-3.24 1.765 0 3.744 1.476 3.744 3.24V39ZM9 39h6.667V19H9v20Zm6.667-26.667a3.333 3.333 0 1 0-6.667 0 3.333 3.333 0 0 0 6.667 0Z" fill="#100F0D"/>
        </svg>
      </StyledIcon>
    </Section>
  )
}

export default Contact