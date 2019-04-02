export default {
  get(url) {
    return fetch(url)
      .then(response => response.json())
      .then(result => {
        return result
      })
  }
}