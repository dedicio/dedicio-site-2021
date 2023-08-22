const loader = ({ src, width, quality }) => {
  return `https://dedicio-website-1533226057005.web.app${src}?w=${width}&q=${quality || 75}`
}

const externalLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`
}

export {
  loader,
  externalLoader,
}