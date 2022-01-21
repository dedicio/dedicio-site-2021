import Section from './section.jsx'

const About = (props) => {
  const isEnglish = props.lang === 'en'
  const title = isEnglish ? 'About Me' : 'Sobre Mim'

  return (
    <Section title={title}>
      {isEnglish
        ? <div>
            <p><strong>My goal is to do things that make people&apos;s lives easier!</strong></p>

            <p>Born in a small country town, curious since I was a child, knowledge is my passion! I graduated in Audiovisual Production, and my career with the internet started when I began working as a web designer.</p>

            <p>My enthusiasm for technology and my eagerness to make things work made my migration to developing natural.</p>

            <p>After 12 years working with the internet, my eyes still light up for  the mission to develop products and services that people use and which make a difference in their lives.</p>
          </div>

        : <div>
            <p><strong>Meu objetivo é fazer coisas que facilitem a vida das pessoas!</strong></p>

            <p>Nascido em uma cidadezinha pequena do interior, curioso desde criança, conhecimento é minha paixão! Sou formado em Produção Audiovisual, minha carreira com web se iniciou trabalhando como web designer.</p>

            <p>Com minha atração por tecnologia e meu anseio por fazer as coisas funcionarem, foi natural a minha migração para o desenvolvimento.</p>

            <p>Há mais de 10 anos trabalhando com web, meus olhos continuam brilhando na missão de desenvolver produtos e serviços que as pessoas usem e façam diferença na vida delas.</p>
          </div>
      }
    </Section>
  )
}

export default About