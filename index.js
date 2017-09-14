// const token = '760869047ff1c29982d033c65ce549b346dfeebc';
// const postData = {
//   body: 'Great stuff'
// };
//
// fetch('https://api.github.com/repos/shoppersaysso/space-invaders-v-000/commits/2e6c34c649a5d091f32d72d2ee2011bb64bd7823/comments', {
//   method: 'POST',
//   body: JSON.stringify(postData),
//   headers: {
//     Authorization: `token ${token}`
//   }
// }).then(res => console.log(res));

function getIssues() {
}

function showIssues(json) {
}

function createIssue() {
}

function showResults(json) {
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch('https://api.github.com/repos/' + repo + '/forks',{
    method: 'POST'
  }


}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '760869047ff1c29982d033c65ce549b346dfeebc'
}
