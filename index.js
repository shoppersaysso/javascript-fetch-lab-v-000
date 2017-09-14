

// function getIssues() {
//   const repo = 'https://api.github.com/repos/shoppersaysso/javascript-fetch-lab/issues'
//   fetch(repo, {
//     method: 'get',
//     headers: {
//       Authorization: `token ${token}`,
//     }
//   }).then(res => showIssues(res));
//
// }

function showIssues(json) {
  var div = document.getElementById("issues")
    debugger
    for (var i = 0, l = json.length; i < l; i++) {
      $("#issues").append(`<li>${json[i].title}</li>`)
    }
  }

function createIssue() {
  var issueTitle = document.getElementById("title").value

var issueBody = document.getElementById("body").value
const fork = `shoppersaysso/javascript-fetch-lab`
var issueData = {title: issueTitle, body: issueBody}
//use fetch to fork it!
fetch(`https://api.github.com/repos/${fork}/issues`, {
  method: 'post',
  headers: {
    'Authorization': `token ${getToken()}`
  },
  body: JSON.stringify(issueData)
}).then(resp => getIssues());

}

function showResults(json) {
  $('#results').append(`<a href="${json.html_url}"> ${json.html_url}</a>`)
}

function forkRepo() {
  const repo = 'https://api.github.com/repos/learn-co-curriculum/javascript-fetch-lab/forks'
  fetch(repo, {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`,
    }
  }).then(res => res.json()).then(json => showResults(json));

}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '760869047ff1c29982d033c65ce549b346dfeebc'
}
