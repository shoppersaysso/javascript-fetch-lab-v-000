const token = getToken()

function getIssues() {
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
      Authorization: `token ${getToken}`,
    }
  }).then(res => console.log(res));

}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '760869047ff1c29982d033c65ce549b346dfeebc'
}
