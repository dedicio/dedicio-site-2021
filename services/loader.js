const loader = ({ src, width, quality }) => {
  return `https://dedicio.com${src}?w=${width}&q=${quality || 75}`
}

export default loader