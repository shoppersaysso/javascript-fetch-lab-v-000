const token = getToken()

function getIssues() {
  const repo = 'https://api.github.com/repos/shoppersaysso/javascript-fetch-lab/issues'
  fetch(repo, {
    method: 'get',
    headers: { Authorization: `token ${token}` }
  }).then(res => showIssues(res));

}

function showIssues(json) {
}

function createIssue() {
}

function showResults(json) {
  var forks = JSON.parse(this.responseText)
  const forkList = "<ul>" + forks.map(fork => {
      const dataUsername = 'data-username="' + repo.owner.login + '"'
      const dataRepoName = 'data-repository="' + repo.name + '"'
      return(`
            <li>
              <h2>${fork.name}</h2>
              <a href="${repo.html_url}">${repo.html_url}</a><br>
            </li>`
            )
    }).join('') + "</ul>";
    document.getElementById("repositories").innerHTML = forkList
}

function forkRepo() {
  const repo = 'https://api.github.com/repos/learn-co-curriculum/javascript-fetch-lab/forks'
  fetch(repo, {
    method: 'POST',
    headers: {
      Authorization: `token ${token}`,
    }
  }).then(res => showResults(res));

}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '760869047ff1c29982d033c65ce549b346dfeebc'
}
