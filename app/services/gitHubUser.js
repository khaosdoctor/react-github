import axios from 'axios';

var GITHOST = 'https://api.github.com/users';

var GitHubUserService = {
  getUserByName (username) {
    return axios.get(`${GITHOST}/${username}`);
  },
  getReposByUser (username) {
    return axios.get(`${GITHOST}/${username}/repos`);
  }
}

export default GitHubUserService;
