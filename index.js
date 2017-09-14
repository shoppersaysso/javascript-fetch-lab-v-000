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

// function showResults(res) {
//   var forks = JSON.parse(this.responseText)
//   const forkList = "<ul>" + forks.map(fork => {
//       return(`
//             <li>
//               <h2>${fork.name}</h2>
//               <a href="${fork.html_url}">${fork.html_url}</a><br>
//             </li>`
//             )
//     }).join('') + "</ul>";
//     document.getElementById("results").innerHTML = forkList
// }

function forkRepo() {
  const repo = 'https://api.github.com/repos/learn-co-curriculum/javascript-fetch-lab/forks'
  fetch(repo, {
    method: 'POST',
    headers: {
      Authorization: `token ${token}`,
    }
  }).then(resp => {
  let repo = new Repo(resp);
  showResult(repo);
})
}
function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '760869047ff1c29982d033c65ce549b346dfeebc'
}
