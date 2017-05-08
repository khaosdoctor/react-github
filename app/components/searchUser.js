var React = require('react');
var GitHubUserService = require('../services/gitHubUser.js');

var searchUser = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();

    GitHubUserService.getUserByName(this.refs.username.value)
      .then(function (response) {
        this.props.updateUser(response);
      }.bind(this));
    
    GitHubUserService.getReposByUser(this.refs.username.value)
      .then(function (response) {
        this.props.updateRepo(response);
      }.bind(this));
  },
  render: function () {
    return (
      <div className="jumbotron">
        <h1>GitHub Info</h1>
        <div className="row">
          <form className="form" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input name="username" type="text" placeholder="Ex: khaosdoctor" className="form-control" ref="username"/>
            </div>
            <button type="submit" className="btn btn-primary">Buscar</button>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = searchUser;
