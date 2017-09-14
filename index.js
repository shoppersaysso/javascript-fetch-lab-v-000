const token = getToken()

function getIssues() {
  const repo = 'https://api.github.com/repos/shoppersaysso/javascript-fetch-lab/issues'
  fetch(repo, {
    method: 'get',
    headers: { Authorization: `token ${token}` }
  }).then(res => showIssues(res))
}

function showIssues(json) {
}

function createIssue() {
}

function showResults(json) {
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
