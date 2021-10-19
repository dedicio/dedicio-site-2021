const baseUrl = 'https://dev.to/api'

function request(url, options = {}) {
  const headers = {
    'Content-type': 'application/json'
  };

  const config = {
    ...options,
    ...headers
  }

  return fetch(url, config).then(response => {
    if (response.ok) {
      return response.json()
    }

    throw new Error(response)
  })
}
function getArticles() {
  const url = `${baseUrl}/articles/?username=dedicio`

  return request(url)
}

export {
  getArticles,
}