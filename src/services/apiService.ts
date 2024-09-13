export function searchRepos() {
    return fetch('https://api.github.com/users/jfmartinsvred1/repos')
      .then((response) => response.json())
  }