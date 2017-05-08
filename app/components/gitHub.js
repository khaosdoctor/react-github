var React = require('react');
var SearchUser = require('./searchUser');
var UserInfo = require('./userInfo');

var GitHub = React.createClass({
  getInitialState: function () {
    return {
      user: null,
      repos: []
    };
  },

  updateUser: function (user) {
    this.setState({user: user});
  },

  updateRepo: function (repos) {
    this.setState({ repos: repos });
  },

  render: function () {
    return (
      <div className="container">
        <SearchUser
          updateUser={this.updateUser}
          updateRepo={this.updateRepo}
        />
        <UserInfo
          user={this.state.user}
          repos={this.state.repos}
        />
      </div>
    );
  }
});

module.exports = GitHub;
