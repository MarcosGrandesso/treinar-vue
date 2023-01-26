async function fetch_all_pages(url) {
  let vai = true;
  let result = [];
  let page = 1;
  while (vai) {
    const response = await fetch(`${url}?page=${page}`);
    const tmpitems = await response.json();
    if (tmpitems.length > 0) {
      result = result.concat(tmpitems);
      page++;
    } else {
      vai = false;
    }
  }
  return result;
}

export const api = {
  async search_users(string) {
    const result = await fetch(
      `https://api.github.com/search/users?q=${string}`
    );
    return await result.json();
  },
  async lista_repos(username) {
    const url = `https://api.github.com/users/${username}/repos`;
    const result = await fetch_all_pages(url);
    return result;
  },
  async listaIssues(owner, name, page) {
    const url = `https://api.github.com/repos/${owner}/${name}/issues?page=${page}`;
    const result = await fetch(url);
    return await result.json();
  },
  async getRepo(owner, name, path = "") {
    const url = `https://api.github.com/repos/${owner}/${name}/contents/${path}`;
    const result = await fetch(url);
    return await result.json();
  },
  async getFileContent(url) {
    const result = await fetch(url);
    return await result.text();
  },
};
