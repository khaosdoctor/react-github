var axios = require('axios');

var GITHOST = 'https://api.github.com/users/';

var GitHubUserService = {
  getUserByName: function (username) {
    return axios.get(GITHOST + username);
  },
  getReposByUser: function (username) {
    return axios.get(GITHOST + username + '/repos');
  }
}

module.exports = GitHubUserService;
