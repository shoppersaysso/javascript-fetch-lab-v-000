function getIssues() {
  const fork = `shoppersaysso/javascript-fetch-lab`
    fetch(`https://api.github.com/repos/${fork}/issues`, {
      method: 'get',
      headers: {
        Authorization: `token ${getToken()}`
      }
    }).then(resp => resp.json()).then(data => showIssues(data))
  }

function showIssues(json) {

  }

function createIssue() {

}

function showResults(json) {
  // $('#results').append(`<a href="${json.html_url}"> ${json.html_url}</a>`)
  $('#results').append(`<h3>Forked Successfully!</h3><a href="${json.html_url}"> ${json.url}</a>`)
}

function forkRepo() {
  fetch(`https://api.github.com/repos/learn-co-curriculum/javascript-fetch-lab/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showResults(json));

}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '760869047ff1c29982d033c65ce549b346dfeebc'
}
