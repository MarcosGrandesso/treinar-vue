export const api = {
  async search_users(string) {
    const result = await fetch(`https://api.github.com/search/users?q=${string}`)
    return await result.json()
  },
  async lista_repos(string, page= false) {
    if (!page) {
      page = 1
    }
    const result = await fetch(`https://api.github.com/users/${string}/repos?page=${page}`)
    return await result.json()
  }
}
