export const api = {
  search_users(string) {
    return fetch(`https://api.github.com/search/users?q=${string}`).then(res => res.json())
  }
}
