

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
  $('#results').append(`<h3>Forked Successfully!</h3><a href="${json.html_url}"> ${json.html_url}</a> - ${json.name}`)
}

function forkRepo() {
  const token = 'cc8eb717d6bb9cf3fcad1ecad094dbe540eff761'
  fetch(`https://api.github.com/repos/learn-co-curriculum/javascript-fetch-lab/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json()).then(json => console.log(json));

}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return 'cc8eb717d6bb9cf3fcad1ecad094dbe540eff761'
}
