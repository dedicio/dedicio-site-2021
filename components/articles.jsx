import Section from "./section"
import Image from 'next/image'
import { getArticles } from "../services/articlesResource.js"
import { useEffect, useState } from 'react'
import styled from 'styled-components'

const List = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

const ListItem = styled.li`
  padding: 1rem;

  @media (min-width: 768px) {
    width: 33.33%;
  }
`

const Link = styled.a`
  position: relative;
  display: block;
`

const Title = styled.p`
  margin-top: 0.5rem;
`

const StyledImage = styled(Image)`
  opacity: 0.8;
  border-radius: 0.3rem;
  transition: all 0.3s;

  &:hover {
    opacity: 1;
  }
`

const Articles = (props) => {
  const title = props.lang === 'en' ? 'Articles' : 'Artigos'
  const [articles, setArticles] = useState([])

  useEffect(() => {
    const fetch = async () => {
      const data = await getArticles()
      setArticles(data)
    }

    fetch()
  }, [])

  return (
    <Section title={title}>
      <List>
        {articles.map((article, index) => (
          <ListItem key={index}>
            <Link href={article.url}>
              <StyledImage
                src={article.social_image}
                alt={article.title}
                width={200}
                height={100}
                layout="responsive" />
              <Title>
                {article.title}
              </Title>
            </Link>
          </ListItem>
        ))}
      </List>
    </Section>
  )
}

export default Articles