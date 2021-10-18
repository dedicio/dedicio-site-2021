const baseUrl = 'https://dev.to/api'
const apiKey = process.env.DEVTO_API_KEY

function request(url, options = {}) {
  const headers = {
    api_key: apiKey,
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