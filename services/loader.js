const loader = ({ src, width, quality }) => {
  return `https://teste-a67aa.web.app${src}?w=${width}&q=${quality || 75}`
}

export default loader